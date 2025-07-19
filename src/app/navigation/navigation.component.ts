import { Component, computed, inject, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { SideMenuItems } from './side-menu-items';
import { CustomSidenavComponent } from "./components/custom-sidenav/custom-sidenav.component";
import { MatMenuModule } from '@angular/material/menu';
import { CurrentUserStore } from '../store/current-user-store';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    CustomSidenavComponent,
]
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  public sideMenuItems = inject(SideMenuItems).menuItems;

  collapsed = signal<boolean>(false);

  sideNavWidth = computed(() => this.collapsed() ? '65px' : '250px');

  currentUserStore = inject(CurrentUserStore);
  user = this.currentUserStore.user;

  isLoggedIn() {
    return this.user() !== null;
  }

  doSomething() {
    console.log('Button clicked!');
    this.collapsed.set(!this.collapsed())
  }

  logout() {
    // TODO: Add actual logout logic here
    console.log('Logging out...');
    this.currentUserStore.clearUser();
  }

  login() {
    this.currentUserStore.login();
    console.log('Logging in...');
  }
}

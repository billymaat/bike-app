import { Component, computed, inject, Input, signal, Signal } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SideMenuItems } from '../../side-menu-items';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CurrentUserStore } from '../../../store/current-user-store';

@Component({
  selector: 'app-custom-sidenav',
  imports: [CommonModule, MatIconModule, MatListModule, RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  currentUserStore = inject(CurrentUserStore);
  sideNavCollapsed = signal<boolean>(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
  menuItems: Signal<MenuItem[]>;

  constructor() {
    const sideMenuItems = inject(SideMenuItems);
    
    this.menuItems = computed(() => {
      return sideMenuItems.menuItems.filter(item => {
        // Filter items based on user roles if needed
        const userRole = this.currentUserStore.user()?.role;
        return !item.roles || item.roles.some(role => userRole === role);
      });
    })
  }
}

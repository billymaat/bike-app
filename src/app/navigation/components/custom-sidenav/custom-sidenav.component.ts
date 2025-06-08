import { Component, computed, inject, Input, signal } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SideMenuItems } from '../../side-menu-items';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-custom-sidenav',
  imports: [CommonModule, MatIconModule, MatListModule, RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal<boolean>(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
  menuItems = signal<MenuItem[]>([]);

  constructor() {
    const sideMenuItems = inject(SideMenuItems);
    
    this.menuItems.set(sideMenuItems.menuItems);
  }
}

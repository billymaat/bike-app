import { Injectable } from "@angular/core";
import { MenuItem } from "./models/menu-item.model";
import { UserRole } from "../models/user"; // Import UserRole

@Injectable({
  providedIn: 'root',
})
export class SideMenuItems {
  menuItems: MenuItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard', roles: [UserRole.admin, UserRole.organizer, UserRole.member] },
    { label: 'Events', route: '/events', icon: 'event_available', roles: [UserRole.admin, UserRole.organizer, UserRole.member] },
    { label: 'Users', route: '/users', icon: 'group', roles: [UserRole.admin] },
    { label: 'Settings', route: '/settings', icon: 'settings', roles: [UserRole.admin, UserRole.organizer] },
    { label: 'Add Event', route: '/add-event', icon: 'event', roles: [UserRole.organizer, UserRole.admin] },
  ];

  getMenuItemsForRole(role: UserRole): MenuItem[] {
    return this.menuItems.filter(item => !item.roles || item.roles.includes(role));
  }
}

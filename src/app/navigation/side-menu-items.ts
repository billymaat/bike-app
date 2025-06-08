import { Injectable } from "@angular/core";
import { MenuItem } from "./models/menu-item.model";

@Injectable({
  providedIn: 'root',
})
export class SideMenuItems {
      menuItems: MenuItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Users', route: '/users', icon: 'group' },
    { label: 'Settings', route: '/settings', icon: 'settings' },
    { label: 'Add Event', route: '/add-event', icon: 'event' },

  ];
}

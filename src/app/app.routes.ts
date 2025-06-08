import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { UsersPage } from './pages/users/users.page';
import { SettingsPage } from './pages/settings/settings.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'dashboard',
    component: DashboardPage,
  },
  {
    path: 'users',
    component: UsersPage
  },
  {
    path: 'settings',
    component: SettingsPage
  }
];

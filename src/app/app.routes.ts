import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'dashboard',
    component: DashboardPage,
  }
];

import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { UsersPage } from './pages/users/users.page';
import { SettingsPage } from './pages/settings/settings.page';
import { AddEventPage } from './pages/add-event/add-event.page';
import { EditEventComponent } from './pages/edit-event/edit-event.page';
import { EventsPage } from './pages/events/events.page';
import { ViewEventPage } from './pages/view-event/view-event.page';

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
    path: 'add-event',
    component: AddEventPage
  },
  {
    path: 'edit-event/:id',
    component: EditEventComponent
  },
  {
    path: 'users',
    component: UsersPage
  },
  {
    path: 'settings',
    component: SettingsPage
  },
  {
    path: 'events',
    component: EventsPage
  },
  {
    path: 'view-event/:id',
    component: ViewEventPage
  }
];

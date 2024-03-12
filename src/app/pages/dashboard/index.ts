import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    loadComponent: async () =>
      (await import('./chart-list/chart-list.component')).ChartListComponent,
  },
  {
    path: 'leave-request-list',
    title: 'Leave Requests',
    loadComponent: async () =>
      (
        await import(
          '@pages/dashboard/leave-request-list/leave-request-list.component'
        )
      ).LeaveRequestListComponent,
  },
  {
    path: 'calendar-view',
    title: 'Leave Requests',
    loadComponent: async () =>
      (await import('@pages/dashboard/calendar-view/calendar-view.component'))
        .CalendarViewComponent,
  },
  {
    path: 'manage',
    loadChildren: async () => (await import('@pages/dashboard/manage')).routes,
  },
];

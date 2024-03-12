import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: async () => (await import('./home.component')).HomeComponent,
  },
  {
    path: 'apply-leave',
    title: 'Apply Leave',
    loadComponent: async () =>
      (await import('@pages/apply-leave/apply-leave.component'))
        .ApplyLeaveComponent,
  },
];

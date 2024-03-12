import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Manage Leave Types',
    loadComponent: async () =>
      (await import('./leave-type/leave-type.component')).LeaveTypeComponent,
  },
  {
    path: 'leave-types',
    title: 'Manage Leave Types',
    loadComponent: async () =>
      (await import('./leave-type/leave-type.component')).LeaveTypeComponent,
  },
  {
    path: 'leave-balance',
    title: 'Manage Leave Balance',
    loadComponent: async () =>
      (await import('./leave-balance/leave-balance.component'))
        .LeaveBalanceComponent,
  },
];

import { Routes } from '@angular/router';
import { authGuard } from '@lib/guards';
import { RoleGuard } from '@lib/guards';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: async () => (await import('@pages/auth')).routes,
  },
  {
    path: '',
    loadChildren: async () => (await import('@pages/home')).routes,
    canMatch: [authGuard()],
    canActivate: [RoleGuard],
    data: { roles: ['employee'] },
  },
  {
    path: 'dashboard',
    canMatch: [authGuard()],
    canActivate: [RoleGuard],
    data: { roles: ['admin'] },
    loadChildren: async () => (await import('@pages/dashboard')).routes,
  },
  {
    path: 'unauthorized-access',
    loadComponent: async () =>
      (await import('@pages/unauthorized-access/unauthorized-access.component'))
        .UnauthorizedAccessComponent,
  },
  {
    path: '**',
    loadComponent: async () =>
      (await import('@pages/not-found/not-found.component')).NotFoundComponent,
  },
];

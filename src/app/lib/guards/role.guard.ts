import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@lib/services/auth/auth.service';
import { storage } from '@lib/utils/storage/storage.utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const allowedRoles = next.data['roles'];

    if (this.authService.hasRole(allowedRoles)) {
      return true;
    } else {
      // Redirect or handle unauthorized access
      this.router.navigate(['/unauthorized-access']);
      return false;
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { storage } from '@lib/utils/storage/storage.utils';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(
    !!storage.getItem('appSession')
  );

  isAdmin$: BehaviorSubject<boolean>;
  isEmployee$: BehaviorSubject<boolean>;

  get isAuthenticated(): boolean {
    return this.isAuthenticated$.getValue();
  }

  get isAdmin(): boolean {
    return this.isAdmin$.getValue();
  }

  get isEmployee(): boolean {
    return this.isAdmin$.getValue();
  }

  constructor(private http: HttpClient) {
    const appSession = storage.getItem('appSession');
    const isAdmin = !!appSession && appSession.roleId === 'admin';
    const isEmployee = !!appSession && appSession.roleId === 'employee';
    this.isAdmin$ = new BehaviorSubject<boolean>(isAdmin);
    this.isEmployee$ = new BehaviorSubject<boolean>(isEmployee);
  }

  login(email: string, password: string, isEmployee: boolean) {
    return this.http
      .post<any>(`${environment.apiUrl}/users`, { email, password })
      .pipe(
        tap((res) => {
          storage.setItem('appSession', {
            name: res.name,
            email: res.email,
            roleId: isEmployee ? 'employee' : 'admin',
            department: res.department,
            token: 'abc123',
          });
          this.isAuthenticated$.next(true);
        })
      );
  }

  logout(): void {
    storage.removeItem('appSession');
    this.isAuthenticated$.next(false);
  }

  // hasRole(role: string) {
  //   // alert(role);
  //   const appSession = storage.getItem('appSession');
  //   return appSession && appSession.roleId === role;
  // }

  hasRole(allowedRoles: string[]) {
    const appSession = storage.getItem('appSession');
    if (!appSession) return;
    return allowedRoles.includes(appSession.roleId);
  }
}

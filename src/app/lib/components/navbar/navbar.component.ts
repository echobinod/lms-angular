import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@lib/services';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterOutlet } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterOutlet,
    RouterModule,
    MatExpansionModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  private readonly _router = inject(Router);
  private readonly _authService = inject(AuthService);
  isAuthenticated$ = inject(AuthService).isAuthenticated$;
  isAdmin$ = inject(AuthService).isAdmin$;
  isEmployee$ = inject(AuthService).isEmployee$;

  logout(): void {
    this._authService.logout();
    this._router.navigate(['/auth/login']);
  }
}

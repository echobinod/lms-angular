import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthService } from '@lib/services';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any | undefined;

  constructor(private fb: FormBuilder) {}
  @Input() returnUrl!: string;

  private readonly _router = inject(Router);
  private readonly _authService = inject(AuthService);

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      isEmployee: [false],
    });
  }

  login(): void {
    this._authService
      .login(
        this.loginForm.email,
        this.loginForm.password,
        this.loginForm.get('isEmployee')?.value
      )
      .subscribe({
        next: (data) => {
          if (this.loginForm.get('isEmployee')?.value) {
            this._router.navigate(['/']);
          } else {
            this._router.navigate(['/dashboard']);
          }
        },
        error: (err) => console.error(err),
      });
  }

  onCheckboxChange() {
    const isChecked = this.loginForm.get('isEmployee')?.value;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-unauthorized-access',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule, MatButtonModule],
  templateUrl: './unauthorized-access.component.html',
  styleUrls: ['./unauthorized-access.component.scss'],
})
export class UnauthorizedAccessComponent {}

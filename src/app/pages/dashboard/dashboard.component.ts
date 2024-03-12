import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRequestComponent } from '@lib/components/leave-request/leave-request.component';
import { EventCalendarComponent } from '@lib/components/event-calendar/event-calendar.component';
import { RouterOutlet } from '@angular/router';
import { ChartListComponent } from './chart-list/chart-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    LeaveRequestComponent,
    EventCalendarComponent,
    RouterOutlet,
    ChartListComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}

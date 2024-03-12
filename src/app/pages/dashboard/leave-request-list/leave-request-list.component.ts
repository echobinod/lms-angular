import { Component } from '@angular/core';
import { LeaveRequestComponent } from '@lib/components/leave-request/leave-request.component';

@Component({
  selector: 'app-leave-request-list',
  standalone: true,
  imports: [LeaveRequestComponent],
  templateUrl: './leave-request-list.component.html',
  styleUrls: ['./leave-request-list.component.scss'],
})
export class LeaveRequestListComponent {}

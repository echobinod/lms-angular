import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Leave } from '@lib/interfaces';
import { Store } from '@ngrx/store';
import * as LeaveActions from '@lib/store/actions/leave.action';
import { leaveSelector } from '@lib/store/selectors/leave.selector';
import { AppState } from '@lib/store/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-leave-status',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.scss'],
})
export class LeaveStatusComponent {
  leaves$: Observable<Leave[]>;
  leaves: Leave[] = [];
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.leaves$ = this.store.select(leaveSelector);
    this.isLoading$ = this.store.select((state) => state.leave.loading);
    this.loadLeaves();
  }

  loadLeaves() {
    this.store.dispatch(LeaveActions.loadLeaves());
  }
}

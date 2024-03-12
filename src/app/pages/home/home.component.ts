import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { LeaveStatusComponent } from '@lib/components/leave-status/leave-status.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LeaveStatusComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  private readonly _destroy$ = new Subject();

  ngOnDestroy(): void {
    this._destroy$.complete();
    this._destroy$.unsubscribe();
  }
}

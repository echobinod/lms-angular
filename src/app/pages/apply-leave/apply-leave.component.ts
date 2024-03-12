import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Leave, LeaveType } from '@lib/interfaces';
import { EmployeeService } from '@lib/services';
import { Router } from '@angular/router';
import { AppState } from '@lib/store/store';
import { Store } from '@ngrx/store';
import * as LeaveActions from '@lib/store/actions/leave.action';
import * as LeaveTypeActions from '@lib/store/actions/leaveType.action';
import { Observable } from 'rxjs';
import { leaveTypeSelector } from '@lib/store/selectors/leaveType.selector';

@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
  ],
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss'],
})
export class ApplyLeaveComponent implements OnInit {
  applyLeaveForm!: FormGroup;
  leaveTypes$: Observable<LeaveType[]>;
  leaveTypes: LeaveType[] = [];
  isLeaveTypeLoading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private store: Store<AppState>
  ) {
    this.leaveTypes$ = this.store.select(leaveTypeSelector);
    this.isLeaveTypeLoading$ = this.store.select(
      (state) => state.leaveType.loading
    );
    this.loadLeaveTypes();
  }

  today = new Date();

  ngOnInit() {
    this.applyLeaveForm = this.fb.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      type: ['', [Validators.required]],
      reason: ['', [Validators.maxLength(500)]],
    });
  }

  addLeave() {
    const leave: Leave = {
      startDate: this.applyLeaveForm.value.startDate,
      endDate: this.applyLeaveForm.value.endDate,
      leaveType: this.applyLeaveForm.value.type,
      reason: this.applyLeaveForm.value.reason,
      status: 'Pending',
      createdDate: new Date(),
    };
    this.employeeService.applyLeave(leave).subscribe(() => {
      this.store.dispatch(LeaveActions.addLeave({ leave }));
      this._snackBar.open('Leave request submitted.', 'Dismiss', {
        duration: 3000,
      });
      this._router.navigate(['/']);
    });
  }

  loadLeaveTypes() {
    this.store.dispatch(LeaveTypeActions.loadLeaveTypes());
  }
}

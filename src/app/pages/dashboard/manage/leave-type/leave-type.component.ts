import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HrService } from '@lib/services';
import { LeaveType } from '@lib/interfaces';
import { ConfirmDialogComponent } from '@lib/components/confirm-dialog/confirm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UpsertLeaveTypeComponent } from '@lib/components/upsert-leave-type/upsert-leave-type.component';
import { leaveTypeSelector } from '@lib/store/selectors/leaveType.selector';
import * as LeaveTypeActions from '@lib/store/actions/leaveType.action';
import { Store } from '@ngrx/store';
import { AppState } from '@lib/store/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-leave-type',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './leave-type.component.html',
  styleUrls: ['./leave-type.component.scss'],
})
export class LeaveTypeComponent {
  leaveTypes$: Observable<LeaveType[]>;
  leaveTypes: LeaveType[] = [];
  isLeaveTypeLoading$: Observable<boolean>;

  constructor(
    private hrService: HrService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private store: Store<AppState>
  ) {
    this.leaveTypes$ = this.store.select(leaveTypeSelector);
    this.isLeaveTypeLoading$ = this.store.select(
      (state) => state.leaveType.loading
    );
    this.loadLeaveTypes();
  }

  onAddClick() {
    const dialogRef = this.dialog.open(UpsertLeaveTypeComponent, {
      data: {
        title: 'Add leave type',
        type: 'add',
        message: 'Are you sure you want to Add this leave type',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.upsert) {
        const leaveType: LeaveType = {
          label: result.leaveType,
          value: result.leaveType,
          totalDays: result.totalDays,
        };
        this.hrService.addLeaveType(leaveType).subscribe({
          next: (data) => {
            this.store.dispatch(LeaveTypeActions.addLeaveType({ leaveType }));
            this._snackBar.open('Leave type added successfully', 'OK', {
              duration: 3000,
            });
            this.loadLeaveTypes();
          },
          error: (err) => console.log(err),
        });
      } else {
        //
      }
    });
  }

  onEditClick(leave: LeaveType) {
    const dialogRef = this.dialog.open(UpsertLeaveTypeComponent, {
      data: {
        title: 'Edit this leave type?',
        type: 'edit',
        message: 'Are you sure you want to Edit this leave type?',
        label: leave.label,
        totalDays: leave.totalDays,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.upsert) {
        const leaveType: LeaveType = {
          id: leave.id,
          label: result.leaveType,
          value: result.leaveType,
          totalDays: result.totalDays,
        };
        this.hrService.updateLeaveType(leaveType).subscribe({
          next: (data) => {
            this.store.dispatch(
              LeaveTypeActions.updateLeaveType({ leaveType })
            );
            this._snackBar.open('Leave type updated successfully', 'OK', {
              duration: 3000,
            });
            this.loadLeaveTypes();
          },
          error: (err) => console.log(err),
        });
      } else {
        //
      }
    });
  }

  onDeleteClick(id: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete this leave type?',
        message: 'Are you sure you want to delete this leave type?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.hrService.deleteLeaveType(id).subscribe({
          next: (data) => {
            this.store.dispatch(LeaveTypeActions.deleteLeaveType({ id }));
            this._snackBar.open('Leave type deleted successfully', 'OK', {
              duration: 3000,
            });
            this.loadLeaveTypes();
          },
          error: (err) => console.log(err),
        });
      } else {
        //
      }
    });
  }

  loadLeaveTypes() {
    this.store.dispatch(LeaveTypeActions.loadLeaveTypes());
  }
}

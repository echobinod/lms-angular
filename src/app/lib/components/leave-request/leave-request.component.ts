import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Leave } from '@lib/interfaces';
import { HrService } from '@lib/services';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss'],
})
export class LeaveRequestComponent implements OnInit {
  constructor(
    private hrService: HrService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  leaveRequests: Leave[] = [];

  ngOnInit() {
    this.getLeaveRequests();
  }

  getLeaveRequests() {
    this.hrService.getLeaveRequests().subscribe({
      next: (data: Leave[]) => {
        this.leaveRequests = data.filter((value) => value.status === 'Pending');
        console.log(data);
      },
      error: (error) => {},
    });
  }

  onAccept(id: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Accept this leave request?',
        message: 'You are about to accept this leave request.',
      },
      // width: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.hrService.acceptLeaveRequest(id).subscribe({
          next: (data) => {
            this._snackBar.open('Leave request accepted successfully', 'OK', {
              duration: 3000,
            });
            this.getLeaveRequests();
          },
          error: (err) => console.log(err),
        });
      } else {
        //
      }
    });
  }

  onReject(id: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Reject this leave request?',
        message: 'You are about to reject this leave request.',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.hrService.rejectLeaveRequest(id).subscribe({
          next: (data) => {
            this._snackBar.open('Leave request rejected successfully', 'OK', {
              duration: 3000,
            });
            this.getLeaveRequests();
          },
          error: (err) => console.log(err),
        });
      } else {
        //
      }
    });
  }
}

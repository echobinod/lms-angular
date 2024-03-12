import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HrService } from '@lib/services';
import { Leave, LeaveType } from '@lib/interfaces';
import { UpdateLeaveScoreDialogComponent } from '@lib/components/update-leave-score-dialog/update-leave-score-dialog.component';
import { User } from '@lib/interfaces/user.interface';

@Component({
  selector: 'app-leave-balance',
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
  templateUrl: './leave-balance.component.html',
  styleUrls: ['./leave-balance.component.scss'],
})
export class LeaveBalanceComponent {
  constructor(
    private hrService: HrService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  leaveRequests: Leave[] = [];
  employeeUsers: User[] = [];

  ngOnInit() {
    this.getEmployeeUsers();
  }

  getEmployeeUsers() {
    this.hrService.getEmployeeUsers().subscribe({
      next: (data) => (this.employeeUsers = data),
      error: (error) => {
        console.log(error);
      },
    });
  }

  onEditClick(user: User) {
    const dialogRef = this.dialog.open(UpdateLeaveScoreDialogComponent, {
      data: {
        title: `Edit leave balance for ${user.name}?`,
        type: 'edit',
        message: 'Are you sure you want to Edit this leave balance?',
        leaveBalance: user.leaveBalance,
        name: user.name,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.updated) {
        const userData: User = {
          id: user.id,
          leaveBalance: result.leaveBalance,
        };
        this.hrService.updateLeaveBalance(userData).subscribe({
          next: (data) => {
            this._snackBar.open('Leave balance updated successfully', 'OK', {
              duration: 3000,
            });
            this.getEmployeeUsers();
          },
          error: (err) => console.log(err),
        });
      } else {
        //
      }
    });
  }
}

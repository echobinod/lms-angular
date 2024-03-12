import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

interface DialogData {
  title: string;
  message: string;
  type: string;
  name: string;
  leaveBalance: number;
}

@Component({
  selector: 'app-update-leave-score-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './update-leave-score-dialog.component.html',
  styleUrls: ['./update-leave-score-dialog.component.scss'],
})
export class UpdateLeaveScoreDialogComponent {
  leaveBalanceForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateLeaveScoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.leaveBalanceForm = this.fb.group({
      name: [this.data.name ? this.data.name : '', [Validators.required]],
      leaveBalance: [
        this.data.leaveBalance ? this.data.leaveBalance : '',
        [Validators.required],
      ],
    });
  }

  updateLeaveBalance() {
    const leave = this.leaveBalanceForm.value;
    this.dialogRef.close({ ...leave, updated: true });
  }

  onNoClick() {
    this.dialogRef.close(false);
  }
}

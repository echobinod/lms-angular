import { Component, Inject, OnInit } from '@angular/core';
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
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

interface DialogData {
  title: string;
  message: string;
  type: string;
  label: string;
  totalDays: number;
}

@Component({
  selector: 'app-upsert-leave-type',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './upsert-leave-type.component.html',
  styleUrls: ['./upsert-leave-type.component.scss'],
})
export class UpsertLeaveTypeComponent implements OnInit {
  leaveTypeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpsertLeaveTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.leaveTypeForm = this.fb.group({
      leaveType: [
        this.data.label ? this.data.label : '',
        [Validators.required],
      ],
      totalDays: [
        this.data.totalDays ? this.data.totalDays : '',
        [Validators.required],
      ],
    });
  }

  upsertLeaveType() {
    const leave = this.leaveTypeForm.value;
    this.dialogRef.close({ ...leave, upsert: true });
  }

  onNoClick() {
    this.dialogRef.close(false);
  }
}

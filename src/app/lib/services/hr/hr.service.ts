import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Leave, LeaveType } from '@lib/interfaces';
import { User } from '@lib/interfaces/user.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HrService {
  constructor(private http: HttpClient) {}

  getLeaveRequests() {
    return this.http.get<Leave[]>(`${environment.apiUrl}/userLeaves`);
  }

  acceptLeaveRequest(id: any) {
    return this.http.patch<Leave>(`${environment.apiUrl}/userLeaves/${id}`, {
      status: 'Approved',
    });
  }

  rejectLeaveRequest(id: any) {
    return this.http.patch<Leave>(`${environment.apiUrl}/userLeaves/${id}`, {
      status: 'Rejected',
    });
  }

  addLeaveType(data: LeaveType) {
    return this.http.post<LeaveType>(`${environment.apiUrl}/leaveType`, {
      label: data.label,
      value: data.value,
      totalDays: data.totalDays,
    });
  }

  updateLeaveType(data: LeaveType) {
    return this.http.put<LeaveType>(
      `${environment.apiUrl}/leaveType/${data.id}`,
      {
        label: data.label,
        value: data.value,
        totalDays: data.totalDays,
      }
    );
  }

  getEmployeeUsers() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`).pipe(
      map((users) => {
        const filteredUsers = users.filter(
          (user) => user.roleId === 'Employee'
        );

        return filteredUsers.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          roleId: user.roleId,
          departmentId: user.departmentId,
          leaveBalance: user.leaveBalance,
        }));
      })
    );
  }

  updateLeaveBalance(data: User) {
    return this.http.patch<User[]>(`${environment.apiUrl}/users/${data.id}`, {
      leaveBalance: data.leaveBalance,
    });
  }

  deleteLeaveType(id: LeaveType) {
    return this.http.delete<LeaveType>(`${environment.apiUrl}/leaveType/${id}`);
  }
}

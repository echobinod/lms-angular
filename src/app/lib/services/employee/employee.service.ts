import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Leave, LeaveType } from '@lib/interfaces';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getLeaves() {
    return this.http.get<Leave[]>(`${environment.apiUrl}/userLeaves`);
  }

  getLeaveTypes() {
    return this.http.get<LeaveType[]>(`${environment.apiUrl}/leaveType`);
  }

  applyLeave(leave: Leave) {
    return this.http.post<Leave>(`${environment.apiUrl}/userLeaves`, leave);
  }
}

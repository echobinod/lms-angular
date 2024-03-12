export interface Leave {
  id?: string;
  leaveType: string;
  startDate: Date;
  endDate: Date;
  status: string;
  reason?: string;
  createdDate: Date;
}

export interface LeaveType {
  id?: string;
  label: string;
  value: string;
  totalDays?: number;
}

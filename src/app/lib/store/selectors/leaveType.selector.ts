import { createSelector } from '@ngrx/store';
import { LeaveTypeState } from '../reducers/leaveType.reducers';
import { AppState } from '../store';

const selectLeaveTypeState = (state: AppState) => state.leaveType;

export const leaveTypeSelector = createSelector(
  selectLeaveTypeState,
  (state: LeaveTypeState) => state.leaveTypes
);

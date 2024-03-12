import { createSelector } from '@ngrx/store';
import { LeaveState } from '../reducers/leave.reducer';
import { AppState } from '../store';

const selectLeaveState = (state: AppState) => state.leave;

export const leaveSelector = createSelector(
  selectLeaveState,
  (state: LeaveState) => state.leaves
);

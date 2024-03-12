import { createAction, props } from '@ngrx/store';
import { LeaveType } from '@lib/interfaces';

export const loadLeaveTypes = createAction('[LeaveType] Load LeaveTypes');
export const loadLeaveTypesSuccess = createAction(
  '[LeaveType] Load LeaveTypes Success',
  props<{ leaveTypes: LeaveType[] }>()
);
export const loadLeaveTypesFailure = createAction(
  '[LeaveType] Load LeaveTypes Failure',
  props<{ error: string }>()
);
export const addLeaveType = createAction(
  '[LeaveType] Add LeaveType',
  props<{ leaveType: LeaveType }>()
);
export const updateLeaveType = createAction(
  '[LeaveType] Update LeaveType',
  props<{ leaveType: LeaveType }>()
);
export const deleteLeaveType = createAction(
  '[LeaveType] Delete LeaveType',
  props<{ id: string }>()
);

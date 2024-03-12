import { createReducer, on } from '@ngrx/store';
import { LeaveType } from '@lib/interfaces';
import * as LeaveTypeActions from '../actions/leaveType.action';
export const LeaveFeatureKey = 'leaveType';

export interface LeaveTypeState {
  leaveTypes: LeaveType[];
  loading: boolean;
  error: string;
}
export const initialState: LeaveTypeState = {
  leaveTypes: [],
  loading: false,
  error: '',
};
export const leaveTypeReducer = createReducer(
  initialState,

  on(LeaveTypeActions.loadLeaveTypes, (state) => ({ ...state, loading: true })),

  on(LeaveTypeActions.loadLeaveTypesSuccess, (state, { leaveTypes }) => ({
    ...state,
    leaveTypes,
    loading: false,
  })),

  on(LeaveTypeActions.loadLeaveTypesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(LeaveTypeActions.addLeaveType, (state, { leaveType }) => ({
    ...state,
    leaveTypes: [...state.leaveTypes, leaveType],
  })),

  on(LeaveTypeActions.updateLeaveType, (state, { leaveType }) => ({
    ...state,
    leaveTypes: state.leaveTypes.map((t) =>
      t.id === leaveType.id ? leaveType : t
    ),
  })),

  on(LeaveTypeActions.deleteLeaveType, (state, { id }) => ({
    ...state,
    leaveTypes: state.leaveTypes.filter((t) => t.id !== id),
  }))
);

import { createReducer, on } from '@ngrx/store';
import { Leave } from '@lib/interfaces';
import * as LeaveActions from '../actions/leave.action';
export const LeaveFeatureKey = 'leave';

export interface LeaveState {
  leaves: Leave[];
  loading: boolean;
  error: string;
}
export const initialState: LeaveState = {
  leaves: [],
  loading: false,
  error: '',
};
export const leaveReducer = createReducer(
  initialState,

  on(LeaveActions.loadLeaves, (state) => ({ ...state, loading: true })),

  on(LeaveActions.loadLeavesSuccess, (state, { leaves }) => ({
    ...state,
    leaves,
    loading: false,
  })),

  on(LeaveActions.loadLeavesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(LeaveActions.addLeave, (state, { leave }) => ({
    ...state,
    leaves: [...state.leaves, leave],
  })),

  on(LeaveActions.updateLeave, (state, { leave }) => ({
    ...state,
    leaves: state.leaves.map((t) => (t.id === leave.id ? leave : t)),
  })),

  on(LeaveActions.deleteLeave, (state, { id }) => ({
    ...state,
    leaves: state.leaves.filter((t) => t.id !== id),
  }))
);

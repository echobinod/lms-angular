import { Action, ActionReducer } from '@ngrx/store';
import { LeaveEffects } from './effects/leave.effect';
import { leaveReducer, LeaveState } from './reducers/leave.reducer';
import {
  LeaveTypeState,
  leaveTypeReducer,
} from './reducers/leaveType.reducers';
import { LeaveTypeEffects } from './effects/leaveType.effect';

export interface AppState {
  leave: LeaveState;
  leaveType: LeaveTypeState;
}

export interface AppStore {
  leave: ActionReducer<LeaveState, Action>;
  leaveType: ActionReducer<LeaveTypeState, Action>;
}

export const appStore: AppStore = {
  leave: leaveReducer,
  leaveType: leaveTypeReducer,
};

export const appEffects = [LeaveEffects, LeaveTypeEffects];

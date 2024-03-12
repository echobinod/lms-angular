import { createAction, props } from '@ngrx/store';
import { Leave } from '@lib/interfaces';

export const loadLeaves = createAction('[Leave] Load Leaves');
export const loadLeavesSuccess = createAction(
  '[Leave] Load Leaves Success',
  props<{ leaves: Leave[] }>()
);
export const loadLeavesFailure = createAction(
  '[Leave] Load Leaves Failure',
  props<{ error: string }>()
);
export const addLeave = createAction(
  '[Leave] Add Leave',
  props<{ leave: Leave }>()
);
export const updateLeave = createAction(
  '[Leave] Update Leave',
  props<{ leave: Leave }>()
);
export const deleteLeave = createAction(
  '[Leave] Delete Leave',
  props<{ id: string }>()
);

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EmployeeService } from '@lib/services';
import * as LeaveTypeActions from '../actions/leaveType.action';

@Injectable()
export class LeaveTypeEffects {
  loadLeaveTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeaveTypeActions.loadLeaveTypes),
      mergeMap(() =>
        this.employeeService.getLeaveTypes().pipe(
          map((leaveTypes) =>
            LeaveTypeActions.loadLeaveTypesSuccess({ leaveTypes })
          ),
          catchError((error) =>
            of(LeaveTypeActions.loadLeaveTypesFailure({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}
}

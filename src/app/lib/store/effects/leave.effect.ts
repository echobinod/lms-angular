import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EmployeeService } from '@lib/services';
import * as LeaveActions from '../actions/leave.action';

@Injectable()
export class LeaveEffects {
  loadLeaves$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeaveActions.loadLeaves),
      mergeMap(() =>
        this.employeeService.getLeaves().pipe(
          map((leaves) => LeaveActions.loadLeavesSuccess({ leaves })),
          catchError((error) =>
            of(LeaveActions.loadLeavesFailure({ error: error.message }))
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

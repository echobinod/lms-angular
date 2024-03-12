import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeaveScoreDialogComponent } from './update-leave-score-dialog.component';

describe('UpdateLeaveScoreDialogComponent', () => {
  let component: UpdateLeaveScoreDialogComponent;
  let fixture: ComponentFixture<UpdateLeaveScoreDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UpdateLeaveScoreDialogComponent]
    });
    fixture = TestBed.createComponent(UpdateLeaveScoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

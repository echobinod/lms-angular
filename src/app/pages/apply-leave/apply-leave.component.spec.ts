import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLeaveComponent } from './apply-leave.component';

describe('ApplyLeaveComponent', () => {
  let component: ApplyLeaveComponent;
  let fixture: ComponentFixture<ApplyLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApplyLeaveComponent]
    });
    fixture = TestBed.createComponent(ApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

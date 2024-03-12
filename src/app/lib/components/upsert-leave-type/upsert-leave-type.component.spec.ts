import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertLeaveTypeComponent } from './upsert-leave-type.component';

describe('UpsertLeaveTypeComponent', () => {
  let component: UpsertLeaveTypeComponent;
  let fixture: ComponentFixture<UpsertLeaveTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UpsertLeaveTypeComponent]
    });
    fixture = TestBed.createComponent(UpsertLeaveTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

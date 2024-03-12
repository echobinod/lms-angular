import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedAccessComponent } from './unauthorized-access.component';

describe('UnauthorizedAccessComponent', () => {
  let component: UnauthorizedAccessComponent;
  let fixture: ComponentFixture<UnauthorizedAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UnauthorizedAccessComponent]
    });
    fixture = TestBed.createComponent(UnauthorizedAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

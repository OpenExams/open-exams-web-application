import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffExamComponent } from './staff-exam.component';

describe('StaffExamComponent', () => {
  let component: StaffExamComponent;
  let fixture: ComponentFixture<StaffExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

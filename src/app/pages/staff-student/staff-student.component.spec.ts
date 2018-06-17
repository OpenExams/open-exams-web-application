import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffStudentComponent } from './staff-student.component';

describe('StaffStudentComponent', () => {
  let component: StaffStudentComponent;
  let fixture: ComponentFixture<StaffStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

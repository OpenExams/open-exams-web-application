import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterExamComponent } from './student-register-exam.component';

describe('StudentRegisterExamComponent', () => {
  let component: StudentRegisterExamComponent;
  let fixture: ComponentFixture<StudentRegisterExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegisterExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegisterExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

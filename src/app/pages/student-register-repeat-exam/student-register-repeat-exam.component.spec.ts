import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterRepeatExamComponent } from './student-register-repeat-exam.component';

describe('StudentRegisterRepeatExamComponent', () => {
  let component: StudentRegisterRepeatExamComponent;
  let fixture: ComponentFixture<StudentRegisterRepeatExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegisterRepeatExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegisterRepeatExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamListPickComponent } from './exam-list-pick.component';

describe('ExamListPickComponent', () => {
  let component: ExamListPickComponent;
  let fixture: ComponentFixture<ExamListPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamListPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamListPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

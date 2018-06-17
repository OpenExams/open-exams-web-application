import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-exam-list-pick',
  templateUrl: './exam-list-pick.component.html',
  styleUrls: ['./exam-list-pick.component.css']
})
export class ExamListPickComponent implements OnInit {

  @Input() public unselectedSubjects;
  @Input() public selectedSubjects;
  @Input() public studentYear;
  @Input() public studentSemester;
  @Output() public subjectStateChanged = new EventEmitter();
  @Output() public registerEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges() {
  //   //console.log(this.unselectedSubjects);
  // }

  toggleEvent(event) {
    this.subjectStateChanged.emit({subjectId: event.target.id, checked: event.target.checked});
    if (event.target.checked) {
      const index = _.findIndex(this.unselectedSubjects, o => o._id === event.target.id );
      const subject = _.pullAt(this.unselectedSubjects, index);
      this.selectedSubjects.push(subject[0]);
    } else {
      const index = _.findIndex(this.selectedSubjects, o => o._id === event.target.id );
      const subject = _.pullAt(this.selectedSubjects, index);
      this.unselectedSubjects.push(subject[0]);
    }
  }

  registerButtonClick(event) {
    this.registerEvent.emit(this.selectedSubjects);
  }
}

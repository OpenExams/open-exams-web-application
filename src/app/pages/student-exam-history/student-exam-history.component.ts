import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { SubjectService } from '../../services/subject.service';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';
import { StudentAuthService } from '../../services/student-auth.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-student-exam-history',
  templateUrl: './student-exam-history.component.html',
  styleUrls: ['./student-exam-history.component.css']
})
export class StudentExamHistoryComponent implements OnInit {
  public subjects: any;
  public repeatSubjects: any;
  public studentYear: string;
  public studenSemester: string;
  public studentId: string;

  constructor(private studentService: StudentService, 
    private subjectService: SubjectService,
    private messageService: MessageService,
    private studentAuthService: StudentAuthService) {
      const student = JSON.parse(sessionStorage.getItem('user'));
      this.studentId = student._id;
     }

  ngOnInit() {
    this.studentService.getStuden(this.studentId).subscribe( data => {
      if(data.session_timeout) {
        this.studentAuthService.logout();
      } else {
        const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        const regYear = new Date(data.registered_year).getFullYear();

        const academicYear = String(year - regYear + 1);
        let semester = '2';
        if (month < 6) {
          semester = '1';
        }
        
        this.studenSemester = semester;
        this.studentYear = academicYear;
        this.subjects = data.subjects;
        this.repeatSubjects = data.repeat_subjects;
      }
    });
  }
}

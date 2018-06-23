import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { SubjectService } from '../../services/subject.service';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';
import { StudentAuthService } from '../../services/student-auth.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-student-register-exam',
  templateUrl: './student-register-exam.component.html',
  styleUrls: ['./student-register-exam.component.css']
})
export class StudentRegisterExamComponent implements OnInit {
  public subjects: any = [];
  public selectedSubjects: any = [];
  public studentYear: string;
  public studenSemester: string;
  public studentId: string;
  public show = true;
  public heading1 = 'Pick subjects to register';
  public heading2 = 'Subjects Registered';

  constructor(private studentService: StudentService,
    private subjectService: SubjectService,
    private messageService: MessageService,
    private studentAuthService: StudentAuthService) {
      const student = JSON.parse(sessionStorage.getItem('user'));
      this.studentId = student._id;
     }

  ngOnInit() {
    this.studentService.getStuden(this.studentId).subscribe( data => {
      if (data.session_timeout) {
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
        this.selectedSubjects = data.subjects[academicYear][semester];

        let undergraduate = 'graduate';
        if (data.undergraduate) {
          undergraduate = 'undergraduate';
        }
        this.subjectService.getSubjects(undergraduate, data.stream, academicYear, semester).subscribe( subjects => {
          this.subjects = _.differenceBy(subjects, this.selectedSubjects, '_id');
        });
      }
    });
  }

  registerSubjects(selectedSubjects) {
    this.messageService.load('Registering subjects');
    this.studentService.updateStudentStubjects(this.studentId, this.studentYear, this.studenSemester, selectedSubjects);
  }
}

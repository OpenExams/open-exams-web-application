import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { SubjectService } from '../../services/subject.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-student-register-exam',
  templateUrl: './student-register-exam.component.html',
  styleUrls: ['./student-register-exam.component.css']
})
export class StudentRegisterExamComponent implements OnInit {
  public subjects: any = [];
  public selectedSubjects: any = [];
  public studentYear: String;
  public studenSemester: String;
  constructor(private _studentService: StudentService, private _subjectService: SubjectService,
    private _messageService: MessageService) { }

  ngOnInit() {
    this._studentService.getStuden('15001008').subscribe( data => {
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
      this._subjectService.getSubjects(undergraduate, data.stream, academicYear, semester).subscribe( subjects => {
        this.subjects = subjects;
      });
    });
  }

  updateSubjectStatus(e) {
    console.log(e);
  }

  registerSubjects(e) {
    console.log(e);
    this._messageService.load('Registering subjects');
  }
}

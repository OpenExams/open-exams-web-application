import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-report',
  templateUrl: './staff-report.component.html',
  styleUrls: ['./staff-report.component.css']
})
export class StaffReportComponent implements OnInit {
  newSubjectCode: string;
  newSubjectName: string;
  newSubjectYear: number;
  newSubjectSemester: number;
  newSubjectUndergraduate: boolean;
  newSubjectStream: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChange() {
    console.log(this.newSubjectYear)
    console.log(this.newSubjectCode)
  }

}

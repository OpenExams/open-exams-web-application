import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {
  student_id: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }

}

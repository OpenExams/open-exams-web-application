import { Component, OnInit } from '@angular/core';
import { StudentAuthService } from '../../services/student-auth.service';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {
  username: string;
  password: string;
  message: string;
  constructor(private studentAuthService: StudentAuthService, private messageService: MessageService, private router: Router ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    this.messageService.load('Logging In');
    const user = {
      id: this.username,
      password: this.password
    };
    this.studentAuthService.authenticateUser(user).subscribe(data => {
      this.messageService.stopLoading();
      if (data.success) {
          this.studentAuthService.storeUserData(data.token, data.student);
          this.message = '';
          this.router.navigate(['home']);
        } else {
          this.message = data.message;
        }
    });
  }

}

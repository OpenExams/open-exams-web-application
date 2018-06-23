import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';
import { MemberAuthService } from '../../services/member-auth.service';

@Component({
  selector: 'app-login-staff',
  templateUrl: './login-staff.component.html',
  styleUrls: ['./login-staff.component.css']
})
export class LoginStaffComponent implements OnInit {
  username: string;
  password: string;
  message: string;
  constructor(private memberAuthService: MemberAuthService, private messageService: MessageService, private router: Router ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    this.messageService.load('Logging In');
    const user = {
      id: this.username,
      password: this.password
    };
    this.memberAuthService.authenticateUser(user).subscribe(data => {
      this.messageService.stopLoading();
      if (data.success) {
          this.memberAuthService.storeUserData(data.token, data.student);
          this.message = '';
          this.router.navigate(['member_home']);
        } else {
          this.message = data.message;
        }
    });
  }

}

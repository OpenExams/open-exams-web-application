import { Component } from '@angular/core';
import { StudentAuthService } from './services/student-auth.service';
import { MemberAuthService } from './services/member-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public _studentAuthService: StudentAuthService, public _memberAuthService: MemberAuthService) { }
}

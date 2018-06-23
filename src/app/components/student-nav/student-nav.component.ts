import { Component, OnInit } from '@angular/core';
import { StudentAuthService } from '../../services/student-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-nav',
  templateUrl: './student-nav.component.html',
  styleUrls: ['./student-nav.component.css']
})
export class StudentNavComponent implements OnInit {

  constructor(private studentAuthService: StudentAuthService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.studentAuthService.logout();
    this.router.navigate(['/login']);
  }

}

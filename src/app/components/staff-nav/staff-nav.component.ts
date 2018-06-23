import { Component, OnInit } from '@angular/core';
import { MemberAuthService } from '../../services/member-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-nav',
  templateUrl: './staff-nav.component.html',
  styleUrls: ['./staff-nav.component.css']
})
export class StaffNavComponent implements OnInit {

  constructor(private memberAuthService: MemberAuthService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.memberAuthService.logout();
    this.router.navigate(['/member-login']);
  }
}

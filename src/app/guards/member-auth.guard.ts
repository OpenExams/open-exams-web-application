import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { MemberAuthService } from '../services/member-auth.service';

@Injectable()
export class MemberAuthGuard implements CanActivate {
  constructor (private authService: MemberAuthService, private router: Router) {

  }

  canActivate() {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/member-login']);
      return false; // change to false uncoment abouve statement
    }
  }
}

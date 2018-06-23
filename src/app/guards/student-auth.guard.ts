import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { StudentAuthService } from '../services/student-auth.service';

@Injectable()
export class StudentAuthGuard implements CanActivate {
  constructor (private authService: StudentAuthService, private router: Router) {

  }

  canActivate() {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false; // change to false uncoment abouve statement
    }
  }
}

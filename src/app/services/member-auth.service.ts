import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class MemberAuthService {

  constructor() { }

  loggedIn() {
    return tokenNotExpired('id_token');
  }
}

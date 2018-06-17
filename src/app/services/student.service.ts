import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../interfaces/student';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {
  _url = 'http://localhost:9080/students/';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<IStudent> {
    return this.http.get<IStudent>(this._url);
  }

  getStuden(index: string): Observable<IStudent> {
    return this.http.get<IStudent>(this._url + index);
  }

}

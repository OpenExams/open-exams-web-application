import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IStudent } from '../interfaces/student';
import { IResponse } from '../interfaces/response';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';

@Injectable()
export class StudentService {
  _url = 'http://localhost:9080/students/';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getStudents(): Observable<IStudent> {
    const browser_token = sessionStorage.getItem('id_token');
    const headers = new HttpHeaders();
    headers.append('id_token', browser_token);
    return this.http.get<IStudent>(this._url, {headers: headers});
  }

  getStuden(index: string): Observable<IStudent> {
    const browser_token = sessionStorage.getItem('id_token');
    const headers = new HttpHeaders();
    headers.append('id_token', browser_token);
    return this.http.get<IStudent>(this._url + index, {headers: headers});
  }

  updateStudentStubjects(id: string, year: string, semester: string , selectedSubjects: any) {
    const browser_token = sessionStorage.getItem('id_token');
    const headers = new HttpHeaders();
    headers.append('id_token', browser_token);
    headers.append('Content-Type', 'application/json');

    const _url = 'http://localhost:9080/students/' + id + '/subjects/' + year +'/' + semester;

    this.http.post<IResponse>(_url, selectedSubjects, {headers: headers}).subscribe((data)=>{
      this.messageService.loadDone(data.success);
    });


  }

  updateStudentRpeatStubjects(id: string, year: string, semester: string , selectedSubjects: any) {
    const browser_token = sessionStorage.getItem('id_token');
    const headers = new HttpHeaders();
    headers.append('id_token', browser_token);
    headers.append('Content-Type', 'application/json');

    const _url = 'http://localhost:9080/students/' + id + '/repeat/' + year + '/' + semester;

    this.http.post<IResponse>(_url, selectedSubjects, {headers: headers}).subscribe((data) => {
      this.messageService.loadDone(data.success);
    });


  }

}

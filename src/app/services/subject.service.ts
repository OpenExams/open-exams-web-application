import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISubject } from '../interfaces/subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SubjectService {
  _url = 'http://localhost:9080/subjects/';
  constructor(private http: HttpClient) { }

  getSubjects(undergraduate: string, stream: string, year: string, semseter: string): Observable<ISubject> {
    let browser_token = sessionStorage.getItem('id_token')
    let headers = new HttpHeaders();
    headers.append('id_token', browser_token);
    const _url = this._url + undergraduate + '/' + stream + '/' + year + '/' + semseter;
    return this.http.get<ISubject>(_url,  {headers: headers});
  }
}

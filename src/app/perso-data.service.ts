import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { PersoData } from './persoData';

@Injectable()
export class PersoDataService {

  private URL = 'http://62.210.38.108/fhir/core/api/observation/linked/patient/';

  constructor(private httpClient: HttpClient) { }

  getData(id: string): Observable<Object> {
    return this.httpClient.get(this.URL + id,{
      headers: new HttpHeaders().set('Authorization','JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVzZmVzZmVzZ2VzZXMiLCJmdWxsTmFtZSI6IlRlc3QxIiwiX2lkIjoiNTljYTcwM2MzODJjYmUwNjQwY2FmZGQ0IiwiaWF0IjoxNTA2NDM5MzQxfQ.ty46L_-y5FmItHu1I0Wv9TcBfciaLGu_9PdajKWUyas'),
    });
  }
}

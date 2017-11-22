import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GenJsonPostService } from './gen-json-post.service';

@Injectable()
export class PersoDataService {

  private getURL = 'http://62.210.38.108/fhir/core/api/observation/linked/patient/';
  private setURL = 'http://62.210.38.108/fhir/core/api/observation/create';

  constructor(private httpClient: HttpClient, private jsonService: GenJsonPostService) { }

  getData(id: string): Observable<Object> {
    return this.httpClient.get(this.getURL + id, {
      headers: new HttpHeaders().set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVzZmVzZmVzZ2VzZXMiLCJmdWxsTmFtZSI6IlRlc3QxIiwiX2lkIjoiNTljYTcwM2MzODJjYmUwNjQwY2FmZGQ0IiwiaWF0IjoxNTA2NDM5MzQxfQ.ty46L_-y5FmItHu1I0Wv9TcBfciaLGu_9PdajKWUyas')
    });
  }

  setDataTemp(temp: string): Observable<Object> {
    return this.httpClient.post(this.setURL, this.jsonService.generateJSONTemp(temp), {
      headers: new HttpHeaders()
        .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVzZmVzZmVzZ2VzZXMiLCJmdWxsTmFtZSI6IlRlc3QxIiwiX2lkIjoiNTljYTcwM2MzODJjYmUwNjQwY2FmZGQ0IiwiaWF0IjoxNTA2NDM5MzQxfQ.ty46L_-y5FmItHu1I0Wv9TcBfciaLGu_9PdajKWUyas')
        .set('Content-Type', 'application/json')
    });
  }

  setDataPouls(pouls: string): Observable<Object> {
    return this.httpClient.post(this.setURL, this.jsonService.generateJSONPouls(pouls), {
      headers: new HttpHeaders()
        .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVzZmVzZmVzZ2VzZXMiLCJmdWxsTmFtZSI6IlRlc3QxIiwiX2lkIjoiNTljYTcwM2MzODJjYmUwNjQwY2FmZGQ0IiwiaWF0IjoxNTA2NDM5MzQxfQ.ty46L_-y5FmItHu1I0Wv9TcBfciaLGu_9PdajKWUyas')
        .set('Content-Type', 'application/json')
    });
  }

  setDataTaille(taille: string): Observable<Object> {
    return this.httpClient.post(this.setURL, this.jsonService.generateJSONTaile(taille), {
      headers: new HttpHeaders()
        .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVzZmVzZmVzZ2VzZXMiLCJmdWxsTmFtZSI6IlRlc3QxIiwiX2lkIjoiNTljYTcwM2MzODJjYmUwNjQwY2FmZGQ0IiwiaWF0IjoxNTA2NDM5MzQxfQ.ty46L_-y5FmItHu1I0Wv9TcBfciaLGu_9PdajKWUyas')
        .set('Content-Type', 'application/json')
    });
  }

  setDataPoids(poids: string): Observable<Object> {
    return this.httpClient.post(this.setURL, this.jsonService.generateJSONPoids(poids), {
      headers: new HttpHeaders()
        .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVzZmVzZmVzZ2VzZXMiLCJmdWxsTmFtZSI6IlRlc3QxIiwiX2lkIjoiNTljYTcwM2MzODJjYmUwNjQwY2FmZGQ0IiwiaWF0IjoxNTA2NDM5MzQxfQ.ty46L_-y5FmItHu1I0Wv9TcBfciaLGu_9PdajKWUyas')
        .set('Content-Type', 'application/json')
    });
  }
}

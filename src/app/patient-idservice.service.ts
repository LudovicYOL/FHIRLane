import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PatientIdserviceService {

  patientId: string;

  constructor() { }

  setId(pID){
    return this.patientId = pID;
  }

  getId(){
    console.log(this.patientId);
    return this.patientId;
  }
}

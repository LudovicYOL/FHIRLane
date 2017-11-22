import { Component, OnInit } from '@angular/core';
import { PatientIdserviceService } from '../patient-idservice.service';
declare let Materialize:any

@Component({
  selector: 'app-patient-idt',
  templateUrl: './patient-idt.component.html',
  styleUrls: ['./patient-idt.component.css']
})
export class PatientIdtComponent implements OnInit {

  patientId: string;

  constructor(private patiendIDService : PatientIdserviceService) { }

  setPatientId(pID){
    this.patiendIDService.setId(pID);
    Materialize.toast("Votre identifiant a bien été enregistré, vous pouvez utiliser l'application", 4000)
  }

  getPatientId(){
    return this.patientId = this.patiendIDService.getId();
  }

  ngOnInit() {
  }

}

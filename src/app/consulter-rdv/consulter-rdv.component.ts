import { Component, OnInit } from '@angular/core';
import { RdvData } from '../rdvData';
import { RdvDataService } from '../rdv-data.service';
import { PatientIdserviceService } from '../patient-idservice.service';
declare let Materialize:any

@Component({
  selector: 'app-consulter-rdv',
  templateUrl: './consulter-rdv.component.html',
  styleUrls: ['./consulter-rdv.component.css']
})
export class ConsulterRdvComponent implements OnInit {

  private myData: Object;
  private patientId: string;
  constructor(private RdvDataService: RdvDataService,private patiendIDService : PatientIdserviceService) { }

  getMyData(): void {
    this.myData = this.RdvDataService.getData(this.patientId).subscribe(data => {
      this.myData = data;
      }
    );
  }

  getPatientId(){
    return this.patientId = this.patiendIDService.getId();
  }

  searchPatient(id: string): void {
    if (id) {
      this.patientId = id;
      this.getMyData();
      console.log(id);
    }
  }

  formatDate(date: string) : string {
    date = date.slice(0,10)
    var parseDate = date.split("-");
    return(parseDate[2]+"/"+parseDate[1]+"/"+parseDate[0]);
  }

  formatHeure(heure: string) : string {
    heure = heure.slice(11,16)
    return(heure);
  }

  statutRdv(statut: string) : string {
    var response="";
    switch(statut) {
        case "proposed":
            response = "Aucun participant n'a validé le rendez-vous";
            break;
        case "pending":
            response = "Certains participants n'ont pas encore validé le rendez-vous";
            break;
        case "booked":
            response = "Tous les participants ont validé le rendez-vous.";
            break;
        case "arrived":
            response = "Certains patients sont arrivés";
            break;
        case "futfilled":
            response = "La date de rendez-vous est dépassée";
            break;
        case "cancelled":
            response = "Le rendez vous est annulé";
            break;
        case "noshow":
            response = "Certains des participants ne sont pas venus au rendez-vous";
            break;
        case "entered-in-error":
            response = "Ce rendez-vous ne doit pas apparaitre dans le dossier patient";
            break;
        default:
          response = "oups";
    }
    return(response);
  }

  ngOnInit() {
    // this.getMyData();

  }
}

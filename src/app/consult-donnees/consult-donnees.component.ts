import { Component, OnInit } from '@angular/core';
import { PersoDataService } from '../perso-data.service';
import { PatientIdserviceService } from '../patient-idservice.service';

@Component({
  selector: 'app-consult-donnees',
  templateUrl: './consult-donnees.component.html',
  styleUrls: ['./consult-donnees.component.css']
})
export class ConsultDonneesComponent implements OnInit {

  private myData: Object;
  private resolveData = false;
  constructor(private persoDataService: PersoDataService,private patiendIDService : PatientIdserviceService) { }

  private getMyData(id: string): void {
    if (id) {
      this.myData = this.persoDataService.getData(id).subscribe(data => {
          this.myData = data;
        }
      );
      this.resolveData = true;
    }
  }

  getPatientId(){
    return this.patientId = this.patiendIDService.getId();
  }

  formatDate(date: string): string {
    if (date) {
      date = date.slice(0, 10);
      const parseDate = date.split('-');
      return(parseDate[2] + '/' + parseDate[1] + '/' + parseDate[0] + ' : ');
    }
  }

  ngOnInit() {}
}

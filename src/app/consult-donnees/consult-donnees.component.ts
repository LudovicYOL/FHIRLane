import { Component, OnInit } from '@angular/core';
import { PersoData } from '../persoData';
import { PersoDataService } from '../perso-data.service';

@Component({
  selector: 'app-consult-donnees',
  templateUrl: './consult-donnees.component.html',
  styleUrls: ['./consult-donnees.component.css']
})
export class ConsultDonneesComponent implements OnInit {

  private myData: Object;
  private patientId: string;
  constructor(private persoDataService: PersoDataService) { }

  getMyData(): void {
    this.myData = this.persoDataService.getData(this.patientId).subscribe(data => {
      this.myData = data;
      console.log(this.myData[0]);
      }
    );
  }

  searchPatient(id: string): void {
    console.log(id);
    if (id) {
      this.patientId = id;
      console.log(this.patientId);
      this.getMyData();
    }
  }

  ngOnInit() {
    // this.getMyData();
  }
}

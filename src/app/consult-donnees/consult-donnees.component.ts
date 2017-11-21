import { Component, OnInit } from '@angular/core';
import { PersoData } from '../persoData';
import { PersoDataService } from '../perso-data.service';

@Component({
  selector: 'app-consult-donnees',
  templateUrl: './consult-donnees.component.html',
  styleUrls: ['./consult-donnees.component.css']
})
export class ConsultDonneesComponent implements OnInit {

  myData: Object;
  constructor(private persoDataService: PersoDataService) { }

  getMyData(): void {
    this.myData = this.persoDataService.getData().subscribe(data => {
      this.myData = data;
      console.log(this.myData[0]);
      }
    );
  }

  ngOnInit() {
    this.getMyData();
  }
}

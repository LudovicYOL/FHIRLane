import { Component, OnInit } from '@angular/core';
import { PersoDataService } from '../perso-data.service';

@Component({
  selector: 'app-consult-donnees',
  templateUrl: './consult-donnees.component.html',
  styleUrls: ['./consult-donnees.component.css']
})
export class ConsultDonneesComponent implements OnInit {

  private myData: Object;
  constructor(private persoDataService: PersoDataService) { }

  private getMyData(id: string): void {
    if (id) {
      this.myData = this.persoDataService.getData(id).subscribe(data => {
          this.myData = data;
        }
      );
    }
  }

  ngOnInit() {}
}

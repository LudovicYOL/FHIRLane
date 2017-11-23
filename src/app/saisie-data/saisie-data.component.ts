import { Component, OnInit } from '@angular/core';
import { PersoDataService } from '../perso-data.service';
import { PatientIdserviceService } from '../patient-idservice.service';

@Component({
  selector: 'app-saisie-data',
  templateUrl: './saisie-data.component.html',
  styleUrls: ['./saisie-data.component.css']
})
export class SaisieDataComponent implements OnInit {

  constructor(private persoDataService: PersoDataService, private patiendIDService : PatientIdserviceService) { }

  setMyData(temp: string, pouls: string, taille: string, poids: string): void {
    if (temp !== '') {
      this.persoDataService.setDataTemp(temp, this.patiendIDService.getId()).subscribe();
    }
    if (pouls !== '') {
      this.persoDataService.setDataPouls(pouls, this.patiendIDService.getId()).subscribe();
    }
    if (taille !== '') {
      this.persoDataService.setDataTaille(taille, this.patiendIDService.getId()).subscribe();
    }
    if (poids !== '') {
      this.persoDataService.setDataPoids(poids, this.patiendIDService.getId()).subscribe();
    }
  }

  ngOnInit() {
  }
}

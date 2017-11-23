import { Component, OnInit } from '@angular/core';
import { PersoDataService } from '../perso-data.service';

@Component({
  selector: 'app-saisie-data',
  templateUrl: './saisie-data.component.html',
  styleUrls: ['./saisie-data.component.css']
})
export class SaisieDataComponent implements OnInit {

  constructor(private persoDataService: PersoDataService) { }

  setMyData(temp: string, pouls: string, taille: string, poids: string): void {
    if (temp !== '') {
      this.persoDataService.setDataTemp(temp).subscribe();
    }
    if (pouls !== '') {
      this.persoDataService.setDataPouls(pouls).subscribe();
    }
    if (taille !== '') {
      this.persoDataService.setDataTaille(taille).subscribe();
    }
    if (poids !== '') {
      this.persoDataService.setDataPoids(poids).subscribe();
    }
  }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { RdvData } from '../rdvData';
import { RdvDataService } from '../rdv-data.service';

@Component({
  selector: 'app-consulter-rdv',
  templateUrl: './consulter-rdv.component.html',
  styleUrls: ['./consulter-rdv.component.css']
})
export class ConsulterRdvComponent implements OnInit {

  private myData: Object;
  private patientId: string;
  constructor(private RdvDataService: RdvDataService) { }

  getMyData(): void {
    this.myData = this.RdvDataService.getData(this.patientId).subscribe(data => {
      this.myData = data;
  //    console.log(this.myData[0]);
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

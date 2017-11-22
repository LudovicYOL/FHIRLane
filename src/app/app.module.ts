import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'angular-calendar';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { RdvComponent } from './rdv/rdv.component';
import { ConsulterRdvComponent } from './consulter-rdv/consulter-rdv.component';
import { RdvDataService } from './rdv-data.service';

import { HttpClientModule } from '@angular/common/http';

import { PatientIdtComponent } from './patient-idt/patient-idt.component';
import { PatientIdserviceService } from './patient-idservice.service';

const appRoutes: Routes = [
  { path: '', component: PatientIdtComponent },
  { path: 'rdv', component: RdvComponent },
  { path: 'consulterrdv', component: ConsulterRdvComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    RdvComponent,
    PatientIdtComponent,
    ConsulterRdvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FilterPipeModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CalendarModule.forRoot()
  ],
  providers: [RdvDataService, PatientIdserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

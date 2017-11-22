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

const appRoutes: Routes = [
  { path: 'rdv', component: RdvComponent },
  { path: 'consulterrdv', component: ConsulterRdvComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    RdvComponent,
    ConsulterRdvComponent,
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
  providers: [RdvDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

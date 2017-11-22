import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { ConsultDonneesComponent } from './consult-donnees/consult-donnees.component';
import { PersoDataService } from './perso-data.service';

import { HttpClientModule } from '@angular/common/http';
import { SaisieDataComponent } from './saisie-data/saisie-data.component';
import { GenJsonPostService } from './gen-json-post.service';

const appRoutes: Routes = [
   { path: 'consult', component: ConsultDonneesComponent },
   { path: 'saisie', component: SaisieDataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ConsultDonneesComponent,
    SaisieDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FilterPipeModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [PersoDataService, GenJsonPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

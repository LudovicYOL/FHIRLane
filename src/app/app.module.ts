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

const appRoutes: Routes = [
   { path: 'consult', component: ConsultDonneesComponent },
  // { path: 'stock', component: StockComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ConsultDonneesComponent,
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
  providers: [PersoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

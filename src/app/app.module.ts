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

const appRoutes: Routes = [
  { path: 'rdv', component: RdvComponent }
  // { path: 'stock', component: StockComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    RdvComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FilterPipeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

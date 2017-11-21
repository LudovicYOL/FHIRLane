import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

import { FilterPipeModule } from 'ngx-filter-pipe';

const appRoutes: Routes = [
  // { path: 'prescription', component: PrescriptionComponent },
  // { path: 'stock', component: StockComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FilterPipeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

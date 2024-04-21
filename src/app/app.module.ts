import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FairsdashboardComponent } from './fairsdashboard/fairsdashboard.component';
import { FairscardComponent } from './fairscard/fairscard.component';
import { FairsdetailsComponent } from './fairsdetails/fairsdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FairsdashboardComponent,
    FairscardComponent,
    FairsdetailsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

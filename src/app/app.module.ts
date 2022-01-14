import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeadlineComponent } from './headline/headline.component';
import { ChartComponent } from './chart/chart.component';
import { ViewerComponent } from './viewer/viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeadlineComponent,
    ChartComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

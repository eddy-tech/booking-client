import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './components/flight/flight.component';
import { BookingComponent } from './components/booking/booking.component';
import { FormsModule } from '@angular/forms';
import { HealthStatusComponent } from './health-status/health-status.component';
import { BookingStatsComponent } from './booking-stats/booking-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    BookingComponent,
    HealthStatusComponent,
    BookingStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

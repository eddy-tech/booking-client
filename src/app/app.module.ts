import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './components/flight/flight.component';
import { BookingComponent } from './components/booking/booking.component';
import { FormsModule } from '@angular/forms';
import { RequestInterceptor } from './intercept/request-interceptor.interceptor';
import { BookingMailComponent } from './components/booking-mail/booking-mail.component';
import { BookingShowComponent } from './components/booking-show/booking-show.component';
import { HealthComponent } from './components/health/health.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    BookingComponent,
    BookingMailComponent,
    BookingShowComponent,
    HealthComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

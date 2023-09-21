import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './components/flight/flight.component';
import { BookingComponent } from './components/booking/booking.component';
import { FormsModule } from '@angular/forms';
import { RequestInterceptor } from './intercept/request-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

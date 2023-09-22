import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './components/flight/flight.component';
import { BookingComponent } from './components/booking/booking.component';
import { BookingMailComponent } from './components/booking-mail/booking-mail.component';
import { HealthComponent } from './components/health/health.component';

const routes: Routes = [
  {
    path: '',
    component: FlightComponent
  },
  {
    path: 'booking/:orderId',
    component: BookingComponent
  },
  {
    path: 'booking-mail',
    component: BookingMailComponent
  },
  {
    path: 'health',
    component: HealthComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

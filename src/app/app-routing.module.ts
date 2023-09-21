import { HealthStatusComponent } from './health-status/health-status.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './components/flight/flight.component';

const routes: Routes = [
  {
    path: '',
    component: FlightComponent

  },

  { path: 'health',
    component: HealthStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

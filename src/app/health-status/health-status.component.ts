import { Component, OnInit } from '@angular/core';
import { HealthStatusService } from '../services/HealthStatusService';

@Component({
  selector: 'app-health-status',
  templateUrl: './health-status.component.html',
  styleUrls: ['./health-status.component.css']
})
export class HealthStatusComponent implements OnInit {


  frontServiceHealthy: boolean = false; // État de santé du microservice Currency
  flightServiceHealthy: boolean = false;  // État de santé du microservice Flight
  bookingServiceHealthy: boolean = false;  // État de santé du microservice Booking


  constructor(private healthService: HealthStatusService) { }

  ngOnInit(): void {
    this.checkFrontServiceHealth();
    this.checkFlightServiceHealth();
    this.checkBookingServiceHealth();

  }

  checkFrontServiceHealth(): void {
    this.healthService.checkFrontServiceHealth().subscribe(
      (response) => {
        if (response && response.healthy === true) {
        // Traite la réponse de l'appel au microservice Front pour déterminer son état
        this.frontServiceHealthy = true;
        }
       else {
        this.frontServiceHealthy = false;
        }
      },

      (error) => {
        // Traite l'erreur ici si le microservice Front est inaccessible
        this.frontServiceHealthy = false;
      }
    );
  }

  checkFlightServiceHealth(): void {
    this.healthService.checkFlightServiceHealth().subscribe(
      (response) => {
        if (response && response.healthy === true) {
        // Traite la réponse de l'appel au microservice Flight pour déterminer son état
        this.flightServiceHealthy = true;
        }
       else {
        this.flightServiceHealthy = false;
        }
      },
      (error) => {
        // Traite l'erreur ici si le microservice Flight est inaccessible
        this.flightServiceHealthy = false;
      }
    );
  }

  checkBookingServiceHealth(): void {
    this.healthService.checkBookingServiceHealth().subscribe(
      (response) => {
        if (response && response.healthy === true) {
        // Traite la réponse de l'appel au microservice Booking pour déterminer son état
        this.bookingServiceHealthy = true;
        }
       else {
        this.bookingServiceHealthy = false;
        }
      },

      (error) => {
        // Traite l'erreur ici si le microservice Booking est inaccessible
        this.bookingServiceHealthy = false;
      }
    );
  }
}


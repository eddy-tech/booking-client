import { Component, OnInit } from '@angular/core';
import { Health } from 'src/app/modules/health';
import { HealthService } from 'src/app/services/health.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  frontServiceHealthy: boolean = false;
  flightServiceHealthy: boolean = false;
  bookingServiceHealthy: boolean = false;

  constructor(private healthService: HealthService) { }

  ngOnInit(): void {
    this.checkBookingServiceHealth();
    this.checkFlightServiceHealth();
    this.checkFrontServiceHealth();
  }

  checkFrontServiceHealth(): void {
    this.healthService.checkFrontServiceHealth().subscribe({
      next: (response: Health) => {
        if (response && response.healthy === true) {
        this.frontServiceHealthy = true;
        }
      },
      error: (error) => {
        this.frontServiceHealthy = false;
      }
    });
  }

  checkFlightServiceHealth(): void {
    this.healthService.checkFlightServiceHealth().subscribe({
      next: (response: Health) => {
        if (response && response.healthy === true) {
        this.flightServiceHealthy = true;
        }
      },
      error: (error) => {
        this.flightServiceHealthy = false;
      }
    });
  }

  checkBookingServiceHealth(): void {
    this.healthService.checkBookingServiceHealth().subscribe({
      next: (response: Health) => {
        if (response && response.healthy === true) {
        this.bookingServiceHealthy = true;
        }
      },
      error: (error) => {
        this.bookingServiceHealthy = false;
      }
    });
  }

}

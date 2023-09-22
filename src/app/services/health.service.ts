import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Health } from '../modules/health';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  private urlApiFront: string = environment.apiFrontUrl;
  private urlFlight: string = environment.flightMicroserviceUrl;
  private urlBooking: string = environment.bookingMicroserviceUrl;

  constructor(private http: HttpClient) { }

  checkFrontServiceHealth(): Observable<Health> {
    return this.http.get<Health>(`${this.urlApiFront}/healtCheck`);
  }

  checkFlightServiceHealth(): Observable<Health> {
    return this.http.get<Health>(`${this.urlFlight}/healtCheck`);
  }

  checkBookingServiceHealth(): Observable<Health> {
    return this.http.get<Health>(`${this.urlBooking}/healtCheck`);
  }
}

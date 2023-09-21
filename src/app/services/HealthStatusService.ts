import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthStatusService {
  constructor(private http: HttpClient) { }

  checkFrontServiceHealth(): Observable<any> {
    const currencyServiceUrl = 'http://127.0.0.1:3333/healtCheck';
    return this.http.get(currencyServiceUrl);
  }


  checkFlightServiceHealth(): Observable<any> {
    const flightServiceUrl = 'http://127.0.0.1:3000/healtCheck';
    return this.http.get(flightServiceUrl);
  }

  checkBookingServiceHealth(): Observable<any> {
    const bookingServiceUrl = 'http://127.0.0.1:3030/healtCheck';
    return this.http.get(bookingServiceUrl);
  }
}

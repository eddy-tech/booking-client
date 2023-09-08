import { Flight } from './../modules/flight';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Booking } from '../modules/booking';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private url: string = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  getFlight(): Observable<Array<Flight>> {
    return this.httpClient.get<Array<Flight>>(`${this.url}/flight`);
  }

  saveBooking(flight: Flight): Observable<Booking> {
    if (flight.places === 0) {
      alert('plus de places dispo');
    }
    return this.httpClient.post<Booking>(`${this.url}/booking`, flight);
  }
  getAvailableSeats(flightId: string): Observable<number> {
    const url = `${this.url}/flight/${flightId}/getRestPlace`;
    return this.httpClient.get<number>(url);
  }

}

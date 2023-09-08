import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../modules/flight';
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
    return this.httpClient.post<Booking>(`${this.url}/booking`, flight);
  }
}

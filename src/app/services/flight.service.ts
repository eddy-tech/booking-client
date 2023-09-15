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

  saveBooking(flight_id: string): Observable<Booking> {
    return this.httpClient.post<Booking>(`${this.url}/booking`, {flight_id});
  }

  getNumberPlace(flight_id: string): Observable<any>{
    return this.httpClient.get(`${this.url}/flight/${flight_id}/getRestPlace`);
  }

  getAvailableSeats(flightId: string): Observable<number> {
    const url = `${this.url}/flight/${flightId}/getRestPlace`;
    return this.httpClient.get<number>(url);
  }

  getCurrencies(): Observable<any[]> {
    const currenciesUrl = `${this.url}/currencies`;
    return this.httpClient.get<any[]>(currenciesUrl);
  }
}

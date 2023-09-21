import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../modules/flight';
import { Airport } from '../modules/airport';
import { Currency } from '../modules/currency';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private url: string = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  getFlight(): Observable<Array<Flight<Airport>>> {
    return this.httpClient.get<Array<Flight<Airport>>>(`${this.url}/flights`);
  }

  getNumberPlace(flight_id: string): Observable<any>{
    return this.httpClient.get(`${this.url}/flights/${flight_id}/getRestPlace`);
  }

  getCurrencies(): Observable<Array<Currency>>{
    return this.httpClient.get<Array<Currency>>(`${this.url}/currencies`);
  }

  getAvailableSeats(flightId: string): Observable<number> {
    const url = `${this.url}/flight/${flightId}/getRestPlace`;
    return this.httpClient.get<number>(url);
  }

}

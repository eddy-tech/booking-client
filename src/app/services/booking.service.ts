import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Booking } from '../modules/booking';
import { Airport } from '../modules/airport';
import {BookingResponse} from '../modules/BookingResponse';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private url: string = environment.apiUrl


  constructor(private httpClient: HttpClient) { }

  saveBooking(
    flight_id: string,
    date_departiture: number,
    quantity: number,
    currency: string,
    luggages: number
    ): Observable<BookingResponse> {
    return this.httpClient
               .post<BookingResponse>
               (`${this.url}/bookings`, {flight_id, date_departiture, quantity, currency, luggages});
  }

  confirmBooking(orderId: string): Observable<Booking<Airport>> {
    return this.httpClient.get<Booking<Airport>>(`${this.url}/bookings/${orderId}/confirm`)
  }
}

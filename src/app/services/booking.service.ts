import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Booking } from '../modules/booking';
import { Airport } from '../modules/airport';
import {BookingResponse} from '../modules/BookingResponse';
import {OrderBooking} from '../modules/order';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private url: string = environment.apiUrl;
  private bookingData = new BehaviorSubject<any>(null);

  constructor(private httpClient: HttpClient) { }

  saveBooking(
    flight_id: string,
    date_departiture: number,
    email_guest: string,
    quantity: number,
    currency: string,
    luggages: number
    ): Observable<BookingResponse> {
    return this.httpClient
               .post<BookingResponse>
               (`${this.url}/bookings`, {flight_id, date_departiture, email_guest, quantity, currency, luggages});
  }

  confirmBooking(orderId: string): Observable<Booking<Airport>> {
    return this.httpClient.get<Booking<Airport>>(`${this.url}/bookings/${orderId}/confirm`);
  }

  getListBooking(orderId: string): Observable<OrderBooking> {
    return this.httpClient.get<OrderBooking>(`${this.url}/bookings/${orderId}`);
  }

  resetBooking(orderId: string): Observable<OrderBooking> {
    return this.httpClient.delete<OrderBooking>(`${this.url}/bookings/${orderId}/cancel`);
  }

  getBookingByEmail(email_guest: string): Observable<Booking<Airport>> {
    const params = new HttpParams().set('email', email_guest);
    return this.httpClient.get<Booking<Airport>>(`${this.url}/bookings`, { params });
  }

  setBookingData(data: Array<OrderBooking>){
    this.bookingData.next(data);
  }

  getBookingData(){
    return this.bookingData.asObservable();
  }

}

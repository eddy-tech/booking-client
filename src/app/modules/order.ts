import {Airport} from "./airport";
import {Flight} from "./flight";

export interface OrderBooking {
  flight_id: string,
  id: string,
  date_departiture: string,
  quantity: number,
  email_guest: string,
  currency: string,
  luggages: number,
  currency_rate?: number,
  discount: number,
  discount_cond: number,
  cost_per_more_luggages: number,
  flight: Flight<Airport>,
  total_luggages_price: string,
  total_price: string
}

export interface BookingCancel {
  bookings: BookingPayload
}

export interface BookingPayload {
  id: string,
  airline: string
}

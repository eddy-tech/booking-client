import {Airport} from "./airport";
import {Flight} from "./flight";

export interface OrderBooking {
  flight_id: string,
  date_departiture: string,
  quantity: number,
  currency: string,
  luggages: number,
  currency_rate: number,
  discount: number,
  discount_cond: number,
  cost_per_more_luggages: number,
  flight: Flight<Airport>,
  total_luggages_price: string,
  total_price: string
}

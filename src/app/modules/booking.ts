import { Airport } from "./airport"
import { Flight } from "./flight"
import { Passenger } from "./passenger"

export interface Booking<T extends string | Airport> {
  id: string
  flight?: Flight<T>
  flight_id: string
  email_guest: string
  date_departiture: number
  quantity: number
  discount?: number
  discount_cond?: number
  currency: string
  cost_per_more_luggages?: number
  luggages: number
  passengers?: Passenger[]
  order_id?: string
  // created_at: DateTime
}

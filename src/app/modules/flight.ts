import { Airport } from "./airport"

export interface Flight<T extends string | Airport> {
  id: string
  airport_departiture: T
  airport_destination: T
  price: number
  seats: number
  luggages_limit: number
  stopover: number[]
  airline: string
}

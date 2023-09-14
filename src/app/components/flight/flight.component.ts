import { Component, OnInit } from '@angular/core';
import { Airport } from 'src/app/modules/airport';
import { Booking } from 'src/app/modules/booking';
import { Currency } from 'src/app/modules/currency';
import { Flight } from 'src/app/modules/flight';
import { BookingService } from 'src/app/services/booking.service';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  selectedDate!: string;
  flightLists: Array<Flight<Airport>> = [];
  isShow: boolean = false;
  selectedFlight!: Flight<Airport>;
  luggages: number = 0;
  numberPlaces: number = 0;
  totalPlaces: number = 0;
  saveBooking!: Booking<Airport>;
  minDate!: string
  selectedBooking!: Booking<Airport>
  dateFlight!: string
  totalPrice!: number
  isButtonDisable: boolean = false
  currencies: Array<Currency> = []
  selectedCurrency!: string

  constructor(private flightService: FlightService, private bookingService: BookingService) {}

  ngOnInit(): void {
     this.flightService.getFlight().subscribe({
      next: (data: Array<Flight<Airport>>) => {
        console.log(data);

        this.flightLists = data;
      },
      error: (err: Error) => {
        console.log(err);
      }
    })
    this.getDateMin();
    this.onAllCurrencies();
  }

  onNumberPlace(flight_id: string){
    this.flightService.getNumberPlace(flight_id).subscribe({
      next: (data: number) => {
        console.log("number : ", data);
        this.totalPlaces = data;
      }
    })
  }

  onAllCurrencies(){
    this.flightService.getCurrencies().subscribe({
      next: (data: Array<Currency>) => {
        this.currencies = data;
        console.log("Currencies: ", this.currencies);
      }
    })
  }

  onBooking(id_flight: string, date_departiture: string | null, quantity: number, currency: string, luggages: number){
    console.log(date_departiture);
    if(!date_departiture) return;
    if(this.luggages < 0) return;
    const [year, month, day] = date_departiture?.split('-')
    const timestamp = new Date(+year, +month, +day).getTime()
    // this.onNumberPlace(id_flight);

    this.bookingService.saveBooking(id_flight, timestamp, quantity, currency, luggages).subscribe({
      next: (data: Booking<Airport>) => {
        this.saveBooking = data;
        alert(`Votre réservation a été pris en compte avec succès`);
        console.log(this.saveBooking);
      },
      error: (err: any) => console.log(err)
    })
  }

  selectFlight(flight: Flight<Airport>){
    this.isShow = !this.isShow;
    if(this.isShow){
        this.selectedFlight = flight
    }
  }

  onLuggagesChanged(){
    if(+this.luggages > this.selectedFlight.luggages_limit) this.totalPrice = this.selectedFlight.price + (+this.luggages - this.selectedFlight.luggages_limit) * 100
    else this.totalPrice = this.selectedFlight.price
  }

  onCurrencyChanged(curr: string){
         console.log("Tola Price : ", this.totalPrice);
         console.log("Tola curr : ", curr);
  }

  getDateMin(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    this.minDate = `${year}-${month}-${day}`;
  }
}

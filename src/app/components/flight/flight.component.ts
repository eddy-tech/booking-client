import {HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BookingResponse} from 'src/app/modules/BookingResponse';
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
  saveBooking!: BookingResponse;
  minDate!: string
  selectedBooking!: Booking<Airport>
  dateFlight!: string
  totalPrice!: number
  isButtonDisable: boolean = false
  currencies: Array<Currency> = []
  selectedCurrency!: string

  constructor(private flightService: FlightService, private bookingService: BookingService, private route: Router) {}

  ngOnInit(): void {
     this.flightService.getFlight().subscribe({
      next: (data: Array<Flight<Airport>>) => {
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
        this.totalPlaces = data;
      }
    })
  }

  onAllCurrencies(){
    this.flightService.getCurrencies().subscribe({
      next: (data: Array<Currency>) => {
        this.currencies = data;
      }
    })
  }

  onBooking(id_flight: string, date_departiture: string | null, quantity: number, currency: string, luggages: number){
    if(!date_departiture) return;
    if(this.luggages < 0) return;
    const [year, month, day] = date_departiture?.split('-');
    const timestamp = new Date(+year, +month, +day).getTime();
    this.bookingService.saveBooking(id_flight, timestamp, quantity, currency, luggages).subscribe({
      next: (data: BookingResponse) => {
        this.saveBooking = data;
        alert(`Votre réservation a été pris en compte avec succès`);
        this.route.navigate(['/booking', this.saveBooking.order_id]);
      },
      error: (err: HttpErrorResponse) =>{
        alert(err.error.message);
      }
    })
  }

  selectFlight(flight: Flight<Airport>){
    this.isShow = !this.isShow;
    if(this.isShow){
        this.selectedFlight = flight;
        this.totalPrice = parseFloat(flight.price.toFixed(2));
        this.numberPlaces = 0;
        this.luggages = 0;
    }
  }

  onLuggagesChanged() {
    if(+this.luggages < this.selectedFlight.luggages_limit){
      let actualCurrency = this.currencies.find(curr => curr.currency == this.selectedCurrency);
      console.log("Actual :", actualCurrency);
    }

    if (+this.luggages > this.selectedFlight.luggages_limit) {
      const extraLuggage = +this.luggages - this.selectedFlight.luggages_limit;
      const additionalCost = extraLuggage * 100;
      const actualCurrency = this.currencies.find(curr => curr.currency == this.selectedCurrency);
      console.log("Actual :", actualCurrency);

      if(actualCurrency){
        const selectedPrice = this.selectedFlight.price * actualCurrency.rate;
        console.log(selectedPrice);

        const newPrice = selectedPrice + additionalCost;
        this.totalPrice = parseFloat(newPrice.toFixed(2));
      }
    } else {
      this.totalPrice = parseFloat(this.selectedFlight.price.toFixed(2));
    }
  }


  onCurrencyChanged(){
    const selectedCurrency = this.selectedCurrency;
    const selectedCurrencyObject = this.currencies.find(curr => curr.currency === selectedCurrency)!;

    if(selectedCurrencyObject || +this.luggages > 0){
      const newTotalPrice = this.selectedFlight.price * selectedCurrencyObject.rate;
      this.totalPrice = parseFloat(newTotalPrice.toFixed(2));
    }
  }

  getDateMin(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    this.minDate = `${year}-${month}-${day}`;
  }
}

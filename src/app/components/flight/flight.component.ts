import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/modules/booking';
import { Flight } from 'src/app/modules/flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  selectedDate!: string;
  flightLists: Array<Flight> = [];
  isShow: boolean = false;
  selectedFlight!: Flight;
  luggages: number = 0;
  saveBooking!: Booking;
  minDate!: string
  selectedBooking!: Booking
  dateFlight!: string
  totalPrice!: number

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
     this.flightService.getFlight().subscribe({
      next: (data: Array<Flight>) => {
        this.flightLists = data;
      },
      error: (err: Error) => {
        console.log(err);
      }
    })
    this.getDateMin();
  }

  onBooking(id_flight: string, date_departiture: string | null){
    console.log(date_departiture);
    if(!date_departiture) return;
    if(this.luggages < 0) return;
    const [year, month, day] = date_departiture?.split('-')
    const timestamp = new Date(+year, +month, +day).getTime()
    console.log(timestamp);


    this.flightService.saveBooking(id_flight, timestamp).subscribe({
      next: (data: Booking) => {
        this.saveBooking = data;
        alert(`Votre réservation a été pris en compte avec succès`);
        console.log(this.saveBooking);
      },
      error: (err: any) => console.log(err)
    })
  }

  selectFlight(flight: Flight){
    this.isShow = !this.isShow;
    if(this.isShow){
        this.selectedFlight = flight
    }
  }

  onLuggagesChanged(){
    if(+this.luggages > this.selectedFlight.luggages) this.totalPrice = this.selectedFlight.price * (+this.luggages - this.selectedFlight.luggages)
    else this.totalPrice = this.selectedFlight.price
  }

  getDateMin(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    this.minDate = `${year}-${month}-${day}`;
  }
}

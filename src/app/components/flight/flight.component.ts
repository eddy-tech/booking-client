import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  saveBooking!: Booking

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
     this.flightService.getFlight().subscribe({
      next: (data: Array<Flight>) => {
        this.flightLists = data;
      },
      error: (err: Error) => {
        console.log(err);
      }
    })
  }

  onBooking(id_flight: string){
    this.flightService.saveBooking(id_flight).subscribe({
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
}

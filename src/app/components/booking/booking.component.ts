import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/modules/flight';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  flight!: Flight

  constructor() { }

  ngOnInit(): void {
  }

}

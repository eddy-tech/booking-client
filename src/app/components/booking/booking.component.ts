import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Airport} from 'src/app/modules/airport';
import {Booking} from 'src/app/modules/booking';
import {BookingService} from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  confirmBooking!: Booking<Airport>

  constructor(private bookingService: BookingService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const orderId: string = this.activeRoute.snapshot.paramMap.get('orderId')!;
    this.bookingService.confirmBooking(orderId).subscribe({
      next: (data: Booking<Airport>) => {
        this.confirmBooking = data
      }
    })
  }

}

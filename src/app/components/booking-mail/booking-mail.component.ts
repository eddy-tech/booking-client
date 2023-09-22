import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingCancel, OrderBooking } from 'src/app/modules/order';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-mail',
  templateUrl: './booking-mail.component.html',
  styleUrls: ['./booking-mail.component.css']
})
export class BookingMailComponent implements OnInit {
  orderBookings!: Array<OrderBooking>
  selectAirlineBooking: boolean = false;
  bookingsCanceled: Array<BookingCancel> = [];
  bookingData!: BookingCancel
  resultOneData: Array<OrderBooking> = [];

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit(): void {
    this.bookingService.getBookingData().subscribe({
      next: (data: any) => {
        this.orderBookings = data;
        console.log(this.orderBookings);

      }
    })
  }

  onCheckBookings(bookings: any) {
    if(this.selectAirlineBooking) {
      this.resultOneData.push(bookings);
      let payload = {} as BookingCancel
      this.resultOneData.forEach((booking: any) => {
        payload = Object.keys(booking).reduce((prev, key) => {
          if(key === 'id') prev.bookings.id = booking[key]
          if(key === 'flight') prev.bookings.airline = booking[key].airline
          return prev
        }, {} as BookingCancel)
      })

      console.log("Payload : " , payload);
    }
  }

  backToHome(): void{
    this.router.navigateByUrl('/');
  }

  // cancelBookings(bookings: Array<BookingCancel>): any{
  //   if(this.selectAirlineBooking){
  //     this.orderBookings.map((booking: OrderBooking) => {
  //           this.bookingData = booking.id
  //     })
  //   }

  // }

}

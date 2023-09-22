import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookingCancel, OrderBooking } from 'src/app/modules/order';

@Component({
  selector: 'app-booking-show',
  templateUrl: './booking-show.component.html',
  styleUrls: ['./booking-show.component.css']
})
export class BookingShowComponent implements OnInit {
  @Input()
  orderBooking!: OrderBooking;
  @Input()
  selectBookingAirline: boolean = false;
  @Input()
  checkBooking!: Array<OrderBooking>
  @Output()
  deleteBooking: EventEmitter<OrderBooking> = new EventEmitter();
  @Output()
  confirmBooking: EventEmitter<OrderBooking> = new EventEmitter();
  @Output()
  onCheckBooking: EventEmitter<BookingCancel> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onCheckModel(){
    this.onCheckBooking.emit();
  }



  onDeleteBooking(){
    this.deleteBooking.emit();
  }

  onConfirmBooking(){
    this.confirmBooking.emit();
  }

}

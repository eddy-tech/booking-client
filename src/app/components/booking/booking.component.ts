import {HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Airport} from 'src/app/modules/airport';
import {Booking} from 'src/app/modules/booking';
import {OrderBooking} from 'src/app/modules/order';
import {BookingService} from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  orderBooking!: OrderBooking
  resetBooking!: OrderBooking
  orderId: string = this.activeRoute.snapshot.paramMap.get('orderId')!;
  confirmReservation!: Booking<Airport>

  constructor(private bookingService: BookingService, private activeRoute: ActivatedRoute, private route: Router) { }
  ngOnInit(): void {
    this.bookingService.getListBooking(this.orderId).subscribe({
      next: (data: OrderBooking) => {
        this.orderBooking = data;
        console.log(this.orderBooking);

      },
      error: (err: HttpErrorResponse) =>{
        alert(err.error.message);
      }
    })
  }

  onDeleteBooking(){
    this.bookingService.resetBooking(this.orderId).subscribe({
      next: (data: OrderBooking) => {
        this.resetBooking = data;
        alert(`Votre commande a été annuler avec succès`);
        this.route.navigateByUrl('/');
      },
      error: (err: HttpErrorResponse) =>{
        alert(err.error.message);
      }
    })
  }

  onConfirmBooking(){
    this.bookingService.confirmBooking(this.orderId).subscribe({
      next: (data: Booking<Airport>) => {
        this.confirmReservation = data;
        alert(`Votre réservation numéro ${this.confirmReservation.id} a été enregistré avec succès chez Air Camair`);
        this.route.navigateByUrl('/');
      },
      error: (err: HttpErrorResponse) =>{
        alert(err.error.message);
      }
    })
  }
}


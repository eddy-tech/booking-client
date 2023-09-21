import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  confirmData: any;

  constructor(private bookingService: BookingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const orderId: string = this.route.snapshot.paramMap.get('orderId')!;
    console.log("ID: ", orderId);

    this.bookingService.confirmBooking(orderId).subscribe({
      next: (data: any) => {
        this.confirmData = data;
        console.log("Confirm: ", this.confirmData);
      }

    })
  }

}

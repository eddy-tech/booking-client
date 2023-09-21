import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/modules/flight';
import { FlightService } from 'src/app/services/flight.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  selectedDeparture!: string;
  selectedArrival!: string;
  selectedDate!: string;
  flightLists: Array<Flight> = [];
  isChecked: boolean = false;
  flight!: Flight;
  selectedFlight!: Flight;

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

  updatePrice(){
    // this.flight = this.flightLists.find(flight =>
    //   flight.airport_departiture === this.selectedDeparture && flight.airport_destination === this.selectedArrival)
  }

  onBooking(flight: Flight){
    console.log(flight);

  }

  onFlightSelect(flight: Flight): void {
    this.selectedFlight = flight;
    // Récupérez le nombre de places disponibles pour le vol sélectionné
    this.flightService.getAvailableSeats (flight.id).subscribe((places: number) => {
      this.selectedFlight.places = places;
    });
  }

  goToHealthPage(): void {
    // Utilise le service Router pour naviguer vers la page "Health"
    this.router.navigate(['/health']);
  }

}

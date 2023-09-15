import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/modules/flight';
import { FlightService } from 'src/app/services/flight.service';

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
  currencies: any[] = [];
  selectedCurrency: string = 'EUR'; // Monnaie par défaut
  price: number = 0; // Prix initial

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
     this.flightService.getFlight().subscribe({
      next: (data: Array<Flight>) => {
        this.flightLists = data;
      },
      error: (err: Error) => {
        console.log(err);
      }
    })
      // Charge la liste des devises au chargement de la page
      this.flightService.getCurrencies().subscribe((data: any[]) => {
        this.currencies = data;
      });
    };


    updatePrice(): void {
      //le taux de change de la devise sélectionnée
      const selectedCurrencyObject = this.currencies.find(currency => currency.currency === this.selectedCurrency);

      if (selectedCurrencyObject) {
        // Met à jour le prix en fonction du taux de change
        this.price = this.price * selectedCurrencyObject.rate;
      }
    }

  onBooking(flight: Flight){
    console.log(flight);

  }

  onFlightSelect(flight: Flight): void {
    this.selectedFlight = flight;
    // Récupère le nombre de places disponibles pour le vol sélectionné
    this.flightService.getAvailableSeats (flight.id).subscribe((places: number) => {
      this.selectedFlight.places = places;
    });
  }

}

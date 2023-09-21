# BookingClient

Le **front-end** pour la vente de billets est une interface utilisateur intuitive, offrant une expérience utilisateur fluide et conviviale pour la réservation de billets, avec des fonctionnalités de recherche simplifiées et une conception attrayante pour les utilisateurs. Il permet aux clients de naviguer facilement, de visualiser les options de billets, et de finaliser leurs achats de manière transparente.

### Team : 👨‍👨‍👦‍👦

- Jordan KAGMENI (Torador): Lead Dev
- Carlos KODJO: QA & Front Dev
- Andy KOUEKAM: Front Dev
- Eddy KOKO: Front Dev

### Stack 📝

- [AngularJS](https://angularjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [jQuery](https://jquery.com/)
- [Bootstrap](https://getbootstrap.com/)

## Objects 📦

1. ### Airline
    <details>
    <summary>Airline details</summary>

    ```javascript
    export interface Airline {
    id: string
    code: string
    name: string
    }
    ```
    </details>

2. ### Airport
    <details>
    <summary>Airport details</summary>

    ```javascript
    export interface Airport {
    id: string
    code: string
    name: string
    }
    ```
    </details>

3. ### Booking
    <details>
    <summary>Booking details</summary>

    ```javascript
    export interface Booking<T extends string | Airport> {
    id: string
    flight?: Flight<T>
    flight_id: string
    email_guest: string
    date_departiture: number
    quantity: number
    discount?: number
    discount_cond?: number
    currency: string
    cost_per_more_luggages?: number
    luggages: number
    passengers?: Passenger[]
    order_id?: string
    // created_at: DateTime
    }
    ```
    </details>

4. ### Currency
    <details>
    <summary>Currency details</summary>

    ```javascript
    export interface Currency {
    currency: string
    rate: number
    }
    ```
    </details>

5. ### Flight
    <details>
    <summary>Flight details</summary>

    ```javascript
    export interface Flight<T extends string | Airport> {
    id: string
    airport_departiture: T
    airport_destination: T
    price: number
    seats: number
    luggages_limit: number
    stopover: string[]
    airline: string
    }
    ```
    </details>

6. ### OrderBooking
    <details>
    <summary>OrderBooking details</summary>

    ```javascript
    export interface OrderBooking {
    flight_id: string,
    date_departiture: string,
    quantity: number,
    currency: string,
    luggages: number,
    currency_rate: number,
    discount: number,
    discount_cond: number,
    cost_per_more_luggages: number,
    flight: Flight<Airport>,
    total_luggages_price: string,
    total_price: string
    }
    ```
    </details>

7. ### Passenger
    <details>
    <summary>Passenger details</summary>

    ```javascript
    export interface Passenger {
    id: string
    fistname: string
    lastname: string
    birthdate: number
    }
    ```
    </details>

## Intallation ⚙️

1.  Node JS

Après avoir cloné le projet, rassurer vous d'avoir nodejs installé sur votre machine en tappant cette commande:

```bash
  node --version
  #v16.14.2
```

Si la version de node ne s'affiche pas, je vous invite à la télécharger [ici](https://nodejs.org/en/).

2.  Dépendances

Pour installer les dépendances du projet, tappez cette commande dans votre terminal à la racine de chaque ressource:

```bash
  yarn
  #or
  npm install
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

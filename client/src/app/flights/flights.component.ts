import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { SideMenuComponent } from '../shared/sideMenu/sideMenu.component';
import { HeaderComponent } from '../shared/header/header.component';
import { Router } from '@angular/router';
import { userSesion } from '../store/user.store';
import { AirportsService } from '../services/airports.service';
import { Airport, AirportResult } from '../interfaces/airport';
import { FormsModule } from '@angular/forms';
import { FlightsService } from '../services/flights.service';
import { Airline, Flight } from '../interfaces/flight';
import { FlightCardComponent } from './flightCard/flightCard.component';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [
    CommonModule,
    SideMenuComponent,
    HeaderComponent,
    FormsModule,
    FlightCardComponent,
  ],
  templateUrl: './flights.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightsComponent implements OnInit {
  allAirports = signal<AirportResult>({ airports: [] });
  cityAirports = signal<Airport[]>([]);
  countryOptions = signal<string[]>([]);
  cityOptions = signal([
    {
      country: '',
      city: '',
      cityCode: '',
    },
  ]);
  flightsByAirport = signal<Flight[]>([]);
  airlines = signal<Airline[]>([]);
  countrySelected!: string;
  citySelected!: string;
  airportSelected!: string;
  dateSelected!: string;
  valid = { value: true, message: '' };

  router = inject(Router);
  airportsService = inject(AirportsService);
  flightService = inject(FlightsService);

  get userSesion() {
    return userSesion();
  }

  goLogin() {
    this.router.navigate(['/logIn']);
  }

  getCountryOptions() {
    const airports = this.allAirports().airports;
    let arrayCountries = airports.map((air) => air.countryName);

    let countries = [''];

    for (let i = 0; i <= arrayCountries.length; i++) {
      let aux = false;

      for (let x = 0; x <= countries.length; x++) {
        if (arrayCountries[i] == countries[x]) {
          aux = true;
        }
      }

      if (aux == false) {
        countries = [...countries, arrayCountries[i]];
      }
    }
    let countriesOptions = countries.sort().filter((c) => c != '');
    console.log(countriesOptions);
    this.countryOptions.set(countriesOptions);
  }

  getCityOptions(countrySelected: string) {
    const airports = this.allAirports().airports;
    let arrayCities = airports.map((air) => {
      return {
        country: air.countryName,
        city: air.city,
        cityCode: air.cityCode,
      };
    });

    let cities = [{ country: '', city: '', cityCode: '' }];

    for (let i = 0; i < arrayCities.length; i++) {
      let aux = false;

      for (let x = 0; x < cities.length; x++) {
        if (arrayCities[i].cityCode == cities[x].cityCode) {
          aux = true;
        }
      }

      if (aux == false) {
        cities = [...cities, arrayCities[i]];
      }
    }

    let citiesByCountry = cities
      .filter((city) => city.country == countrySelected)
      .sort((a, b) => {
        if (a.city < b.city) {
          return -1;
        }
        if (a.city > b.city) {
          return 1;
        }
        return 0;
      });

    console.log(citiesByCountry);
    this.cityOptions.set(citiesByCountry);
  }

  getAirportsByCity(citySelected: string) {
    let airportsCity = this.allAirports().airports.filter(
      (a) => a.cityCode == citySelected
    );

    this.cityAirports.set(airportsCity);
  }

  getFlights() {
    if (this.dateSelected && this.airportSelected) {
      let [date, time] = this.dateSelected.split('T');
      let newDate = date.replaceAll('-', '/');
      let newTime = time.slice(0, 2);

      this.flightService
        .getFlights(this.airportSelected, newDate, newTime)
        .subscribe((response) => {
          this.flightsByAirport.set(response.flightStatuses);
          this.airlines.set(response.appendix.airlines);
          console.log(this.flightsByAirport());
          console.log(this.airlines());
        });
    } else {
      this.valid = { value: false, message: 'Seleccione los datos necesarios' };
    }
  }

  ngOnInit() {
    this.airportsService.getAllAirports().subscribe((response) => {
      this.allAirports.set(response);
      this.getCountryOptions();
    });
  }
}

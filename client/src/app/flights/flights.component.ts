import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { SideMenuComponent } from '../shared/sideMenu/sideMenu.component';
import { AirportComponent } from './airport/airport.component';
import { HeaderComponent } from '../shared/header/header.component';
import { Router } from '@angular/router';
import { userSesion } from '../store/user.store';
import { AirportsService } from '../services/airports.service';
import { AirportResult } from '../interfaces/airport';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [
    CommonModule,
    SideMenuComponent,
    HeaderComponent,
    AirportComponent,
    FormsModule,
  ],
  templateUrl: './flights.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightsComponent implements OnInit {
  allAirports = signal<AirportResult>({ airports: [] });
  countryOptions = signal([{ country: '', countryCode: '' }]);
  cityOptions = signal([{ country: '', city: '', cityCode: '' }]);
  countrySelected!: string;
  citySelected!: string;
  cityAirports = signal<AirportResult>({ airports: [] });

  router = inject(Router);
  airportsService = inject(AirportsService);

  get userSesion() {
    return userSesion();
  }
  goLogin() {
    this.router.navigate(['/logIn']);
  }

  getCountryOptions() {
    const airports = this.allAirports().airports;
    let arrayCountries = airports.map((air) => {
      return { country: air.countryName, countryCode: air.countryCode };
    });

    let countries = [{ country: '', countryCode: '' }];

    for (let i = 0; i < arrayCountries.length; i++) {
      let aux = false;

      for (let x = 0; x < countries.length; x++) {
        if (arrayCountries[i].countryCode == countries[x].countryCode) {
          aux = true;
        }
      }

      if (aux == false) {
        countries = [...countries, arrayCountries[i]];
      }
    }
    this.countryOptions.set(countries);
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

    let citiesByCountry = cities.filter(
      (city) => city.country == countrySelected
    );

    this.cityOptions.set(citiesByCountry);
  }

  getAirportsByCity(citySelected: string) {
    this.airportsService
      .getAirportByCity(citySelected)
      .subscribe((response) => this.cityAirports.set(response));
  }

  ngOnInit() {
    this.airportsService.getAllAirports().subscribe((response) => {
      this.allAirports.set(response);
      this.getCountryOptions();
    });
  }
}

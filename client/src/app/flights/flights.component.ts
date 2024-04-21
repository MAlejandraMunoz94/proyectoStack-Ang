import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { SideMenuComponent } from '../shared/sideMenu/sideMenu.component';
import { Airport, AirportResult } from '../interfaces/airport';
import { AirportsService } from '../services/airports.service';
import { Observable } from 'rxjs';
import { AirportComponent } from './airport/airport.component';
import { HeaderComponent } from '../shared/header/header.component';
import { Router } from '@angular/router';
import { userSesion } from '../store/user.store';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [
    CommonModule,
    SideMenuComponent,
    HeaderComponent,
    AsyncPipe,
    AirportComponent,
  ],
  templateUrl: './flights.component.html',
  styles: ``,
})
export class FlightsComponent {
  router = inject(Router);
  service = inject(AirportsService);
  airportsResult!: Observable<AirportResult>;

  get userSesion() {
    return userSesion();
  }
  goLogin() {
    this.router.navigate(['/logIn']);
  }

  constructor() {}

  //ngOnInit(): void {
  //  this.airportsResult = this.service.getAirports();
  //}
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SideMenuComponent } from '../shared/sideMenu/sideMenu.component';
import { AirportComponent } from './airport/airport.component';
import { HeaderComponent } from '../shared/header/header.component';
import { Router } from '@angular/router';
import { userSesion } from '../store/user.store';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [CommonModule, SideMenuComponent, HeaderComponent, AirportComponent],
  templateUrl: './flights.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightsComponent {
  router = inject(Router);

  get userSesion() {
    return userSesion();
  }
  goLogin() {
    console.log(userSesion().sesion);
    this.router.navigate(['/logIn']);
  }
}

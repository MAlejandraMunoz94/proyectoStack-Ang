import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideMenuComponent } from '../shared/sideMenu/sideMenu.component';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [CommonModule, SideMenuComponent],
  templateUrl: './flights.component.html',
  styles: ``,
})
export class FlightsComponent {}

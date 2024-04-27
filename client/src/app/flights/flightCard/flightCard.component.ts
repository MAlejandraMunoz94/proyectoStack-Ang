import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Flight } from '../../interfaces/flight';

@Component({
  selector: 'app-flightCard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'flightCard.component.html',
})
export class FlightCardComponent {
  @Input() flight!: Flight;

  constructor() {}
}

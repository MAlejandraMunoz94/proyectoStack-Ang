import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Airport } from '../../interfaces/airport';

@Component({
  selector: 'app-airport',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'airport.component.html',
})
export class AirportComponent {
  @Input() aeropuerto!: Airport;
}

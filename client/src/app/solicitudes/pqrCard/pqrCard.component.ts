import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PqrsBBDD } from '../../interfaces/pqrs';
import { SvgPqrComponent } from '../../shared/svgPqr/svgPqr.component';

@Component({
  selector: 'app-pqr-card',
  standalone: true,
  imports: [CommonModule, SvgPqrComponent],
  templateUrl: 'pqrCard.component.html',
})
export class PqrCardComponent {
  @Input() pqr!: PqrsBBDD;
}

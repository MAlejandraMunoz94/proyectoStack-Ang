import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pestana',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pestaña.component.html',
})
export class PestañaComponent {
  @Input() name!: string;
  @Input() descripcion!: string;
}

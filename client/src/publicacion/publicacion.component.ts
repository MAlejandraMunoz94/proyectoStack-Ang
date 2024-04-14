import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-publicacion',
  standalone: true,
  imports: [],
  templateUrl: './publicacion.component.html',
  styleUrl: './publicacion.component.css',
})
export class PublicacionComponent {
  @Input() alt = '';
  @Input() src = '';
  favorite = false;
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-pestana',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pestaña.component.html',
  styleUrl: './pestaña.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PestañaComponent {
  @Input() name = '';
}

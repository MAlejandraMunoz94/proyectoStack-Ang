import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menuItem.component.html',
})
export class MenuItemComponent {
  @Input() title = '';
  @Input() text = '';
}

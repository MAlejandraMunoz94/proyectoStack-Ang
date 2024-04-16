import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from '../shared/sideMenu/sideMenu.component';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [CommonModule, SideMenuComponent],
  templateUrl: 'mainComponent.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponentComponent {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../shared/sideMenu/sideMenu.component';

@Component({
  selector: 'app-pqrs',
  standalone: true,
  imports: [CommonModule, RouterModule, SideMenuComponent],
  templateUrl: './PQRS.component.html',
  styleUrl: './PQRS.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PQRSComponent {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sideMenu.component.html',
  styleUrl: './sideMenu.component.css',
})
export class SideMenuComponent {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItemComponent } from '../menuItem/menuItem/menuItem.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, LogoComponent, MenuItemComponent, RouterModule],
  templateUrl: './sideMenu.component.html',
  styleUrl: './sideMenu.component.css',
})
export class SideMenuComponent {
  menuItems = [
    {
      path: '/flights',
      title: 'Flight Tracking',
      text: 'Monitorea tus vuelos',
    },
    { path: '/PQRS', title: 'PQRS', text: 'Tus solicitudes' },
    { path: '/settings', title: 'Settings', text: 'Configura tu perfil' },
  ];
}

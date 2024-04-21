import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MenuItemComponent } from '../menuItem/menuItem/menuItem.component';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { userSesion } from '../../store/user.store';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, LogoComponent, MenuItemComponent, RouterModule],
  templateUrl: './sideMenu.component.html',
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

  public router = inject(Router);

  get userSesion() {
    return userSesion().userData[0];
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  logOut() {
    userSesion.set({ sesion: false, userData: [] });
    this.router.navigate(['/logIn']);
  }
}

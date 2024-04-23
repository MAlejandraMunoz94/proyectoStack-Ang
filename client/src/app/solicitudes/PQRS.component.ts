import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SideMenuComponent } from '../shared/sideMenu/sideMenu.component';
import { PaginaCrearComponent } from './paginaCrear/paginaCrear.component';
import { PaginaVerTodosComponent } from './paginaVerTodos/paginaVerTodos.component';
import { PestañaComponent } from '../shared/pestaña/pestaña.component';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { userSesion } from '../store/user.store';

@Component({
  selector: 'app-pqrs',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SideMenuComponent,
    HeaderComponent,
    PestañaComponent,
    PaginaCrearComponent,
    PaginaVerTodosComponent,
  ],
  templateUrl: './PQRS.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PQRSComponent {
  onNavigate = false;
  options = [
    {
      path: '/PQRS/myPQRS',
      title: 'MyPQRS',
      name: 'Mis solicitudes',
      descripcion: 'Visualiza las solicitudes realizadas',
    },
    {
      path: '/PQRS/createPQR',
      title: 'CreatePQR',
      name: 'Gestiona tus solicitudes',
      descripcion: 'Crea nuevas solicitudes',
    },
  ];
  router = inject(Router);

  get userSesion() {
    return userSesion();
  }

  goLogin() {
    this.router.navigate(['/logIn']);
    console.log(userSesion().sesion);
  }
}

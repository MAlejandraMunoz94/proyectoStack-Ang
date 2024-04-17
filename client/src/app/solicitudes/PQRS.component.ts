import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from '../shared/sideMenu/sideMenu.component';
import { PaginaCrearComponent } from './paginaCrear/paginaCrear.component';
import { PaginaVerTodosComponent } from './paginaVerTodos/paginaVerTodos.component';
import { PestañaComponent } from '../shared/pestaña/pestaña.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pqrs',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SideMenuComponent,
    PestañaComponent,
    PaginaCrearComponent,
    PaginaVerTodosComponent,
  ],
  templateUrl: './PQRS.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PQRSComponent {
  options = [
    {
      path: '/PQRS/createPQR',
      title: 'CreatePQR',
      name: 'Gestiona tu solicitud',
    },
    { path: '/PQRS/myPQRS', title: 'MyPQRS', name: 'Mis solicitudes' },
  ];
}

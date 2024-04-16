import { Routes } from '@angular/router';
import { FlightsComponent } from './infoAerea/flights/flights.component';
import { PQRSComponent } from './solicitudes/PQRS.component';
import { PaginaVerTodosComponent } from './solicitudes/paginaVerTodos/paginaVerTodos.component';
import { PaginaCrearComponent } from './solicitudes/paginaCrear/paginaCrear.component';
import { MainComponentComponent } from './mainComponent/mainComponent.component';
import { UserMenuComponent } from './userMenu/userMenu.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./mainComponent/mainComponent.component').then(
        (c) => MainComponentComponent
      ),
  },
  {
    path: 'flights',
    loadComponent: () =>
      import('./infoAerea/flights/flights.component').then(
        (c) => FlightsComponent
      ),
  },
  {
    path: 'PQRS',
    loadComponent: () =>
      import('./solicitudes/PQRS.component').then((c) => PQRSComponent),
    children: [
      {
        path: 'myPQRS',
        loadComponent: () =>
          import('./solicitudes/paginaVerTodos/paginaVerTodos.component').then(
            (c) => PaginaVerTodosComponent
          ),
      },
      {
        path: 'createPQR',
        loadComponent: () =>
          import('./solicitudes/paginaCrear/paginaCrear.component').then(
            (c) => PaginaCrearComponent
          ),
      },
    ],
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./userMenu/userMenu.component').then((c) => UserMenuComponent),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

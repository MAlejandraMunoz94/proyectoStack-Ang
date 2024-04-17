import { Routes } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { PQRSComponent } from './solicitudes/PQRS.component';
import { PaginaVerTodosComponent } from './solicitudes/paginaVerTodos/paginaVerTodos.component';
import { PaginaCrearComponent } from './solicitudes/paginaCrear/paginaCrear.component';
import { MainComponentComponent } from './main/main.component';
import { UserMenuComponent } from './userMenu/userMenu.component';
import { LogInComponent } from './logIn/logIn.component';
import { RegisterComponent } from './logIn/register/register.component';
import { LogInFormComponent } from './logIn/logInForm/logInForm.component';

export const routes: Routes = [
  {
    path: 'logIn',
    loadComponent: () =>
      import('./logIn/logIn.component').then((c) => LogInComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./logIn/logInForm/logInForm.component').then(
            (c) => LogInFormComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./logIn/register/register.component').then(
            (c) => RegisterComponent
          ),
      },
    ],
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./main/main.component').then((c) => MainComponentComponent),
  },
  {
    path: 'flights',
    loadComponent: () =>
      import('./flights/flights.component').then((c) => FlightsComponent),
  },
  {
    path: 'PQRS',
    loadComponent: () =>
      import('./solicitudes/PQRS.component').then((c) => PQRSComponent),
    children: [
      {
        path: 'myPQRS',
        title: 'myPQRS',
        loadComponent: () =>
          import('./solicitudes/paginaVerTodos/paginaVerTodos.component').then(
            (c) => PaginaVerTodosComponent
          ),
      },
      {
        path: 'createPQR',
        title: 'CreatePQR',
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

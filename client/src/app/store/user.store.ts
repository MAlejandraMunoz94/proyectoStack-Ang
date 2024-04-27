import { signal } from '@angular/core';
import { User, userSesionData } from '../interfaces/user';
import { PqrsBBDD } from '../interfaces/pqrs';

export const userSesion = signal<userSesionData>({
  sesion: false,
  userData: {
    id: '',
    nombre1: '',
    nombre2: '',
    apellido1: '',
    apellido2: '',
    tipoDocumento: '',
    numeroDocumento: '',
    nacimiento: new Date(),
    paisOrigen: '',
    telefono: '',
    email: '',
    contrasena: '',
    activo: true,
  },
});

export let userPQRS = signal<PqrsBBDD[]>([]);

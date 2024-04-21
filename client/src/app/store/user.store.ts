import { signal } from '@angular/core';
import { userSesionData } from '../interfaces/user';

export const userSesion = signal<userSesionData>({
  sesion: false,
  userData: [],
});

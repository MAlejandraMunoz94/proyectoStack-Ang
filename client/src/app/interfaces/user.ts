export interface User {
  id: string;
  nombre1: string;
  nombre2: string;
  apellido1: string;
  apellido2: string;
  tipoDocumento: string;
  numeroDocumento: string;
  nacimiento: Date;
  paisOrigen: string;
  telefono: string;
  email: string;
  contrasena: string;
  activo: boolean;
}

export interface userSesionData {
  sesion: boolean;
  userData: User;
}

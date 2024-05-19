import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  baseURL = 'http://localhost:3001/user/'


  constructor(private http: HttpClient) {}

  postUser(
    user: Partial<{
      nombre1: string | null;
      nombre2: string | null;
      apellido1: string | null;
      apellido2: string | null;
      tipoDocumento:
        | ((control: AbstractControl<any, any>) => ValidationErrors | null)
        | null;
      numeroDocumento: string | null;
      nacimiento: string | null;
      paisOrigen:
        | ((control: AbstractControl<any, any>) => ValidationErrors | null)
        | null;
      telefono: string | null;
      email: string | null;
      contrasena: string | null;
    }>
  ) {
    console.log(user);
    return this.http.post<string>(this.baseURL+ "register", user);
  }

  logInUser(data : any){
  return this.http.post<any>(this.baseURL+"login", data);
  }

  getUser(email: string) {
    return this.http.get<User>(this.baseURL + email);
  }

  updateUser(id: string, info: {}) {
    return this.http.patch<string>(this.baseURL+ id, info);
  }

  unsuscribeUser(id:string){
    return this.http.patch<string>(this.baseURL+"unsuscribe/"+ id, {newActivo: false});
  }

}

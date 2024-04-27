import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { userSesion } from '../../store/user.store';

@Component({
  selector: 'app-log-in-form',
  standalone: true,
  imports: [CommonModule, LogoComponent, RouterLink, ReactiveFormsModule],
  templateUrl: 'logInForm.component.html',
})
export class LogInFormComponent {
  autenticate = true;
  logInData = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  userLogs = signal<User>({
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
  });

  public userServices = inject(UserService);
  public router = inject(Router);

  validateUser() {
    if (
      this.userLogs().activo &&
      this.logInData.value.email == this.userLogs().email &&
      this.logInData.value.password == this.userLogs().contrasena
    ) {
      userSesion.set({ sesion: true, userData: this.userLogs() });
      this.router.navigate(['/home']);
    } else {
      this.autenticate = false;
    }
  }

  logInFormSubmit() {
    this.userServices.getUser(this.logInData.value.email).subscribe((user) => {
      this.userLogs.set(user);
      this.validateUser();
    });
  }

  constructor() {}
}

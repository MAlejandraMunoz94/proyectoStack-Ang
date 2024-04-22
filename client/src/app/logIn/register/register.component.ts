import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UtilsService } from '../../services/utils.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, LogoComponent, RouterLink, ReactiveFormsModule],
  templateUrl: 'register.component.html',
})
export class RegisterComponent {
  utilsService = inject(UtilsService);
  userServices = inject(UserService);
  router = inject(Router);
  paises = this.utilsService.getPaises();
  tiposDeDocumento = this.utilsService.getTiposID();
  verificate = { value: true, message: '' };

  registerDataForm = new FormGroup({
    nombre1: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(2),
    ]),
    nombre2: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(2),
    ]),
    apellido1: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(2),
    ]),
    apellido2: new FormControl('', [
      Validators.maxLength(20),
      Validators.minLength(2),
    ]),
    tipoDocumento: new FormControl(Validators.required),
    numeroDocumento: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(2),
    ]),
    nacimiento: new FormControl('', [Validators.required]),
    paisOrigen: new FormControl(Validators.required),
    telefono: new FormControl('', [
      Validators.maxLength(20),
      Validators.minLength(7),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasena: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
  });

  registerFormSubmit() {
    if (this.registerDataForm.valid) {
      this.userServices
        .postUser(this.registerDataForm.value)
        .subscribe((response) => {
          if (response == 'Usuario creado correctamente') {
            window.alert(response);
            this.router.navigate(['/logIn']);
          } else {
            this.verificate = { value: false, message: response };
          }
        });
    } else {
      this.verificate = {
        value: false,
        message: 'Complete todos los campos requeridos (*)',
      };
    }
  }
}

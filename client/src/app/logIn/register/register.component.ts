import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, LogoComponent, RouterLink, ReactiveFormsModule],
  templateUrl: 'register.component.html',
})
export class RegisterComponent {
  utilsService = inject(UtilsService);
  paises = this.utilsService.getPaises();
  tiposDeDocumento = this.utilsService.getTiposID();

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
    console.log(this.registerDataForm.errors);
    console.log(this.registerDataForm.valid);
    window.alert(this.registerDataForm.value.email);
  }
}

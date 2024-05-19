import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { SideMenuComponent } from '../shared/sideMenu/sideMenu.component';
import { UserService } from '../services/user.service';
import { userSesion } from '../store/user.store';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [CommonModule, SideMenuComponent, ReactiveFormsModule],
  templateUrl: 'userSettings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSettingsComponent {
  userNewData = new FormGroup({
    newEmail: new FormControl('', [Validators.email]),
    newTelefono: new FormControl('', [
      Validators.maxLength(20),
      Validators.minLength(7),
    ]),
    newContrasena: new FormControl('', [
      Validators.minLength(8),
      Validators.maxLength(20),
    ])
  });

  updated = signal({ value: false, color: '', message: '' });
  userServices = inject(UserService);
  router = inject(Router);

  get userSesion() {
    return userSesion();
  }
  get userSesionData() {
    return userSesion().userData;
  }

  goLogIn() {
    this.router.navigate(['/logIn']);
  }

  unsuscribeUser() {
    this.userServices
      .unsuscribeUser(this.userSesionData.id)
      .subscribe(() => {
        userSesion.set({
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
      });
  }

  updateUser(info: {}) {
    this.userServices
      .updateUser(this.userSesionData.id, info)
      .subscribe((response) => {
        if (response == 'Información actualizada correctamente') {
          this.updated.set({ value: true, color: 'blue', message: response });
        } else {
          this.updated.set({ value: true, color: 'red', message: response });
        }
      });
  }

  verificateNewData() {
    let value = this.userNewData.value;
    if (value.newEmail == '' && value.newContrasena == '' && value.newTelefono == '') {
      this.updated.set({
        value: true,
        color: 'red',
        message: 'Debe proporcionar la información a actualizar',
      });
    } else {
      this.updateUser(value);
    }
  }
}

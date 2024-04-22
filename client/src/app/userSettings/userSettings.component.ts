import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
    telefono: new FormControl('', [
      Validators.maxLength(20),
      Validators.minLength(7),
    ]),
    contrasena: new FormControl('', [
      Validators.minLength(8),
      Validators.maxLength(20),
    ]),
  });
  updated = { value: false, message: '' };
  userServices = inject(UserService);
  router = inject(Router);

  get userSesion() {
    return userSesion().userData[0];
  }
  unsuscribeUser() {
    this.userServices
      .updateUser(this.userSesion.id, { activo: false })
      .subscribe((response) => {
        window.alert(response);
        userSesion.set({ sesion: false, userData: [] });
        this.router.navigate(['/logIn']);
      });
  }

  updateUser() {
    console.log(this.userNewData.value);
    this.userServices
      .updateUser(this.userSesion.id, this.userNewData.value)
      .subscribe((response) => {
        this.updated = { value: true, message: response };
      });
  }
}

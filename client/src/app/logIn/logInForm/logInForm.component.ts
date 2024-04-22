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
  userLogs = signal<User[]>([]);

  public userServices = inject(UserService);
  public router = inject(Router);

  validateUser() {
    if (
      this.userLogs()[0].activo &&
      this.logInData.value.email == this.userLogs()[0].email &&
      this.logInData.value.password == this.userLogs()[0].contrasena
    ) {
      window.alert('Correcto');
      userSesion.set({ sesion: true, userData: this.userLogs() });
      this.router.navigate(['/home']);
      console.log(userSesion());
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

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
    contrasena: new FormControl(),
  });
  userLogs = signal<any>({});

  public userServices = inject(UserService);
  public router = inject(Router);

  validateUser() {
    if (this.userLogs().succes) {
      userSesion.set({ sesion: true, userData: this.userLogs().data });
      this.router.navigate(['/home']);
    } else {
      this.autenticate = false;
    }
  }

  logInFormSubmit() {
    this.userServices.logInUser(this.logInData.value).subscribe((response) => {
      this.userLogs.set(response);
      this.validateUser();
    });
  }

  constructor() {}
}

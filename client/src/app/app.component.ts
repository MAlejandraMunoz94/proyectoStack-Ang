import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { userSesion } from './store/user.store';
import { LogInComponent } from './logIn/logIn.component';
import { LogInFormComponent } from './logIn/logInForm/logInForm.component';
import { MainComponentComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'proyecto-stack';
  router = inject(Router);

  get userSesion() {
    return userSesion();
  }
  goLogIn() {
    this.router.navigate(['/logIn']);
  }
}

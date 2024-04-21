import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SideMenuComponent } from '../shared/sideMenu/sideMenu.component';
import { HeaderComponent } from '../shared/header/header.component';
import { LogInFormComponent } from '../logIn/logInForm/logInForm.component';
import { userSesion } from '../store/user.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [
    CommonModule,
    SideMenuComponent,
    HeaderComponent,
    LogInFormComponent,
  ],
  templateUrl: 'main.Component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponentComponent {
  router = inject(Router);

  get userSesion() {
    return userSesion();
  }

  goLogin() {
    this.router.navigate(['/logIn']);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in-form',
  standalone: true,
  imports: [CommonModule, LogoComponent, RouterLink],
  templateUrl: 'logInForm.component.html',
})
export class LogInFormComponent {}

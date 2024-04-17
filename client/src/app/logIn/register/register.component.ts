import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, LogoComponent, RouterLink],
  templateUrl: 'register.component.html',
  styles: '',
})
export class RegisterComponent {}

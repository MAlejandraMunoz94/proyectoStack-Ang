import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../shared/logo/logo.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterModule, LogoComponent],
  templateUrl: 'logIn.component.html',
  styles: '',
})
export class LogInComponent {}

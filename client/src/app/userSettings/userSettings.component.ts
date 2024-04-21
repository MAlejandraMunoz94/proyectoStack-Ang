import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideMenuComponent } from '../shared/sideMenu/sideMenu.component';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [CommonModule, SideMenuComponent],
  templateUrl: 'userSettings.component.html',
})
export class UserSettingsComponent {}

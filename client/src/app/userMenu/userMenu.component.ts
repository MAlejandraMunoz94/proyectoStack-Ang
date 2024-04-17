import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideMenuComponent } from '../shared/sideMenu/sideMenu.component';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule, SideMenuComponent],
  templateUrl: 'userMenu.component.html',
})
export class UserMenuComponent {}

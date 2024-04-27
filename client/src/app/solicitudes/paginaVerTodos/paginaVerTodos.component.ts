import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { PqrsService } from '../../services/pqrs.service';
import { userPQRS, userSesion } from '../../store/user.store';
import { PqrCardComponent } from '../pqrCard/pqrCard.component';

@Component({
  selector: 'app-pagina-ver-todos',
  standalone: true,
  imports: [CommonModule, PqrCardComponent],
  templateUrl: 'paginaVerTodos.component.html',
})
export class PaginaVerTodosComponent implements OnInit {
  pqrService = inject(PqrsService);

  get userPQRS() {
    return userPQRS();
  }

  get userSesion() {
    return userSesion().userData;
  }

  ngOnInit(): void {
    this.pqrService.getPQR(this.userSesion.id).subscribe((response) => {
      userPQRS.set(response);
    });
  }
}

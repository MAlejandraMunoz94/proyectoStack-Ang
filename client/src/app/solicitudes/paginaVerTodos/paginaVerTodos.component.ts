import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { PqrsService } from '../../services/pqrs.service';
import { userSesion } from '../../store/user.store';
import { PqrsBBDD } from '../../interfaces/pqrs';
import { PqrCardComponent } from '../pqrCard/pqrCard.component';

@Component({
  selector: 'app-pagina-ver-todos',
  standalone: true,
  imports: [CommonModule, PqrCardComponent],
  templateUrl: 'paginaVerTodos.component.html',
})
export class PaginaVerTodosComponent implements OnInit {
  pqrService = inject(PqrsService);

  get userSesion() {
    return userSesion().userData[0];
  }

  userPQRS = signal<PqrsBBDD[]>([]);

  ngOnInit(): void {
    this.pqrService.getPQR(this.userSesion.id).subscribe((response) => {
      this.userPQRS.set(response);
      console.log(response);
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PqrsService } from '../../services/pqrs.service';
import { userSesion } from '../../store/user.store';

@Component({
  selector: 'app-pagina-crear',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'paginaCrear.component.html',
})
export class PaginaCrearComponent {
  pqrForm = new FormGroup({
    tipo: new FormControl('', Validators.required),
    contenido: new FormControl('', Validators.required),
  });

  created = signal({ value: false, color: '', message: '' });

  pqrService = inject(PqrsService);

  get userSesion() {
    return userSesion().userData[0];
  }

  pqrCreatePriority() {
    if (this.pqrForm.valid) {
      switch (this.pqrForm.value.tipo) {
        case 'Queja':
          {
            let info = { ...this.pqrForm.value, prioridad: 5 };
            this.createPQR(this.userSesion.id, info);
          }
          break;
        case 'Sugerencia':
          {
            let info = { ...this.pqrForm.value, prioridad: 1 };
            this.createPQR(this.userSesion.id, info);
          }
          break;
        default:
          {
            let info = { ...this.pqrForm.value, prioridad: 3 };
            this.createPQR(this.userSesion.id, info);
          }
          break;
      }
    } else {
      this.created.set({
        value: true,
        color: 'red',
        message: 'Complete todos los campos requeridos (*)',
      });
    }
  }

  createPQR(id: string, info: {}) {
    this.pqrService.postPQR(id, info).subscribe((response) =>
      this.created.set({
        value: true,
        color: 'blue',
        message: response,
      })
    );
  }
}

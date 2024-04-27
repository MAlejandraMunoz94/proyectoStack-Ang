import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { PqrsBBDD } from '../../interfaces/pqrs';
import { SvgPqrComponent } from '../../shared/svgPqr/svgPqr.component';
import { PqrsService } from '../../services/pqrs.service';
import { userPQRS, userSesion } from '../../store/user.store';

@Component({
  selector: 'app-pqr-card',
  standalone: true,
  imports: [CommonModule, SvgPqrComponent],
  templateUrl: 'pqrCard.component.html',
})
export class PqrCardComponent {
  @Input() pqr!: PqrsBBDD;

  get userPQRS() {
    return userPQRS();
  }

  get userSesion() {
    return userSesion().userData;
  }

  pqrsService = inject(PqrsService);

  deletePQR(id: string) {
    this.pqrsService.deletePQR(id).subscribe(() => {
      this.pqrsService.getPQR(this.userSesion.id).subscribe((response) => {
        userPQRS.set(response);
      });
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { userSesion } from '../../store/user.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: ` <header class="bg-gray-800">
    <section class="flex items-center justify-center">
      <div class="text-center">
        <p class="text-xl font-medium tracking-wider text-gray-300">
          Bienvenido :
        </p>

        @if(userSesion){
        <h2 class="text-3xl font-bold text-white">
          {{ userSesion.nombre1 }} {{ userSesion.nombre2 }}
          {{ userSesion.apellido1 }}
        </h2>
        }@else {
        <h2 class="text-3xl font-bold text-white">Usuario</h2>
        }

        <p class="text-xl font-medium tracking-wider text-gray-300">
          has acumulado
        </p>
        <div class="flex justify-center">
          <a
            class="px-8 text-lg font-medium text-gray-800 transition-colors duration-300 transform bg-yellow-500 rounded hover:bg-yellow-600"
            >5000 puntos Air</a
          >
        </div>
      </div>
    </section>
  </header>`,
})
export class HeaderComponent {
  get userSesion() {
    return userSesion().userData[0];
  }
}

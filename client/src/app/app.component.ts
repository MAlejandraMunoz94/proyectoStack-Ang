import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicacionComponent } from '../publicacion/publicacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PublicacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  logueado = false;
  usuario = 'Maria Alejandra';
  imagenes = [
    {
      id: 1,
      src: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/95/5b/35/restaurante-faca-garfo.jpg',
    },
    {
      id: 2,
      src: 'https://64.media.tumblr.com/a1e242916e71d153d3dd7e3aa25ea7bb/tumblr_inline_nycxz6iTXO1s27py7_500.jpg',
    },
    {
      id: 3,
      src: 'https://www.lifeder.com/wp-content/uploads/2022/07/se-tu-misma-696x696.jpg',
    },
    {
      id: 4,
      src: 'https://oletna.com/wp-content/uploads/2020/03/madrid.jpg',
    },
  ];
  logOut() {
    this.logueado = false;
    window.alert('Haz cerrado sesion!');
  }
}

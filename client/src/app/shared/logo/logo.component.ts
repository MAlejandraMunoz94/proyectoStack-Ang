import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: ` <div id="logo" class="my-4 px-6">
    <h1 class="text-lg md:text-2xl font-bold text-white">
      Air<span class="text-yellow-600">°</span
      ><span class="text-yellow-600">Club</span>
    </h1>

    <p class="text-white text-sm">Turn your everyday into a holiday</p>
  </div>`,
})
export class LogoComponent {}

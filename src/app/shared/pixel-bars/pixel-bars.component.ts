import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pixel-bars',
  standalone: true,
  imports: [],
  templateUrl: './pixel-bars.component.html',
})
export class PixelBarsComponent {
  @Input() theme: 'onDark' | 'onLight' = 'onDark';
}

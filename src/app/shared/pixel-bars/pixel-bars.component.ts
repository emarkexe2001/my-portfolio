import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-pixel-bars',
    imports: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './pixel-bars.component.html'
})
export class PixelBarsComponent {
  @Input() theme: 'onDark' | 'onLight' = 'onDark';
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PixelBarsComponent } from '../../shared/pixel-bars/pixel-bars.component';

@Component({
    selector: 'app-home',
    imports: [RouterLink, PixelBarsComponent],
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './home.component.css'
})
export class HomeComponent {

}

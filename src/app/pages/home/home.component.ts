import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PixelBarsComponent } from '../../shared/pixel-bars/pixel-bars.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, PixelBarsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { PixelBarsComponent } from './shared/pixel-bars/pixel-bars.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavComponent, PixelBarsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  year = new Date().getFullYear();
}

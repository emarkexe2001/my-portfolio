import { Component } from '@angular/core';
import { PixelBarsComponent } from '../../shared/pixel-bars/pixel-bars.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PixelBarsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email = 'emmanuelmark559@gmail.com';

  channels = [
    {
      label: 'Email',
      value: this.email,
      href: `mailto:${this.email}`,
      external: false,
      icon: 'https://cdn.simpleicons.org/gmail/FCFFDA',
    },
    {
      label: 'GitHub',
      value: 'github.com/emarkexe2001',
      href: 'https://github.com/emarkexe2001',
      external: true,
      icon: 'https://cdn.simpleicons.org/github/FCFFDA',
    },
    {
      label: 'LinkedIn',
      value: 'in/emmanuel-mark-a138661a2',
      href: 'https://www.linkedin.com/in/emmanuel-mark-a138661a2/',
      external: true,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    },
  ];
}

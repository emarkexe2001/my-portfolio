import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about',
    imports: [RouterLink],
    templateUrl: './about.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './about.component.css'
})
export class AboutComponent {
  skills = [
    { name: 'Golang', icon: 'https://cdn.simpleicons.org/go/00ADD8' },
    { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DD0031' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'HTML & CSS', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F03C2E' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Vue.Js', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Google GRpg', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-original.svg' },
  ];
}

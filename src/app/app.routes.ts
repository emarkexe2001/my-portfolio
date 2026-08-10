import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Emmanuel Mark | Developer' },
  { path: 'about', component: AboutComponent, title: 'About | Emmanuel Mark' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Emmanuel Mark' },
  { path: '**', redirectTo: '' },
];

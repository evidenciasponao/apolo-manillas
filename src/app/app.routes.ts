import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Galeria } from './pages/galeria/galeria';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'galeria',
    component: Galeria
  },
  {
    path: 'contacto',
    component: Contacto
  },
  {
    path: '**',
    redirectTo: ''
  }
];
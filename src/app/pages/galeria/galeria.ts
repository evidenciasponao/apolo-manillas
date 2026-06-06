import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {

  manillas = [
    {
      nombre: 'Manilla Roja',
      precio: '$10',
      imagen: 'assets/manilla1.jpg'
    },
    {
      nombre: 'Manilla Azul',
      precio: '$12',
      imagen: 'assets/manilla2.jpg'
    },
    {
      nombre: 'Manilla Negra',
      precio: '$15',
      imagen: 'assets/manilla3.jpg'
    }
  ];

}
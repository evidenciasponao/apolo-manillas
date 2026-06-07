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
      nombre: 'Manilla Negra',
      precio: '$40.000 COP',
      imagen: 'images/manilla1.jpg'
    },
    {
      nombre: 'Manilla Roja',
      precio: '$50.000 COP',
      imagen: 'images/manilla2.jpg'
    },
    {
      nombre: 'Manilla Azul',
      precio: '$60.000 COP',
      imagen: 'images/manilla3.jpg'
    }
  ];

  imagenSeleccionada: string | null = null;

  abrirImagen(imagen: string) {
    this.imagenSeleccionada = imagen;
  }

  cerrarImagen() {
    this.imagenSeleccionada = null;
  }

}
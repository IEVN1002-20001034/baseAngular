import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {


productos:any[]=[
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas",
    "Precio":2000,
    "Year":2023,
    "Marca":"NISSAN",
    "Color":"Azul",
    "ImagenUrl":""
  },
  {
    "productoId":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas",
    "Precio":3000,
    "Year":2022,
    "Marca":"AUDI",
    "Color":"Blanco",
    "ImagenUrl":""
  },
  {
    "productoId":3,
    "Modelo":"Rio",
    "Descripcion":"4 puertas",
    "Precio":15000,
    "Year":2020,
    "Marca":"KIA",
    "Color":"Rojo",
    "ImagenUrl":""
  }
]
}
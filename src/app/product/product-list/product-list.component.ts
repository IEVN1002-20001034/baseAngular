import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //*ngIf=true, o false Si hay productos que se muestre la tabla, si no, la tabla no se muestra.

productos:any[]=[
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas",
    "Precio":2000,
    "Year":2023,
    "Marca":"NISSAN",
    "Color":"Azul",
    "ImagenUrl":"https://img.freepik.com/vector-premium/coche-vehiculo-kawaii-vector-caracteres_840347-816.jpg"
  },
  {
    "productoId":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas",
    "Precio":3000,
    "Year":2022,
    "Marca":"AUDI",
    "Color":"Blanco",
    "ImagenUrl":"https://www.creativefabrica.com/wp-content/uploads/2022/12/31/Kawaii-Chibi-Car-Graphic-55500846-1.png"
  },
  {
    "productoId":3,
    "Modelo":"Rio",
    "Descripcion":"4 puertas",
    "Precio":15000,
    "Year":2020,
    "Marca":"KIA",
    "Color":"Rojo",
    "ImagenUrl":"https://m.media-amazon.com/images/I/61hkuRaoAsL.jpg"
  }
]
}
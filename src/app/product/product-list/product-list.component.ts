import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  //*ngIf=true, o false Si hay productos que se muestre la tabla, si no, la tabla no se muestra.

imageWidth:number=120;
imageMargin:number=4;
muestraImg:boolean=true;
listFilter:string='';

mustraImg():void{
  this.muestraImg=!this.muestraImg;
}

productos: IProductos[]=[//arreglo de objetos
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas",
    "Precio":2000,
    "Year": "Marzo 20 2023",
    "Marca":"NISSAN",
    "Color":"Morado",
    "ImagenUrl":"https://img.freepik.com/vector-premium/coche-vehiculo-kawaii-vector-caracteres_840347-816.jpg"
  },
  {
    "productoId":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas",
    "Precio":3000,
    "Year": "Junio 23 2022",
    "Marca":"AUDI",
    "Color":"Azul",
    "ImagenUrl":"https://www.creativefabrica.com/wp-content/uploads/2022/12/31/Kawaii-Chibi-Car-Graphic-55500846-1.png"
  },
  {
    "productoId":3,
    "Modelo":"Rio",
    "Descripcion":"4 puertas",
    "Precio":15000,
    "Year": "Octubre 01 2020",
    "Marca":"KIA",
    "Color":"Rosa",
    "ImagenUrl":"https://m.media-amazon.com/images/I/61hkuRaoAsL.jpg"
  }
]
}
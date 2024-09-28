import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
 
  nombre: string = '';
  nPersonas: number = 1;
  nBoletos: number = 1;
  tarjeta: boolean = false;
  totalPagar: number = 0;
  mensaje: string = '';
  precioBoleto: number = 12.00;


  calcularTotal(){
    let total = this.precioBoleto * this.nBoletos;
    let descuento = 0;

    if(this.nBoletos > 5){
      descuento = 0.15;
    }else if(this.nBoletos >= 3){
      descuento = 0.10;
    }

    total = total - descuento;

    if(this.tarjeta){
      total = (total - (total * 0.10));
    }

    if(this.nBoletos > 7){
      this.mensaje = 'No se puede comprar mas de 7 boletos por persona';
    }else{
      this.mensaje='';
    }

    this.totalPagar = total;
  }
}
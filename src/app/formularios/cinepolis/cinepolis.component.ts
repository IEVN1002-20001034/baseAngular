import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {
  formulario!:FormGroup;
  totalPagar: number = 0;
  mensajeError: string = '';
  precioBoleto: number = 12.00;

  constructor() { }

  ngOnInit(): void {/*interfaz de angular para inicializar formularios*/
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      nPersonas: new FormControl(1, Validators.required),
      nBoletos: new FormControl(1, Validators.required),
      tarjeta: new FormControl(false)
    });
  }

  get nombre() {
    return this.formulario.get('nombre')?.value;
  }

  get nPersonas() {
    return this.formulario.get('nPersonas')?.value;
  }

  get nBoletos() {
    return this.formulario.get('nBoletos')?.value;
  }

  get tarjeta() {
    return this.formulario.get('tarjeta')?.value;
  }

  descuento() {
  
    if (this.nBoletos > 5) {
      return 0.15;
    } else if (this.nBoletos >= 3) {
      return 0.10;
    } else {
      return 0;
    }
  }

  calcularTotal(){
    const siete = this.nPersonas * 7;

    let total = this.precioBoleto * this.nBoletos;
    const descuento = this.descuento();

    total = total - (total * descuento);

    if(this.tarjeta){
      total = (total - (total * 0.10));
    }

    if(this.nBoletos > siete){
      this.mensajeError = 'No se puede comprar mas de 7 boletos por persona';
      total = 0;
    }else{
      this.mensajeError='';
    }

    this.totalPagar = total;
  }
}
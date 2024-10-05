import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export class ResistenciaComponent {
  formulario!: FormGroup;
  colores: string[] = ['negro', 'cafe', 'rojo', 'naranja', 'amarillo', 'verde', 'azul', 'violeta', 'gris', 'blanco'];
  tolerancia: string[] = ['oro', 'plata'];
  resistencias: any[] = [];

  valorColor: any = {
    'negro': 0,
    'cafe': 1,
    'rojo': 2,
    'naranja': 3,
    'amarillo': 4,
    'verde': 5,
    'azul': 6,
    'violeta': 7,
    'gris': 8,
    'blanco': 9
  };

  multiplicadores: any = {
    'negro': 1,
    'cafe': 10,
    'rojo': 100,
    'naranja': 1000,
    'amarillo': 10000,
    'verde': 100000,
    'azul': 1000000,
    'violeta': 10000000,
    'gris': 100000000,
    'blanco': 1000000000
  };

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      banda1: ['negro'],
      banda2: ['negro'],
      banda3: ['negro'],
      tolerancia: ['oro']
    });
  }

  asignarColor(color: string): string {
    switch(color) {
      case 'negro': return 'fondo-negro texto-blanco';
      case 'cafe': return 'fondo-cafe texto-blanco';
      case 'rojo': return 'fondo-rojo texto-blanco';
      case 'naranja': return 'fondo-naranja texto-blanco';
      case 'amarillo': return 'fondo-amarillo texto-negro';
      case 'verde': return 'fondo-verde texto-blanco';
      case 'azul': return 'fondo-azul texto-blanco';
      case 'violeta': return 'fondo-violeta texto-blanco';
      case 'gris': return 'fondo-gris texto-blanco';
      case 'blanco': return 'fondo-blanco texto-negro';
      default: return '';
    }
  }

  calcularResistencia() {
    const banda1 = this.formulario.value.banda1;
    const banda2 = this.formulario.value.banda2;
    const banda3 = this.formulario.value.banda3;
    const tolerancia = this.formulario.value.tolerancia;

    const valorResistencia = (this.valorColor[banda1] * 10 + this.valorColor[banda2]) * this.multiplicadores[banda3];


    const valorTolerancia = tolerancia === 'oro' ? 0.05 : 0.10;
    const valorMaximo = valorResistencia * (1 + valorTolerancia);
    const valorMinimo = valorResistencia * (1 - valorTolerancia);
    const colorNumero= `${this.valorColor[banda1]} ${this.valorColor[banda2]} ${this.valorColor[banda3]}`;

    const nuevaResistencia = {
      banda1: banda1,
      banda2: banda2,
      banda3: banda3,
      tolerancia: tolerancia === 'oro' ? 'Dorado 5%' : 'Plata 10%',
      valorResistencia: valorResistencia,
      colorNumero:colorNumero,
      //valorTolerancia:valorTolerancia,
      valorMaximo: valorMaximo,
      valorMinimo:valorMinimo,

    };

    this.resistencias.push(nuevaResistencia);

    this.formulario.reset({
      banda1: 'negro',
      banda2: 'negro',
      banda3: 'negro',
      tolerancia: 'oro'
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component implements OnInit{
  formulario!:FormGroup;/*"Non-null assertion operator"*/
  resultado!:number;

  constructor() { } 
  ngOnInit(): void {
    this.formulario=new FormGroup({
    numero1:new FormControl('',Validators.required),
    numero2:new FormControl('',Validators.required)
  })
  }

  sumaNumeros():void{
    const n1=this.formulario.get('numero1')?.value;
    const n2=this.formulario.get('numero2')?.value;
    this.resultado=n1+n2;
  }
}

// dentro de ngOnInit(), se inicializa el formulario con FormGroup y FormControl.
// Se prefiere inicializar el formulario aquí en lugar del constructor porque ngOnInit
//  se ejecuta después de que Angular ha configurado completamente el componente.

// formulario!:FormGroup le dice a TypeScript que no se preocupe por posibles problemas de 
// inicialización, ya que se inicializará correctamente más adelante en ngOnInit().
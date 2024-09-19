import { Component } from '@angular/core';

@Component({//forman un acomponente
  selector: 'app-root',
  // template:`
  // <div class='container'>
  //   <div class='row'>
  //     <div class='col-md-12'>
  //       <h1>Angular</h1>
  //     </div>

  //   </div>
  // </div>
  // `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'baseAngular';

  dobleNumero(x:number):number{
    return x*2;
  }

  alumno={
    nombre: 'Jessi',
    edad: 32,
    curso:'Angular',
    fechaInscrito: new Date(),
    pago: 2500
  }
}

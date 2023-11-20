import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // fecha
  minDate: string;
  // alerta
  // alerta
  alertButtons = ['Aceptar'];

  constructor() {
    // Obtener la fecha actual

    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = ('0' + (hoy.getMonth() +1)).slice(-2);
    const dia = ('0' + hoy.getDate()).slice(-2)

    this.minDate = `${año}-${mes}-${dia}`

  }

}

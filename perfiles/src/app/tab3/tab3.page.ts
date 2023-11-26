import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // Nombre
  nombre!: string;

  // Correo
  email!: EmailValidator;
  // Telefono
  Telefono!: number;

  // fecha
  minDate: string;
  // Alerta
  alertButtons = ['Aceptar'];
  //Barra de progreso
  public progress = 0;

  constructor() {
    // Obtener la fecha actual

    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = ('0' + (hoy.getMonth() +1)).slice(-2);
    const dia = ('0' + hoy.getDate()).slice(-2)

    this.minDate = `${año}-${mes}-${dia}`;

    setInterval(() => {
      this.progress += 0.01;

      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, );

  }

  // Metodo para desplegar
  onScroll(event: CustomEvent<ScrollDetail>){
    // Posiciòn actual del desplazamiento
    const scrollTop = event.detail.scrollTop;

    // Calcular el progreso en función del desplacamiento

    const contentHeight = (event.target as HTMLElement).scrollHeight;
    const clientHeight = (event.target as HTMLElement).clientHeight;

    this.progress = scrollTop / (contentHeight - clientHeight);
  }
}

import { Component } from '@angular/core';
import { DatosService } from 'src/app/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: any;

  constructor(private datosService: DatosService) {

  this.usuario = this.datosService.getUser();
  }
}


import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { DatosService } from 'src/app/datos.service';


@Component({
  selector: 'app-restablecer-pass',
  templateUrl: './restablecer-pass.page.html',
  styleUrls: ['./restablecer-pass.page.scss'],
})
export class RestablecerPassPage implements OnInit {

  formularioRestablecer: FormGroup;

  constructor(public fb:FormBuilder, public alertController: AlertController, private datosService: DatosService) {
    this.formularioRestablecer = this.fb.group({
      'pass1':new FormControl("", Validators.required)
    })
   }

  ngOnInit() {
  }

  async recuperar(){
    var f = this.formularioRestablecer.value;

    if(this.formularioRestablecer.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
    
    this.datosService.cambiarContraseña(f.pass1);
    
    
  }
}

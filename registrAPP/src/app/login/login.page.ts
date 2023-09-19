import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { DatosService } from 'src/app/datos.service';
import { ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
 
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  private animation: any |null = null;  
  
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    private datosService: DatosService,
    public navCtrl: NavController,
    private animationCtrl: AnimationController) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })

  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');

      if (this.animation) {
        this.animation.play();
      }
  }
  
  ngOnInit() {
    this.ngAfterViewInit();
  }

  async login(){

    var f = this.formularioLogin.value;

    const usuario = this.datosService.getUser();

    var user = usuario.user;
    var pass = usuario.pass;

    if(f.nombre == user && f.password == pass){
    this.navCtrl.navigateRoot('home');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }

}


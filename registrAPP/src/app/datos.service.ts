import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private user = {user: 'ju.pizarro', pass: '123456', nombre: 'Juan Pizarro'}

  constructor() { }

  getUser(){
    return this.user
  }

  cambiarContraseña(newPassword: string): void {
    this.user.pass = newPassword;
  }

  
}

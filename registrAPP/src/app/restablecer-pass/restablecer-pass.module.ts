import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerPassPageRoutingModule } from './restablecer-pass-routing.module';

import { RestablecerPassPage } from './restablecer-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RestablecerPassPageRoutingModule,
    
  ],
  declarations: [RestablecerPassPage]
})
export class RestablecerPassPageModule {}

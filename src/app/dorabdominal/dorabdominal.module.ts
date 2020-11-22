import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DorabdominalPageRoutingModule } from './dorabdominal-routing.module';

import { DorabdominalPage } from './dorabdominal.page';
import { ModalOnePage } from '../modal-one/modal-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DorabdominalPageRoutingModule
  ],
  declarations: [DorabdominalPage, ModalOnePage],
  entryComponents: [ModalOnePage]
})
export class DorabdominalPageModule {

  constructor(){}

}

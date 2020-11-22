import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalOnePageRoutingModule } from './modal-one-routing.module';

import { ModalOnePage } from './modal-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalOnePageRoutingModule
  ],
  declarations: [ModalOnePage],
  exports: [ModalOnePage]
})
export class ModalOnePageModule {}

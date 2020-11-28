import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultachefePageRoutingModule } from './consultachefe-routing.module';

import { ConsultachefePage } from './consultachefe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultachefePageRoutingModule
  ],
  declarations: [ConsultachefePage]
})
export class ConsultachefePageModule {}

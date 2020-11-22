import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilaPageRoutingModule } from './fila-routing.module';

import { FilaPage } from './fila.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilaPageRoutingModule
  ],
  declarations: [FilaPage]
})
export class FilaPageModule {}

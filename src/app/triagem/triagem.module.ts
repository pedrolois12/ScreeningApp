import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TriagemPageRoutingModule } from './triagem-routing.module';
import { TriagemPage } from './triagem.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriagemPageRoutingModule,

  ],
  declarations: [TriagemPage]
})
export class TriagemPageModule {}

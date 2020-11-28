import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaltPageRoutingModule } from './modalt-routing.module';

import { ModaltPage } from './modalt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaltPageRoutingModule
  ],
  declarations: [ModaltPage]
})
export class ModaltPageModule {}

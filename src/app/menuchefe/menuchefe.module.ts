import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuchefePageRoutingModule } from './menuchefe-routing.module';

import { MenuchefePage } from './menuchefe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuchefePageRoutingModule
  ],
  declarations: [MenuchefePage]
})
export class MenuchefePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuExamplePageRoutingModule } from './menu-example-routing.module';

import { MenuExamplePage } from './menu-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuExamplePageRoutingModule
  ],
  declarations: [MenuExamplePage]
})
export class MenuExamplePageModule {}

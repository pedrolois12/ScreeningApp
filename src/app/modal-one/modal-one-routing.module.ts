import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalOnePage } from './modal-one.page';

const routes: Routes = [
  {
    path: '',
    component: ModalOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalOnePageRoutingModule {}

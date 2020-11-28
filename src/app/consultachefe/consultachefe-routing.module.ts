import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultachefePage } from './consultachefe.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultachefePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultachefePageRoutingModule {}

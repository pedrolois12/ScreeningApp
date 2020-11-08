import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriagemPage } from './triagem.page';

const routes: Routes = [
  {
    path: '',
    component: TriagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriagemPageRoutingModule {}

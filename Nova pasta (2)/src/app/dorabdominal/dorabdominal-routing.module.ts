import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DorabdominalPage } from './dorabdominal.page';

const routes: Routes = [
  {
    path: '',
    component: DorabdominalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DorabdominalPageRoutingModule {}

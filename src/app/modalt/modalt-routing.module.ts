import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaltPage } from './modalt.page';

const routes: Routes = [
  {
    path: '',
    component: ModaltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaltPageRoutingModule {}

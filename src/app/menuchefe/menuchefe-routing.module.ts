import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuchefePage } from './menuchefe.page';

const routes: Routes = [
  {
    path: '',
    component: MenuchefePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuchefePageRoutingModule {}

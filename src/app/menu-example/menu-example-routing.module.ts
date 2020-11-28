import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuExamplePage } from './menu-example.page';

const routes: Routes = [
  {
    path: '',
    component: MenuExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuExamplePageRoutingModule {}

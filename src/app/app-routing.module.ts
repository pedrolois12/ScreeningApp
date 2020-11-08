import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  
  },
  {
    path: 'triagem',
    loadChildren: () => import('./triagem/triagem.module').then( m => m.TriagemPageModule)
  },
  {
    path: 'dorabdominal',
    loadChildren: () => import('./dorabdominal/dorabdominal.module').then( m => m.DorabdominalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

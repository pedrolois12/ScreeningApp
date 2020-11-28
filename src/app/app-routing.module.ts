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
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'fila',
    loadChildren: () => import('./fila/fila.module').then( m => m.FilaPageModule)
  },
  {
    path: 'modal-one',
    loadChildren: () => import('./modal-one/modal-one.module').then( m => m.ModalOnePageModule)
  },
  {
    path: 'modalt',
    loadChildren: () => import('./modalt/modalt.module').then( m => m.ModaltPageModule)
  },
  {
    path: 'menuchefe',
    loadChildren: () => import('./menuchefe/menuchefe.module').then( m => m.MenuchefePageModule)
  },
  {
    path: 'consultachefe',
    loadChildren: () => import('./consultachefe/consultachefe.module').then( m => m.ConsultachefePageModule)
  },
  {
    path: 'menu-example',
    loadChildren: () => import('./menu-example/menu-example.module').then( m => m.MenuExamplePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

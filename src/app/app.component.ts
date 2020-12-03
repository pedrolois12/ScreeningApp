import { Component, OnInit } from '@angular/core';

import { Platform, MenuController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private ToastController:ToastController
  ) {
    this.initializeApp();
  }

  public mensagem="";

  initializeApp() {
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


   abrir_side_menu(){
    this.menu.open('first');
   } 

   fechar_side_menu(){
     this.menu.close('first');
   }

   sair(){

   }
   
   async exibeMensagem(){  
    const toast = await this.ToastController.create({
      message:this.mensagem,
      duration:1700
    });
    toast.present();
  }
}

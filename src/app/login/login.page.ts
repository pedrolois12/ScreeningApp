import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../autenticacao.service';
import { Router } from '@angular/router';
import { ToastController, MenuController, IonicModule } from '@ionic/angular';
import { ModaltPage } from '../modalt/modalt.page';
import { ModalController, Platform } from '@ionic/angular';
import {ScreeningServiceService} from '../screening-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public autenticacaoService: AutenticacaoService,
    public router: Router,
    public modalController: ModalController,
    public ToastController: ToastController,
    public menuCtrl: MenuController,
    public ScrenningServ : ScreeningServiceService,
    public platform:Platform
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

   onBackPressed(){
      navigator['app'].exitApp();
  }

  public email:string ="";
  public senha:string="";
  public mensagem:string="";

  addEventListener(){
    
  }
  
  insereUsuario() {
    let tem_arroba;

    for (let i = 0; i < this.email.length; i++) {
      if (this.email.charAt(i) == "@") {
        tem_arroba = true;
        console.log(this.email.charAt(i))
      }
    }

    if (tem_arroba) {
      this.autenticacaoService.loginNoFireBase(this.email, this.senha)
        .then((res) => {
          this.router.navigate(['/menu'], {queryParams:{email:this.email}})

        })
        .catch((error) => {
          let mensagem_erro;
          if (error.code == "auth/wrong-password") {
            mensagem_erro = "email e/ou senha errado!";
          }
          this.mensagem = "Erro ao Logar! -" + mensagem_erro
          console.log(error);
          this.exibeMensagem();
        })
    }else{
        let enfermeiro ={login:this.email, senha:this.senha};
        this.ScrenningServ.validaLoginEnfermeiro(enfermeiro).subscribe(
          data=>{
              let valida = new Array<any>();
              valida = valida.concat(data);
              console.log(valida);
              let aux = String(valida[0].status)
              let aux1 = valida[0].dados[0];
              console.log(aux1.nome+"-"+aux1.id)
              if(aux =="true"){
                this.router.navigate(['/menu'], {queryParams:{email:aux1.nome, id:aux1.id}});
                
              }

              else{
                let mensagem_erro;
                mensagem_erro = "email e/ou senha errado!";
                this.mensagem = "Erro ao Logar! -" + mensagem_erro
                this.exibeMensagem();
              }
          }
        )
    }

  }

  cadastro(){
    this.router.navigate(['/modalt']).then(nav => {
     // window.location.reload();
      //console.log(nav);
    });
  }

  async exibeMensagem(){  
    const toast = await this.ToastController.create({
      message:this.mensagem,
      duration:1700
    });
    toast.present();
  }
  
  async shoModal() { 
    const modal = await this.modalController.create({
      animated:true,
      component: ModaltPage,
      cssClass: 'my-custom-modal-css',
      
      
    });
  modal.present();  

let data = (await modal.onWillDismiss());
}
}
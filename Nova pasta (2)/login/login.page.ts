import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../autenticacao.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public autenticacaoService: AutenticacaoService,
    public router: Router,
    public ToastController: ToastController,
  ) { }

  ngOnInit() {
  }

 
  public email:string ="";
  public senha:string="";
  public mensagem:string="";

  insereUsuario(){
    this.autenticacaoService.loginNoFireBase(this.email, this.senha)
    .then((res)=>{
        this.router.navigate(['/menu']).then(nav => {
          window.location.reload();
    });;

    
  
    })
    .catch((error)=>{
      this.mensagem="Erro Logar!"
      this.exibeMensagem();
    }) 
  }

  async exibeMensagem(){
    const toast = await this.ToastController.create({
      message:this.mensagem,
      duration:1700
    });
    toast.present();
  }

  cadastro(){
    this.router.navigate(['./cadastro']).then(nav=>{
    window.location.reload();
    });    ;
  }

}

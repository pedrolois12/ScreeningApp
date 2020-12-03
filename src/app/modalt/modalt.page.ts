import { Component, OnInit,OnChanges} from '@angular/core';
import { ScreeningServiceService } from '../screening-service.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router'
import { throws } from 'assert';
import { HttpClient } from '@angular/common/http'
import { nextTick } from 'process';
@Component({
  selector: 'app-modalt',
  templateUrl: './modalt.page.html',
  styleUrls: ['./modalt.page.scss'],
})
export class ModaltPage implements OnInit {
  public login;
  public senha;
  public mensagem;
  //public status = new Array<any>();
  public nome;
  constructor(public screeningServ: ScreeningServiceService,
              public ToastController: ToastController,
              public route:Router,
              public http:HttpClient) { }
  public trata_sub;
  public primeira_vez=true;
  ngOnInit() {
    //this.primeira_vez =false;
  }

  ngOnChanges(){
    this.trata_sub.unsubscribe();
  }

 async validaLogin() {
  this.primeira_vez =false;
  //  let status;
    console.log(this.login);
    console.log(this.senha);

    let user = this.login;
    let password = this.senha;

    let usuario = {
      login: user,
      senha: password
    }


   this.trata_sub = this.screeningServ.validaLogin(usuario)
   .toPromise().then(
    data => {
     //this.status=null;
     //console.log(this.status);
     let status = new Array<any>();
     status = status.concat(data);

     let aux = String(status[0].status);
     console.log(aux);


     if (aux == "true") {
       this.mensagem = "OK";
       this.exibeMensagem();
       this.route.navigate(['/menuchefe']);

     } else {
       
       console.log("Tempo dormindo"+ new Date().getTime());
        this.login="";
        this.senha="";      
        this.mensagem="Usuario e/ou senha errado!!";
        this.exibeMensagem();
        setTimeout(() => {
          //window.location.reload();
        }, 3000);
        

       //window.location.reload();
     }
   })
  .catch(
       erro=>{
          console.log(erro)
          
   }).finally(
      ()=>{
        this.exibeMensagem()
      }
   )
  }

  async delay(ms:number){
    var e = await new Date().getSeconds() + ms;
    console.log(e);
    console.log(new Date().getSeconds());
    let i =0
    while(new Date().getSeconds() <= e){
      i+=1;
      await console.log(i);
    }
  }
    confirmaLogin(){
      if(status!=""){
        //let status = String(this.status[0].status)
      if(status=="true"){
        this.mensagem("OK");
        this.exibeMensagem();

      }else{
        this.mensagem("NOT OK");
        this.exibeMensagem();
      }
    }
    }

    limpa_campo(){
      this.primeira_vez = false;

    }

  async exibeMensagem() {
    const toast = await this.ToastController.create({
      message: this.mensagem,
      duration: 2700,
      position:"top"
    });
     toast.present();
  }
}

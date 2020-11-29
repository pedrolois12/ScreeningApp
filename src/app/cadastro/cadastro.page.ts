import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public ToastController:ToastController) { }
  public coren ="";
  public primeira_vez=true;
  public mensagem="";
  public senha="";
  public senhaconfir="";

  ngOnInit() {
  }
  

  mascara_coren(){

    var core = new RegExp("^([A-Z]|[0-9]|){5}-(TE|ENF|AE){1}$")
    console.log(this.coren.length);
    this.coren=this.coren.toUpperCase();

    if(this.coren.length>=5 && this.primeira_vez){
        this.coren= this.coren.substr(0,5) +"-"+this.coren.substring(5);
        this.primeira_vez =false
    }
    console.log(this.coren);
    console.log(core.test(this.coren));

    if(!core.test(this.coren)){
        //console.log(core.test(this.coren));
        this.mensagem = "Formato invalido. O coren deve seguir este padrão: XXXXX-(TE/ENF/AE)";
        this.exibeMensagem();
        document.getElementById("Coren").style.borderColor ="red";
        this.coren="";
        this.primeira_vez=true;
    }

    if(core.test(this.coren)){
      document.getElementById("Coren").style.borderColor ="green"
    }

  }

  async exibeMensagem(){  
    const toast = await this.ToastController.create({
      message:this.mensagem,
      duration:1700
    });
    toast.present();
  }

  
}




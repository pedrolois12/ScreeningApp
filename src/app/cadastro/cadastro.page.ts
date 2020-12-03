import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {ScreeningServiceService} from '../screening-service.service'
import {AutenticacaoService} from '../autenticacao.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public ToastController:ToastController,
              public screeningServ:ScreeningServiceService,
              public firebase:AutenticacaoService) { }
  public coren ="";
  public nome="";
  public sobrenome="";
  public email=""
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
      duration:2700
    });
    toast.present();
  }

  insereEnfermeiro(){
    console.log(this.senha +" "+this.senhaconfir)
    if(this.senha == this.senhaconfir){
      let login=this.nome.substring(0,1)+this.sobrenome;
      console.log(login);
      login = login.toUpperCase();
      console.log(login);
      let enfermeiro ={
        nome:this.nome+" "+this.sobrenome,
        coren:this.coren,
        email:this.email,
        senha:this.senha,
        login:login,
        
      }
      console.log(enfermeiro);
      this.screeningServ.incluiEnfermeiro(enfermeiro).subscribe(
        data=>{
          console.log(data);
          this.mensagem="Usuario inserido com sucesso!!!!!";
          this.exibeMensagem();
        },
        erro=>{
          console.log(erro)
          this.mensagem="Houve um erro na inserção";
          this.exibeMensagem();
        });

      this.firebase.insereNoFireBase(this.email, this.senha).then(
        data=>{
          console.log(data);
          //this.mensagem="Usuario inserido com sucesso!!!!!";
        }).catch(
        erro=>{
          console.log(erro)
          this.mensagem="Houve um erro na inserção";
        });

    }else{
      this.mensagem="Senhas não conferem";
      this.exibeMensagem();
      this.senha= " ";
      this.senhaconfir= " ";
    }
      
    

    
  }


}




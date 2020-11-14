import { Component, Input, OnInit } from '@angular/core';
import { concat, fromEventPattern } from 'rxjs';
import { ScreeningServiceService } from '../screening-service.service';
import { HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router , NavigationExtras, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dorabdominal',
  templateUrl: './dorabdominal.page.html',
  styleUrls: ['./style.css'],
})
export class DorabdominalPage implements OnInit {
  
  constructor(public http:HttpClientModule, public screeningServ:ScreeningServiceService, public navCtrl:NavController,
    public route:Router, public actRoute:ActivatedRoute
    ) { }
  public sintoma;
  public selecao;
  public nome;
  public cpf;
  public lista_sintoma = new Array<any>();
  public flag_vermelho:boolean;
  public flag_amarelo:boolean;
  public flag_laranja:boolean;
  public flag_verde:boolean;
  public flag_azul:boolean;
  public data;
  public algo;


  public recupera_sintoma = " ";

  carregaPagina(){
    
   

    this.screeningServ.getSintomas().subscribe(
    data =>{
          this.lista_sintoma = this.lista_sintoma.concat(data);
          console.log(this.lista_sintoma);
    },
    error =>{
      console.log(error);
    }
    );
  }

  getData(){
    
    let flag;
    if(this.flag_vermelho){
        flag="VERMELHO"
    } else if(this.flag_amarelo){
       flag="AMARELO"
    }else if(this.flag_laranja){
       flag="LARANJA"
    }else if(this.flag_verde){
       flag="VERDE"
    }else if(this.flag_azul){
      flag="AZUL"
   }
    
   let params; 
   this.actRoute.queryParams.subscribe(data=>{
   params = data;
   });

   let msg = "Paciente: "+params.nome+", portando o CPF:"+params.cpf+"Foi classificado com a cor: "+flag;

    let paciente ={
        from :"triagem.service2020@gmail.com" ,
        to: "triagem.service2020@gmail.com",
        subject: "PACIENTE: "+params.nome,
        text:msg
      }
       
    
   
    let pac = JSON.stringify(paciente);
    console.log(pac);
    this.screeningServ.enviaEmail(pac).subscribe(data=>{
      console.log(data);
    });
                              
   
    
  }

  ionDidEnter(){
   
  }

  ngOnInit() {
    this.carregaPagina();
   // this.getData();

    
  }

  mostra_valor(valor:string){
      var botoes = document.getElementsByTagName("button");
      var aux="";

      for (var i = 0 ; i< botoes.length; i++){
        if(botoes[i].value == valor){
          console.log(botoes[i].value + valor)  
           botoes[i].disabled = true;
           botoes[i].style.backgroundColor = "gray";


           for (var j = 0; j < this.lista_sintoma.length;j++) {
            if (valor == this.lista_sintoma[j].sintoma){
              aux = this.lista_sintoma[j].desc_sintoma;
              this.recupera_sintoma += " "+aux+",";

              
              if(this.lista_sintoma[j].flag == "vermelho"){
                this.flag_vermelho =true;
              } else if (this.lista_sintoma[j].flag == "amarelo"){
                this.flag_amarelo =true;
              } else if (this.lista_sintoma[j].flag == "laranja"){
                this.flag_laranja =true;
              }else if (this.lista_sintoma[j].flag == "verde"){
                this.flag_verde =true;
              }else if (this.lista_sintoma[j].flag == "azul"){
                this.flag_azul =true;
              }
              break;
            }
       }  
           break;
      }


  }
   
    
 

}

}

import { Component, OnInit } from '@angular/core';
import { concat, fromEventPattern } from 'rxjs';
import { ScreeningServiceService } from '../screening-service.service';
import { HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { newArray } from '@angular/compiler/src/util';
import { element } from 'protractor';


@Component({
  selector: 'app-dorabdominal',
  templateUrl: './dorabdominal.page.html',
  styleUrls: ['./style.css'],
})
export class DorabdominalPage implements OnInit {

  constructor(public http:HttpClientModule, public screeningServ:ScreeningServiceService) { }
  public sintoma;
  public selecao;
  public lista_sintoma = new Array<any>();
  public flag_vermelho:boolean;
  public flag_amarelo:boolean;
  public flag_laranja:boolean;
  public flag_verde:boolean;
  public flag_azul:boolean;

  public algo


  public recupera_sintoma = " ";

  carregaPagina(){
    this.screeningServ.getSintomas().subscribe(
    data =>{
          const response = (data as any);
          this.lista_sintoma = this.lista_sintoma.concat(response);
          console.log(this.lista_sintoma);
    },
    error =>{
      console.log(error);
    }
    );

  
  }

  getData(){
    var paciente = [
      {nome: "pedro",
      flag: "vermelha",
      cpf:  "1111111111"}
    ]

    let pac = JSON.stringify(paciente);
    console.log(pac);

   // this.screeningServ.inserePaciente(pac).subscribe(resposta =>{
    //  console.log(resposta);
   // });
    
  }

  ngOnInit() {
    this.carregaPagina();
    this.getData();
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
              this.recupera_sintoma.replace(",", "\\n");

              
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
             // console.log(this.lista_sintoma[j].flag)
              break;
            }
       }  
           break;
      }


  }
   
    
 

}

}

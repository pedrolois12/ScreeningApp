import { Component, Input, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { concat, fromEventPattern } from 'rxjs';
import { ScreeningServiceService } from '../screening-service.service';
import { HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dorabdominal',
  templateUrl: './dorabdominal.page.html',
  styleUrls: ['./style.css'],
})
export class DorabdominalPage implements OnInit, AfterViewInit, OnChanges {

  constructor(public http: HttpClientModule, public screeningServ: ScreeningServiceService, public navCtrl: NavController,
    public route: Router, public actRoute: ActivatedRoute

  ) { }
  public sintoma;
  public selecao;
  public nome;
  public cpf;
  public lista_sintoma = new Array<any>();
  public lista_dor = new Array<any>();

  public flag_vermelho: boolean;
  public flag_amarelo: boolean;
  public flag_laranja: boolean;
  public flag_verde: boolean;
  public flag_azul: boolean;
  public data;
  public algo;
  public fluxo;

  public recupera_sintoma = " ";

  ngOnChanges(){
    document.getElementById("Pintao7").click()
    document.getElementById('Pintao8').innerHTML ="Ola mundo";
    console.log(document.getElementById("Pintao7").click()+"ngafterview");
    //window.location.reload()
  }
  ngAfterViewInit(){
   
  }

  ngOnInit() {
    this.carregaPagina();
    
    
  }


  carregaPagina() {

    let params;
    this.actRoute.queryParams.subscribe(data => {
      params = data;
    });
    this.fluxo = params.fluxo;

    this.screeningServ.getFluxo(params.fluxo).subscribe(
      data => {
        this.lista_sintoma = this.lista_sintoma.concat(data);
        console.log(this.lista_sintoma);
      },
      error => {
        console.log(error);
      }
    );

    this.screeningServ.getEscalaDor().subscribe(
      data => {
        this.lista_dor = this.lista_dor.concat(data);
        console.log(this.lista_dor);
      },
      error => {
        console.log(error);
      }
    );
   
  }

  getData() {
    let color;
    let flag;
    if (this.flag_vermelho) {
      flag = "VERMELHO"
      color = "red";
    } else if (this.flag_amarelo) {
      flag = "AMARELO";
      color = "yellow";
    } else if (this.flag_laranja) {
      flag = "LARANJA"
      color = "orange";
    } else if (this.flag_verde) {
      flag = "VERDE"
      color = "green";
    } else if (this.flag_azul) {
      flag = "AZUL"
      color = "blue";
    }

    let params;
    this.actRoute.queryParams.subscribe(data => {
      params = data;
    });


    let msg = "<h4> Paciente: " + params.nome + "</h4> <br> portando o CPF:" + params.cpf + "<br> <h4 style='color:" + color + ";'> Foi classificado com a cor: " + flag + "</h4>" +
      "Com os sintomas: <h4>" + this.recupera_sintoma + "</h4>";

    let paciente = {
      from: "triagem.service2020@gmail.com",
      to: "triagem.service2020@gmail.com",
      subject: "PACIENTE: " + params.nome,
      html: msg
    }



    let pac = JSON.stringify(paciente);
    console.log(pac);
    this.screeningServ.enviaEmail(pac).subscribe(data => {
      console.log(data);
    });



  }
  

  

  mostra_valor(valor: string) {
    var botoes = document.getElementsByTagName("button");
    var aux = "";

    for (var i = 0; i < botoes.length; i++) {
      if (botoes[i].value == valor) {
        console.log(botoes[i].value + valor)
        botoes[i].disabled = true;
        botoes[i].style.backgroundColor = "gray";


        for (var j = 0; j < this.lista_sintoma.length; j++) {
          if (valor == this.lista_sintoma[j].sintoma) {
            aux = this.lista_sintoma[j].desc_sintoma;
            this.recupera_sintoma += " " + aux + ",";
            if (this.lista_sintoma[j].flag == "vermelho") {
              this.flag_vermelho = true;
            } else if (this.lista_sintoma[j].flag == "amarelo") {
              this.flag_amarelo = true;
            } else if (this.lista_sintoma[j].flag == "laranja") {
              this.flag_laranja = true;
            } else if (this.lista_sintoma[j].flag == "verde") {
              this.flag_verde = true;
            } else if (this.lista_sintoma[j].flag == "azul") {
              this.flag_azul = true;
            }
            break;
          }
        }
        break;
      }


    }


    

  }

   escala_dor_cor(){
    let dor = document.getElementsByTagName("button");


    for(var i =0 ; i < dor.length; i++){
      console.log(dor[i].value + i)
         if(dor[i].value =="Sem dor"){
          dor[i].style.backgroundColor= "#99ff66"
         }
      
    }
  


    
  }

}

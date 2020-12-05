import { Component, Input, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { concat, fromEventPattern } from 'rxjs';
import { ScreeningServiceService } from '../screening-service.service';
import { HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { ModalController, NavController, MenuController, ToastController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ModalOnePage } from '../modal-one/modal-one.page';

@Component({
  selector: 'app-dorabdominal',
  templateUrl: './dorabdominal.page.html',
  styleUrls: ['./style.css'],
})
export class DorabdominalPage implements OnInit, AfterViewInit, OnChanges {

  constructor(public http: HttpClientModule, public screeningServ: ScreeningServiceService, public navCtrl: NavController,
    public route: Router, public actRoute: ActivatedRoute, public modalCtrl:ModalController, public menuCtrl:MenuController,
    public ToastController:ToastController

  ) { }
  public observacoes;
  public sintoma;
  public selecao;
  public nome;
  public cpf;
  public lista_sintoma = new Array<any>();
  public lista_dor = new Array<any>();

  public data;
  public fluxo;
  public pega_modal;
  public recupera_sintoma = " ";
  public nivel_dor;
  public cor_dor;
  public recupera_flag;
  private nome_enfermeiro;
  private id;
  public mensagem;


  ngOnChanges() {

  }
  ngAfterViewInit() {

  }

  ngOnInit() {
    this.carregaPagina();
    this.menuCtrl.enable(true);
  }


  carregaPagina() {

    let params;

    this.actRoute.queryParams.subscribe(data => {
      params = data;
    });

    this.fluxo = params.fluxo;
    this.nome = params.nome;
    this.cpf = params.cpf;
    console.log(params.cpf+"-"+this.cpf)
    this.nome_enfermeiro = params.nome_enfermeiro;
    this.id = params.id;

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
    let color= "";
    let params;
    this.actRoute.queryParams.subscribe(data => {
      params = data;
    });

    if(this.recupera_flag =="VERMLEHO"){
      color = "DarkRed";
    }
    if(this.recupera_flag =="LARANJA"){
      color = "DarkOrange";
    }

    if(this.recupera_flag =="AMARELO"){
      color = "Gold";
    }
    if(this.recupera_flag =="VERDE"){
      color = "DarkGreen";
    }
    if(this.recupera_flag =="AZUL"){
      color = "DodgerBlue";
    }
    let desc_dor;
    if(this.recupera_flag == ""){
        this.recupera_flag ="verde";
    }
    for(let i =0; i< this.lista_dor.length;i++){
      if(this.nivel_dor == this.lista_dor[i].num_escala){
         desc_dor = this.lista_dor[i].intensidade;
      }
    }

    let msg = "<h4> Fluxo escolhido: " + this.fluxo + "</h4>"+"<h4> Paciente: " + params.nome + "</h4>"+"<br> portando o CPF:" + params.cpf +"<br> <h4 style='background-color:" + color + "'> Foi classificado com a cor:"+this.recupera_flag     +"<h4> Com os sintomas: </h4>" + this.recupera_sintoma     +"<h4> Com intensidade de dor: </h4>" + desc_dor + " "  +"<h4> Com as observações do enfermeiro:"+this.nome_enfermeiro+" </h4>" + this.observacoes + "";
    let paciente = {
      from: "triagem.service2020@gmail.com",
      to: "triagem.service2020@gmail.com",
      subject: "PACIENTE: " + params.nome,
      html: msg
    }

    console.log(paciente);
    this.screeningServ.enviaEmail(paciente).subscribe(data => {
      console.log(data);
    });

    let descricao_atendimento =this.recupera_sintoma +"\n" +this.observacoes
    let fila = {nome:this.nome  
               ,flag:this.recupera_flag
               ,cpf_rg: this.cpf
               ,atendido:false
              ,descricao_atendimento:descricao_atendimento}

    this.screeningServ.inserePaciente(fila).subscribe(
      data =>{
        console.log(data);
      }
    )

    let descricao =this.recupera_sintoma +" , "+this.observacoes;
    console.log(this.cpf);
    console.log(descricao)

    let paci = {
      nome:this.nome,
      cpf_rng:this.cpf,
      descricao_atendimento:descricao,
      enfermeiro_id: this.id
    }
    console.log(paci);
    this.screeningServ.inserirPaciente(paci).subscribe(
      data =>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
    this.mensagem="Paciente triado! Enviado email";
    this.exibeMensagem();
    setTimeout( 
      ()=>{
      this.route.navigate(['/menu'])  
    }, 5000);

    //this.route.navigate(['/menu']);
  }


async showModal() { 
    const modal = await this.modalCtrl.create({
      animated:true,
      component: ModalOnePage,
      cssClass: 'my-custom-modal-css',
      componentProps:{
        'fluxo': this.fluxo
      }
      
    });
  modal.present();  

let data = (await modal.onWillDismiss());
console.log(data.data.flag);
console.log(data.data.sintomas);
this.recupera_flag =data.data.flag;

for(let i = 0; i <= data.data.sintomas.length-1; i++){
    if(i == 0){
      this.recupera_sintoma += data.data.sintomas[i];
    }
    else {
      this.recupera_sintoma +=","+data.data.sintomas[i];
    }
}
console.log(this.recupera_sintoma);
}

resgata_dor(nivel:number, cor:String){
    this.nivel_dor = nivel;
    this.cor_dor = cor;
}


async exibeMensagem(){  
  const toast = await this.ToastController.create({
    message:this.mensagem,
    duration:1700
  });
  toast.present();
}

}

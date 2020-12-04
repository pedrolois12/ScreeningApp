import { Component, OnInit } from '@angular/core';
import { ScreeningServiceService } from '../screening-service.service';
import {NgbModal, ModalDismissReasons, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.page.html',
  styleUrls: ['./fila.page.scss'],
})
export class FilaPage implements OnInit {

  constructor(public ScreeningServ:ScreeningServiceService,
              public modalService:NgbModal,
              public menuCtrl:MenuController) { }

  public fila; 
  public fila_vermelha; //= new Array<any>();
  public fila_laranja;  //= new Array<any>();
  public fila_amarelo;  //= new Array<any>();
  public fila_verde;    //= new Array<any>();
  public pacientes= new Array<any>();
  public closeResult="";
  public cpf;
  public id;
  public sintomas;
  public flag;
  public nome;

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.getData();
  }

getData(){

  this.fila = new Array<any>();
  this.ScreeningServ.getFila().subscribe(
    data=>{
      this.fila = this.fila.concat(data);
      //console.log(paciente)

      //this.fila = paciente;
      console.log( this.fila)
      this.fila_vermelha = new Array<any>();
      this.fila_amarelo  = new Array<any>();
      this.fila_laranja  = new Array<any>();
      this.fila_verde    = new Array<any>();
      for(let i = 0; i < this.fila.length;i++){
        if(this.fila[i].flag =="VERMELHO" && this.fila[i].atendido ==0){  
          this.fila_vermelha = this.fila_vermelha.concat(this.fila[i])
        } else if(this.fila[i].flag =="amarelo" && this.fila[i].atendido ==0){
        
          this.fila_amarelo = this.fila_amarelo.concat(this.fila[i])
        }else if(this.fila[i].flag =="LARANJA" && this.fila[i].atendido ==0){
          
          this.fila_laranja = this.fila_laranja.concat(this.fila[i])
        }else if(this.fila[i].flag =="verde" && this.fila[i].atendido ==0){
         
          this.fila_verde    = this.fila_verde.concat(this.fila[i])
        }

      }
      console.log(this.fila_vermelha[0].id_paciente);

    },
    error=>{
      console.log(error);
    }
  )
}

resgata_id(id){
  console.log(this.id+" "+ id);
  this.id =id;
  for(let i =0; i < this.fila.length; i++){
      if(this.fila[i].id_paciente == id){
        this.cpf      = this.fila[i].cpf_rg
        this.sintomas = this.fila[i].descricao_atendimento;
        this.flag     = this.fila[i].flag;
        this.nome = this.fila[i].nome
      }
  }
}

abre_modal(content){
  this.modalService.open( content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });

}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    console.log(`with: ${reason}`);
  }
}


}

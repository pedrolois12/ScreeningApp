import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { ScreeningServiceService } from '../screening-service.service';
import { Router } from '@angular/router'
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-consultachefe',
  templateUrl: './consultachefe.page.html',
  styleUrls: ['./consultachefe.page.scss'],
})

export class ConsultachefePage implements OnInit {
  
  constructor(public screningServ:ScreeningServiceService,
              public modalService:NgbModal,
              public route:Router) { }

  public enfermeiros = new Array<any>();
  public closeResult="";
  public id;
  public nome_enfermeiro;
  public email;
  public login;
  public updatedAt="";

  ngOnInit() {
    this.carrega_dados();
    console.log(new Date().getDay().toString() +"/"+new Date().toDateString() +"/"+new Date().getFullYear() )
  }


  carrega_dados(){
    
    this.screningServ.getEnfermeiro().toPromise()
     .then(
         dado=>{
         this.enfermeiros = this.enfermeiros.concat(dado);
      })
      .catch(
        erro=>{
          console.log(erro);
        })
  }

  exluir_enfermeiro(){
     console.log("ID DO ENFERMEIRO"+this.id);
     let enfermeiro ={ id:this.id}
     this.screningServ.excluirEnfermeiro(enfermeiro).toPromise()
     .then(
      dado=>{
        console.log(dado);
        document.location.reload();
       
        
   })
   .catch(
     erro=>{
       console.log(erro);
     })
    
  }


  alterar_enfermeiro(){
    console.log("ID DO ENFERMEIRO"+this.id);
    let enfermeiro ={login:this.login, email:this.email, id:this.id}
    this.screningServ.alterarEnfermeiro(enfermeiro).toPromise()
    .then(
     dado=>{
       console.log(dado);
       document.location.reload();
      
       
  })
  .catch(
    erro=>{
      console.log(erro);
    })
   
 }

  resgata_id(id:number){
    console.log(this.id);
    for(let i =0; i < this.enfermeiros.length; i++){
        if(this.enfermeiros[i].id == id){
          //console.log(this.enfermeiros[i].id)
          this.id = id;
          this.email = this.enfermeiros[i].email;
          this.login = this.enfermeiros[i].login;
          this.nome_enfermeiro = this.enfermeiros[i].nome;
          this.updatedAt = String(this.enfermeiros[i].updatedAt)
          console.log(this.enfermeiros[i].updatedAt)
          console.log(this.nome_enfermeiro);
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

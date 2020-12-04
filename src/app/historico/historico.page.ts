import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';
import {ScreeningServiceService} from '../screening-service.service';
import {Pipe, PipeTransform} from '@angular/core';
import { domain } from 'process';



@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
@Pipe({name:'ql'})


export class HistoricoPage implements OnInit, PipeTransform, OnChanges {
 

  constructor(
    public ScreeningServ:ScreeningServiceService
  ) { }
  
  //public pesquisa_texto;
  @Input() pesquisa_texto;

  transform(value:any, args?:any):any{
    if(value){
    let reg = new RegExp("(,)")
     return value.replace(reg , "");
     // return null;
    }
  }

  public paciente = new Array<any>();

  ngOnInit() {
    this.getData();
  }

  ngOnChanges(){
    console.log("mudou");
    this.pesquisa();
  }

  pesquisa(){
    var reg = new RegExp("("+this.pesquisa_texto+")", "gi");
    let tabela = document.getElementsByTagName("td");
    let j = 0;

    let key;

    addEventListener('keydown', e=>{
      console.log(e.key)
      key = String(e.key);
    })
    
  
    let mostra;
    for(let i =0;i<  tabela.length;i++){

      if(reg.test(tabela[i].innerHTML )&& this.pesquisa_texto !=""){
        console.log(tabela[i].id);
        mostra = tabela[i].id;
        
      }
      if(this.pesquisa_texto =="" ||this.pesquisa_texto ==" "||this.pesquisa_texto == null  ){
        tabela[i].hidden=false;
        mostra = 0
      }
    // console.log(this.pesquisa_texto);
    }
    //let coluna = document.getElementById("");
    for(let i =0;i<  tabela.length;i++){
      if(tabela[i].id != mostra){
        tabela[i].hidden=true;
      }
      if(tabela[i].id == mostra){
        tabela[i].hidden=false;
      }

      if(0 == mostra){
        tabela[i].hidden=false;
      }
     
    }

  }

  getData(){
    let paciente = new Array<any>();
    let reg = new RegExp("(,{1,})", "g");
    let aux="";
    this.ScreeningServ.getPacientes().subscribe(
      data=>{
        paciente = paciente.concat(data);
        this.paciente = paciente;
        for(let i=0; i < this.paciente.length;i++){
          console.log(this.paciente.length)
           aux = this.paciente[i].descricao_atendimento;
          if(aux == null || aux ==""){
              console.log("aux null");
          }else{
            //aux = aux.replace(reg, "9")
            aux = aux.replace(reg, "\n");
            this.paciente[i].descricao_atendimento=aux;
            //console.log(aux);
            //this.paciente[i].descricao_atendimento=aux;
        
        }
         
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

}

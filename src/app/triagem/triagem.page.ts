import { Component, OnInit, Input } from '@angular/core';
import { Router , NavigationExtras, ActivatedRoute} from '@angular/router';
import { DorabdominalPage } from '../dorabdominal/dorabdominal.page';
import { NavController, MenuController } from '@ionic/angular';
import { fromEventPattern } from 'rxjs';
import { ScreeningServiceService} from '../screening-service.service';


@Component({
  selector: 'app-triagem',
  templateUrl: './triagem.page.html',
  styleUrls: ['./triagem.page.scss'],
})
export class TriagemPage implements OnInit {
  public  nome="";
  public  cpf="";
  public sobrenome=""
  public selecionar;
  public lista_fluxo =new Array<any>();


  constructor(public route:Router,
     public navCtrl:NavController ,
     public actRoute:ActivatedRoute,
     public screeningservice:ScreeningServiceService,
     public menuCtrl:MenuController
  
     
) { }


  private nome_enfermeiro;
  private id;

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.resgataFluxo();
    this.actRoute.queryParams.subscribe(
      data=>{
        this.nome_enfermeiro = data.nome_enfermeiro;
        this.id = data.id;
      }
    )
  }

  resgataFluxo(){

    this.screeningservice.listFluxos().subscribe(
      
    data =>{
        this.lista_fluxo = this.lista_fluxo.concat(data);
    }, 
    errs=>{
      console.log(errs);
    })

  }

  valida_cpf_rg(){
    let reg = new RegExp("(([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}) |(([0-9]){2}\.([0-9]){3}\.([0-9]){3}-([0-9]){1})", "g")
    let cpf_rg:string;
    cpf_rg = this.cpf;
    let cpf_rg_new;

    if(this.cpf.length ==11){
      cpf_rg_new = cpf_rg.substr(0,3)+'.'+cpf_rg.substr(3,3)+'.'+cpf_rg.substr(6,3)+'-'+cpf_rg.substr(9)
      console.log(cpf_rg_new);
    }
    if(this.cpf.length <11){
      cpf_rg_new = cpf_rg.substr(0,2)+'.'+cpf_rg.substr(2,3)+'.'+cpf_rg.substr(5,3)+'-'+cpf_rg.substr(8)
      console.log(cpf_rg_new);
    }
    this.cpf = cpf_rg_new
    if(!reg.test(this.cpf)){
        document.getElementById("Cpf").style.borderColor="red"
    }else{
      document.getElementById("Cpf").style.borderColor="green"
    }
  }

  escolhe_fluxo(){
   let valores=[{
     nome:this.nome,
     cpf:this.cpf
   }]

    console.log(this.nome + this.cpf)
    console.log(this.selecionar);
    if(this.selecionar){
    
      this.route.navigate(["./dorabdominal"], {queryParams: {nome:this.nome+" "+this.sobrenome, cpf:this.cpf, fluxo:this.selecionar, nome_enfermeiro:this.nome_enfermeiro, id:this.id} } ).then(nav=>{
        
      });

    }

}

}

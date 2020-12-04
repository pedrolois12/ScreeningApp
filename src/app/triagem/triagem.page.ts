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

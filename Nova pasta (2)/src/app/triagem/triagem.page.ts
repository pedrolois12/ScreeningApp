import { Component, OnInit, Input } from '@angular/core';
import { Router , NavigationExtras, ActivatedRoute} from '@angular/router';
import { DorabdominalPage } from '../dorabdominal/dorabdominal.page';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-triagem',
  templateUrl: './triagem.page.html',
  styleUrls: ['./triagem.page.scss'],
})
export class TriagemPage implements OnInit {
 public  nome="";
 public  cpf="";
  
  public selecionar;
  public lista_sintoma =new Array<any>();


  constructor(public route:Router, public navCtrl:NavController , public actRoute:ActivatedRoute) { }


  ngOnInit() {


  }

  escolhe_fluxo(){
   let valores=[{
     nome:this.nome,
     cpf:this.cpf
   }]

    console.log(this.nome + this.cpf)

    console.log(this.selecionar);
    if(this.selecionar=="1"){
      
      this.route.navigate(["./dorabdominal"], {queryParams: {nome:this.nome, cpf:this.cpf} } ).then(nav=>{
         window.location.reload();
        
      });

    }

}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {  ScreeningServiceService } from '../screening-service.service';


@Component({
  selector: 'app-triagem',
  templateUrl: './triagem.page.html',
  styleUrls: ['./triagem.page.scss'],
})
export class TriagemPage implements OnInit {
  public selecionar;
  public lista_sintoma =new Array<any>();

  constructor(public route:Router, public screeningServ : ScreeningServiceService) { }

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
  ngOnInit() {
    this.carregaPagina();
  }

  escolhe_fluxo(){

    console.log(this.selecionar);
    if(this.selecionar=="1"){
      this.route.navigate(["./dorabdominal"]).then(nav=>{
        window.location.reload();
      });

    }

}
}

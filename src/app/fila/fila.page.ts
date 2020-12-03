import { Component, OnInit } from '@angular/core';
import { ScreeningServiceService } from '../screening-service.service';
@Component({
  selector: 'app-fila',
  templateUrl: './fila.page.html',
  styleUrls: ['./fila.page.scss'],
})
export class FilaPage implements OnInit {

  constructor(public ScreeningServ:ScreeningServiceService) { }
  public fila = new Array<any>();
  public fila_vermelha = new Array<any>();
  public fila_laranja = new Array<any>();
  public fila_amarelo = new Array<any>();
  public fila_verde = new Array<any>();
  
  ngOnInit() {
    this.getData();
  }

getData(){
  let paciente = new Array<any>();

  this.ScreeningServ.getFila().subscribe(
    data=>{
      paciente = paciente.concat(data);
      console.log(paciente)

      this.fila = paciente;
      console.log( this.fila)

      for(let i = 0; i < this.fila.length;i++){
        if(this.fila[i].flag =="VERMELHO" && this.fila[i].atendido ==0){
          console.log(this.fila[i]);
          this.fila_vermelha = this.fila_vermelha.concat(this.fila[i])
        } else if(this.fila[i].flag =="amarelo" && this.fila[i].atendido ==0){
          this.fila_amarelo = this.fila[i]
        }else if(this.fila[i].flag =="laranja" && this.fila[i].atendido ==0){
          this.fila_laranja = this.fila[i]
        }else if(this.fila[i].flag =="verde" && this.fila[i].atendido ==0){
          this.fila_laranja = this.fila[i]
        }

      }
      console.log(this.fila_vermelha[0]);

    },
    error=>{
      console.log(error);
    }
  )
}

}

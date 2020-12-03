import { Component, OnInit, OnChanges } from '@angular/core';
import {ScreeningServiceService} from '../screening-service.service';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
@Pipe({name:'ql'})
export class HistoricoPage implements OnInit, PipeTransform {
 
  constructor(
    public ScreeningServ:ScreeningServiceService
  ) { }

  transform(value:any, args?:any):any{
    if(value){
     return value.replace(' , ' , "\n");
     // return null;
    }
  }
  public paciente = new Array<any>();

  ngOnInit() {
    this.getData();
  }

  ngOnChanges(){
    console.log("mudou");
    this.getData();
  }


  getData(){
    let paciente = new Array<any>();

    this.ScreeningServ.getPacientes().subscribe(
      data=>{
        paciente = paciente.concat(data);
        this.paciente = paciente;
      },
      error=>{
        console.log(error);
      }
    )
  }

}

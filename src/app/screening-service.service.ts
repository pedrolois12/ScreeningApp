import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreeningServiceService {

  constructor(public http:HttpClient) { }

  public url ="http://triagemservice.ddns.net:8081/api/"

  httpOption ={
    headers: new HttpHeaders(
      {'Content-type' :['application/json'],
      }
  )
  }

  getSintomas(){
    let sintomas = this.url+"getSintomas";
    return this.http.get(sintomas, this.httpOption);
  }

  inserePaciente(paciente:any){
    let sintomas = this.url+"create";
    return this.http.post(sintomas, paciente, this.httpOption);
  }


  enviaEmail(paciente:any){
    let sintomas = this.url+"enviarEmail";
    return this.http.post(sintomas, paciente, this.httpOption)
  }

  getFluxo(id:any){
    let sintomas = this.url+"getFluxos"+id;
    return this.http.get(sintomas, this.httpOption);
  }

  listFluxos(){
    let sintomas=this.url+"getFluxos"
    return this.http.get(sintomas, this.httpOption);
  }

  getEscalaDor(){
    let sintomas=this.url+"getEscalaDor"
    return this.http.get(sintomas, this.httpOption);
  }

}

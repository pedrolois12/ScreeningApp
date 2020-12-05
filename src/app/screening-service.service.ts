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

  validaLogin(usuario:any){
    let sintomas =this.url+"validaLogin";
    return this.http.post(sintomas, usuario, this.httpOption);
  }

  incluiEnfermeiro(enfermeiro:any){
    let sintomas = this.url+"incluiEnfermeiro"
    return this.http.post(sintomas, enfermeiro, this.httpOption);
  }

  getEnfermeiro(){
    let sintomas = this.url+"getEnfermeiro";
    return this.http.get(sintomas, this.httpOption);
  }
 
  excluirEnfermeiro(enfermeiro:any){
    let sintomas = this.url+"excluirEnfermeiro"
    return this.http.post(sintomas, enfermeiro, this.httpOption);
  }
  alterarEnfermeiro(enfermeiro:any){
    let sintomas = this.url+"alterarEnfermeiro"
    return this.http.post(sintomas, enfermeiro, this.httpOption);
  }


  validaLoginEnfermeiro(usuario:any){
    let sintomas =this.url+"validaLoginEnfermeiro";
    return this.http.post(sintomas, usuario, this.httpOption);
  }

  inserirPaciente(paciente:any){
    let sintomas =this.url+"inserePaciente";
    return this.http.post(sintomas, paciente, this.httpOption);
    
  }

  getPacientes(){
    let sintomas =this.url+"getPacientes";
    return this.http.get(sintomas, this.httpOption);
    
  }

  getFila(){
    let sintomas =this.url+"getFilaPacientes";
    return this.http.get(sintomas, this.httpOption);
    
  }

  alterarFila(fila){
    let sintomas =this.url+"alterarFila";
    return this.http.post(sintomas, fila);
  }

}

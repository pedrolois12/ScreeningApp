import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreeningServiceService {

  constructor(public http:HttpClient) { }

  public url ="http://localhost:8080/api/"

  httpOption ={
    headers: new HttpHeaders(
      {'Content-type' :['application/json'],
    
      }
  )
  }

  getSintomas(){
    let sintomas = this.url+"getSintomas";
    return this.http.get(sintomas);
  }

  inserePaciente(paciente:any){
    let sintomas = this.url+"create";
    return this.http.post(sintomas, paciente, this.httpOption);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./style.css'],
})
export class MenuPage implements OnInit {
  navigate : any;
  constructor(public router: Router) { }

  ngOnInit() {
    
  }


  triagem(){
    this.router.navigate(['./triagem']).then(nav=>{
    window.location.reload();
    });    ;
  }

  
  historico(){
    this.router.navigate(['./historico']).then(nav=>{
    window.location.reload();
    });    ;
  }

  fila(){
    this.router.navigate(['./fila']).then(nav=>{
    window.location.reload();
    });    ;
  }

}

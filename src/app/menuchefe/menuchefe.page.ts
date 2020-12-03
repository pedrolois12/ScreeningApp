import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-menuchefe',
  templateUrl: './menuchefe.page.html',
  styleUrls: ['./menuchefe.page.scss'],
})
export class MenuchefePage  {

  constructor(private menu: MenuController,
    public router: Router,
    ) { }

  ngOnInit(){
  //  this.openFirst();
  }
 
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  cadastro(){
    this.router.navigate(['./cadastro']).then(nav=>{
    window.location.reload();
    });    ;
  }

  consultachefe(){
    this.router.navigate(['./consultachefe']).then(nav=>{
    window.location.reload();
    });    ;
  }


}

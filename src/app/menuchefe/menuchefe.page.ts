import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menuchefe',
  templateUrl: './menuchefe.page.html',
  styleUrls: ['./menuchefe.page.scss'],
})
export class MenuchefePage  {

  constructor(private menu: MenuController) { }

  ngOnInit(){
    this.openFirst();
  }
 
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


}

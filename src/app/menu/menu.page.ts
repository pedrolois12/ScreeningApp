import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router'
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./style.css'],
})
export class MenuPage implements OnInit {
  navigate : any;
  constructor(public router: Router,
              public menuCtrl:MenuController,
              public actRoute: ActivatedRoute) { }
  private login;      
  private id;      

  ngOnInit() {
    this.menuCtrl.enable(true);

    this.actRoute.queryParams.subscribe(
      data=>{
          this.login = data.email;
          this.id = data.id;
      }
      )
      

  }


  triagem(){
    this.router.navigate(['./triagem'], {queryParams:{nome_enfermeiro:this.login, id:this.id}});
  }

  
  historico(){
    this.router.navigate(['./historico']).then(nav=>{
    });    
  }

  fila(){
    this.router.navigate(['./fila']).then(nav=>{
    }); 
  }

}

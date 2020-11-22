import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScreeningServiceService } from '../screening-service.service';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.page.html',
  styleUrls: ['./modal-one.page.scss'],
})
export class ModalOnePage{
  @Input() fluxo:string;

  public lista_sintoma = new Array<any>();
  public recupera_sintoma;
  public flag_vermelho: boolean;
  public flag_amarelo:  boolean;
  public flag_laranja:  boolean;
  public flag_verde:    boolean;
  public flag_azul:     boolean;

  public sintomas_esc = new Array<any>();

  constructor(public modalCtrl: ModalController
            , public screeningServ: ScreeningServiceService
            ) { }



   ngOnInit(){
      this.screeningServ.getFluxo(this.fluxo).subscribe(
        data => {
          this.lista_sintoma = this.lista_sintoma.concat(data);
          console.log(this.lista_sintoma);
        },
        error => {
          console.log(error);
        }
      );
    
   } 

   mostra_valor(valor: string) {
    var botoes = document.getElementsByTagName("button");
    var aux = "";

    for (var i = 0; i < botoes.length; i++) {
      if (botoes[i].value == valor) {
        console.log(botoes[i].value + valor)
       
        //botoes[i].disabled = true;
        botoes[i].style.backgroundColor = "gray";

        for (var j = 0; j < this.lista_sintoma.length; j++) {
          if (valor == this.lista_sintoma[j].sintoma) {
            aux = this.lista_sintoma[j].desc_sintoma;
            this.recupera_sintoma += " " + aux + ",";
            this.sintomas_esc= this.sintomas_esc.concat(aux);

            if (this.lista_sintoma[j].flag == "vermelho") {
              this.flag_vermelho = true;
            } else if (this.lista_sintoma[j].flag == "amarelo") {
              this.flag_amarelo = true;
            } else if (this.lista_sintoma[j].flag == "laranja") {
              this.flag_laranja = true;
            } else if (this.lista_sintoma[j].flag == "verde") {
              this.flag_verde = true;
            } else if (this.lista_sintoma[j].flag == "azul") {
              this.flag_azul = true;
            }
            break;
          }
        }
        break;
      }
    }
  }
  dismissModal() {
    let color;
    let flag;
    if (this.flag_vermelho) {
      flag = "VERMELHO"
      color = "red";
    } else if (this.flag_amarelo) {
      flag = "AMARELO";
      color = "yellow";
    } else if (this.flag_laranja) {
      flag = "LARANJA"
      color = "orange";
    } else if (this.flag_verde) {
      flag = "VERDE"
      color = "green";
    } else if (this.flag_azul) {
      flag = "AZUL"
      color = "blue";
    }

    this.modalCtrl.dismiss({
      'flag':flag,
      'sintomas':this.sintomas_esc
    });
    
  }


}



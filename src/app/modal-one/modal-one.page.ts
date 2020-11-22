import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.page.html',
  styleUrls: ['./modal-one.page.scss'],
})
export class ModalOnePage{

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss();
  }

}



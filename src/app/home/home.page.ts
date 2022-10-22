import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ContactsPageModule } from '../contacts/contacts.module';
import { ContactsPage } from '../contacts/contacts.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router,public modalCtrl: ModalController) {}
  goto(pagename){
this.router.navigate([pagename]);
  }
async  openContactModal(){
    let contactModal = await this.modalCtrl.create({
      component: ContactsPage,
      cssClass: 'contact', 
      backdropDismiss: false
    });
    contactModal.present();
    }
}

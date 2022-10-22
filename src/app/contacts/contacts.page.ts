import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  dismissModal(){
this.modalCtrl.dismiss()
  }

}

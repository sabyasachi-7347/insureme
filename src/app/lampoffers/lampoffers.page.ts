import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavigationExtras, Router } from '@angular/router';
import { CommondataService } from '../services/commondata.service';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { PluginutillService } from '../services/pluginutill.service';
import { ViewimagePage } from '../viewimage/viewimage.page';
@Component({
  selector: 'app-lampoffers',
  templateUrl: './lampoffers.page.html',
  styleUrls: ['./lampoffers.page.scss'],
})
export class LampoffersPage implements OnInit {
  curentUser: any;
  offers: any=[];

  constructor(public commondataService:CommondataService,public modalCtrl: ModalController,public firestore:AngularFirestore,public router:Router,public actionSheetController:ActionSheetController, public pluginServices:PluginutillService,) { }

  async ngOnInit() {
    this.curentUser = JSON.parse(localStorage.userData);
    this.offers = [];
    await this.firestore.collection("lampoffer").get().subscribe((doc:any)=>{
      console.log(doc);
      doc.docs.forEach((snapDoc)=>{
        console.log(snapDoc.data());
        this.offers.push(snapDoc.data());
      })
     })
    }

    async openPayout(payout){
      let contactModal = await this.modalCtrl.create({
        component: ViewimagePage,
        cssClass: 'contact', 
        backdropDismiss: false,
        componentProps: {
          "Data": payout
        }
      });
      contactModal.present();
      }

}

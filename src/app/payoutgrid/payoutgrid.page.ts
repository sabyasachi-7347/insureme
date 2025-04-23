import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavigationExtras, Router } from '@angular/router';
import { CommondataService } from '../services/commondata.service';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { PluginutillService } from '../services/pluginutill.service';
import { ViewimagePage } from '../viewimage/viewimage.page';

@Component({
  selector: 'app-payoutgrid',
  templateUrl: './payoutgrid.page.html',
  styleUrls: ['./payoutgrid.page.scss'],
})
export class PayoutgridPage implements OnInit {
  payouts:any = [];
  curentUser: any;
  constructor(public commondataService:CommondataService,public modalCtrl: ModalController,public firestore:AngularFirestore,public router:Router,public actionSheetController:ActionSheetController, public pluginServices:PluginutillService,) { }

 async ngOnInit() {
  this.curentUser = JSON.parse(localStorage.userData);
  this.payouts = [];
  await this.firestore.collection("payoutsgrid").get().subscribe((doc:any)=>{
    console.log(doc);
    doc.docs.forEach((snapDoc)=>{
      console.log(snapDoc.data());
      this.payouts.push(snapDoc.data());
    })
    // this.curentUser.email
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

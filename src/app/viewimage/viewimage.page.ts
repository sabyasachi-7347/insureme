import { Component, OnInit } from '@angular/core';
import { ModalController, NavController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-viewimage',
  templateUrl: './viewimage.page.html',
  styleUrls: ['./viewimage.page.scss'],
})
export class ViewimagePage implements OnInit {
  imageData: any;
  image: any;

  constructor(public modalCtrl:ModalController,public navCtrl:NavController,private navParams: NavParams) { }

  ngOnInit() {
this.imageData = this.navParams.data.Data
this.image = this.imageData.image;
  }
dismissModal(){
this.modalCtrl.dismiss()
  }
}

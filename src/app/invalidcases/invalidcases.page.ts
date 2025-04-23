import { Component, OnInit } from '@angular/core';

import { CommondataService } from '../services/commondata.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-invalidcases',
  templateUrl: './invalidcases.page.html',
  styleUrls: ['./invalidcases.page.scss'],
})
export class InvalidcasesPage implements OnInit {

  constructor(public commondataService:CommondataService,public firestore:AngularFirestore) { }
  allrejectcases:any = [];
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.allrejectcases = this.commondataService.allInvalidBusiness;
console.log(this.allrejectcases);

  }

}

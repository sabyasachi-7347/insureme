import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CommondataService } from '../services/commondata.service';

@Component({
  selector: 'app-adminpendingbusiness',
  templateUrl: './adminpendingbusiness.page.html',
  styleUrls: ['./adminpendingbusiness.page.scss'],
})
export class AdminpendingbusinessPage implements OnInit {
  business: any[];

  constructor(public commondataService:CommondataService,public firestore:AngularFirestore,) { }

  ngOnInit() {
  }
ionViewWillEnter(){
  this.business = this.commondataService.allPendingBusiness;
  console.log(this.business);
  
}

async reject(id,i){
  console.log(id,i);
  for(var j = 0;j<this.business.length;j++)
  if(this.business[j].id == id){
    await this.firestore.collection("business").doc(id).update({
      "approvedbyadmin":'R',
               }).catch((error) => {
                console.log(error);
                alert("Unable to process request");
                return;
               }).then((userResult) => {
                console.log(userResult);
                this.business.splice(i,1)
                // this.commondataService.allPendingBusiness.splice(i,1)
                //  this.goto('login');
                return;
               })
  }
    }
  
    async approve(id,i){
      console.log(id,i);
      for(var j = 0;j<this.business.length;j++)
      if(this.business[j].id == id){
        await this.firestore.collection("business").doc(id).update({
          "approvedbyadmin":'A',
                   }).catch((error) => {
                    console.log(error);
                    alert("Unable to process request");
                    return;
                   }).then((userResult) => {
                    console.log(userResult);
                    this.business.splice(i,1)
                    // this.commondataService.allPendingBusiness.splice(i,1)
                    //  this.goto('login');
                    return;
                   })
      }
        }
}

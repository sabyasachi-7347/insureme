import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavigationExtras, Router } from '@angular/router';
import { CommondataService } from '../services/commondata.service';

@Component({
  selector: 'app-adminpendingbusiness',
  templateUrl: './adminpendingbusiness.page.html',
  styleUrls: ['./adminpendingbusiness.page.scss'],
})
export class AdminpendingbusinessPage implements OnInit {
  business: any[];

  constructor(public commondataService:CommondataService,public firestore:AngularFirestore,public router:Router) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.business = this.commondataService.allPendingBusiness;
  console.log(this.business);

    await this.firestore.collection("dropdown").doc('bankname').get().subscribe((doc:any)=>{
       console.log(doc.data().bankname);
     localStorage.banklist = JSON.stringify(doc.data().bankname);
      })     
   }


async hold(id,i){
  console.log(id,i);
  for(var j = 0;j<this.business.length;j++){
    if(this.business[j].id == id){
      await this.firestore.collection("business").doc(id).update({
        "approvedbyadmin":'H',
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

async reject(id,i){
  console.log(id,i);
  for(var j = 0;j<this.business.length;j++){
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
    }
  
    async approve(id,i){
      console.log(id,i);
      for(var j = 0;j<this.business.length;j++){
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

       async modify(id,i){
        for(var j = 0;j<this.business.length;j++){
          if(this.business[j].id == id){
            let navigationExtras: NavigationExtras = {
              state: {
                business: this.business[j]
              }
            };
           this.router.navigate(['adminbusinessedit'],navigationExtras);
          }
        }
        }
}

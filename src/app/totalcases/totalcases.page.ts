import { Component, OnInit } from '@angular/core';
import { CommondataService } from '../services/commondata.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-totalcases',
  templateUrl: './totalcases.page.html',
  styleUrls: ['./totalcases.page.scss'],
})
export class TotalcasesPage implements OnInit {
  allcases:any = [];
  searchInput:any='';
  constructor(public commondataService:CommondataService,public firestore:AngularFirestore) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.allcases = this.commondataService.allPendingBusiness;
console.log(this.allcases);

  }


  async approve(email,i){
    console.log(email,i);
    for(var j = 0;j<this.allcases.length;j++)
    if(this.allcases[j].email == email){
      await this.firestore.collection("users").doc(email).update({
        "approvedbyadmin":'true',
                 }).catch((error) => {
                  console.log(error);
                  alert("Unable to process request");
                  return;
                 }).then((userResult) => {
                  console.log(userResult);
                  this.allcases.splice(i,1)
                  // this.commondataService.allPendingAgents.splice(i,1)
                  //  this.goto('login');
                  return;
                 })
    }
      }


      async reject(email,i){
        console.log(email,i);
        for(var j = 0;j<this.allcases.length;j++)
        if(this.allcases[j].email == email){
          await this.firestore.collection("users").doc(email).update({
            "approvedbyadmin":'disabled',
                     }).catch((error) => {
                      console.log(error);
                      alert("Unable to process request");
                      return;
                     }).then((userResult) => {
                      console.log(userResult);
                      this.allcases.splice(i,1)
                      // this.commondataService.allPendingAgents.splice(i,1)
                      //  this.goto('login');
                      return;
                     })
        }
          }


          searchBusiness(input){
            console.log(input);
            this.allcases = this.commondataService.allPendingBusiness.filter((user:any)=>{
            if((user.name.toString()).includes(input.target.value)){
              return user;
            }else if((user.lanNo.toString()).includes(input.target.value.toString())){
              return user;
            }
          })
        }

}

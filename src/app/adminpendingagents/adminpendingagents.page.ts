import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CommondataService } from '../services/commondata.service';

@Component({
  selector: 'app-adminpendingagents',
  templateUrl: './adminpendingagents.page.html',
  styleUrls: ['./adminpendingagents.page.scss'],
})
export class AdminpendingagentsPage implements OnInit {
  users: any=[];
  allMembers: any;

  constructor(public firestore:AngularFirestore,public commondataService:CommondataService,public auth:AngularFireAuth) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.users = this.commondataService.allPendingAgents;
  }

 async reject(email,i){
console.log(email,i);
for(var j = 0;j<this.users.length;j++)
if(this.users[j].email == email){
  await this.firestore.collection("users").doc(email).update({
    "approvedbyadmin":'disabled',
             }).catch((error) => {
              console.log(error);
              alert("Unable to process request");
              return;
             }).then((userResult) => {
              console.log(userResult);
              this.users.splice(i,1)
              // this.commondataService.allPendingAgents.splice(i,1)
              //  this.goto('login');
              return;
             })
}
  }

  async approve(email,i){
    console.log(email,i);
    for(var j = 0;j<this.users.length;j++)
    if(this.users[j].email == email){
      await this.firestore.collection("users").doc(email).update({
        "approvedbyadmin":'true',
                 }).catch((error) => {
                  console.log(error);
                  alert("Unable to process request");
                  return;
                 }).then((userResult) => {
                  console.log(userResult);
                  this.users.splice(i,1)
                  // this.commondataService.allPendingAgents.splice(i,1)
                  this.auth.createUserWithEmailAndPassword(email.trim(),'123456').then(async (data)=>{
        console.log(data);  
                }
        ).catch((err) => {
          console.log(err);
          console.log(JSON.parse(JSON.stringify(err)));
          
          var errMsg:any = JSON.parse(JSON.stringify(err))
          errMsg = errMsg.code;
          if(errMsg == 'auth/email-already-in-use'){
            alert("The email address is already in use by another account.")
          }
        })
                  //  this.goto('login');
                  return;
                 })
    }
      }

}

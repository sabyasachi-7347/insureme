import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.page.html',
  styleUrls: ['./addmember.page.scss'],
})
export class AddmemberPage implements OnInit {
  addbtn: any = true;
  name: any = "";
  email: any = "";
  mobile: any = "";
phoneReg:any = '/^[0-9]+${10}/';
  curentUser: any;
  constructor(public auth:AngularFireAuth,public firestore:AngularFirestore,) { }

  ngOnInit() {
  }

  showBtn(){

    if(this.name == "" || this.email == "" || this.mobile == ""){
      this.addbtn = true;
    }else{
      this.addbtn = false;
    }
    console.log(this.addbtn);
    
    
  }
  async addMember(){
    if(!(/^[0-9]+$/.test(this.mobile)) || !(this.mobile.length == 10)){
      alert("Please enter a valid mobile number");
      return;
    }else if(!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.email))){
      alert("Please enter a valid email id");
      return;
    }else if(!(/^[a-zA-Z ]+$/.test(this.name))){
      alert("Please enter a valid name");
      return;
    }else
    {
     this.curentUser = JSON.parse(localStorage.userData);
     console.log(this.curentUser);
     console.log(this.curentUser.email);
     
     
      this.auth.createUserWithEmailAndPassword(this.email.trim(),this.mobile.toString().trim()).then(async (data)=>{
        console.log(data);
        if(data.user.uid)
        {
          await this.firestore.collection("users").doc(this.email.trim()).set({
"name":this.name.trim(),
"email":this.email.trim(),
"mobile":this.mobile.trim(),
"enrolledby":this.curentUser.email,
"role":'subagent'
         }).catch((error) => {
          console.log(error);
          alert("Unable to process request");
          return;
         }).then((userResult) => {
          console.log(userResult);
          alert("Sub Agent registered sucessfully");
          this.name = "";
          this.email = "";
          this.mobile = "";
          //  this.goto('login');
          return;
         })
        }}).catch((err) => {
          console.log(err);
          console.log(JSON.parse(JSON.stringify(err)));
          
          var errMsg:any = JSON.parse(JSON.stringify(err))
          errMsg = errMsg.code;
          if(errMsg == 'auth/email-already-in-use'){
            alert("The email address is already in use by another account.")
          }
        })
    }
  }
}

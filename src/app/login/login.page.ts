import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import {
  AngularFireAuth
} from '@angular/fire/compat/auth';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordShow: any = false;
  passwordShowType: string = "password";
  colldata: any;
  // docref: any;
  constructor(public router:Router,
   public auth:AngularFireAuth,
   public firestore:AngularFirestore,
   public formBuilder: FormBuilder
    ) {
      
     }

     loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordShow:[false,[]]
       });

  ngOnInit() {
  }

  get errorControl() {
    return this.loginForm.controls;
  }

async login(){
  console.log(this.loginForm.value);
  
    this.auth.signInWithEmailAndPassword(this.loginForm.value.email.trim(),this.loginForm.value.password).then((data)=>{
console.log(data);
if(data.user.uid)
{
  const docref:any =  this.firestore.collection("users").doc("testuser@gmail.com");
 this.colldata = docref.get().subscribe((doc)=>{
    console.log(doc.data());
    return doc.data()
    
  })
  this.goto('loginwithpin')

}  
})

// let database = this.firestore.collection("users").snapshotChanges();
// let collectionData:any = await database.subscribe((querySnapshot:any) => {
//   let dataCollection = querySnapshot.map((documentSnapshot) => {
//     return {"id":documentSnapshot.payload.doc.id,
//     "name":documentSnapshot.payload.doc.data()['name']
//   };
//   });
//   console.log("Data");
  
//   console.log(dataCollection);
  
// })




  }
  goto(page){
    this.router.navigate([page]);
  }
  showPassword(){
    if(this.passwordShow){
      this.passwordShowType = "text";
    }else{
      this.passwordShowType = "password";
    }
  }
}

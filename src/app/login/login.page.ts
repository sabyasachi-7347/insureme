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
import { Platform, ToastController } from '@ionic/angular';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordShow: any = false;
  passwordShowType: string = "password";
  colldata: any;
  appVersions:any;
  devicePlatform: string;
  // docref: any;
  constructor(public router:Router,
   public auth:AngularFireAuth,
   public firestore:AngularFirestore,
   public formBuilder: FormBuilder,
   public appVer:AppVersion,
   public plt:Platform,
   public toastController:ToastController
    ) {
      console.log(this.appVer);
      
      this.appVer.getVersionNumber().then((ver)=>{
        this.appVersions = ver;
        console.log(this.appVersions);
      }).catch((err)=>{
        console.log(err);
      })

     if(this.plt.is('android') || this.plt.is('ios')){
      this.devicePlatform = "Mobile";
     }else{
      this.devicePlatform = "Web";
     } 
      

     }

     loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordShow:[false,[]]
       });

  ngOnInit() {
    try{
      if(localStorage.pin){
        this.goto('loginwithpin');
      }else{
        
      }
    }catch(e){
      
    }
  }

  get errorControl() {
    return this.loginForm.controls;
  }

async login(){
  
  console.log(this.loginForm.value);
  if(this.loginForm.value.email.trim() == '' || this.loginForm.value.password.trim() == ''){
    alert("Please enter email and password");
    return;
  }
    this.auth.signInWithEmailAndPassword(this.loginForm.value.email.trim(),this.loginForm.value.password).then(async (data)=>{
console.log(data);
var toast = await this.toastController.create({
  message: "Logged in with "+this.loginForm.value.email.trim(),
  duration: 5000,
  position: 'top',
})

toast.present();
if(data.user.uid)
{
  const docref:any =  this.firestore.collection("users").doc(this.loginForm.value.email.trim());
 this.colldata = docref.get().subscribe((doc)=>{
    console.log(doc.data());
    localStorage.userData = JSON.stringify(doc.data());
    localStorage.role = JSON.stringify(doc.data().role);
    if(doc.data().role == 'admin'){
      this.goto('admin');
    }else{
      this.goto('loginwithpin')      
    }
    return doc.data()
    
  })
  console.log(this.colldata);
  
  localStorage.uuid = JSON.stringify(data.user.uid); 
  

}else{

}  
}).catch((e)=>{
console.log(e);
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

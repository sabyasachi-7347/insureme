import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import {
  AngularFireAuth
} from '@angular/fire/compat/auth';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  toast: HTMLIonToastElement;

  constructor(public router:Router,
    public auth:AngularFireAuth,
    public firestore:AngularFirestore,
    public formBuilder: FormBuilder,
   public toastCtrl:ToastController
    ) { }
    forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required]]
       });
  ngOnInit() {
  }

  get errorControl() {
    return this.forgotPasswordForm.controls;
  }
 async sendLink(){
  console.log(this.forgotPasswordForm.value);
  console.log(this.forgotPasswordForm.value.email);
  this.auth.sendPasswordResetEmail(this.forgotPasswordForm.value.email)
  .then(async (result)=>{
    console.log(result);
this.toast = await this.toastCtrl.create({ message: "A link will be sent to your email id "+this.forgotPasswordForm.value.email+" , Please check your spam mails.",
duration: 3000,});
this.toast.present();
    
  })
    
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { PluginutillService } from '../services/pluginutill.service';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import {
  AngularFireAuth
} from '@angular/fire/compat/auth';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  imageName: any;
  clickedimage: any;
  aadharFrontImg: any="";
  aadharBackImg: any="";
  passwordShow: any = false;
  passwordShowType: string = "password";
  colldata: any;
  constructor(public router:Router,public modalCtrl:ModalController, public actionSheetController:ActionSheetController, public pluginServices:PluginutillService,public auth:AngularFireAuth,
    public firestore:AngularFirestore,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  registerForm = this.formBuilder.group({
    name: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
    email: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    mobile: ['', [Validators.required,Validators.pattern('^[0-9]{10}'), Validators.minLength(10), Validators.maxLength(10)]],
    aadhaarno: ['', [Validators.required,Validators.pattern('^[0-9]{12}'), Validators.maxLength(12), Validators.minLength(12)]],
    password: ['', [Validators.required]],
    cpassword: ['', [Validators.required]],
    passwordShow:[false,[]]
     });

     public errorMessages = {
      name: [
        { type: 'required', message: 'Please enter name' },
        { type: 'pattern', message: 'Please enter valid name' },
      ],
      email: [
        { type: 'required', message: 'Please enter email' },
        { type: 'pattern', message: 'Please enter valid email' },
      ],
      mobile: [
        { type: 'required', message: 'Please enter mobile number' },
        { type: 'pattern', message: 'Please enter valid number' },
        { type: 'minLength', message: 'Phone number should be 10 digits' },
        { type: 'maxLength', message: 'Phone number should be 10 digits' },
      ],
      aadhaarno: [
        { type: 'required', message: 'Please enter aadhaar number' },
        { type: 'pattern', message: 'Please enter valid number' },
        { type: 'minLength', message: 'Aadhaar number should be 12 digits' },
        { type: 'maxLength', message: 'Aadhaar number should be 12 digits' },
      ],
      password: [
        { type: 'required', message: 'Please enter password' }
      ],
      cpassword: [
        { type: 'required', message: 'Please enter password' }
      ]
    }
     get errorControl() {
      return this.registerForm.controls;
    }
    get name() {
      return this.registerForm.get("name");
    }
    get email() {
      return this.registerForm.get("email");
    }
    get mobile() {
      return this.registerForm.get("mobile");
    }
    get aadhaarno() {
      return this.registerForm.get("aadhaarno");
    }
    get password() {
      return this.registerForm.get("password");
    }
    get cpassword() {
      return this.registerForm.get("cpassword");
    }

  goto(page){
    this.router.navigate([page]);
  }

async imageOptionPopup(imgName){
console.log(imgName);
this.imageName = imgName;


const actionSheet = await this.actionSheetController.create({
  cssClass: 'small-togglePopup',
  buttons: [{
    cssClass: 'camera-icon',
    text: 'camera',
    icon: 'camera',
    handler: async () => {
      console.log('Delete clicked');
      // this.aadharFrontImg = "";
      // this.aadharBackImg = "";
    await this.pluginServices.captureImage().then((data) => {
      this.clickedimage = this.pluginServices.clickedImage;
      // alert(this.clickedimage)
      if(imgName == "Aadhaar Front"){
this.aadharFrontImg = this.clickedimage;
      }else{
        this.aadharBackImg = this.clickedimage;
      }
    })
    }
  }, {
    cssClass: 'gallery-icon',
    text: 'Gallery',
    icon: 'images',
    handler: () => {
      // this.aadharFrontImg = "";
      // this.aadharBackImg = "";
      this.pluginServices.selectFromDevice().then((data)=>{
        this.clickedimage = this.pluginServices.clickedImage;
      // alert(this.clickedimage)
      if(imgName == "Aadhaar Front"){
        this.aadharFrontImg = this.clickedimage;
              }else{
                this.aadharBackImg = this.clickedimage;
              }
      })
    }
  }, {
    text: 'Cancel',
    role: 'cancel',
    handler: () => {
      console.log('Cancel clicked');
    }
  }]
});
await actionSheet.present();
// if (this.dd.documentType != "" && this.dd.documentType != null && this.dd.documentType != undefined) {
//   await actionSheet.present();
// } else {
//   alert("Please select document type first");
// }

  }

  async signup(){
    if(this.registerForm.value.password.trim() == '' || this.registerForm.value.cpassword.trim() == '' || this.registerForm.value.password.trim() != this.registerForm.value.cpassword.trim()){
      alert("Password and Confirm Password field should not be empty and should be same");
      return;
    }
    if(this.aadharFrontImg == "" || this.aadharBackImg ==""){
      alert("Please attach aadhaar card picture");
      return;
    }else{
      // this.auth.createUserWithEmailAndPassword(this.registerForm.value.email.trim(),this.registerForm.value.password).then(async (data)=>{
      //   console.log(data);
      //   if(data.user.uid)
      //   {
          await this.firestore.collection("users").doc(this.registerForm.value.email.trim()).set({
"name":this.registerForm.value.name.trim(),
"email":this.registerForm.value.email.trim(),
"mobile":this.registerForm.value.mobile.toString().trim(),
"aadhaar":this.registerForm.value.aadhaarno.toString().trim(),
"aadhaarFront":this.aadharFrontImg,
"aadhaarBack":this.aadharBackImg,
"enrolledby":'admin',
"approvedbyadmin":'false',
"role":'agent'
         }).catch((error) => {
          console.log(error);
          alert("Unable to process request");
          return;
         }).then((userResult) => {
          console.log(userResult);
          alert("User registered sucessfully");
          this.registerForm.reset();
          this.aadharFrontImg = '';
          this.aadharBackImg = '';
          //  this.goto('login');
          return;
         })
        // }}
        // ).catch((err) => {
        //   console.log(err);
        //   console.log(JSON.parse(JSON.stringify(err)));
          
        //   var errMsg:any = JSON.parse(JSON.stringify(err))
        //   errMsg = errMsg.code;
        //   if(errMsg == 'auth/email-already-in-use'){
        //     alert("The email address is already in use by another account.")
        //   }
        // })
    }
  }

  showPassword(){
    if(this.passwordShow){
      this.passwordShowType = "text";
    }else{
      this.passwordShowType = "password";
    }
  }

  
}

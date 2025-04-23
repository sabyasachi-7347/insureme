import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActionSheetController } from '@ionic/angular';
import { PluginutillService } from '../services/pluginutill.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.page.html',
  styleUrls: ['./userprofile.page.scss'],
})
export class UserprofilePage implements OnInit {
userProfileOpj:any = {};
personalDataRead=true;
bankDataRead=true;
  userData: any;
  colldata: any;
  docref:any;
  clickedimage: string;
  banks: any = [];
  showBankEdit: any;
  constructor(public firestore:AngularFirestore,public actionSheetController:ActionSheetController,public pluginServices:PluginutillService,) { }

 async ngOnInit() {
    // this.banks = []
     await this.firestore.collection("dropdown").doc('bankname').get().subscribe((doc:any)=>{
      console.log(doc.data().bankname);
      this.banks = doc.data().bankname;
     })

    this.userData = JSON.parse(localStorage.userData);
    this.docref =  this.firestore.collection("users").doc(this.userData.email.trim());
     this.docref.get().subscribe((doc)=>{
       console.log(doc.data());
      //  localStorage.userData = JSON.stringify(doc.data());
      this.colldata = doc.data()
       
    this.userProfileOpj.name = this.colldata.name?this.colldata.name:'';
    this.userProfileOpj.email = this.colldata.email?this.colldata.email:'';
    this.userProfileOpj.mobile = this.colldata.mobile?this.colldata.mobile:'';
    this.userProfileOpj.gender = this.colldata.gender?this.colldata.gender:'';
    this.userProfileOpj.beneficiary = this.colldata.beneficiary?this.colldata.beneficiary:'';
    this.userProfileOpj.bankname = this.colldata.bankname?this.colldata.bankname:'';
    this.userProfileOpj.acno = this.colldata.acno?this.colldata.acno:'';
    this.userProfileOpj.ifsc = this.colldata.ifsc?this.colldata.ifsc:'';
    this.userProfileOpj.panno = this.colldata.panno?this.colldata.panno:'';
    this.userProfileOpj.profilePicture = this.colldata.profilePicture?this.colldata.profilePicture:'';
    if(this.userProfileOpj.acno == ''){
      this.showBankEdit = true;
    }else{
      this.showBankEdit = false;
    }
     })
    
  }
 async openCamera(){
    console.log("Camera Selected");
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
          if(this.clickedimage == '' || this.clickedimage == undefined){
            alert("Photo not selected");
            return;
          }else{
            this.userProfileOpj.profilePicture = this.clickedimage;
            this.firestore.collection("users").doc(this.userData.email.trim()).set({
              "profilePicture":this.userProfileOpj.profilePicture,
            }, { merge: true }).then(()=>{
              console.log("Profile Picture Saved");
            }).catch((err)=>{
              console.log(err);  
            })
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
          if(this.clickedimage == '' || this.clickedimage == undefined){
            alert("Photo not selected");
            return;
          }else{
            this.userProfileOpj.profilePicture = this.clickedimage;
            this.firestore.collection("users").doc(this.userData.email.trim()).set({
              "profilePicture":this.userProfileOpj.profilePicture,
            }, { merge: true }).then(()=>{
              console.log("Profile Picture Saved");
            }).catch((err)=>{
              console.log(err);  
            })
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
    
  }

changeReadPersonal(data){
if(data){
this.personalDataRead = false;
}else{
  this.personalDataRead = true;
  this.setPersonalData();
}
  }
  changeReadBank(data){
    if(data){
      this.bankDataRead = false;
      }else{
        this.bankDataRead = true;
        this.setBankData();
      }
  }
  
  setPersonalData(){
    if(!(/^[a-zA-Z ]+$/.test(this.userProfileOpj.name))||(this.userProfileOpj.name=='')||(this.userProfileOpj.name==undefined)){
         alert("Invalid name");
         this.personalDataRead = false;
         return;
    }
    else if(!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.userProfileOpj.email)) || (this.userProfileOpj.email=='') || (this.userProfileOpj.email==undefined)){
      alert("Invalid email");
      this.personalDataRead = false;
      return;
    }
    else if(!(/^[0-9]{10}/.test(this.userProfileOpj.mobile)) || (this.userProfileOpj.mobile=="") || (this.userProfileOpj.mobile == undefined)){
      alert("Invalid mobile number");
      this.personalDataRead = false;
      return;
    }
    else if(this.userProfileOpj.gender == ''){
      alert("Please select gender");
      this.personalDataRead = false;
      return;
    }
    this.firestore.collection("users").doc(this.userData.email.trim()).set({
      "name":this.userProfileOpj.name,
      "email":this.userProfileOpj.email,
      "mobile":this.userProfileOpj.mobile,
      "gender":this.userProfileOpj.gender
    }, { merge: true }).then(()=>{
      console.log("Personal Data Save entered");
    }).catch((err)=>{
      console.log(err);  
    })

  }
  setBankData(){
    if(!(/^[a-zA-Z ]+$/.test(this.userProfileOpj.beneficiary))||(this.userProfileOpj.beneficiary=='')||(this.userProfileOpj.beneficiary==undefined)){
      alert("Invalid name");
      this.bankDataRead = false;
      return;
 }
 else if(!(/^[0-9]{14}/.test(this.userProfileOpj.acno)) || (this.userProfileOpj.acno=='') || (this.userProfileOpj.acno==undefined)){
   alert("Invalid Account Number");
   this.bankDataRead = false;
   return;
 }
 else if(!(/^[A-Z]{4}0[A-Z0-9]{6}$/.test(this.userProfileOpj.ifsc))||(this.userProfileOpj.ifsc == "")){
   alert("Invalid IFSC Code");
   this.bankDataRead = false;
   return;
 }else if((this.userProfileOpj.panno == '') || (this.userProfileOpj.panno == undefined) || !((/[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(this.userProfileOpj.panno)))){
  alert("Invalid PAN Number");
  this.bankDataRead = false;
  return;
}else if((this.userProfileOpj.bankname == '') || (this.userProfileOpj.bankname == undefined)){
  alert("Please Select Bank Name");
  this.bankDataRead = false;
  return;
}
this.firestore.collection("users").doc(this.userData.email.trim()).set({
  "beneficiary":this.userProfileOpj.beneficiary,
  "acno":this.userProfileOpj.acno,
  "bankname":this.userProfileOpj.bankname,
  "ifsc":this.userProfileOpj.ifsc,
  "panno":this.userProfileOpj.panno
}, { merge: true }).then(()=>{
  console.log("Bank Data Save entered");
  this.showBankEdit = false;
}).catch((err)=>{
  console.log(err);  
})
  }
}

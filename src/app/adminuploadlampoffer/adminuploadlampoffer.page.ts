import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavigationExtras, Router } from '@angular/router';
import { CommondataService } from '../services/commondata.service';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { PluginutillService } from '../services/pluginutill.service';

@Component({
  selector: 'app-adminuploadlampoffer',
  templateUrl: './adminuploadlampoffer.page.html',
  styleUrls: ['./adminuploadlampoffer.page.scss'],
})
export class AdminuploadlampofferPage implements OnInit {

  results:any = [];
  allUsers:any = [];
  name: any="";
  email: any="";
  years: any="";
  selectedDate:any = "";
  imageName: any="";
  clickedimage: any='';
  uploadpaygrid: any = "";
  constructor(public commondataService:CommondataService,public firestore:AngularFirestore,public router:Router,public actionSheetController:ActionSheetController, public pluginServices:PluginutillService,) { 
    
  }
  
 async ngOnInit() {
  await this.firestore.collection("users").get().subscribe((doc:any)=>{
    console.log(doc);
    doc.docs.forEach((snapDoc)=>{
      console.log(snapDoc.data());
      this.allUsers.push(snapDoc.data().name+' | '+snapDoc.data().email+' | '+snapDoc.data().mobile);
      this.results = this.allUsers;
    })
    // this.curentUser.email
   })

   await this.firestore.collection("dropdown").doc('yearmonth').get().subscribe((doc:any)=>{
    console.log(doc.data().yearmonth);
    this.years = doc.data().yearmonth;
   })
  }

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.allUsers.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

  async selectUser(result){
     var selectedUser = result.split(' | ')[1].trim();
     console.log(selectedUser);
     this.name = result.split(' | ')[0].trim()
     this.email = result.split(' | ')[1].trim()
  }
  async imageOptionPopup(imgName){
    console.log(imgName);
    this.imageName = imgName+this.selectedDate;
    
    
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
          this.uploadpaygrid = this.clickedimage;
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
          this.uploadpaygrid = this.clickedimage;
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

  async uploadDetails(){
        if(this.selectedDate == ''){
          alert("Please select date");
          return;
        }
        if(this.uploadpaygrid == ''){
          alert("Please upload image");
          return;
        }
        await this.firestore.collection("lampoffer").doc(this.email.trim()+this.selectedDate.trim()).set({
          "date":this.selectedDate.trim(),
          "image":this.uploadpaygrid,
                   }).catch((error) => {
                    console.log(error);
                    alert("Unable to process request");
                    return;
                   }).then((userResult) => {
                    console.log(userResult);
                    alert("Offer Set for month "+this.selectedDate);
                    this.selectedDate = "";
                    this.uploadpaygrid = "";
                   })
      }

}

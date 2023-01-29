import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-addbusiness',
  templateUrl: './addbusiness.page.html',
  styleUrls: ['./addbusiness.page.scss'],
})
export class AddbusinessPage implements OnInit {
  openDatetimeField: boolean = false;
  selectedDate: any="";
  curentUser: any;

  constructor(public formBuilder: FormBuilder,public auth:AngularFireAuth,public firestore:AngularFirestore,) { }
  addBusinessForm = this.formBuilder.group({
    typeOfBorrow: ['', [Validators.required]],
    bankName: ['', [Validators.required]],
    lanNo: ['', [Validators.required]],
    name: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
    disburseDate: ['', [Validators.required]],
    disbursedAmount: ['', [Validators.required,Validators.pattern('^[0-9]{1,7}')]],
    // currentPoint:['', [Validators.required,Validators.pattern('^[0-9]{1,3}')]],
    remarks:['', [Validators.required]]
     });

     public errorMessages = {
      typeOfBorrow: [
        { type: 'required', message: 'Please select type of borrow' },
      ],
      bankName: [
        { type: 'required', message: 'Please select bank name' },
      ],
      lanNo: [
        { type: 'required', message: 'Please enter LAN number' },
      ],
      name: [
        { type: 'required', message: 'Please enter customer name' },
        { type: 'pattern', message: 'Please enter valid name' }
      ],
      disburseDate: [
        { type: 'required', message: 'please select disbursed date' }
      ],
      disbursedAmount: [
        { type: 'required', message: 'Please enter disbursed amount' },
        { type: 'pattern', message: 'Please enter valid amount' }
      ],
      // currentPoint: [
      //   { type: 'required', message: 'Please enter current point' },
      //   { type: 'pattern', message: 'Please enter valid percentage' }
      // ],
      remarks: [
        { type: 'required', message: 'Please enter remarks' }
      ]
    }
     get errorControl() {
      return this.addBusinessForm.controls;
    }
    get typeOfBorrow() {
      return this.addBusinessForm.get("typeOfBorrow");
    }
    get bankName() {
      return this.addBusinessForm.get("bankName");
    }
    get lanNo() {
      return this.addBusinessForm.get("lanNo");
    }
    get name() {
      return this.addBusinessForm.get("name");
    }
    get disburseDate() {
      return this.addBusinessForm.get("disburseDate");
    }
    get disbursedAmount() {
      return this.addBusinessForm.get("disbursedAmount");
    }
    // get currentPoint() {
    //   return this.addBusinessForm.get("currentPoint");
    // }
    get remarks() {
      return this.addBusinessForm.get("remarks");
    }

  ngOnInit() {
  }
  openDatetime(){
    this.openDatetimeField = true;
  }
  hideDatetime(){
    this.openDatetimeField = false;
    if(this.selectedDate){
      this.selectedDate = this.selectedDate.split('T')[0];
      var selectedDateTemp = this.selectedDate.split('-')[2]+'-'+this.selectedDate.split('-')[1]+'-'+this.selectedDate.split('-')[0];
      this.selectedDate = selectedDateTemp;
    }
  }

 async addNewBusiness(){
  this.curentUser = JSON.parse(localStorage.userData);
    // this.auth.createUserWithEmailAndPassword(this.email.trim(),this.mobile.toString().trim()).then(async (data)=>{
      // console.log(data);
      // if(data.user.uid)
      // {
        await this.firestore.collection("business").doc().set({
"typeOfBorrow":this.addBusinessForm.value.typeOfBorrow.trim(),
"bankName":this.addBusinessForm.value.bankName.trim(),
"lanNo":this.addBusinessForm.value.lanNo.trim(),
"name":this.addBusinessForm.value.name.trim(),
"disburseDate":this.selectedDate.trim(),
"disbursedAmount":this.addBusinessForm.value.disbursedAmount.trim(),
"approvedbyadmin":'P',
// "currentPoint":this.addBusinessForm.value.currentPoint.trim(),
"remarks":this.addBusinessForm.value.remarks.trim(),
"createdBy":this.curentUser.email,
"agent":this.curentUser.enrolledby
       }).catch((error) => {
        console.log(error);
        alert("Unable to process request");
        return;
       }).then((userResult) => {
        console.log(userResult);
        alert("Business added sucessfully");
        this.addBusinessForm.reset();
        //  this.goto('login');
        return;
       })
      // }
    // })
      // .catch((err) => {
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

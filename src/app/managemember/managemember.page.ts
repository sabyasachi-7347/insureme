import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managemember',
  templateUrl: './managemember.page.html',
  styleUrls: ['./managemember.page.scss'],
})
export class ManagememberPage implements OnInit {
users:any;
  curentUser: any;
  allMembers:any = [];
  memberList: any = [];
  selectedMember:any="";
  percentEntered:any = "";
  selectedBank:any = "";
  selectedDate:any = "";

  fieldValidation:boolean = true;
  banks: any = [];
  openFromDatetimeField: boolean;
  selectedFromDate: any;
  selectedToDate: any;
  openToDatetimeField: boolean;
  hideBankDropdown: boolean = false;

  memberListSearch: any=[];
  searchName: any;
  constructor(public firestore:AngularFirestore,public router:Router) { }

 async ngOnInit() {
  await this.firestore.collection("dropdown").doc('bankname').get().subscribe((doc:any)=>{
    console.log(doc.data().bankname);
    this.banks = doc.data().bankname;
   })
    this.curentUser = JSON.parse(localStorage.userData);
   this.users = await this.firestore.collection("users", ref => ref.where('enrolledby', "==", this.curentUser.email)).get().subscribe((doc:any)=>{
    console.log(doc);
    doc.docs.forEach((snapDoc)=>{
      console.log(snapDoc.data());
      this.allMembers.push(snapDoc.data());
      this.memberList.push({name:snapDoc.data().name,value:snapDoc.data().email})
    })
    // this.curentUser.email
   })
  }
  getMember(data){
    console.log(data);
    if(this.selectedMember != '' && this.percentEntered != '' && this.selectedBank !="" && this.selectedDate !=""){
      this.fieldValidation = false;
    }else{
      this.fieldValidation = true;
    }
    if(this.selectedMember == 'all'){
      this.hideBankDropdown = false;
      this.selectedBank = "all";
    }else{
      for(var i = 0; i< this.allMembers.length; i++){
        if(this.allMembers[i].email == this.selectedMember){
          this.selectedBank = this.allMembers[i].bankname?this.allMembers[i].bankname:'';
          this.hideBankDropdown = true;
        break;
        }
      }
      if(this.selectedBank == ''){
        this.hideBankDropdown = false;
      }else{
        this.hideBankDropdown = true;
      }
    }
  }
  setBank(data){
    console.log(data);
    if(this.percentEntered != '' && this.selectedBank !="" && this.selectedDate !=""){
      this.fieldValidation = false;
    }else{
      this.fieldValidation = true;
    }
  }
  setDate(data){
    console.log(data);
    if(this.selectedMember != '' && this.percentEntered != '' && this.selectedBank !="" && this.selectedDate !=""){
      this.fieldValidation = false;
    }else{
      this.fieldValidation = true;
    }
  }
  checkPercentage(){
    if(this.selectedMember != '' && this.percentEntered != '' && this.selectedBank !="" && this.selectedDate !=""){
      this.fieldValidation = false;
    }else{
      this.fieldValidation = true;
    }
  }

  setPercent(){
    console.log("Percent set called");
    
      if(this.selectedMember != '' && this.percentEntered != '' && this.selectedBank !=""){
        this.fieldValidation = false;
         if(this.selectedToDate && this.selectedToDate){
         var toDateMon = this.selectedToDate.split('-')[1];
         var toDateYr = this.selectedToDate.split('-')[2];
         var fromDateMon = this.selectedFromDate.split('-')[1];
         var fromDateYr = this.selectedFromDate.split('-')[2];
         if(toDateMon != fromDateMon){
          alert("Please select date for same month and year");
          return
         }else if(toDateYr != fromDateYr){
          alert("Please select date for same month and year");
          return
         }
         }else{
           alert("please enter valid from date and to date");
           return;
         }
         if(this.selectedMember == 'all' && this.selectedBank == 'all'){
          for(var i = 0; i< this.allMembers.length; i++){
              this.selectedBank = this.allMembers[i].bankname?this.allMembers[i].bankname:'';
              this.firestore.collection("users").doc(this.allMembers[i].email.trim()).set({
                "currentyear":this.selectedFromDate.split('-')[2],
                "currentmonth":this.selectedFromDate.split('-')[1],
                "percentage":this.percentEntered,
              }, { merge: true }).then(()=>{
                
              }).catch((err)=>{
                console.log(err);  
              })
          }
          alert("Percentage set for the users");
                this.selectedMember = "";
                this.selectedFromDate = "";
                this.selectedToDate = "";
                this.selectedBank = "";
                this.hideBankDropdown = false;
                this.percentEntered ="";
         }else if(this.selectedMember == 'all' && this.selectedBank != 'all'){
          for(var i = 0; i< this.allMembers.length; i++){
            if(this.allMembers[i].bankname == this.selectedBank){
              this.firestore.collection("users").doc(this.allMembers[i].email.trim()).set({
                "currentyear":this.selectedFromDate.split('-')[2],
                "currentmonth":this.selectedFromDate.split('-')[1],
                "percentage":this.percentEntered,
              }, { merge: true }).then(()=>{
               
              }).catch((err)=>{
                console.log(err);  
              })
            }
          }
          alert("Percentage set for the users");
          this.selectedMember = "";
          this.selectedFromDate = "";
          this.selectedToDate = "";
          this.selectedBank = "";
          this.hideBankDropdown = false;
          this.percentEntered ="";
         }else{
          for(var i = 0; i< this.allMembers.length; i++){
            if(this.allMembers[i].email == this.selectedMember){
              this.firestore.collection("users").doc(this.allMembers[i].email.trim()).set({
                "currentyear":this.selectedFromDate.split('-')[2],
                "currentmonth":this.selectedFromDate.split('-')[1],
                "percentage":this.percentEntered,
              }, { merge: true }).then(()=>{
               
              }).catch((err)=>{
                console.log(err);  
              })
            }
          }
          alert("Percentage set for the users");
          this.selectedMember = "";
          this.selectedFromDate = "";
          this.selectedToDate = "";
          this.selectedBank = "";
          this.hideBankDropdown = false;
          this.percentEntered ="";
         }
      }else{
        this.fieldValidation = true;
        alert("Please fill all required fields");
      }
    

    
  }

  openFromDatetime(){
    this.openFromDatetimeField = true;
  }
  hideFromDatetime(){
    this.openFromDatetimeField = false;
    if(this.selectedFromDate){
      this.selectedFromDate = this.selectedFromDate.split('T')[0];
      var selectedDateTemp = this.selectedFromDate.split('-')[2]+'-'+this.selectedFromDate.split('-')[1]+'-'+this.selectedFromDate.split('-')[0];
      this.selectedFromDate = selectedDateTemp;
    }
   
  }

  openToDatetime(){
    this.openToDatetimeField = true;
  }
  hideToDatetime(){
    this.openToDatetimeField = false;
    if(this.selectedToDate){
      this.selectedToDate = this.selectedToDate.split('T')[0];
      var selectedDateTemp = this.selectedToDate.split('-')[2]+'-'+this.selectedToDate.split('-')[1]+'-'+this.selectedToDate.split('-')[0];
      this.selectedToDate = selectedDateTemp;
    }
   
  }
  searchNameBtn(){
    this.memberListSearch = [];
    this.allMembers.forEach((member)=>{
      if(member.name.includes(this.searchName)){
        this.memberListSearch.push(member)
      }
    })
  }

  goto(page){
    this.router.navigate([page]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginwithpin',
  templateUrl: './loginwithpin.page.html',
  styleUrls: ['./loginwithpin.page.scss'],
})
export class LoginwithpinPage implements OnInit {
  enteredPin: any;
  d1: any = "";
  d2: any = "";
  d3: any = "";
  d4: any = "";
  firstPIN: any;
  secondPIN: any;

  constructor(public router:Router) { }
  setPin:any;
  ngOnInit() { }

  ionViewWillEnter(){
    this.d1 = "";
    this.d2 = "";
    this.d3 = "";
    this.d4 = "";
    try{
      if(localStorage.pin && localStorage.pin !=""){
        this.setPin = '2';
      }else{
        this.setPin = '0';
      }
    }catch(e){
      this.setPin = '0';
    }
  }

  goto(page){
    this.router.navigate([page]);
  }

  otpController(event,next,prev,curr){
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
      curr.blur();
     return 0;
    } 

  }
  setpin(){
    if(this.d1 == "" || this.d2 == "" || this.d3 == "" || this.d4 == ""){
      alert("Please enter 4 digit PIN");
      return;
    }
    this.enteredPin = this.d1+''+this.d2+''+this.d3+''+this.d4;
    console.log(this.enteredPin);
    this.firstPIN = this.enteredPin;
    this.setPin = '1';
    this.d1="";
    this.d2="";
    this.d3="";
    this.d4="";    
  }  
  confirmPin(){
    if(this.d1 == "" || this.d2 == "" || this.d3 == "" || this.d4 == ""){
      alert("Please enter 4 digit PIN");
      return;
    }
    this.enteredPin = this.d1+''+this.d2+''+this.d3+''+this.d4;
    console.log(this.enteredPin);
    this.secondPIN = this.enteredPin;
    if(this.firstPIN == this.secondPIN){
      localStorage.pin = JSON.stringify(this.firstPIN);
      this.goto('home');
    }else{
      alert("Set PIN and Confirm PIN not matched");
      return;
    }
  } 

  signin(){
    if(this.d1 == "" || this.d2 == "" || this.d3 == "" || this.d4 == ""){
      alert("Please enter 4 digit PIN");
      return;
    }
    this.enteredPin = this.d1+''+this.d2+''+this.d3+''+this.d4;
    console.log(this.enteredPin);
    if(this.enteredPin == JSON.parse(localStorage.pin)){
      this.d1="";
      this.d2="";
      this.d3="";
      this.d4="";
      this.goto('home');
    }else{
      alert("Wrong PIN entered, Please try again");
      this.d1="";
      this.d2="";
      this.d3="";
      this.d4="";
      return;
    }
  }

  forgotpin(){
    localStorage.pin="";
    localStorage.role="";
    localStorage.uuid="";
    localStorage.userData="";
    this.goto('login');
  }
}

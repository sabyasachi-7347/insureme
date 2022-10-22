import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginwithpin',
  templateUrl: './loginwithpin.page.html',
  styleUrls: ['./loginwithpin.page.scss'],
})
export class LoginwithpinPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  goto(page){
    this.router.navigate([page]);
  }

  otpController(event,next,prev){
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
     return 0;
    } 
    
  }
  
}

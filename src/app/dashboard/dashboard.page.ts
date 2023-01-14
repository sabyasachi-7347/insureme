import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  yearValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  dashboard:any ={};
  constructor(public router:Router) {
    this.dashboard.totalredeem = "0";
    this.dashboard.invalidcases = "0";
    this.dashboard.totalcases = "0";
    this.dashboard.totalpaid ="0";
    this.dashboard.totalpending ="0";
   }
goto(page){
  this.router.navigate([page]);
}

  ngOnInit() {
  }

}

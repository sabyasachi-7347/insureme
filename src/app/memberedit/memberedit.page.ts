import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-memberedit',
  templateUrl: './memberedit.page.html',
  styleUrls: ['./memberedit.page.scss'],
})
export class MembereditPage implements OnInit {
  userData: any = {};
  userDataTemp: any = {};

  constructor(private route: ActivatedRoute, private router: Router, public firestore:AngularFirestore) { 
    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
         this.userDataTemp = await this.router.getCurrentNavigation().extras.state;
         console.log(this.userData);
         this.loadData();
      }
    });
    
  }
loadData(){
  this.userData = this.userDataTemp;
}


async updateDetails(){
  await this.firestore.collection("users").doc(this.userData.email?this.userData.email:this.userData.id).update(this.userData).catch((error) => {
              console.log(error);
              alert("Unable to process request");
              return;
             }).then((userResult) => {
              console.log(userResult);
              alert("User data updated sucessfully");
              // this.commondataService.allPendingAgents.splice(i,1)
               this.router.navigate(['adminmanagemember']);
              return;
             })
}

  ngOnInit() {
  }

}

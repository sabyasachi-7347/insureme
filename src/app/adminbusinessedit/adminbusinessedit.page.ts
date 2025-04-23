import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminbusinessedit',
  templateUrl: './adminbusinessedit.page.html',
  styleUrls: ['./adminbusinessedit.page.scss'],
})
export class AdminbusinesseditPage implements OnInit {
  business: any = "";
  banks: any = [];
  constructor(private route: ActivatedRoute, private router: Router,public firestore:AngularFirestore) { 
    
    this.banks = JSON.parse(localStorage.banklist);
    
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
         this.business = this.router.getCurrentNavigation().extras.state.business;  
         if(this.business.agent == this.business.createdBy){
          this.business.amountToPaySubAgent = 0;
          this.business.points = 0;
          this.business.amountToPayAgent = (Number(this.business.disbursedAmount) * Number(this.business.pointsAgent))/100;
          console.log("test");
         }else{
          this.business.amountToPaySubAgent = (Number(this.business.disbursedAmount) * Number(this.business.points))/100;
          this.business.amountToPayAgent = (Number(this.business.disbursedAmount) * Number(this.business.pointsAgent))/100;
          console.log("test");
         }
               
      }
    });

  }
pointChange(){
  this.business.amountToPaySubAgent = (Number(this.business.disbursedAmount) * Number(this.business.points))/100;
  this.business.amountToPayAgent = (Number(this.business.disbursedAmount) * Number(this.business.pointsAgent))/100;
}
 ngOnInit() {
  
  }

  goBack(){
    this.router.navigate(['admin']);
  }
  async updateDetails(){
    this.business.approvedbyadmin = "A";
    await this.firestore.collection("business").doc(this.business.id).update(
      this.business
               ).catch((error) => {
                console.log(error);
                alert("Unable to process request");
                return;
               }).then((userResult) => {
                console.log(userResult);
                                // this.commondataService.allPendingAgents.splice(i,1)
                //  this.goto('login');
                alert("Business Approved");
                this.router.navigate(['admin']);
                return;
               })
  }


  async hold(){
    // for(var j = 0;j<this.business.length;j++){
    //   if(this.business[j].id == id){
      console.log(this.business.id);
      this.business.approvedbyadmin = "H";
        await this.firestore.collection("business").doc(this.business.id).update(
          this.business
                   ).catch((error) => {
                    console.log(error);
                    alert("Unable to process request");
                    return;
                   }).then((userResult) => {
                    alert("Business is hold")
                    this.router.navigate(['admin']);
                    return;
                   })
    //   }
    // }
      }

      async reject(){
        // for(var j = 0;j<this.business.length;j++){
        //   if(this.business[j].id == id){
          console.log(this.business.id);
          this.business.approvedbyadmin = "R";
            await this.firestore.collection("business").doc(this.business.id).update(
              this.business
                       ).catch((error) => {
                        console.log(error);
                        alert("Unable to process request");
                        return;
                       }).then((userResult) => {
                        alert("Business is rejected")
                        this.router.navigate(['admin']);
                        return;
                       })
        //   }
        // }
          }
}

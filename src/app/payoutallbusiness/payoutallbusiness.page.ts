import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payoutallbusiness',
  templateUrl: './payoutallbusiness.page.html',
  styleUrls: ['./payoutallbusiness.page.scss'],
})
export class PayoutallbusinessPage implements OnInit {
  agentDetails: any;
  allAgentBusiness: any =[];
  selectedCategory: any = [];
  totalAmount: number;
  selection: any;
  // selectAll: boolean = false;

  constructor(public route:ActivatedRoute, private router: Router,public firestore:AngularFirestore) { 
    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
         this.agentDetails = this.router.getCurrentNavigation().extras.state;
         this.selection = this.agentDetails.selection;
         this.allAgentBusiness = [];
  this.totalAmount = 0;
  if(this.selection == 'agent'){
    await this.firestore.collection("business", ref => ref.where('approvedbyadmin', "==", 'A').where('agent', "==", this.agentDetails.email)).get().subscribe((doc:any)=>{
      console.log(doc);
      doc.docs.forEach((snapDoc)=>{
        console.log(snapDoc.data());
        var temp = snapDoc.data();
        temp.isChecked =true;
        temp.id = snapDoc.id;
        temp.amountToPayAgent = temp.amountToPayAgent? temp.amountToPayAgent:0;
        if(temp.agentPaid != 'true' || temp.agentPaid == undefined){
          this.totalAmount = this.totalAmount+temp.amountToPayAgent;
          // temp.amountToPayAgent = (temp.amountToPayAgent == '' || temp.amountToPayAgent == 'NaN')? 0 : temp.amountToPayAgent;
          this.allAgentBusiness.push(temp);
        }else{
          console.log("already paid");
        }
        
      })
      console.log(this.allAgentBusiness);
this.selectedCategory = [];
      for (let i = 0; i < this.allAgentBusiness.length; i++) {
        this.selectedCategory.push(
          this.allAgentBusiness[i].id
            );
        }

      // this.curentUser.email
     })
  }else{
    await this.firestore.collection("business", ref => ref.where('approvedbyadmin', "==", 'A').where('createdBy', "==", this.agentDetails.email)).get().subscribe((doc:any)=>{
      console.log(doc);
      doc.docs.forEach((snapDoc)=>{
        console.log(snapDoc.data());
        var temp = snapDoc.data();
        temp.isChecked =true;
        temp.id = snapDoc.id;
        temp.amountToPaySubAgent = temp.amountToPaySubAgent? temp.amountToPaySubAgent:0;
        if(temp.subAgentPaid != 'true' || temp.subAgentPaid == undefined){
          this.totalAmount = this.totalAmount+temp.amountToPaySubAgent;
          // temp.amountToPayAgent = (temp.amountToPayAgent == '' || temp.amountToPayAgent == 'NaN')? 0 : temp.amountToPayAgent;
          this.allAgentBusiness.push(temp);
        }else{
          console.log("already paid");
          
        }

      })
      console.log(this.allAgentBusiness);
this.selectedCategory = [];
      for (let i = 0; i < this.allAgentBusiness.length; i++) {
        this.selectedCategory.push(
          this.allAgentBusiness[i].id
            );
        }

      // this.curentUser.email
     })
  } 
        //  console.log(this.agentDetails);
      }
    });
  }

async  ngOnInit() {

}

  updateCheckedOptions(id,business) {
    let idx = this.selectedCategory.indexOf(id);
    if(this.selection == 'agent'){
      if (idx > -1) {
        this.selectedCategory.splice(idx, 1);
        this.totalAmount = this.totalAmount-business.amountToPayAgent;
      } else {
        this.selectedCategory.push(id);
        this.totalAmount = this.totalAmount+business.amountToPayAgent;
      }
    }else{
      if (idx > -1) {
        this.selectedCategory.splice(idx, 1);
        this.totalAmount = this.totalAmount-business.amountToPaySubAgent;
      } else {
        this.selectedCategory.push(id);
        this.totalAmount = this.totalAmount+business.amountToPaySubAgent;
      }
    }
  
    console.dir(this.selectedCategory);
  
    // if( this.selectedCategory.length == this.allAgentBusiness.length){
    //   this.selectAll =true;
    // }else{
    //   this.selectAll =false;
    // }
  } 

  // changeSelectAll(event){
  //   console.log(event.detail.checked);
  //   if(event.detail.checked){
  //     this.selectedCategory = [];
  //     for (let i = 0; i < this.allAgentBusiness.length; i++) {
  //       this.selectedCategory.push(
  //         this.allAgentBusiness[i].id
  //           );
  //       }

  //     // this.curentUser.email
  //   }
    
    
  // }

  markPayment(){
    if(this.selection == 'agent'){
this.selectedCategory.forEach(async(id)=>{
  console.log(id);
  await this.firestore.collection("business").doc(id).update({
    "agentPaid":'true',
    "agentPayDate":new Date().getUTCFullYear()+''+new Date().getUTCMonth()+''+new Date().getUTCDate(),
             }).catch((error) => {
              console.log(error);
              alert("Unable to process request");
              return;
             }).then((userResult) => {
              console.log(userResult);
              // this.commondataService.allPendingAgents.splice(i,1)
              return;
             })
  
})
this.router.navigate(['adminmonthlypayouts']);
    }else{
      this.selectedCategory.forEach(async(id)=>{
        console.log(id);
        await this.firestore.collection("business").doc(id).update({
          "subAgentPaid":'true',
          "subAgentPayDate":new Date().getUTCFullYear()+''+new Date().getUTCMonth()+''+new Date().getUTCDate(),
                   }).catch((error) => {
                    console.log(error);
                    alert("Unable to process request");
                    return;
                   }).then((userResult) => {
                    console.log(userResult);
                    // this.commondataService.allPendingAgents.splice(i,1)
                    return;
                   })
        
      })
      this.router.navigate(['adminmonthlypayouts']);
    }
  }

}

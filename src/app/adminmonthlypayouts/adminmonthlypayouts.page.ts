import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavigationExtras, Router } from '@angular/router';
import { CommondataService } from '../services/commondata.service';
@Component({
  selector: 'app-adminmonthlypayouts',
  templateUrl: './adminmonthlypayouts.page.html',
  styleUrls: ['./adminmonthlypayouts.page.scss'],
})
export class AdminmonthlypayoutsPage implements OnInit {
  isAgent: boolean;
  allAgents: any = [];
  allSubAgents: any = [];
  selection: any = 'agent';
  constructor(public firestore:AngularFirestore,public commondataService:CommondataService,public router:Router) { 
  }

  ngOnInit() {
    this.changeButton(this.selection);
  }
 async changeButton(selection){
  this.selection = selection;

  if(selection == 'agent'){
    this.isAgent = true;
this.allAgents = [];
  await this.firestore.collection("users", ref => ref.where('role', "==", "agent")).get().subscribe((doc:any)=>{
      console.log("all docs here");      
      console.log(doc);
      doc.docs.forEach((snapDoc)=>{
        console.log(snapDoc.data());
        this.allAgents.push(snapDoc.data());

      })
      // this.curentUser.email
     })


  }else{
    this.isAgent = false;
this.allSubAgents = [];
    await this.firestore.collection("users", ref => ref.where('role', "==", "subagent")).get().subscribe((doc:any)=>{
      console.log("all docs here");      
      console.log(doc);
      doc.docs.forEach((snapDoc)=>{
        console.log(snapDoc.data());
        this.allSubAgents.push(snapDoc.data());

      })
      // this.curentUser.email
     })

  }

  }

 async goToPayout(agent){
  agent.selection = this.selection;
  let navigationExtra:NavigationExtras = {
    state:agent
  }
   this.router.navigate(['payoutallbusiness'],navigationExtra)
  }
}

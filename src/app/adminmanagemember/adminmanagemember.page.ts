import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-adminmanagemember',
  templateUrl: './adminmanagemember.page.html',
  styleUrls: ['./adminmanagemember.page.scss'],
})
export class AdminmanagememberPage implements OnInit {
  isAgent: boolean;
  allAgents: any[];
  allSubAgents: any[];

  constructor(public firestore:AngularFirestore,public router:Router) { }

  ngOnInit() {
  }
  async changeButton(selection){

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

   async edit(agent){
    console.log(agent);

    let navigationExtras: NavigationExtras = {
      state: agent
    };

    this.router.navigate(['memberedit'],navigationExtras);
    
   }
}

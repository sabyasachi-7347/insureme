import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { CommondataService } from '../services/commondata.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  users: any;
  allPendingAgentsCount: any='...';
  allPendingBusinessCount: any='...';

  constructor(public router:Router,public firestore:AngularFirestore,public commondataService:CommondataService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.commondataService.allPendingAgents=[];
    this.users = this.firestore.collection("users", ref => ref.where('approvedbyadmin', "==", "false")).get().subscribe((doc:any)=>{
      console.log("all docs here");      
      console.log(doc);
      this.allPendingAgentsCount = doc.docs.length;
      doc.docs.forEach((snapDoc)=>{
        console.log(snapDoc.data());
        this.commondataService.allPendingAgents.push(snapDoc.data());

      })
      // this.curentUser.email
     })
     console.log(this.commondataService.allPendingAgents);
     
     this.commondataService.allPendingBusiness=[];
    this.users = this.firestore.collection("business", ref => ref.where('approvedbyadmin', "==", "P")).get().subscribe((doc:any)=>{
      console.log("all docs here");      
      console.log(doc);
      this.allPendingBusinessCount = doc.docs.length;
      doc.docs.forEach((snapDoc)=>{
        console.log(snapDoc.data());
        var temp:any = snapDoc.data();
        console.log(temp);
        temp.id = snapDoc.id;
        this.commondataService.allPendingBusiness.push(temp);
      })
      // this.curentUser.email
     })
     console.log(this.commondataService.allPendingBusiness);

  }

goto(page){
  console.log(this.commondataService.allPendingAgents);
  if(page=='adminpendingagents'){
    this.router.navigate([page]);
  }else if(page=='adminpendingbusiness'){
    this.router.navigate([page]);
  }else{
    this.router.navigate([page]);
  }
}

logout(){
  this.router.navigate(['login']);
}
}

import { Component, OnInit } from '@angular/core';
import { CommondataService } from '../services/commondata.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-viewmemberlist',
  templateUrl: './viewmemberlist.page.html',
  styleUrls: ['./viewmemberlist.page.scss'],
})
export class ViewmemberlistPage implements OnInit {
  curentUser: any="";
  allUsersCount: any;
  allUsers: any=[];
  users:any;
  allUsersSave: any=[];
  constructor(public commondataService:CommondataService,public router:Router,public firestore:AngularFirestore,) { }

  ngOnInit() {
  }
 async ionViewWillEnter(){
  this.allUsers = [];
    this.curentUser = JSON.parse(localStorage.userData);
   this.users = await this.firestore.collection("users", ref => ref.where('enrolledby', "==", this.curentUser.email)).get().subscribe((doc:any)=>{
    console.log(doc);
    doc.docs.forEach((snapDoc)=>{
      console.log(snapDoc.data());
      this.allUsers.push(snapDoc.data());
      this.allUsersSave.push(snapDoc.data());
    })
    // this.curentUser.email
   })
  }  

  viewBusiness(email,index){
    let navigationExtras: NavigationExtras = {
      state: {
        email: email
      }
    };
    this.router.navigate(['viewbusinesslist'],navigationExtras);
  }
  searchMember(key){
    console.log(key);
      this.allUsers = this.allUsersSave.filter((user:any) => {
        if((user.name.toString()).includes(key)){
          return user;
        }else if((user.mobile.toString()).includes(key)){
          return user;
        }
        });
    }
}

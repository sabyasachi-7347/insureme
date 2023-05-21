import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-viewbusinesslist',
  templateUrl: './viewbusinesslist.page.html',
  styleUrls: ['./viewbusinesslist.page.scss'],
})
export class ViewbusinesslistPage implements OnInit {
  email: any;
  users: any;
  allbusiness: any = [];

  constructor(private route: ActivatedRoute, private router: Router,public firestore:AngularFirestore) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.email = this.router.getCurrentNavigation().extras.state.email;
      }
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.allbusiness = [];
    this.users = this.firestore.collection("business", ref => ref.where('createdBy', "==", this.email)).get().subscribe((doc:any)=>{
      console.log("all docs here");      
      console.log(doc);
      doc.docs.forEach((snapDoc)=>{
        console.log(snapDoc.data());
        var temp:any = snapDoc.data();
        console.log(temp);
        temp.id = snapDoc.id;
        this.allbusiness.push(temp);
      })
      // this.curentUser.email
     })
  }

}

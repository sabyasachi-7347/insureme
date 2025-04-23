import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
// import * as firebase from 'firebase';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  fbasedb:any;
  appVersions: Promise<string>;
  constructor(public router:Router,
    public platform:Platform,
    public splashScreen:SplashScreen,
    public aFire:AngularFirestore,
    public aDb:AngularFireDatabase,
    private appVersion: AppVersion
    ) {
      // this.fbasedb = firebase;
//     try {
//       if(localStorage.firstTimeLogin == "true"){
// this.router.navigate(['home']);
//       }else{
//         this.router.navigate(['intro']);
//       }
//     } catch (error) {
//       this.router.navigate(['intro']);
//     }
this.appVersions = this.appVersion.getVersionNumber();
  }
  ngAfterViewInit() {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(async () => {
      try {
        this.splashScreen.hide();
      } catch (error) {
        console.log(error)
      }
     
    })
    // this.callFirebaseTest();
// this.callFirebaseDbTest();

  }
  
 async callFirebaseTest(){
    console.log("Firebase call");
    let database = this.aFire.collection('users').snapshotChanges();
    let collectionData:any = await database.subscribe((querySnapshot) => {
      let data = querySnapshot.map((documentSnapshot) => {
        return {"id":documentSnapshot.payload.doc.id,
        "name":documentSnapshot.payload.doc.data()['name']
      };
      });
      // console.log("Data");
      
      console.log(data);
      
    })
  }

  // callFirebaseDbTest(){
  //   console.log("Firebase DB call");
  //   let data = this.aDb.list('/aa');
  //   console.log("data here");

  //   data.snapshotChanges().subscribe(res => {
  //     console.log(res);
      
  //     res.forEach(item => {
  //       console.log(item);
        
  //       let a = item.payload.toJSON();
  //       a['$key'] = item.key;
  //      console.log(a); 
  //     })
  //   })
    
  // }
}

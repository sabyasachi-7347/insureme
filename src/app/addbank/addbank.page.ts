import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-addbank',
  templateUrl: './addbank.page.html',
  styleUrls: ['./addbank.page.scss'],
})
export class AddbankPage implements OnInit {
  banks:any = [];
  bankname:any = "";
  constructor(public firestore:AngularFirestore) { }

  ngOnInit() {
  }
 async ionViewWillEnter(){

    await this.firestore.collection("dropdown").doc('bankname').get().subscribe((doc:any)=>{
      console.log(doc.data().bankname);
      this.banks = doc.data().bankname;
     }) 
  }
 async removeBank(i,bank){
    console.log(i+" "+bank);
    const docRef = await this.firestore.collection("dropdown").doc('bankname');
    docRef.get().subscribe(async (snapshot) => {
      let array = snapshot.get('bankname');
    
      // If the array is null, create an empty array
      if (!array) {
        array = [];
      }

      // array.delete(bank);
     var updatedarray = array.filter(item => item !== bank)
      // Update the array in Firestore
      docRef.update({ bankname: updatedarray });

      await this.firestore.collection("dropdown").doc('bankname').get().subscribe((doc:any)=>{
        console.log(doc.data().bankname);
        this.banks = doc.data().bankname;
       }) 
    });
  }

 async addBank(newbankname){
    console.log(newbankname);

    const docRef = await this.firestore.collection("dropdown").doc('bankname');
    docRef.get().subscribe(async (snapshot) => {
      let array = snapshot.get('bankname');
    
      // If the array is null, create an empty array
      if (!array) {
        array = [];
      }

      array.push(newbankname);

      // Update the array in Firestore
      docRef.update({ bankname: array });

      await this.firestore.collection("dropdown").doc('bankname').get().subscribe((doc:any)=>{
        console.log(doc.data().bankname);
        this.banks = doc.data().bankname;
       }) 
    });
  }
}

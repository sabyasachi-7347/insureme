import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { CommondataService } from '../services/commondata.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  yearValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  dashboard:any ={};
  userRole: any;
  top5Records:any = [];
  top5 = true
  businessRef: any;
  reportData: any;
  downloaddata: any = [];
  top5RecordsSaved: any=[];
  paidAmount: number;
  pendingAmount: any;
  constructor(public router:Router,public firestore:AngularFirestore,public commondataService:CommondataService) {
    this.dashboard.totalredeem = "0";
    this.dashboard.invalidcases = "0";
    this.dashboard.totalcases = "0";
    this.dashboard.totalpaid ="0";
    this.dashboard.totalpending ="0";
    this.userRole = JSON.parse(localStorage.userData)['role'];
    if(this.userRole == 'agent'){
      this.top5 = true
      this.firestore.collection("business", ref => ref.where('agent', "==", JSON.parse(localStorage.userData)['email']).limit(5)).get().subscribe((doc:any)=>{
        console.log("Top 5 docs here");      
        console.log(doc);
        // this.dashboard.top5 = doc.docs.length;
        doc.docs.forEach((snapDoc)=>{
          console.log(snapDoc.data());
          var temp:any = snapDoc.data();
          console.log(temp);
          temp.id = snapDoc.id;
          this.top5Records.push(temp);
          this.top5RecordsSaved.push(temp);
          // this.commondataService.allPendingBusiness.push(temp);
        })
        // this.curentUser.email
       })
       console.log(this.commondataService.allPendingBusiness);

      this.firestore.collection("business", ref => ref.where('agent', "==", JSON.parse(localStorage.userData)['email'])).get().subscribe((doc:any)=>{
        console.log("all docs here");      
        console.log(doc);
        this.paidAmount = 0;
        this.pendingAmount = 0;
        this.dashboard.totalcases = doc.docs.length;
        doc.docs.forEach((snapDoc)=>{
          console.log(snapDoc.data());
          var temp:any = snapDoc.data();
          console.log(temp);
          temp.id = snapDoc.id;
          if(temp.agentPaid == 'true'){
            this.paidAmount = this.paidAmount + temp.amountToPayAgent?temp.amountToPayAgent:0;
          }else if(temp.agentPaid == 'false'){
            this.pendingAmount = this.pendingAmount + temp.amountToPayAgent?temp.amountToPayAgent:0;
          }
          this.commondataService.allPendingBusiness.push(temp);
        })
        this.dashboard.totalpaid = this.paidAmount;
        this.dashboard.totalpending = this.pendingAmount;
        // this.curentUser.email
       })
       
       console.log(this.commondataService.allPendingBusiness);

       this.firestore.collection("business", ref => ref.where('agent', "==", JSON.parse(localStorage.userData)['email']).where('approvedbyadmin',"==",'R')).get().subscribe((doc:any)=>{
        console.log("all docs here");      
        console.log(doc);
        this.dashboard.invalidcases = doc.docs.length;
        doc.docs.forEach((snapDoc)=>{
          console.log(snapDoc.data());
          var temp:any = snapDoc.data();
          console.log(temp);
          temp.id = snapDoc.id;
          this.commondataService.allInvalidBusiness.push(temp);
        })
        // this.curentUser.email
       })
       console.log(this.commondataService.allInvalidBusiness);
    }else{
      this.top5 = false;
      this.firestore.collection("business", ref => ref.where('createdBy', "==", JSON.parse(localStorage.userData)['email'])).get().subscribe((doc:any)=>{
        console.log("all docs here");      
        console.log(doc);
        this.paidAmount = 0;
        this.pendingAmount = 0;
        this.dashboard.totalcases = doc.docs.length;
        doc.docs.forEach((snapDoc)=>{
          console.log(snapDoc.data());
          var temp:any = snapDoc.data();
          console.log(temp);
          temp.id = snapDoc.id;
          if(temp.amountToPaySubAgent == 'true'){
            this.paidAmount = this.paidAmount + temp.amountToPaySubAgent?temp.amountToPaySubAgent:0;
          }else if(temp.amountToPaySubAgent == 'false'){
            this.pendingAmount = this.pendingAmount + temp.amountToPaySubAgent?temp.amountToPaySubAgent:0;
          }
          this.commondataService.allPendingBusiness.push(temp);
        })
        this.dashboard.totalpaid = this.paidAmount;
        this.dashboard.totalpending = this.pendingAmount;
        // this.curentUser.email
       })
       console.log(this.commondataService.allPendingBusiness);

       this.firestore.collection("business", ref => ref.where('createdBy', "==", JSON.parse(localStorage.userData)['email']).where('approvedbyadmin',"==",'R')).get().subscribe((doc:any)=>{
        console.log("all docs here");      
        console.log(doc);
        this.dashboard.invalidcases = doc.docs.length;
        doc.docs.forEach((snapDoc)=>{
          console.log(snapDoc.data());
          var temp:any = snapDoc.data();
          console.log(temp);
          temp.id = snapDoc.id;
          this.commondataService.allInvalidBusiness.push(temp);
        })

        // this.curentUser.email
       })
       console.log(this.commondataService.allInvalidBusiness);

    }

   }
goto(page){
  this.router.navigate([page]);
}
searchBusiness(input){
  console.log(input);
this.top5Records = this.top5RecordsSaved.filter((user:any)=>{
  if((user.name.toString()).includes(input.target.value)){
    return user;
  }else if((user.lanNo.toString()).includes(input.target.value.toString())){
    return user;
  }
})
  // this.firestore.collection("business", ref => ref.where('name', "==", input || 'lanNo', "==", input || 'createdBy', "==", input)).get().subscribe((doc:any)=>{
  //   console.log("Top 5 docs here");      
  //   console.log(doc);
  //   // this.dashboard.top5 = doc.docs.length;
  //   doc.docs.forEach((snapDoc)=>{
  //     console.log(snapDoc.data());
  //     var temp:any = snapDoc.data();
  //     console.log(temp);
  //     temp.id = snapDoc.id;
  //     this.top5Records.push(temp);
  //     // this.commondataService.allPendingBusiness.push(temp);
  //   })
  //   // this.curentUser.email
  //  })
}
  ngOnInit() {
  }
  async exportReport(){

   await this.firestore.collection("business", ref => ref.where('createdBy', "==", JSON.parse(localStorage.userData)['email'])).get().subscribe((doc:any)=>{ 
      this.reportData = doc.docs;
      doc.docs.forEach((row) => {
      console.log(row.data());
      
      this.downloaddata.push({
        "Business Name":row.data().name?row.data().name:'',
        "Lan Number":row.data().lanNo?row.data().lanNo:'',
        "Created By Email":row.data().createdBy?row.data().createdBy:'',
        "Created By Name":row.data().createdByName?row.data().createdByName:'',
        "Disbused Amount":row.data().disbursedAmount?row.data().disbursedAmount:'',
        "Disbused Date":row.data().disburseDate?row.data().disburseDate:'',
        "QC Status":row.data().approvedbyadmin == 'R'?'Reject':row.data().approvedbyadmin == 'P'?'Pending':row.data().approvedbyadmin == 'H'?'Hold':row.data().approvedbyadmin == 'Paid'?'Paid':'NA',
        "Agent Paymet":row.data().amountToPayAgent?row.data().amountToPayAgent:'',
        "Sub Agent Payment":row.data().amountToPaySubAgent?row.data().amountToPaySubAgent:''
}) 
      })
      const csvData = this.objectToCsv(this.downloaddata);
      console.log(csvData);
      
    this.download(csvData);
    })

    

    //  const downloaddata = this.reportData.map(row => ({
    //   Data:'yes'
    // }))
    
  }

  objectToCsv(data) {
    if (data.length != 0) {
      const CsvRows = []
      //get header
      const headers = Object.keys(data[0]);
      CsvRows.push(headers.join(','));
      for (const row of data) {
        const values = headers.map(header => {
          const escaped = ('' + row[header]).replace(/"/g, '\\"');
          return `"${escaped}"`;
        })
        CsvRows.push(values.join(','))
      }
      return CsvRows.join('\n');
    } else {
      alert("No Data Found")
      return
    }
  }

  download(data) {
    console.log(data);
    
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

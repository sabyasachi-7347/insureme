import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salesdata',
  templateUrl: './salesdata.page.html',
  styleUrls: ['./salesdata.page.scss'],
})
export class SalesdataPage implements OnInit {
  reportData: any;
  downloaddata: any=[];
  years: any =[];
  allbusiness: any = [];
  allBusinessSearch: any = [];
  selectedDate: any = '';
  inputLanNo: any = '';
  custName: any = '';
  inputSearch: any = '';

  constructor(public firestore:AngularFirestore,public router:Router) { }

  ngOnInit() {
  }

 async ionViewWillEnter(){
    await this.firestore.collection("dropdown").doc('yearmonth').get().subscribe((doc:any)=>{
      console.log(doc.data().yearmonth);
      this.years = doc.data().yearmonth;
     })
     this.allbusiness = [];
    if(JSON.parse(localStorage.userData)['role'] == 'subagent'){
    await this.firestore.collection("business", ref => ref.where('createdBy', "==", JSON.parse(localStorage.userData)['email'])).get().subscribe((doc:any)=>{
       console.log("all docs here");      
       console.log(doc);
       doc.docs.forEach((snapDoc)=>{
         console.log(snapDoc.data());
         var temp:any = snapDoc.data();
         console.log(temp);
         temp.id = snapDoc.id;
         this.allbusiness.push(temp);
         this.allBusinessSearch.push(temp);
       })
      })
    }
    else{
      await this.firestore.collection("business", ref => ref.where('agent', "==", JSON.parse(localStorage.userData)['email'])).get().subscribe((doc:any)=>{
        console.log("all docs here");      
        console.log(doc);
        doc.docs.forEach((snapDoc)=>{
          console.log(snapDoc.data());
          var temp:any = snapDoc.data();
          console.log(temp);
          temp.id = snapDoc.id;
          this.allbusiness.push(temp);
          this.allBusinessSearch.push(temp);
        })
       })
    }
  }


  searchBusiness(){
    this.inputSearch
    this.allbusiness = this.allBusinessSearch.filter((user:any)=>{
      if((user.name.toString()).includes(this.inputSearch)){
        return user;
      }else if((user.lanNo.toString()).includes(this.inputSearch.toString())){
        return user;
      }});
  }

  async exportReport(){

    // await this.firestore.collection("business", ref => ref.where('createdBy', "==", JSON.parse(localStorage.userData)['email'])).get().subscribe((doc:any)=>{ 
    //    this.reportData = doc.docs;
       this.allbusiness.forEach((row) => {
       
       this.downloaddata.push({
         "Business Name":row.name?row.name:'',
         "Lan Number":row.lanNo?row.lanNo:'',
         "Created By Email":row.createdBy?row.createdBy:'',
         "Created By Name":row.createdByName?row.createdByName:'',
         "Disbused Amount":row.disbursedAmount?row.disbursedAmount:'',
         "Disbused Date":row.disburseDate?row.disburseDate:'',
         "QC Status":row.approvedbyadmin == 'R'?'Reject':row.approvedbyadmin == 'P'?'Pending':row.approvedbyadmin == 'H'?'Hold':row.approvedbyadmin == 'Paid'?'Paid':'NA',
         "Agent Paymet":row.amountToPayAgent?row.amountToPayAgent:'',
         "Sub Agent Payment":row.amountToPaySubAgent?row.amountToPaySubAgent:''
 }) 
       })
       const csvData = this.objectToCsv(this.downloaddata);
       console.log(csvData);
       
     this.download(csvData);
     
    // })
 
     
 
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

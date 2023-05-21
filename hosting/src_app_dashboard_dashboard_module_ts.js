"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 5935);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 425);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 5935);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 5935:
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 3957);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 5065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/commondata.service */ 1056);








let DashboardPage = class DashboardPage {
  constructor(router, firestore, commondataService) {
    this.router = router;
    this.firestore = firestore;
    this.commondataService = commondataService;
    this.yearValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    this.dashboard = {};
    this.top5Records = [];
    this.top5 = true;
    this.downloaddata = [];
    this.top5RecordsSaved = [];
    this.dashboard.totalredeem = "0";
    this.dashboard.invalidcases = "0";
    this.dashboard.totalcases = "0";
    this.dashboard.totalpaid = "0";
    this.dashboard.totalpending = "0";
    this.userRole = JSON.parse(localStorage.userData)['role'];

    if (this.userRole == 'agent') {
      this.top5 = true;
      this.firestore.collection("business", ref => ref.where('agent', "==", JSON.parse(localStorage.userData)['email']).limit(5)).get().subscribe(doc => {
        console.log("Top 5 docs here");
        console.log(doc); // this.dashboard.top5 = doc.docs.length;

        doc.docs.forEach(snapDoc => {
          console.log(snapDoc.data());
          var temp = snapDoc.data();
          console.log(temp);
          temp.id = snapDoc.id;
          this.top5Records.push(temp);
          this.top5RecordsSaved.push(temp); // this.commondataService.allPendingBusiness.push(temp);
        }); // this.curentUser.email
      });
      console.log(this.commondataService.allPendingBusiness);
      this.firestore.collection("business", ref => ref.where('agent', "==", JSON.parse(localStorage.userData)['email'])).get().subscribe(doc => {
        console.log("all docs here");
        console.log(doc);
        this.paidAmount = 0;
        this.pendingAmount = 0;
        this.dashboard.totalcases = doc.docs.length;
        doc.docs.forEach(snapDoc => {
          console.log(snapDoc.data());
          var temp = snapDoc.data();
          console.log(temp);
          temp.id = snapDoc.id;

          if (temp.agentPaid == 'true') {
            this.paidAmount = this.paidAmount + temp.amountToPayAgent ? temp.amountToPayAgent : 0;
          } else if (temp.agentPaid == 'false') {
            this.pendingAmount = this.pendingAmount + temp.amountToPayAgent ? temp.amountToPayAgent : 0;
          }

          this.commondataService.allPendingBusiness.push(temp);
        });
        this.dashboard.totalpaid = this.paidAmount;
        this.dashboard.totalpending = this.pendingAmount; // this.curentUser.email
      });
      console.log(this.commondataService.allPendingBusiness);
      this.firestore.collection("business", ref => ref.where('agent', "==", JSON.parse(localStorage.userData)['email']).where('approvedbyadmin', "==", 'R')).get().subscribe(doc => {
        console.log("all docs here");
        console.log(doc);
        this.dashboard.invalidcases = doc.docs.length;
        doc.docs.forEach(snapDoc => {
          console.log(snapDoc.data());
          var temp = snapDoc.data();
          console.log(temp);
          temp.id = snapDoc.id;
          this.commondataService.allInvalidBusiness.push(temp);
        }); // this.curentUser.email
      });
      console.log(this.commondataService.allInvalidBusiness);
    } else {
      this.top5 = false;
      this.firestore.collection("business", ref => ref.where('createdBy', "==", JSON.parse(localStorage.userData)['email'])).get().subscribe(doc => {
        console.log("all docs here");
        console.log(doc);
        this.paidAmount = 0;
        this.pendingAmount = 0;
        this.dashboard.totalcases = doc.docs.length;
        doc.docs.forEach(snapDoc => {
          console.log(snapDoc.data());
          var temp = snapDoc.data();
          console.log(temp);
          temp.id = snapDoc.id;

          if (temp.amountToPaySubAgent == 'true') {
            this.paidAmount = this.paidAmount + temp.amountToPaySubAgent ? temp.amountToPaySubAgent : 0;
          } else if (temp.amountToPaySubAgent == 'false') {
            this.pendingAmount = this.pendingAmount + temp.amountToPaySubAgent ? temp.amountToPaySubAgent : 0;
          }

          this.commondataService.allPendingBusiness.push(temp);
        });
        this.dashboard.totalpaid = this.paidAmount;
        this.dashboard.totalpending = this.pendingAmount; // this.curentUser.email
      });
      console.log(this.commondataService.allPendingBusiness);
      this.firestore.collection("business", ref => ref.where('createdBy', "==", JSON.parse(localStorage.userData)['email']).where('approvedbyadmin', "==", 'R')).get().subscribe(doc => {
        console.log("all docs here");
        console.log(doc);
        this.dashboard.invalidcases = doc.docs.length;
        doc.docs.forEach(snapDoc => {
          console.log(snapDoc.data());
          var temp = snapDoc.data();
          console.log(temp);
          temp.id = snapDoc.id;
          this.commondataService.allInvalidBusiness.push(temp);
        }); // this.curentUser.email
      });
      console.log(this.commondataService.allInvalidBusiness);
    }
  }

  goto(page) {
    this.router.navigate([page]);
  }

  searchBusiness(input) {
    console.log(input);
    this.top5Records = this.top5RecordsSaved.filter(user => {
      if (user.name.toString().includes(input.target.value)) {
        return user;
      } else if (user.lanNo.toString().includes(input.target.value.toString())) {
        return user;
      }
    }); // this.firestore.collection("business", ref => ref.where('name', "==", input || 'lanNo', "==", input || 'createdBy', "==", input)).get().subscribe((doc:any)=>{
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

  ngOnInit() {}

  exportReport() {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.firestore.collection("business", ref => ref.where('createdBy', "==", JSON.parse(localStorage.userData)['email'])).get().subscribe(doc => {
        _this.reportData = doc.docs;
        doc.docs.forEach(row => {
          console.log(row.data());

          _this.downloaddata.push({
            "Business Name": row.data().name ? row.data().name : '',
            "Lan Number": row.data().lanNo ? row.data().lanNo : '',
            "Created By Email": row.data().createdBy ? row.data().createdBy : '',
            "Created By Name": row.data().createdByName ? row.data().createdByName : '',
            "Disbused Amount": row.data().disbursedAmount ? row.data().disbursedAmount : '',
            "Disbused Date": row.data().disburseDate ? row.data().disburseDate : '',
            "QC Status": row.data().approvedbyadmin == 'R' ? 'Reject' : row.data().approvedbyadmin == 'P' ? 'Pending' : row.data().approvedbyadmin == 'H' ? 'Hold' : row.data().approvedbyadmin == 'Paid' ? 'Paid' : 'NA',
            "Agent Paymet": row.data().amountToPayAgent ? row.data().amountToPayAgent : '',
            "Sub Agent Payment": row.data().amountToPaySubAgent ? row.data().amountToPaySubAgent : ''
          });
        });

        const csvData = _this.objectToCsv(_this.downloaddata);

        console.log(csvData);

        _this.download(csvData);
      }); //  const downloaddata = this.reportData.map(row => ({
      //   Data:'yes'
      // }))
    })();
  }

  objectToCsv(data) {
    if (data.length != 0) {
      const CsvRows = []; //get header

      const headers = Object.keys(data[0]);
      CsvRows.push(headers.join(','));

      for (const row of data) {
        const values = headers.map(header => {
          const escaped = ('' + row[header]).replace(/"/g, '\\"');
          return `"${escaped}"`;
        });
        CsvRows.push(values.join(','));
      }

      return CsvRows.join('\n');
    } else {
      alert("No Data Found");
      return;
    }
  }

  download(data) {
    console.log(data);
    const blob = new Blob([data], {
      type: 'text/csv'
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'download.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

};

DashboardPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
}, {
  type: _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__.CommondataService
}];

DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-dashboard',
  template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DashboardPage);


/***/ }),

/***/ 5065:
/*!**********************************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".ion-margin {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\n.ion-margin ion-row:first-child {\n  font-weight: bold;\n}\n.ion-margin ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\n.ion-margin ion-col:last-child {\n  border-right: 1px solid black;\n}\n.ion-margin ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n.btnStyle {\n  text-align: center;\n}\n.btnStyleIn {\n  --border-radius: 50%;\n}\n.ion-margin {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\n.ion-margin ion-row:first-child {\n  font-weight: bold;\n}\n.ion-margin ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\n.ion-margin ion-col:last-child {\n  border-right: 1px solid black;\n}\n.ion-margin ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n.btnStyle {\n  text-align: center;\n}\n.btnStyleIn {\n  --border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9NeSUyMFByb2plY3RzJTIwTm90JTIwVG8lMjBVc2UvaW5zdXJlbWVuZXdnaXQvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQ0k7RUFDRSxpQkFBQTtBQ0NOO0FEQ0k7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NOO0FEQ0k7RUFDRSw2QkFBQTtBQ0NOO0FERUk7RUFDRSw4QkFBQTtBQ0FOO0FESUU7RUFDRSxrQkFBQTtBQ0RKO0FESUU7RUFDRSxvQkFBQTtBQ0RKO0FESUU7RUFDRSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNESjtBREdJO0VBQ0UsaUJBQUE7QUNETjtBREdJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNETjtBREdJO0VBQ0UsNkJBQUE7QUNETjtBRElJO0VBQ0UsOEJBQUE7QUNGTjtBRE1FO0VBQ0Usa0JBQUE7QUNISjtBRE1FO0VBQ0Usb0JBQUE7QUNISiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1tYXJnaW4ge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcclxuICAgIFxyXG4gICAgaW9uLXJvdzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbCB7IFxyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbDpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG5TdHlsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG5TdHlsZUlue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuaW9uLW1hcmdpbiB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xyXG4gICAgXHJcbiAgICBpb24tcm93OmZpcnN0LWNoaWxkIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBpb24tY29sIHsgXHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICBpb24tY29sOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXJvdzpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0blN0eWxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJ0blN0eWxlSW57XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4iLCIuaW9uLW1hcmdpbiB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zdHlsZTogaGlkZGVuO1xufVxuLmlvbi1tYXJnaW4gaW9uLXJvdzpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmlvbi1tYXJnaW4gaW9uLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG4uaW9uLW1hcmdpbiBpb24tY29sOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn1cbi5pb24tbWFyZ2luIGlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmJ0blN0eWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuU3R5bGVJbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW9uLW1hcmdpbiB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zdHlsZTogaGlkZGVuO1xufVxuLmlvbi1tYXJnaW4gaW9uLXJvdzpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmlvbi1tYXJnaW4gaW9uLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG4uaW9uLW1hcmdpbiBpb24tY29sOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn1cbi5pb24tbWFyZ2luIGlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmJ0blN0eWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuU3R5bGVJbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */";

/***/ }),

/***/ 3957:
/*!**********************************************************!*\
  !*** ./src/app/dashboard/dashboard.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"margin: 15%;\">\n    <ion-row style=\"text-align: center;\">\n      <!-- <ion-col>\n          <ion-label>Total Points Redeem</ion-label>\n          <ion-input [(ngModel)]=\"dashboard.totalredeem\" readonly></ion-input>  \n      </ion-col> -->\n      <ion-col>\n        <ion-label>Total Paid Amount (in ₹)</ion-label>\n        <ion-input [(ngModel)]=\"dashboard.totalpaid\" readonly></ion-input>  \n    </ion-col>\n      <ion-col>\n          <ion-label>Total Pending Amount (in ₹)</ion-label>\n          <ion-input [(ngModel)]=\"dashboard.totalpending\" readonly></ion-input>  \n      </ion-col>\n      </ion-row>\n      <ion-row style=\"text-align: center;\">\n      \n      <ion-col>\n        <ion-label>Total Number of Cases</ion-label>\n        <ion-input (click)=\"goto('totalcases')\" [(ngModel)]=\"dashboard.totalcases\" readonly></ion-input>  \n    </ion-col>\n    <ion-col>\n      <ion-label>Total Invalid Cases</ion-label>\n      <ion-input (click)=\"goto('invalidcases')\" [(ngModel)]=\"dashboard.invalidcases\" readonly></ion-input>  \n  </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-item *ngIf=\"userRole == 'agent' && top5 == true\">\n    <ion-searchbar placeholder=\"Enter LAN Number\" [(ngModel)]=\"searchInput\" (keyup)=\"searchBusiness($event)\"></ion-searchbar>\n  </ion-item>\n  <div></div>\n  <div *ngIf=\"userRole == 'agent' && top5 == true\">\n    <ion-card *ngFor=\"let business of top5Records;\">\n      <ion-row>\n        <ion-col size=\"8\">{{business.name}}</ion-col>\n        <ion-col size=\"4\">₹ {{business.disbursedAmount}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Issued Date</ion-col>\n        <ion-col>{{business.disburseDate}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>LAN No</ion-col>\n        <ion-col>{{business.lanNo}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Qc Status</ion-col>\n        <ion-col>{{business.approvedbyadmin == 'A'?'Approved':business.approvedbyadmin == 'R'?'Rejected':business.approvedbyadmin == 'H'?'Hold':business.approvedbyadmin == 'P'?\"Pending\":business.approvedbyadmin == 'Paid'?\"Paid\":\"NA\"}}</ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n\n  <!-- <h2>Member Dashboard</h2>\n  <ion-item>\n    <ion-label position=\"floating\">Select Member</ion-label>\n    <ion-select placeholder=\"Select member\" interface=\"action-sheet\">\n      <ion-select-option value=\"all\">All Members</ion-select-option>\n      <ion-select-option value=\"m1\">M1</ion-select-option>\n      <ion-select-option value=\"m2\">M2</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Select Date</ion-label>\n    <ion-select placeholder=\"Select date\">\n      <ion-select-option value=\"all\">All Members</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <br>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Lead Number</ion-label>\n          <ion-input></ion-input>\n        </ion-item>  \n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Customer Name</ion-label>\n          <ion-input></ion-input>\n        </ion-item>  \n      </ion-col>\n    </ion-row>\n    <div class=\"btnStyle\">\n      <ion-button class=\"btnStyleIn\">Search</ion-button>\n    </div>\n  </ion-grid> -->\n  <div class=\"btnStyle\">\n    <ion-button (click)=\"exportReport()\">Export to Exel</ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map
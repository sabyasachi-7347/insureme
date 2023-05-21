"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_salesdata_salesdata_module_ts"],{

/***/ 658:
/*!*******************************************************!*\
  !*** ./src/app/salesdata/salesdata-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesdataPageRoutingModule": () => (/* binding */ SalesdataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _salesdata_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salesdata.page */ 7500);




const routes = [
    {
        path: '',
        component: _salesdata_page__WEBPACK_IMPORTED_MODULE_0__.SalesdataPage
    }
];
let SalesdataPageRoutingModule = class SalesdataPageRoutingModule {
};
SalesdataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SalesdataPageRoutingModule);



/***/ }),

/***/ 922:
/*!***********************************************!*\
  !*** ./src/app/salesdata/salesdata.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesdataPageModule": () => (/* binding */ SalesdataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _salesdata_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salesdata-routing.module */ 658);
/* harmony import */ var _salesdata_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salesdata.page */ 7500);







let SalesdataPageModule = class SalesdataPageModule {
};
SalesdataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _salesdata_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesdataPageRoutingModule
        ],
        declarations: [_salesdata_page__WEBPACK_IMPORTED_MODULE_1__.SalesdataPage]
    })
], SalesdataPageModule);



/***/ }),

/***/ 7500:
/*!*********************************************!*\
  !*** ./src/app/salesdata/salesdata.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesdataPage": () => (/* binding */ SalesdataPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _salesdata_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salesdata.page.html?ngResource */ 4650);
/* harmony import */ var _salesdata_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salesdata.page.scss?ngResource */ 68);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







let SalesdataPage = class SalesdataPage {
  constructor(firestore, router) {
    this.firestore = firestore;
    this.router = router;
    this.downloaddata = [];
    this.years = [];
    this.allbusiness = [];
    this.allBusinessSearch = [];
    this.selectedDate = '';
    this.inputLanNo = '';
    this.custName = '';
    this.inputSearch = '';
  }

  ngOnInit() {}

  ionViewWillEnter() {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.firestore.collection("dropdown").doc('yearmonth').get().subscribe(doc => {
        console.log(doc.data().yearmonth);
        _this.years = doc.data().yearmonth;
      });
      _this.allbusiness = [];

      if (JSON.parse(localStorage.userData)['role'] == 'subagent') {
        yield _this.firestore.collection("business", ref => ref.where('createdBy', "==", JSON.parse(localStorage.userData)['email'])).get().subscribe(doc => {
          console.log("all docs here");
          console.log(doc);
          doc.docs.forEach(snapDoc => {
            console.log(snapDoc.data());
            var temp = snapDoc.data();
            console.log(temp);
            temp.id = snapDoc.id;

            _this.allbusiness.push(temp);

            _this.allBusinessSearch.push(temp);
          });
        });
      } else {
        yield _this.firestore.collection("business", ref => ref.where('agent', "==", JSON.parse(localStorage.userData)['email'])).get().subscribe(doc => {
          console.log("all docs here");
          console.log(doc);
          doc.docs.forEach(snapDoc => {
            console.log(snapDoc.data());
            var temp = snapDoc.data();
            console.log(temp);
            temp.id = snapDoc.id;

            _this.allbusiness.push(temp);

            _this.allBusinessSearch.push(temp);
          });
        });
      }
    })();
  }

  searchBusiness() {
    this.inputSearch;
    this.allbusiness = this.allBusinessSearch.filter(user => {
      if (user.name.toString().includes(this.inputSearch)) {
        return user;
      } else if (user.lanNo.toString().includes(this.inputSearch.toString())) {
        return user;
      }
    });
  }

  exportReport() {
    var _this2 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // await this.firestore.collection("business", ref => ref.where('createdBy', "==", JSON.parse(localStorage.userData)['email'])).get().subscribe((doc:any)=>{ 
      //    this.reportData = doc.docs;
      _this2.allbusiness.forEach(row => {
        _this2.downloaddata.push({
          "Business Name": row.name ? row.name : '',
          "Lan Number": row.lanNo ? row.lanNo : '',
          "Created By Email": row.createdBy ? row.createdBy : '',
          "Created By Name": row.createdByName ? row.createdByName : '',
          "Disbused Amount": row.disbursedAmount ? row.disbursedAmount : '',
          "Disbused Date": row.disburseDate ? row.disburseDate : '',
          "QC Status": row.approvedbyadmin == 'R' ? 'Reject' : row.approvedbyadmin == 'P' ? 'Pending' : row.approvedbyadmin == 'H' ? 'Hold' : row.approvedbyadmin == 'Paid' ? 'Paid' : 'NA',
          "Agent Paymet": row.amountToPayAgent ? row.amountToPayAgent : '',
          "Sub Agent Payment": row.amountToPaySubAgent ? row.amountToPaySubAgent : ''
        });
      });

      const csvData = _this2.objectToCsv(_this2.downloaddata);

      console.log(csvData);

      _this2.download(csvData); // })
      //  const downloaddata = this.reportData.map(row => ({
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

SalesdataPage.ctorParameters = () => [{
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

SalesdataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-salesdata',
  template: _salesdata_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_salesdata_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SalesdataPage);


/***/ }),

/***/ 68:
/*!**********************************************************!*\
  !*** ./src/app/salesdata/salesdata.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".ion-margin {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\n.ion-margin ion-row:first-child {\n  font-weight: bold;\n}\n.ion-margin ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\n.ion-margin ion-col:last-child {\n  border-right: 1px solid black;\n}\n.ion-margin ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n.btnStyle {\n  text-align: center;\n}\n.btnStyleIn {\n  --border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzZGF0YS5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9NeSUyMFByb2plY3RzJTIwTm90JTIwVG8lMjBVc2UvaW5zdXJlbWVuZXdnaXQvc3JjL2FwcC9zYWxlc2RhdGEvc2FsZXNkYXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQ0k7RUFDRSxpQkFBQTtBQ0NOO0FEQ0k7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NOO0FEQ0k7RUFDRSw2QkFBQTtBQ0NOO0FERUk7RUFDRSw4QkFBQTtBQ0FOO0FESUU7RUFDRSxrQkFBQTtBQ0RKO0FESUU7RUFDRSxvQkFBQTtBQ0RKIiwiZmlsZSI6InNhbGVzZGF0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLW1hcmdpbiB7XHJcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zdHlsZTogaGlkZGVuO1xyXG4gICAgXHJcbiAgICBpb24tcm93OmZpcnN0LWNoaWxkIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBpb24tY29sIHsgXHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICBpb24tY29sOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXJvdzpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ0blN0eWxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJ0blN0eWxlSW57XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4iLCIuaW9uLW1hcmdpbiB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zdHlsZTogaGlkZGVuO1xufVxuLmlvbi1tYXJnaW4gaW9uLXJvdzpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmlvbi1tYXJnaW4gaW9uLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG4uaW9uLW1hcmdpbiBpb24tY29sOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn1cbi5pb24tbWFyZ2luIGlvbi1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmJ0blN0eWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuU3R5bGVJbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */";

/***/ }),

/***/ 4650:
/*!**********************************************************!*\
  !*** ./src/app/salesdata/salesdata.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Sales Data</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\">Select Date</ion-label>\n    <ion-select placeholder=\"Select date\" [(ngModel)]=\"selectedDate\">\n      <ion-select-option value=\"\">Select Date</ion-select-option>\n      <ion-select-option *ngFor=\"let year of years;\" value=\"year\">{{year}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <br>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>LAN ID Number Or Customer Name</ion-label>\n        </ion-item>  \n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-input [(ngModel)]=\"inputSearch\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div class=\"btnStyle\">\n      <ion-button class=\"btnStyleIn\" (click)=\"searchBusiness()\">Search</ion-button>\n    </div>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"allbusiness.length\">\n    <ion-card *ngFor=\"let user of allbusiness;let i = index;\">\n      <ion-row >\n        <ion-col style=\"text-align: center;\">\n          {{user.name}}\n        </ion-col>\n        \n      </ion-row>  \n      <ion-row >\n        <ion-col size=\"6\" style=\"text-align: center;\">\n          LAN: {{user.lanNo}}\n        </ion-col>\n        <ion-col size=\"6\" style=\"text-align: center;\">\n          Created By: {{user.createdBy}}\n        </ion-col>\n      </ion-row>  \n      <ion-row >\n        <ion-col size=\"6\" style=\"text-align: center;\">\n          Amount: {{user.disbursedAmount}}\n        </ion-col>\n        <ion-col size=\"6\" style=\"text-align: center;\">\n          Type: {{user.typeOfBorrow}}\n        </ion-col>\n      </ion-row>  \n      <ion-row >\n        <ion-col style=\"text-align: center;\">\n          Remark: {{user.remarks}}\n        </ion-col>\n      </ion-row>  \n      </ion-card>\n  </ion-grid>\n\n  <div class=\"btnStyle\">\n    <ion-button (click)=\"exportReport()\">Export to Exel</ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_salesdata_salesdata_module_ts.js.map
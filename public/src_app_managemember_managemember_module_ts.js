"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_managemember_managemember_module_ts"],{

/***/ 8404:
/*!*************************************************************!*\
  !*** ./src/app/managemember/managemember-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagememberPageRoutingModule": () => (/* binding */ ManagememberPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _managemember_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managemember.page */ 6490);




const routes = [
    {
        path: '',
        component: _managemember_page__WEBPACK_IMPORTED_MODULE_0__.ManagememberPage
    }
];
let ManagememberPageRoutingModule = class ManagememberPageRoutingModule {
};
ManagememberPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManagememberPageRoutingModule);



/***/ }),

/***/ 8452:
/*!*****************************************************!*\
  !*** ./src/app/managemember/managemember.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagememberPageModule": () => (/* binding */ ManagememberPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _managemember_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managemember-routing.module */ 8404);
/* harmony import */ var _managemember_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managemember.page */ 6490);







let ManagememberPageModule = class ManagememberPageModule {
};
ManagememberPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _managemember_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagememberPageRoutingModule
        ],
        declarations: [_managemember_page__WEBPACK_IMPORTED_MODULE_1__.ManagememberPage]
    })
], ManagememberPageModule);



/***/ }),

/***/ 6490:
/*!***************************************************!*\
  !*** ./src/app/managemember/managemember.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagememberPage": () => (/* binding */ ManagememberPage)
/* harmony export */ });
/* harmony import */ var C_Users_ADMIN_Desktop_Incurance_Project_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _managemember_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managemember.page.html?ngResource */ 2977);
/* harmony import */ var _managemember_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./managemember.page.scss?ngResource */ 8504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);






let ManagememberPage = class ManagememberPage {
  constructor(firestore) {
    this.firestore = firestore;
    this.allMembers = [];
    this.memberList = [];
    this.selectedMember = "";
    this.percentEntered = "";
    this.selectedBank = "";
    this.selectedDate = "";
    this.fieldValidation = true;
    this.banks = [];
    this.hideBankDropdown = false;
    this.memberListSearch = [];
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_ADMIN_Desktop_Incurance_Project_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.firestore.collection("dropdown").doc('bankname').get().subscribe(doc => {
        console.log(doc.data().bankname);
        _this.banks = doc.data().bankname;
      });
      _this.curentUser = JSON.parse(localStorage.userData);
      _this.users = yield _this.firestore.collection("users", ref => ref.where('enrolledby', "==", "testuser@gmail.com")).get().subscribe(doc => {
        console.log(doc);
        doc.docs.forEach(snapDoc => {
          console.log(snapDoc.data());

          _this.allMembers.push(snapDoc.data());

          _this.memberList.push({
            name: snapDoc.data().name,
            value: snapDoc.data().email
          });
        }); // this.curentUser.email
      });
    })();
  }

  getMember(data) {
    console.log(data);

    if (this.selectedMember != '' && this.percentEntered != '' && this.selectedBank != "" && this.selectedDate != "") {
      this.fieldValidation = false;
    } else {
      this.fieldValidation = true;
    }

    if (this.selectedMember == 'all') {
      this.hideBankDropdown = false;
      this.selectedBank = "all";
    } else {
      for (var i = 0; i < this.allMembers.length; i++) {
        if (this.allMembers[i].email == this.selectedMember) {
          this.selectedBank = this.allMembers[i].bankname ? this.allMembers[i].bankname : '';
          break;
        }
      }

      if (this.selectedBank == '') {
        this.hideBankDropdown = false;
      } else {
        this.hideBankDropdown = true;
      }
    }
  }

  setBank(data) {
    console.log(data);

    if (this.selectedMember != '' && this.percentEntered != '' && this.selectedBank != "" && this.selectedDate != "") {
      this.fieldValidation = false;
    } else {
      this.fieldValidation = true;
    }
  }

  setDate(data) {
    console.log(data);

    if (this.selectedMember != '' && this.percentEntered != '' && this.selectedBank != "" && this.selectedDate != "") {
      this.fieldValidation = false;
    } else {
      this.fieldValidation = true;
    }
  }

  checkPercentage() {
    if (this.selectedMember != '' && this.percentEntered != '' && this.selectedBank != "" && this.selectedDate != "") {
      this.fieldValidation = false;
    } else {
      this.fieldValidation = true;
    }
  }

  setPercent() {
    console.log("Percent set called");

    if (this.selectedMember != '' && this.percentEntered != '' && this.selectedBank != "") {
      this.fieldValidation = false;

      if (this.selectedToDate && this.selectedToDate) {
        var toDateMon = this.selectedToDate.split('-')[1];
        var toDateYr = this.selectedToDate.split('-')[2];
        var fromDateMon = this.selectedFromDate.split('-')[1];
        var fromDateYr = this.selectedFromDate.split('-')[2];

        if (toDateMon != fromDateMon) {
          alert("Please select date for same month and year");
          return;
        } else if (toDateYr != fromDateYr) {
          alert("Please select date for same month and year");
          return;
        }
      } else {
        alert("please enter valid from date and to date");
        return;
      }

      if (this.selectedMember == 'all' && this.selectedBank == 'all') {
        for (var i = 0; i < this.allMembers.length; i++) {
          this.selectedBank = this.allMembers[i].bankname ? this.allMembers[i].bankname : '';
          this.firestore.collection("users").doc(this.allMembers[i].email.trim()).set({
            "currentyear": this.selectedFromDate.split('-')[2],
            "currentmonth": this.selectedFromDate.split('-')[1],
            "percentage": this.percentEntered
          }, {
            merge: true
          }).then(() => {}).catch(err => {
            console.log(err);
          });
        }

        alert("Percentage set for the users");
        this.selectedMember = "";
        this.selectedFromDate = "";
        this.selectedToDate = "";
        this.selectedBank = "";
        this.hideBankDropdown = false;
        this.percentEntered = "";
      } else if (this.selectedMember == 'all' && this.selectedBank != 'all') {
        for (var i = 0; i < this.allMembers.length; i++) {
          if (this.allMembers[i].bankname == this.selectedBank) {
            this.firestore.collection("users").doc(this.allMembers[i].email.trim()).set({
              "currentyear": this.selectedFromDate.split('-')[2],
              "currentmonth": this.selectedFromDate.split('-')[1],
              "percentage": this.percentEntered
            }, {
              merge: true
            }).then(() => {}).catch(err => {
              console.log(err);
            });
          }
        }

        alert("Percentage set for the users");
        this.selectedMember = "";
        this.selectedFromDate = "";
        this.selectedToDate = "";
        this.selectedBank = "";
        this.hideBankDropdown = false;
        this.percentEntered = "";
      } else {
        for (var i = 0; i < this.allMembers.length; i++) {
          if (this.allMembers[i].email == this.selectedMember) {
            this.firestore.collection("users").doc(this.allMembers[i].email.trim()).set({
              "currentyear": this.selectedFromDate.split('-')[2],
              "currentmonth": this.selectedFromDate.split('-')[1],
              "percentage": this.percentEntered
            }, {
              merge: true
            }).then(() => {}).catch(err => {
              console.log(err);
            });
          }
        }

        alert("Percentage set for the users");
        this.selectedMember = "";
        this.selectedFromDate = "";
        this.selectedToDate = "";
        this.selectedBank = "";
        this.hideBankDropdown = false;
        this.percentEntered = "";
      }
    } else {
      this.fieldValidation = true;
      alert("Please fill all required fields");
    }
  }

  openFromDatetime() {
    this.openFromDatetimeField = true;
  }

  hideFromDatetime() {
    this.openFromDatetimeField = false;

    if (this.selectedFromDate) {
      this.selectedFromDate = this.selectedFromDate.split('T')[0];
      var selectedDateTemp = this.selectedFromDate.split('-')[2] + '-' + this.selectedFromDate.split('-')[1] + '-' + this.selectedFromDate.split('-')[0];
      this.selectedFromDate = selectedDateTemp;
    }
  }

  openToDatetime() {
    this.openToDatetimeField = true;
  }

  hideToDatetime() {
    this.openToDatetimeField = false;

    if (this.selectedToDate) {
      this.selectedToDate = this.selectedToDate.split('T')[0];
      var selectedDateTemp = this.selectedToDate.split('-')[2] + '-' + this.selectedToDate.split('-')[1] + '-' + this.selectedToDate.split('-')[0];
      this.selectedToDate = selectedDateTemp;
    }
  }

  searchNameBtn() {
    this.memberListSearch = [];
    this.allMembers.forEach(member => {
      if (member.name.includes(this.searchName)) {
        this.memberListSearch.push(member);
      }
    });
  }

};

ManagememberPage.ctorParameters = () => [{
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore
}];

ManagememberPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-managemember',
  template: _managemember_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_managemember_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ManagememberPage);


/***/ }),

/***/ 8504:
/*!****************************************************************!*\
  !*** ./src/app/managemember/managemember.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".ion-margin {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\n.ion-margin ion-row:first-child {\n  font-weight: bold;\n}\n.ion-margin ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\n.ion-margin ion-col:last-child {\n  border-right: 1px solid black;\n}\n.ion-margin ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n.btnStyle {\n  text-align: center;\n}\n.btnStyleIn {\n  --border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZW1lbWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUNJO0VBQ0UsaUJBQUE7QUFDTjtBQUNJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUNJO0VBQ0UsNkJBQUE7QUFDTjtBQUVJO0VBQ0UsOEJBQUE7QUFBTjtBQUlFO0VBQ0Usa0JBQUE7QUFESjtBQUlFO0VBQ0Usb0JBQUE7QUFESiIsImZpbGUiOiJtYW5hZ2VtZW1iZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1tYXJnaW4ge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcclxuICAgIFxyXG4gICAgaW9uLXJvdzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbCB7IFxyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbDpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG5TdHlsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG5TdHlsZUlue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuIl19 */";

/***/ }),

/***/ 2977:
/*!****************************************************************!*\
  !*** ./src/app/managemember/managemember.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Manage Member</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h3 class=\"buttonCont\">This change need to done every month</h3>\n  <br>\n  <ion-item>\n    <ion-label position=\"floating\">Select Member <sup style=\"color: red;\">*</sup></ion-label>\n    <ion-select placeholder=\"Select member\" [(ngModel)]=\"selectedMember\" (ionChange)=\"getMember(selectedMember)\">\n      <ion-select-option value=\"all\">All Members</ion-select-option>\n      <ion-select-option *ngFor=\"let member of memberList\" value=\"{{member.value}}\">{{member.name}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Select From Date <sup style=\"color: red;\">*</sup></ion-label>\n    <ion-input (click)=\"openFromDatetime()\" [readonly]=\"true\" value=\"{{selectedFromDate}}\" *ngIf=\"!openFromDatetimeField\"></ion-input>\n    \n<div *ngIf=\"openFromDatetimeField\">\n  <ion-datetime placeholder=\"Select Date\" displayFormat=\"DD-MM-YYYY\" [(ngModel)]=\"selectedFromDate\" ></ion-datetime>\n  <ion-button (click)=\"hideFromDatetime()\">OK</ion-button>\n</div>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Select To Date <sup style=\"color: red;\">*</sup></ion-label>\n    <ion-input (click)=\"openToDatetime()\" [readonly]=\"true\" value=\"{{selectedToDate}}\" *ngIf=\"!openToDatetimeField\"></ion-input>\n    \n<div *ngIf=\"openToDatetimeField\">\n  <ion-datetime placeholder=\"Select Date\" displayFormat=\"DD-MM-YYYY\" [(ngModel)]=\"selectedToDate\" ></ion-datetime>\n  <ion-button (click)=\"hideToDatetime()\">OK</ion-button>\n</div>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Select Bank <sup style=\"color: red;\">*</sup></ion-label>\n    <ion-select placeholder=\"Select bank\" [(ngModel)]=\"selectedBank\" (ionChange)=\"setBank(selectedBank)\" [disabled]=\"hideBankDropdown\">\n      <ion-select-option value=\"all\">All Banks</ion-select-option>\n      <ion-select-option *ngFor=\"let bank of banks\" value=\"{{bank}}\">{{bank}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Set % for member <sup style=\"color: red;\">*</sup></ion-label>\n    <ion-input [(ngModel)]=\"percentEntered\" (keyup)=\"checkPercentage()\"></ion-input>\n  </ion-item>  \n  <br>\n  <div class=\"btnStyle\">\n    <ion-button class=\"btnStyleIn\" (click)=\"setPercent()\">Set</ion-button>\n  </div>\n<br>\n<!-- <ion-item>\n  <ion-label position=\"floating\">Enter Member Name</ion-label>\n  <ion-input [(ngModel)]=\"searchName\"></ion-input>\n</ion-item>  \n<div class=\"btnStyle\">\n<ion-button class=\"btnStyleIn\" (click)=\"searchNameBtn()\">Search</ion-button>\n</div>\n<div *ngIf=\"memberListSearch.length\">\n  <h3 style=\"text-align:center;\">Members List</h3>\n  <div>\n    <ion-grid class=\"ion-margin\">\n    <ion-row>\n  <ion-col size=\"2\">Sr. No</ion-col>\n  <ion-col size=\"3\">Name</ion-col>\n  <ion-col size=\"4\">Mobile</ion-col>\n  <ion-col size=\"3\">View Business</ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let memberSearch of memberListSearch; let i = index\">\n      <ion-col size=\"2\">{{i+1}}</ion-col>\n      <ion-col size=\"3\">{{memberSearch.name}}</ion-col>\n      <ion-col size=\"4\">{{memberSearch.mobile}}</ion-col>\n      <ion-col size=\"3\"><ion-button class=\"btnStyleIn\">View</ion-button></ion-col>\n        </ion-row>\n      </ion-grid>\n  </div>\n</div> -->\n\n\n<br>\n<!-- <h2>Member Dashboard</h2>\n<ion-item>\n  <ion-label position=\"floating\">Select Member</ion-label>\n  <ion-select placeholder=\"Select member\">\n    <ion-select-option value=\"all\">All Members</ion-select-option>\n    <ion-select-option value=\"m1\">M1</ion-select-option>\n    <ion-select-option value=\"m2\">M2</ion-select-option>\n  </ion-select>\n</ion-item>\n<ion-item>\n  <ion-label position=\"floating\">Select Date</ion-label>\n  <ion-select placeholder=\"Select date\">\n    <ion-select-option value=\"all\">All Members</ion-select-option>\n  </ion-select>\n</ion-item>\n<br>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n        <ion-label>Total Points Redeem</ion-label>\n        <ion-input></ion-input>  \n    </ion-col>\n    <ion-col>\n        <ion-label>Total Points Pending</ion-label>\n        <ion-input></ion-input>  \n    </ion-col>\n    <ion-col>\n        <ion-label>Total Number of Sales</ion-label>\n        <ion-input></ion-input>  \n    </ion-col>\n    <ion-col>\n        <ion-label>Total Number of Rejected Sales</ion-label>\n        <ion-input></ion-input>  \n    </ion-col>\n  </ion-row> -->\n<!-- </ion-grid> -->\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_managemember_managemember_module_ts.js.map
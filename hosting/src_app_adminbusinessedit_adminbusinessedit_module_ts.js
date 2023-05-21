"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_adminbusinessedit_adminbusinessedit_module_ts"],{

/***/ 6147:
/*!***********************************************************************!*\
  !*** ./src/app/adminbusinessedit/adminbusinessedit-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminbusinesseditPageRoutingModule": () => (/* binding */ AdminbusinesseditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _adminbusinessedit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminbusinessedit.page */ 9644);




const routes = [
    {
        path: '',
        component: _adminbusinessedit_page__WEBPACK_IMPORTED_MODULE_0__.AdminbusinesseditPage
    }
];
let AdminbusinesseditPageRoutingModule = class AdminbusinesseditPageRoutingModule {
};
AdminbusinesseditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminbusinesseditPageRoutingModule);



/***/ }),

/***/ 9144:
/*!***************************************************************!*\
  !*** ./src/app/adminbusinessedit/adminbusinessedit.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminbusinesseditPageModule": () => (/* binding */ AdminbusinesseditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _adminbusinessedit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminbusinessedit-routing.module */ 6147);
/* harmony import */ var _adminbusinessedit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminbusinessedit.page */ 9644);







let AdminbusinesseditPageModule = class AdminbusinesseditPageModule {
};
AdminbusinesseditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _adminbusinessedit_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminbusinesseditPageRoutingModule
        ],
        declarations: [_adminbusinessedit_page__WEBPACK_IMPORTED_MODULE_1__.AdminbusinesseditPage]
    })
], AdminbusinesseditPageModule);



/***/ }),

/***/ 9644:
/*!*************************************************************!*\
  !*** ./src/app/adminbusinessedit/adminbusinessedit.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminbusinesseditPage": () => (/* binding */ AdminbusinesseditPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _adminbusinessedit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminbusinessedit.page.html?ngResource */ 9108);
/* harmony import */ var _adminbusinessedit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminbusinessedit.page.scss?ngResource */ 8650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);







let AdminbusinesseditPage = class AdminbusinesseditPage {
  constructor(route, router, firestore) {
    this.route = route;
    this.router = router;
    this.firestore = firestore;
    this.business = "";
    this.banks = [];
    this.banks = JSON.parse(localStorage.banklist);
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.business = this.router.getCurrentNavigation().extras.state.business;

        if (this.business.agent == this.business.createdBy) {
          this.business.amountToPaySubAgent = 0;
          this.business.points = 0;
          this.business.amountToPayAgent = Number(this.business.disbursedAmount) * Number(this.business.pointsAgent) / 100;
          console.log("test");
        } else {
          this.business.amountToPaySubAgent = Number(this.business.disbursedAmount) * Number(this.business.points) / 100;
          this.business.amountToPayAgent = Number(this.business.disbursedAmount) * Number(this.business.pointsAgent) / 100;
          console.log("test");
        }
      }
    });
  }

  pointChange() {
    this.business.amountToPaySubAgent = Number(this.business.disbursedAmount) * Number(this.business.points) / 100;
    this.business.amountToPayAgent = Number(this.business.disbursedAmount) * Number(this.business.pointsAgent) / 100;
  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['admin']);
  }

  updateDetails() {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.business.approvedbyadmin = "A";
      yield _this.firestore.collection("business").doc(_this.business.id).update(_this.business).catch(error => {
        console.log(error);
        alert("Unable to process request");
        return;
      }).then(userResult => {
        console.log(userResult); // this.commondataService.allPendingAgents.splice(i,1)
        //  this.goto('login');

        alert("Business Approved");

        _this.router.navigate(['admin']);

        return;
      });
    })();
  }

  hold() {
    var _this2 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // for(var j = 0;j<this.business.length;j++){
      //   if(this.business[j].id == id){
      console.log(_this2.business.id);
      _this2.business.approvedbyadmin = "H";
      yield _this2.firestore.collection("business").doc(_this2.business.id).update(_this2.business).catch(error => {
        console.log(error);
        alert("Unable to process request");
        return;
      }).then(userResult => {
        alert("Business is hold");

        _this2.router.navigate(['admin']);

        return;
      }); //   }
      // }
    })();
  }

  reject() {
    var _this3 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // for(var j = 0;j<this.business.length;j++){
      //   if(this.business[j].id == id){
      console.log(_this3.business.id);
      _this3.business.approvedbyadmin = "R";
      yield _this3.firestore.collection("business").doc(_this3.business.id).update(_this3.business).catch(error => {
        console.log(error);
        alert("Unable to process request");
        return;
      }).then(userResult => {
        alert("Business is rejected");

        _this3.router.navigate(['admin']);

        return;
      }); //   }
      // }
    })();
  }

};

AdminbusinesseditPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore
}];

AdminbusinesseditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-adminbusinessedit',
  template: _adminbusinessedit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_adminbusinessedit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminbusinesseditPage);


/***/ }),

/***/ 8650:
/*!**************************************************************************!*\
  !*** ./src/app/adminbusinessedit/adminbusinessedit.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmJ1c2luZXNzZWRpdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9108:
/*!**************************************************************************!*\
  !*** ./src/app/adminbusinessedit/adminbusinessedit.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Modify Business Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col>Name</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"business.name\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>LAN</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"business.lanNo\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Agent Name</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"business.agentName\" readonly disabled></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Agent Email</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"business.agent\" readonly disabled></ion-input></ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"business.agent != business.createdBy\">\n    <ion-col>Sub Agent Name</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"business.createdByName\" readonly disabled></ion-input></ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"business.agent != business.createdBy\">\n    <ion-col>Sub Agent Email</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"business.createdBy\" readonly disabled></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Agent Points (in %)</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"business.pointsAgent\" (keyup)=\"pointChange()\" type=\"number\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"business.agent != business.createdBy\">\n    <ion-col>Sub-Agent Points (in %)</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"business.points\" (keyup)=\"pointChange()\" type=\"number\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Amount</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"business.disbursedAmount\" (keyup)=\"pointChange()\" type=\"number\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col>Type of Loans</ion-col>\n      <ion-col>\n      <ion-select placeholder=\"Type of Loans\" interface=\"action-sheet\" [(ngModel)]=\"business.typeOfBorrow\">\n        <ion-select-option value=\"home\">Home</ion-select-option>\n        <ion-select-option value=\"personal\">Personal</ion-select-option>\n        <ion-select-option value=\"mortgage\">Mortgage</ion-select-option>\n        <ion-select-option value=\"business\">Business</ion-select-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Disbursed Date</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"business.disburseDate\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Bank Name</ion-col>\n    <ion-col>\n      <ion-select placeholder=\"Select Bank\" interface=\"action-sheet\" [(ngModel)]=\"business.bankName\">\n        <ion-select-option *ngFor=\"let bank of banks\" value=\"{{bank}}\">{{bank}}</ion-select-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Remark</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"business.remarks\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Agent Amount</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"business.amountToPayAgent\" type=\"number\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"business.agent != business.createdBy\">\n    <ion-col>Sub-Agent Amount</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"business.amountToPaySubAgent\" type=\"number\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col style=\"text-align: center;\">\n      <ion-button (click)=\"reject()\">Reject</ion-button>\n      </ion-col>\n      <!-- <ion-col style=\"text-align: center;\">\n        <ion-button (click)=\"approve(user.id,i)\">Approve</ion-button>\n      </ion-col> -->\n      <ion-col size=\"6\" style=\"text-align: center;\">\n      <ion-button (click)=\"hold()\">Hold</ion-button>\n      </ion-col>\n    <!-- <ion-col><ion-button (click)=\"goBack()\">Back</ion-button></ion-col> -->\n    <ion-col><ion-button (click)=\"updateDetails()\">Approve</ion-button></ion-col>\n  </ion-row>\n  \n</ion-grid>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_adminbusinessedit_adminbusinessedit_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_totalcases_totalcases_module_ts"],{

/***/ 9263:
/*!*********************************************************!*\
  !*** ./src/app/totalcases/totalcases-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalcasesPageRoutingModule": () => (/* binding */ TotalcasesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _totalcases_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./totalcases.page */ 221);




const routes = [
    {
        path: '',
        component: _totalcases_page__WEBPACK_IMPORTED_MODULE_0__.TotalcasesPage
    }
];
let TotalcasesPageRoutingModule = class TotalcasesPageRoutingModule {
};
TotalcasesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TotalcasesPageRoutingModule);



/***/ }),

/***/ 5689:
/*!*************************************************!*\
  !*** ./src/app/totalcases/totalcases.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalcasesPageModule": () => (/* binding */ TotalcasesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _totalcases_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./totalcases-routing.module */ 9263);
/* harmony import */ var _totalcases_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./totalcases.page */ 221);







let TotalcasesPageModule = class TotalcasesPageModule {
};
TotalcasesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _totalcases_routing_module__WEBPACK_IMPORTED_MODULE_0__.TotalcasesPageRoutingModule
        ],
        declarations: [_totalcases_page__WEBPACK_IMPORTED_MODULE_1__.TotalcasesPage]
    })
], TotalcasesPageModule);



/***/ }),

/***/ 221:
/*!***********************************************!*\
  !*** ./src/app/totalcases/totalcases.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalcasesPage": () => (/* binding */ TotalcasesPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _totalcases_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./totalcases.page.html?ngResource */ 3976);
/* harmony import */ var _totalcases_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./totalcases.page.scss?ngResource */ 2966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/commondata.service */ 1056);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);







let TotalcasesPage = class TotalcasesPage {
  constructor(commondataService, firestore) {
    this.commondataService = commondataService;
    this.firestore = firestore;
    this.allcases = [];
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.allcases = this.commondataService.allPendingBusiness;
    console.log(this.allcases);
  }

  approve(email, i) {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(email, i);

      for (var j = 0; j < _this.allcases.length; j++) if (_this.allcases[j].email == email) {
        yield _this.firestore.collection("users").doc(email).update({
          "approvedbyadmin": 'true'
        }).catch(error => {
          console.log(error);
          alert("Unable to process request");
          return;
        }).then(userResult => {
          console.log(userResult);

          _this.allcases.splice(i, 1); // this.commondataService.allPendingAgents.splice(i,1)
          //  this.goto('login');


          return;
        });
      }
    })();
  }

  reject(email, i) {
    var _this2 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(email, i);

      for (var j = 0; j < _this2.allcases.length; j++) if (_this2.allcases[j].email == email) {
        yield _this2.firestore.collection("users").doc(email).update({
          "approvedbyadmin": 'disabled'
        }).catch(error => {
          console.log(error);
          alert("Unable to process request");
          return;
        }).then(userResult => {
          console.log(userResult);

          _this2.allcases.splice(i, 1); // this.commondataService.allPendingAgents.splice(i,1)
          //  this.goto('login');


          return;
        });
      }
    })();
  }

  searchBusiness(input) {
    console.log(input);
    this.allcases = this.commondataService.allPendingBusiness.filter(user => {
      if (user.name.toString().includes(input.target.value)) {
        return user;
      } else if (user.lanNo.toString().includes(input.target.value.toString())) {
        return user;
      }
    });
  }

};

TotalcasesPage.ctorParameters = () => [{
  type: _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__.CommondataService
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore
}];

TotalcasesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-totalcases',
  template: _totalcases_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_totalcases_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TotalcasesPage);


/***/ }),

/***/ 2966:
/*!************************************************************!*\
  !*** ./src/app/totalcases/totalcases.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3RhbGNhc2VzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3976:
/*!************************************************************!*\
  !*** ./src/app/totalcases/totalcases.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\" >\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>All Business</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-searchbar placeholder=\"Enter LAN Number\" [(ngModel)]=\"searchInput\" (keyup)=\"searchBusiness($event)\"></ion-searchbar>\n  </ion-item>\n\n  <ion-grid>\n    <ion-card *ngFor=\"let user of allcases;let i = index;\">\n    <ion-row >\n      <ion-col style=\"text-align: center;\">\n        {{user.name}}\n      </ion-col>\n      \n    </ion-row>  \n    <ion-row >\n      <ion-col size=\"6\" style=\"text-align: center;\">\n        LAN: {{user.lanNo}}\n      </ion-col>\n      <ion-col size=\"6\" style=\"text-align: center;\">\n        Created By: {{user.createdBy}}\n      </ion-col>\n    </ion-row>  \n    <ion-row >\n      <ion-col size=\"6\" style=\"text-align: center;\">\n        Amount: {{user.disbursedAmount}}\n      </ion-col>\n      <ion-col size=\"6\" style=\"text-align: center;\">\n        Type: {{user.typeOfBorrow}}\n      </ion-col>\n    </ion-row>  \n    <ion-row >\n      <ion-col style=\"text-align: center;\">\n        Remark: {{user.remarks}}\n      </ion-col>\n    </ion-row>  \n    </ion-card>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_totalcases_totalcases_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_memberedit_memberedit_module_ts"],{

/***/ 989:
/*!*********************************************************!*\
  !*** ./src/app/memberedit/memberedit-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembereditPageRoutingModule": () => (/* binding */ MembereditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _memberedit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memberedit.page */ 2139);




const routes = [
    {
        path: '',
        component: _memberedit_page__WEBPACK_IMPORTED_MODULE_0__.MembereditPage
    }
];
let MembereditPageRoutingModule = class MembereditPageRoutingModule {
};
MembereditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MembereditPageRoutingModule);



/***/ }),

/***/ 3030:
/*!*************************************************!*\
  !*** ./src/app/memberedit/memberedit.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembereditPageModule": () => (/* binding */ MembereditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _memberedit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memberedit-routing.module */ 989);
/* harmony import */ var _memberedit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memberedit.page */ 2139);







let MembereditPageModule = class MembereditPageModule {
};
MembereditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _memberedit_routing_module__WEBPACK_IMPORTED_MODULE_0__.MembereditPageRoutingModule
        ],
        declarations: [_memberedit_page__WEBPACK_IMPORTED_MODULE_1__.MembereditPage]
    })
], MembereditPageModule);



/***/ }),

/***/ 2139:
/*!***********************************************!*\
  !*** ./src/app/memberedit/memberedit.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MembereditPage": () => (/* binding */ MembereditPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _memberedit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memberedit.page.html?ngResource */ 7437);
/* harmony import */ var _memberedit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memberedit.page.scss?ngResource */ 3522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);







let MembereditPage = class MembereditPage {
  constructor(route, router, firestore) {
    var _this = this;

    this.route = route;
    this.router = router;
    this.firestore = firestore;
    this.userData = {};
    this.userDataTemp = {};
    this.route.queryParams.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        if (_this.router.getCurrentNavigation().extras.state) {
          _this.userDataTemp = yield _this.router.getCurrentNavigation().extras.state;
          console.log(_this.userData);

          _this.loadData();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  loadData() {
    this.userData = this.userDataTemp;
  }

  updateDetails() {
    var _this2 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.firestore.collection("users").doc(_this2.userData.email ? _this2.userData.email : _this2.userData.id).update(_this2.userData).catch(error => {
        console.log(error);
        alert("Unable to process request");
        return;
      }).then(userResult => {
        console.log(userResult);
        alert("User data updated sucessfully"); // this.commondataService.allPendingAgents.splice(i,1)

        _this2.router.navigate(['adminmanagemember']);

        return;
      });
    })();
  }

  ngOnInit() {}

};

MembereditPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore
}];

MembereditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-memberedit',
  template: _memberedit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_memberedit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], MembereditPage);


/***/ }),

/***/ 3522:
/*!************************************************************!*\
  !*** ./src/app/memberedit/memberedit.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXJlZGl0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7437:
/*!************************************************************!*\
  !*** ./src/app/memberedit/memberedit.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Member Edit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col>Name :</ion-col>\n    {{userData.name}}\n    <ion-col><ion-input [(ngModel)]=\"userData.name\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Email :</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData.email\" readonly></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Gender :</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData.gender\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Mobile :</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData.mobile\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Aadhaar :</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData.aadhaar\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Bank Name :</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData.bankname\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Account number :</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData.acno\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Beneficiary :</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData.beneficiary\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>IFSC Number :</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData.ifsc\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>PAN Number :</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData.panno\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Role :</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData.role\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Enrolled By :</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData.enrolledby\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Points (in %) :</ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData.percentage\"></ion-input></ion-col>\n  </ion-row>\n  <!-- <ion-row>\n    <ion-col></ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData\"></ion-input></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col><ion-input [(ngModel)]=\"userData\"></ion-input></ion-col>\n  </ion-row> -->\n  <ion-item>\n    <ion-button (click)=\"updateDetails()\" expand=\"full\">Update</ion-button>\n  </ion-item>\n</ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_memberedit_memberedit_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_addbank_addbank_module_ts"],{

/***/ 9894:
/*!***************************************************!*\
  !*** ./src/app/addbank/addbank-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddbankPageRoutingModule": () => (/* binding */ AddbankPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _addbank_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addbank.page */ 5305);




const routes = [
    {
        path: '',
        component: _addbank_page__WEBPACK_IMPORTED_MODULE_0__.AddbankPage
    }
];
let AddbankPageRoutingModule = class AddbankPageRoutingModule {
};
AddbankPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddbankPageRoutingModule);



/***/ }),

/***/ 8283:
/*!*******************************************!*\
  !*** ./src/app/addbank/addbank.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddbankPageModule": () => (/* binding */ AddbankPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _addbank_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addbank-routing.module */ 9894);
/* harmony import */ var _addbank_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addbank.page */ 5305);







let AddbankPageModule = class AddbankPageModule {
};
AddbankPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addbank_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddbankPageRoutingModule
        ],
        declarations: [_addbank_page__WEBPACK_IMPORTED_MODULE_1__.AddbankPage]
    })
], AddbankPageModule);



/***/ }),

/***/ 5305:
/*!*****************************************!*\
  !*** ./src/app/addbank/addbank.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddbankPage": () => (/* binding */ AddbankPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _addbank_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addbank.page.html?ngResource */ 3242);
/* harmony import */ var _addbank_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addbank.page.scss?ngResource */ 2492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);






let AddbankPage = class AddbankPage {
  constructor(firestore) {
    this.firestore = firestore;
    this.banks = [];
    this.bankname = "";
  }

  ngOnInit() {}

  ionViewWillEnter() {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.firestore.collection("dropdown").doc('bankname').get().subscribe(doc => {
        console.log(doc.data().bankname);
        _this.banks = doc.data().bankname;
      });
    })();
  }

  removeBank(i, bank) {
    var _this2 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(i + " " + bank);
      const docRef = yield _this2.firestore.collection("dropdown").doc('bankname');
      docRef.get().subscribe( /*#__PURE__*/function () {
        var _ref = (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (snapshot) {
          let array = snapshot.get('bankname'); // If the array is null, create an empty array

          if (!array) {
            array = [];
          } // array.delete(bank);


          var updatedarray = array.filter(item => item !== bank); // Update the array in Firestore

          docRef.update({
            bankname: updatedarray
          });
          yield _this2.firestore.collection("dropdown").doc('bankname').get().subscribe(doc => {
            console.log(doc.data().bankname);
            _this2.banks = doc.data().bankname;
          });
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  addBank(newbankname) {
    var _this3 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(newbankname);
      const docRef = yield _this3.firestore.collection("dropdown").doc('bankname');
      docRef.get().subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (snapshot) {
          let array = snapshot.get('bankname'); // If the array is null, create an empty array

          if (!array) {
            array = [];
          }

          array.push(newbankname); // Update the array in Firestore

          docRef.update({
            bankname: array
          });
          yield _this3.firestore.collection("dropdown").doc('bankname').get().subscribe(doc => {
            console.log(doc.data().bankname);
            _this3.banks = doc.data().bankname;
          });
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }

};

AddbankPage.ctorParameters = () => [{
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore
}];

AddbankPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-addbank',
  template: _addbank_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_addbank_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddbankPage);


/***/ }),

/***/ 2492:
/*!******************************************************!*\
  !*** ./src/app/addbank/addbank.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRiYW5rLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3242:
/*!******************************************************!*\
  !*** ./src/app/addbank/addbank.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Bank Management</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-item>\n  <ion-input [(ngModel)]=\"bankname\" placeholder=\"Enter Bank Name\"></ion-input>\n  <ion-button (click)=\"addBank(bankname)\">Add New Bank</ion-button>  \n</ion-item>\n<h3 style=\"text-align: center;\">Bank List</h3>\n<ion-grid style=\"border: 2px solid; background-color: #ffffff;\">\n  <ion-row >\n    <ion-col size=\"2\">Sr No</ion-col>\n    <ion-col>Bank Name</ion-col>\n    <ion-col size=\"3\">Remove</ion-col>\n  </ion-row>\n  <ion-row *ngFor=\"let bank of banks;let i=index;\">\n    <ion-col size=\"2\" style=\"border: 2px solid;\">{{i+1}}</ion-col>\n    <ion-col style=\"border: 2px solid;\">{{bank}}</ion-col>\n    <ion-col style=\"border: 2px solid;\" size=\"3\"><ion-icon name=\"trash\" (click)=\"removeBank(i,bank)\"></ion-icon></ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_addbank_addbank_module_ts.js.map
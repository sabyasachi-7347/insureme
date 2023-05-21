"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_adminpendingbusiness_adminpendingbusiness_module_ts"],{

/***/ 5734:
/*!*****************************************************************************!*\
  !*** ./src/app/adminpendingbusiness/adminpendingbusiness-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminpendingbusinessPageRoutingModule": () => (/* binding */ AdminpendingbusinessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _adminpendingbusiness_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminpendingbusiness.page */ 6067);




const routes = [
    {
        path: '',
        component: _adminpendingbusiness_page__WEBPACK_IMPORTED_MODULE_0__.AdminpendingbusinessPage
    }
];
let AdminpendingbusinessPageRoutingModule = class AdminpendingbusinessPageRoutingModule {
};
AdminpendingbusinessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminpendingbusinessPageRoutingModule);



/***/ }),

/***/ 3064:
/*!*********************************************************************!*\
  !*** ./src/app/adminpendingbusiness/adminpendingbusiness.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminpendingbusinessPageModule": () => (/* binding */ AdminpendingbusinessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _adminpendingbusiness_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminpendingbusiness-routing.module */ 5734);
/* harmony import */ var _adminpendingbusiness_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminpendingbusiness.page */ 6067);







let AdminpendingbusinessPageModule = class AdminpendingbusinessPageModule {
};
AdminpendingbusinessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _adminpendingbusiness_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminpendingbusinessPageRoutingModule
        ],
        declarations: [_adminpendingbusiness_page__WEBPACK_IMPORTED_MODULE_1__.AdminpendingbusinessPage]
    })
], AdminpendingbusinessPageModule);



/***/ }),

/***/ 6067:
/*!*******************************************************************!*\
  !*** ./src/app/adminpendingbusiness/adminpendingbusiness.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminpendingbusinessPage": () => (/* binding */ AdminpendingbusinessPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _adminpendingbusiness_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminpendingbusiness.page.html?ngResource */ 5049);
/* harmony import */ var _adminpendingbusiness_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminpendingbusiness.page.scss?ngResource */ 9590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/commondata.service */ 1056);








let AdminpendingbusinessPage = class AdminpendingbusinessPage {
  constructor(commondataService, firestore, router) {
    this.commondataService = commondataService;
    this.firestore = firestore;
    this.router = router;
  }

  ngOnInit() {}

  ionViewWillEnter() {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.business = _this.commondataService.allPendingBusiness;
      console.log(_this.business);
      yield _this.firestore.collection("dropdown").doc('bankname').get().subscribe(doc => {
        console.log(doc.data().bankname);
        localStorage.banklist = JSON.stringify(doc.data().bankname);
      });
    })();
  }

  hold(id, i) {
    var _this2 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(id, i);

      for (var j = 0; j < _this2.business.length; j++) {
        if (_this2.business[j].id == id) {
          yield _this2.firestore.collection("business").doc(id).update({
            "approvedbyadmin": 'H'
          }).catch(error => {
            console.log(error);
            alert("Unable to process request");
            return;
          }).then(userResult => {
            console.log(userResult);

            _this2.business.splice(i, 1); // this.commondataService.allPendingBusiness.splice(i,1)
            //  this.goto('login');


            return;
          });
        }
      }
    })();
  }

  reject(id, i) {
    var _this3 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(id, i);

      for (var j = 0; j < _this3.business.length; j++) {
        if (_this3.business[j].id == id) {
          yield _this3.firestore.collection("business").doc(id).update({
            "approvedbyadmin": 'R'
          }).catch(error => {
            console.log(error);
            alert("Unable to process request");
            return;
          }).then(userResult => {
            console.log(userResult);

            _this3.business.splice(i, 1); // this.commondataService.allPendingBusiness.splice(i,1)
            //  this.goto('login');


            return;
          });
        }
      }
    })();
  }

  approve(id, i) {
    var _this4 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(id, i);

      for (var j = 0; j < _this4.business.length; j++) {
        if (_this4.business[j].id == id) {
          yield _this4.firestore.collection("business").doc(id).update({
            "approvedbyadmin": 'A'
          }).catch(error => {
            console.log(error);
            alert("Unable to process request");
            return;
          }).then(userResult => {
            console.log(userResult);

            _this4.business.splice(i, 1); // this.commondataService.allPendingBusiness.splice(i,1)
            //  this.goto('login');


            return;
          });
        }
      }
    })();
  }

  modify(id, i) {
    var _this5 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (var j = 0; j < _this5.business.length; j++) {
        if (_this5.business[j].id == id) {
          let navigationExtras = {
            state: {
              business: _this5.business[j]
            }
          };

          _this5.router.navigate(['adminbusinessedit'], navigationExtras);
        }
      }
    })();
  }

};

AdminpendingbusinessPage.ctorParameters = () => [{
  type: _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__.CommondataService
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}];

AdminpendingbusinessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-adminpendingbusiness',
  template: _adminpendingbusiness_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_adminpendingbusiness_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminpendingbusinessPage);


/***/ }),

/***/ 9590:
/*!********************************************************************************!*\
  !*** ./src/app/adminpendingbusiness/adminpendingbusiness.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbnBlbmRpbmdidXNpbmVzcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5049:
/*!********************************************************************************!*\
  !*** ./src/app/adminpendingbusiness/adminpendingbusiness.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pending Business Requests</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-card *ngFor=\"let user of business;let i = index;\">\n  <ion-row >\n    <ion-col style=\"text-align: center;\">\n      {{user.name}}\n    </ion-col>\n    \n  </ion-row>  \n  <ion-row >\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      LAN:\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n     {{user.lanNo}}\n    </ion-col>\n    </ion-row>\n    <ion-row>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      Created By:\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      {{user.createdByName}}\n    </ion-col>\n  </ion-row>  \n  <ion-row>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      Agent:\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      {{user.agentName}}\n    </ion-col>\n  </ion-row>  \n  <ion-row >\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      Amount: \n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      {{user.disbursedAmount}}\n    </ion-col>\n  </ion-row>  \n  <ion-row >\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      Type: \n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      {{user.typeOfBorrow}}\n    </ion-col>\n  </ion-row>  \n  <ion-row >\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      Remark:\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      {{user.remarks}}\n    </ion-col>\n  </ion-row>  \n  <ion-row >\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      Disbursed Date:\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      {{user.disburseDate}}\n    </ion-col>\n  </ion-row> \n  <ion-row >\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      Bank Name:\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      {{user.bankName}}\n    </ion-col>\n  </ion-row>   \n  <!-- <ion-row >\n    <ion-col size=\"6\" style=\"text-align: center;\">\n    <ion-button (click)=\"reject(user.id,i)\">Reject</ion-button>\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      <ion-button (click)=\"approve(user.id,i)\">Approve</ion-button>\n    </ion-col>\n  </ion-row>  -->\n  <ion-row>\n    <!-- <ion-col size=\"6\" style=\"text-align: center;\">\n      <ion-button (click)=\"hold(user.id,i)\">Hold</ion-button>\n      </ion-col> -->\n      <ion-col size=\"6\" style=\"text-align: center;\">\n        <ion-button (click)=\"modify(user.id,i)\">Modify</ion-button>\n        </ion-col>\n  </ion-row>\n  </ion-card>\n</ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_adminpendingbusiness_adminpendingbusiness_module_ts.js.map
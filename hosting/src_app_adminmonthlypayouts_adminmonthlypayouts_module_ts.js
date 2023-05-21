"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_adminmonthlypayouts_adminmonthlypayouts_module_ts"],{

/***/ 1366:
/*!***************************************************************************!*\
  !*** ./src/app/adminmonthlypayouts/adminmonthlypayouts-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminmonthlypayoutsPageRoutingModule": () => (/* binding */ AdminmonthlypayoutsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _adminmonthlypayouts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminmonthlypayouts.page */ 3915);




const routes = [
    {
        path: '',
        component: _adminmonthlypayouts_page__WEBPACK_IMPORTED_MODULE_0__.AdminmonthlypayoutsPage
    }
];
let AdminmonthlypayoutsPageRoutingModule = class AdminmonthlypayoutsPageRoutingModule {
};
AdminmonthlypayoutsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminmonthlypayoutsPageRoutingModule);



/***/ }),

/***/ 3182:
/*!*******************************************************************!*\
  !*** ./src/app/adminmonthlypayouts/adminmonthlypayouts.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminmonthlypayoutsPageModule": () => (/* binding */ AdminmonthlypayoutsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _adminmonthlypayouts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminmonthlypayouts-routing.module */ 1366);
/* harmony import */ var _adminmonthlypayouts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminmonthlypayouts.page */ 3915);







let AdminmonthlypayoutsPageModule = class AdminmonthlypayoutsPageModule {
};
AdminmonthlypayoutsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _adminmonthlypayouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminmonthlypayoutsPageRoutingModule
        ],
        declarations: [_adminmonthlypayouts_page__WEBPACK_IMPORTED_MODULE_1__.AdminmonthlypayoutsPage]
    })
], AdminmonthlypayoutsPageModule);



/***/ }),

/***/ 3915:
/*!*****************************************************************!*\
  !*** ./src/app/adminmonthlypayouts/adminmonthlypayouts.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminmonthlypayoutsPage": () => (/* binding */ AdminmonthlypayoutsPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _adminmonthlypayouts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminmonthlypayouts.page.html?ngResource */ 8068);
/* harmony import */ var _adminmonthlypayouts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminmonthlypayouts.page.scss?ngResource */ 4027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/commondata.service */ 1056);








let AdminmonthlypayoutsPage = class AdminmonthlypayoutsPage {
  constructor(firestore, commondataService, router) {
    this.firestore = firestore;
    this.commondataService = commondataService;
    this.router = router;
    this.allAgents = [];
    this.allSubAgents = [];
    this.selection = 'agent';
  }

  ngOnInit() {
    this.changeButton(this.selection);
  }

  changeButton(selection) {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.selection = selection;

      if (selection == 'agent') {
        _this.isAgent = true;
        _this.allAgents = [];
        yield _this.firestore.collection("users", ref => ref.where('role', "==", "agent")).get().subscribe(doc => {
          console.log("all docs here");
          console.log(doc);
          doc.docs.forEach(snapDoc => {
            console.log(snapDoc.data());

            _this.allAgents.push(snapDoc.data());
          }); // this.curentUser.email
        });
      } else {
        _this.isAgent = false;
        _this.allSubAgents = [];
        yield _this.firestore.collection("users", ref => ref.where('role', "==", "subagent")).get().subscribe(doc => {
          console.log("all docs here");
          console.log(doc);
          doc.docs.forEach(snapDoc => {
            console.log(snapDoc.data());

            _this.allSubAgents.push(snapDoc.data());
          }); // this.curentUser.email
        });
      }
    })();
  }

  goToPayout(agent) {
    var _this2 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      agent.selection = _this2.selection;
      let navigationExtra = {
        state: agent
      };

      _this2.router.navigate(['payoutallbusiness'], navigationExtra);
    })();
  }

};

AdminmonthlypayoutsPage.ctorParameters = () => [{
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore
}, {
  type: _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__.CommondataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}];

AdminmonthlypayoutsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-adminmonthlypayouts',
  template: _adminmonthlypayouts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_adminmonthlypayouts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminmonthlypayoutsPage);


/***/ }),

/***/ 4027:
/*!******************************************************************************!*\
  !*** ./src/app/adminmonthlypayouts/adminmonthlypayouts.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".alginment {\n  text-align: center;\n  color: #ffffff;\n}\n\n.card-blue {\n  --background:#5a4fe9;\n  color: #ffffff;\n}\n\n.card-grey {\n  --background:#ffffff;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWlubW9udGhseXBheW91dHMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vTXklMjBQcm9qZWN0cyUyME5vdCUyMFRvJTIwVXNlL2luc3VyZW1lbmV3Z2l0L3NyYy9hcHAvYWRtaW5tb250aGx5cGF5b3V0cy9hZG1pbm1vbnRobHlwYXlvdXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJhZG1pbm1vbnRobHlwYXlvdXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGdpbm1lbnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2FyZC1ibHVle1xuICAgIC0tYmFja2dyb3VuZDojNWE0ZmU5O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2FyZC1ncmV5e1xuICAgIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufSIsIi5hbGdpbm1lbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2FyZC1ibHVlIHtcbiAgLS1iYWNrZ3JvdW5kOiM1YTRmZTk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2FyZC1ncmV5IHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIGNvbG9yOiAjMDAwMDAwO1xufSJdfQ== */";

/***/ }),

/***/ 8068:
/*!******************************************************************************!*\
  !*** ./src/app/adminmonthlypayouts/adminmonthlypayouts.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Admin Payouts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col (click)=\"changeButton('agent')\" class=\"alginment\">\n      <ion-card [ngClass]=\"isAgent ? 'card-blue': 'card-grey'\">\n        <div>All Agents</div>\n      </ion-card>\n    </ion-col>\n    <ion-col (click)=\"changeButton('subAgent')\" class=\"alginment\">\n      <ion-card [ngClass]=\"!isAgent ? 'card-blue': 'card-grey'\">\n        <div>All Sub Agents</div>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid *ngIf=\"isAgent\">\n    <ion-card *ngFor=\"let agent of allAgents\">\n      <ion-row>\n        <ion-col>Name :</ion-col>\n        <ion-col>{{agent.name}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Bank :</ion-col>\n        <ion-col>{{agent.bankname}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Beneficiary :</ion-col>\n        <ion-col>{{agent.beneficiary}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>IFSC :</ion-col>\n        <ion-col>{{agent.ifsc}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Account Number :</ion-col>\n        <ion-col>{{agent.acno}}</ion-col>\n      </ion-row>\n      <ion-item>\n        <ion-button (click)=\"goToPayout(agent)\">Proceed</ion-button>\n      </ion-item>\n    </ion-card>\n</ion-grid>\n\n<ion-grid *ngIf=\"!isAgent\">\n  <ion-card *ngFor=\"let agent of allSubAgents\">\n    <ion-row>\n      <ion-col>Name :</ion-col>\n      <ion-col>{{agent.name}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Bank :</ion-col>\n      <ion-col>{{agent.bankname}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Beneficiary :</ion-col>\n      <ion-col>{{agent.beneficiary}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>IFSC :</ion-col>\n      <ion-col>{{agent.ifsc}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>Account Number :</ion-col>\n      <ion-col>{{agent.acno}}</ion-col>\n    </ion-row>\n    <ion-item>\n      <ion-button (click)=\"goToPayout(agent)\">Proceed</ion-button>\n    </ion-item>\n  </ion-card>\n</ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_adminmonthlypayouts_adminmonthlypayouts_module_ts.js.map
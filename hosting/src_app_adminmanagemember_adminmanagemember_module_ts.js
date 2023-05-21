"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_adminmanagemember_adminmanagemember_module_ts"],{

/***/ 4642:
/*!***********************************************************************!*\
  !*** ./src/app/adminmanagemember/adminmanagemember-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminmanagememberPageRoutingModule": () => (/* binding */ AdminmanagememberPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _adminmanagemember_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminmanagemember.page */ 3417);




const routes = [
    {
        path: '',
        component: _adminmanagemember_page__WEBPACK_IMPORTED_MODULE_0__.AdminmanagememberPage
    }
];
let AdminmanagememberPageRoutingModule = class AdminmanagememberPageRoutingModule {
};
AdminmanagememberPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminmanagememberPageRoutingModule);



/***/ }),

/***/ 6657:
/*!***************************************************************!*\
  !*** ./src/app/adminmanagemember/adminmanagemember.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminmanagememberPageModule": () => (/* binding */ AdminmanagememberPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _adminmanagemember_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminmanagemember-routing.module */ 4642);
/* harmony import */ var _adminmanagemember_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminmanagemember.page */ 3417);







let AdminmanagememberPageModule = class AdminmanagememberPageModule {
};
AdminmanagememberPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _adminmanagemember_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminmanagememberPageRoutingModule
        ],
        declarations: [_adminmanagemember_page__WEBPACK_IMPORTED_MODULE_1__.AdminmanagememberPage]
    })
], AdminmanagememberPageModule);



/***/ }),

/***/ 3417:
/*!*************************************************************!*\
  !*** ./src/app/adminmanagemember/adminmanagemember.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminmanagememberPage": () => (/* binding */ AdminmanagememberPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _adminmanagemember_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminmanagemember.page.html?ngResource */ 572);
/* harmony import */ var _adminmanagemember_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminmanagemember.page.scss?ngResource */ 6676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







let AdminmanagememberPage = class AdminmanagememberPage {
  constructor(firestore, router) {
    this.firestore = firestore;
    this.router = router;
  }

  ngOnInit() {}

  changeButton(selection) {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

  edit(agent) {
    var _this2 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(agent);
      let navigationExtras = {
        state: agent
      };

      _this2.router.navigate(['memberedit'], navigationExtras);
    })();
  }

};

AdminmanagememberPage.ctorParameters = () => [{
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

AdminmanagememberPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-adminmanagemember',
  template: _adminmanagemember_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_adminmanagemember_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminmanagememberPage);


/***/ }),

/***/ 6676:
/*!**************************************************************************!*\
  !*** ./src/app/adminmanagemember/adminmanagemember.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".alginment {\n  text-align: center;\n  color: #ffffff;\n}\n\n.card-blue {\n  --background:#5a4fe9;\n  color: #ffffff;\n}\n\n.card-grey {\n  --background:#ffffff;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWlubWFuYWdlbWVtYmVyLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL015JTIwUHJvamVjdHMlMjBOb3QlMjBUbyUyMFVzZS9pbnN1cmVtZW5ld2dpdC9zcmMvYXBwL2FkbWlubWFuYWdlbWVtYmVyL2FkbWlubWFuYWdlbWVtYmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJhZG1pbm1hbmFnZW1lbWJlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxnaW5tZW50e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNhcmQtYmx1ZXtcbiAgICAtLWJhY2tncm91bmQ6IzVhNGZlOTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNhcmQtZ3JleXtcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn0iLCIuYWxnaW5tZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNhcmQtYmx1ZSB7XG4gIC0tYmFja2dyb3VuZDojNWE0ZmU5O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNhcmQtZ3JleSB7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICBjb2xvcjogIzAwMDAwMDtcbn0iXX0= */";

/***/ }),

/***/ 572:
/*!**************************************************************************!*\
  !*** ./src/app/adminmanagemember/adminmanagemember.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Manage Agents</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col (click)=\"changeButton('agent')\" class=\"alginment\">\n        <ion-card [ngClass]=\"isAgent ? 'card-blue': 'card-grey'\">\n          <div>All Agents</div>\n        </ion-card>\n      </ion-col>\n      <ion-col (click)=\"changeButton('subAgent')\" class=\"alginment\">\n        <ion-card [ngClass]=\"!isAgent ? 'card-blue': 'card-grey'\">\n          <div>All Sub Agents</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid *ngIf=\"isAgent\">\n      <ion-card *ngFor=\"let agent of allAgents\">\n        <ion-row>\n          <ion-col>Name :</ion-col>\n          <ion-col>{{agent.name}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Bank :</ion-col>\n          <ion-col>{{agent.email}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button (click)=\"edit(agent)\" [expanded]=\"full\" style=\"float:right;\">Edit</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n  </ion-grid>\n  \n  <ion-grid *ngIf=\"!isAgent\">\n    <ion-card *ngFor=\"let agent of allSubAgents\">\n      <ion-row>\n        <ion-col>Name :</ion-col>\n        <ion-col>{{agent.name}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Email :</ion-col>\n        <ion-col>{{agent.email}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button (click)=\"edit(agent)\" [expanded]=\"full\" style=\"float:right;\">Edit</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_adminmanagemember_adminmanagemember_module_ts.js.map
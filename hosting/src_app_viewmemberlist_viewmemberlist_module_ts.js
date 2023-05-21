"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_viewmemberlist_viewmemberlist_module_ts"],{

/***/ 6668:
/*!*****************************************************************!*\
  !*** ./src/app/viewmemberlist/viewmemberlist-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewmemberlistPageRoutingModule": () => (/* binding */ ViewmemberlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _viewmemberlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewmemberlist.page */ 127);




const routes = [
    {
        path: '',
        component: _viewmemberlist_page__WEBPACK_IMPORTED_MODULE_0__.ViewmemberlistPage
    }
];
let ViewmemberlistPageRoutingModule = class ViewmemberlistPageRoutingModule {
};
ViewmemberlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewmemberlistPageRoutingModule);



/***/ }),

/***/ 696:
/*!*********************************************************!*\
  !*** ./src/app/viewmemberlist/viewmemberlist.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewmemberlistPageModule": () => (/* binding */ ViewmemberlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _viewmemberlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewmemberlist-routing.module */ 6668);
/* harmony import */ var _viewmemberlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewmemberlist.page */ 127);







let ViewmemberlistPageModule = class ViewmemberlistPageModule {
};
ViewmemberlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _viewmemberlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewmemberlistPageRoutingModule
        ],
        declarations: [_viewmemberlist_page__WEBPACK_IMPORTED_MODULE_1__.ViewmemberlistPage]
    })
], ViewmemberlistPageModule);



/***/ }),

/***/ 127:
/*!*******************************************************!*\
  !*** ./src/app/viewmemberlist/viewmemberlist.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewmemberlistPage": () => (/* binding */ ViewmemberlistPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _viewmemberlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewmemberlist.page.html?ngResource */ 3979);
/* harmony import */ var _viewmemberlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewmemberlist.page.scss?ngResource */ 4521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/commondata.service */ 1056);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);








let ViewmemberlistPage = class ViewmemberlistPage {
  constructor(commondataService, router, firestore) {
    this.commondataService = commondataService;
    this.router = router;
    this.firestore = firestore;
    this.curentUser = "";
    this.allUsers = [];
    this.allUsersSave = [];
  }

  ngOnInit() {}

  ionViewWillEnter() {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.allUsers = [];
      _this.curentUser = JSON.parse(localStorage.userData);
      _this.users = yield _this.firestore.collection("users", ref => ref.where('enrolledby', "==", _this.curentUser.email)).get().subscribe(doc => {
        console.log(doc);
        doc.docs.forEach(snapDoc => {
          console.log(snapDoc.data());

          _this.allUsers.push(snapDoc.data());

          _this.allUsersSave.push(snapDoc.data());
        }); // this.curentUser.email
      });
    })();
  }

  viewBusiness(email, index) {
    let navigationExtras = {
      state: {
        email: email
      }
    };
    this.router.navigate(['viewbusinesslist'], navigationExtras);
  }

  searchMember(key) {
    console.log(key);
    this.allUsers = this.allUsersSave.filter(user => {
      if (user.name.toString().includes(key)) {
        return user;
      } else if (user.mobile.toString().includes(key)) {
        return user;
      }
    });
  }

};

ViewmemberlistPage.ctorParameters = () => [{
  type: _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__.CommondataService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
}];

ViewmemberlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-viewmemberlist',
  template: _viewmemberlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_viewmemberlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ViewmemberlistPage);


/***/ }),

/***/ 4521:
/*!********************************************************************!*\
  !*** ./src/app/viewmemberlist/viewmemberlist.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3bWVtYmVybGlzdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3979:
/*!********************************************************************!*\
  !*** ./src/app/viewmemberlist/viewmemberlist.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>View Member List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<h2 style=\"text-align:center;\">Member Dashboard</h2>\n  <ion-grid>\n  <ion-row>\n    <ion-col size=\"11\">\n      <ion-item>\n      <ion-label position=\"floating\">Search Member</ion-label>\n      <ion-input style=\"max-width: 70%;\" [(ngModel)]=\"searchKey\" (keyup)=\"searchMember(searchKey)\"></ion-input>\n    </ion-item>\n    </ion-col>\n    <ion-col size=\"1\" style=\"text-align:center;\">\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<br>\n<ion-grid>\n  <ion-card *ngFor=\"let user of allUsers;let i = index;\">\n  <ion-row >\n    <ion-col style=\"text-align: center;\">\n      {{user.name}}\n    </ion-col>\n    \n  </ion-row>  \n  <ion-row >\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      Mob: {{user.mobile}}\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      Email: {{user.email}}\n    </ion-col>\n  </ion-row>  \n  <ion-row >\n    <ion-col size=\"6\" style=\"text-align: center;\">\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      <ion-button (click)=\"viewBusiness(user.email,i)\">View Business</ion-button>\n    </ion-col>\n  </ion-row> \n  </ion-card>\n</ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_viewmemberlist_viewmemberlist_module_ts.js.map
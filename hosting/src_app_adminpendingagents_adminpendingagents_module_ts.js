"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_adminpendingagents_adminpendingagents_module_ts"],{

/***/ 3098:
/*!*************************************************************************!*\
  !*** ./src/app/adminpendingagents/adminpendingagents-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminpendingagentsPageRoutingModule": () => (/* binding */ AdminpendingagentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _adminpendingagents_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminpendingagents.page */ 4901);




const routes = [
    {
        path: '',
        component: _adminpendingagents_page__WEBPACK_IMPORTED_MODULE_0__.AdminpendingagentsPage
    }
];
let AdminpendingagentsPageRoutingModule = class AdminpendingagentsPageRoutingModule {
};
AdminpendingagentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminpendingagentsPageRoutingModule);



/***/ }),

/***/ 4259:
/*!*****************************************************************!*\
  !*** ./src/app/adminpendingagents/adminpendingagents.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminpendingagentsPageModule": () => (/* binding */ AdminpendingagentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _adminpendingagents_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminpendingagents-routing.module */ 3098);
/* harmony import */ var _adminpendingagents_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminpendingagents.page */ 4901);







let AdminpendingagentsPageModule = class AdminpendingagentsPageModule {
};
AdminpendingagentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _adminpendingagents_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminpendingagentsPageRoutingModule
        ],
        declarations: [_adminpendingagents_page__WEBPACK_IMPORTED_MODULE_1__.AdminpendingagentsPage]
    })
], AdminpendingagentsPageModule);



/***/ }),

/***/ 4901:
/*!***************************************************************!*\
  !*** ./src/app/adminpendingagents/adminpendingagents.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminpendingagentsPage": () => (/* binding */ AdminpendingagentsPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _adminpendingagents_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminpendingagents.page.html?ngResource */ 8586);
/* harmony import */ var _adminpendingagents_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminpendingagents.page.scss?ngResource */ 484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/commondata.service */ 1056);








let AdminpendingagentsPage = class AdminpendingagentsPage {
  constructor(firestore, commondataService, auth) {
    this.firestore = firestore;
    this.commondataService = commondataService;
    this.auth = auth;
    this.users = [];
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.users = this.commondataService.allPendingAgents;
  }

  reject(email, i) {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(email, i);

      for (var j = 0; j < _this.users.length; j++) if (_this.users[j].email == email) {
        yield _this.firestore.collection("users").doc(email).update({
          "approvedbyadmin": 'disabled'
        }).catch(error => {
          console.log(error);
          alert("Unable to process request");
          return;
        }).then(userResult => {
          console.log(userResult);

          _this.users.splice(i, 1); // this.commondataService.allPendingAgents.splice(i,1)
          //  this.goto('login');


          return;
        });
      }
    })();
  }

  approve(email, i) {
    var _this2 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(email, i);

      for (var j = 0; j < _this2.users.length; j++) if (_this2.users[j].email == email) {
        yield _this2.firestore.collection("users").doc(email).update({
          "approvedbyadmin": 'true'
        }).catch(error => {
          console.log(error);
          alert("Unable to process request");
          return;
        }).then(userResult => {
          console.log(userResult);

          _this2.users.splice(i, 1); // this.commondataService.allPendingAgents.splice(i,1)


          _this2.auth.createUserWithEmailAndPassword(email.trim(), '123456').then( /*#__PURE__*/function () {
            var _ref = (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
              console.log(data);
            });

            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }()).catch(err => {
            console.log(err);
            console.log(JSON.parse(JSON.stringify(err)));
            var errMsg = JSON.parse(JSON.stringify(err));
            errMsg = errMsg.code;

            if (errMsg == 'auth/email-already-in-use') {
              alert("The email address is already in use by another account.");
            }
          }); //  this.goto('login');


          return;
        });
      }
    })();
  }

};

AdminpendingagentsPage.ctorParameters = () => [{
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore
}, {
  type: _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__.CommondataService
}, {
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth
}];

AdminpendingagentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-adminpendingagents',
  template: _adminpendingagents_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_adminpendingagents_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminpendingagentsPage);


/***/ }),

/***/ 484:
/*!****************************************************************************!*\
  !*** ./src/app/adminpendingagents/adminpendingagents.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbnBlbmRpbmdhZ2VudHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8586:
/*!****************************************************************************!*\
  !*** ./src/app/adminpendingagents/adminpendingagents.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\" >\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pending Agent Requests</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-card *ngFor=\"let user of users;let i = index;\">\n  <ion-row >\n    <ion-col style=\"text-align: center;\">\n      {{user.name}}\n    </ion-col>\n    \n  </ion-row>  \n  <ion-row>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      Mob: \n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      {{user.mobile}}\n    </ion-col>\n  </ion-row>\n  \n  <ion-row>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      Email:\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n       {{user.email}}\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      Aadhaar Number:\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      {{user.aadhaar}}\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      <img [src]=\"user.aadhaarFront\" height=\"200px\" width=\"350px\">\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      <img [src]=\"user.aadhaarBack\" height=\"200px\" width=\"350px\">\n    </ion-col>\n  </ion-row>\n  \n  <ion-row >\n    <ion-col size=\"6\" style=\"text-align: center;\">\n    <ion-button (click)=\"reject(user.email,i)\">Reject</ion-button>\n    </ion-col>\n    <ion-col size=\"6\" style=\"text-align: center;\">\n      <ion-button (click)=\"approve(user.email,i)\">Approve</ion-button>\n    </ion-col>\n  </ion-row> \n  </ion-card>\n</ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_adminpendingagents_adminpendingagents_module_ts.js.map
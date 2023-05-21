"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_invalidcases_invalidcases_module_ts"],{

/***/ 2786:
/*!*************************************************************!*\
  !*** ./src/app/invalidcases/invalidcases-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidcasesPageRoutingModule": () => (/* binding */ InvalidcasesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _invalidcases_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalidcases.page */ 5327);




const routes = [
    {
        path: '',
        component: _invalidcases_page__WEBPACK_IMPORTED_MODULE_0__.InvalidcasesPage
    }
];
let InvalidcasesPageRoutingModule = class InvalidcasesPageRoutingModule {
};
InvalidcasesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvalidcasesPageRoutingModule);



/***/ }),

/***/ 1494:
/*!*****************************************************!*\
  !*** ./src/app/invalidcases/invalidcases.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidcasesPageModule": () => (/* binding */ InvalidcasesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _invalidcases_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalidcases-routing.module */ 2786);
/* harmony import */ var _invalidcases_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalidcases.page */ 5327);







let InvalidcasesPageModule = class InvalidcasesPageModule {
};
InvalidcasesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _invalidcases_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvalidcasesPageRoutingModule
        ],
        declarations: [_invalidcases_page__WEBPACK_IMPORTED_MODULE_1__.InvalidcasesPage]
    })
], InvalidcasesPageModule);



/***/ }),

/***/ 5327:
/*!***************************************************!*\
  !*** ./src/app/invalidcases/invalidcases.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidcasesPage": () => (/* binding */ InvalidcasesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _invalidcases_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalidcases.page.html?ngResource */ 4073);
/* harmony import */ var _invalidcases_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalidcases.page.scss?ngResource */ 7218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_commondata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/commondata.service */ 1056);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);






let InvalidcasesPage = class InvalidcasesPage {
    constructor(commondataService, firestore) {
        this.commondataService = commondataService;
        this.firestore = firestore;
        this.allrejectcases = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.allrejectcases = this.commondataService.allInvalidBusiness;
        console.log(this.allrejectcases);
    }
};
InvalidcasesPage.ctorParameters = () => [
    { type: _services_commondata_service__WEBPACK_IMPORTED_MODULE_2__.CommondataService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore }
];
InvalidcasesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-invalidcases',
        template: _invalidcases_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_invalidcases_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InvalidcasesPage);



/***/ }),

/***/ 7218:
/*!****************************************************************!*\
  !*** ./src/app/invalidcases/invalidcases.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZhbGlkY2FzZXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4073:
/*!****************************************************************!*\
  !*** ./src/app/invalidcases/invalidcases.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\" >\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>All Rejected Business</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-card *ngFor=\"let user of allrejectcases;let i = index;\">\n    <ion-row >\n      <ion-col style=\"text-align: center;\">\n        {{user.name}}\n      </ion-col>\n      \n    </ion-row>  \n    <ion-row >\n      <ion-col size=\"6\" style=\"text-align: center;\">\n        LAN: {{user.lanNo}}\n      </ion-col>\n      <ion-col size=\"6\" style=\"text-align: center;\">\n        Created By: {{user.createdBy}}\n      </ion-col>\n    </ion-row>  \n    <ion-row >\n      <ion-col size=\"6\" style=\"text-align: center;\">\n        Amount: {{user.disbursedAmount}}\n      </ion-col>\n      <ion-col size=\"6\" style=\"text-align: center;\">\n        Type: {{user.typeOfBorrow}}\n      </ion-col>\n    </ion-row>  \n    <ion-row >\n      <ion-col style=\"text-align: center;\">\n        Remark: {{user.remarks}}\n      </ion-col>\n    </ion-row>  \n    </ion-card>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_invalidcases_invalidcases_module_ts.js.map
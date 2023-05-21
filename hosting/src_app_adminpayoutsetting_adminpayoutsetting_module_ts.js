"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_adminpayoutsetting_adminpayoutsetting_module_ts"],{

/***/ 3588:
/*!*************************************************************************!*\
  !*** ./src/app/adminpayoutsetting/adminpayoutsetting-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminpayoutsettingPageRoutingModule": () => (/* binding */ AdminpayoutsettingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _adminpayoutsetting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminpayoutsetting.page */ 2237);




const routes = [
    {
        path: '',
        component: _adminpayoutsetting_page__WEBPACK_IMPORTED_MODULE_0__.AdminpayoutsettingPage
    }
];
let AdminpayoutsettingPageRoutingModule = class AdminpayoutsettingPageRoutingModule {
};
AdminpayoutsettingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminpayoutsettingPageRoutingModule);



/***/ }),

/***/ 236:
/*!*****************************************************************!*\
  !*** ./src/app/adminpayoutsetting/adminpayoutsetting.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminpayoutsettingPageModule": () => (/* binding */ AdminpayoutsettingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _adminpayoutsetting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminpayoutsetting-routing.module */ 3588);
/* harmony import */ var _adminpayoutsetting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminpayoutsetting.page */ 2237);







let AdminpayoutsettingPageModule = class AdminpayoutsettingPageModule {
};
AdminpayoutsettingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _adminpayoutsetting_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminpayoutsettingPageRoutingModule
        ],
        declarations: [_adminpayoutsetting_page__WEBPACK_IMPORTED_MODULE_1__.AdminpayoutsettingPage]
    })
], AdminpayoutsettingPageModule);



/***/ }),

/***/ 2237:
/*!***************************************************************!*\
  !*** ./src/app/adminpayoutsetting/adminpayoutsetting.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminpayoutsettingPage": () => (/* binding */ AdminpayoutsettingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _adminpayoutsetting_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminpayoutsetting.page.html?ngResource */ 2438);
/* harmony import */ var _adminpayoutsetting_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminpayoutsetting.page.scss?ngResource */ 9825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AdminpayoutsettingPage = class AdminpayoutsettingPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminpayoutsettingPage.ctorParameters = () => [];
AdminpayoutsettingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-adminpayoutsetting',
        template: _adminpayoutsetting_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_adminpayoutsetting_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminpayoutsettingPage);



/***/ }),

/***/ 9825:
/*!****************************************************************************!*\
  !*** ./src/app/adminpayoutsetting/adminpayoutsetting.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbnBheW91dHNldHRpbmcucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2438:
/*!****************************************************************************!*\
  !*** ./src/app/adminpayoutsetting/adminpayoutsetting.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>adminpayoutsetting</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_adminpayoutsetting_adminpayoutsetting_module_ts.js.map
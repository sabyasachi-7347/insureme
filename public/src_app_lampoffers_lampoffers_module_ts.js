"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_lampoffers_lampoffers_module_ts"],{

/***/ 6201:
/*!*********************************************************!*\
  !*** ./src/app/lampoffers/lampoffers-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LampoffersPageRoutingModule": () => (/* binding */ LampoffersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _lampoffers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lampoffers.page */ 2128);




const routes = [
    {
        path: '',
        component: _lampoffers_page__WEBPACK_IMPORTED_MODULE_0__.LampoffersPage
    }
];
let LampoffersPageRoutingModule = class LampoffersPageRoutingModule {
};
LampoffersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LampoffersPageRoutingModule);



/***/ }),

/***/ 9066:
/*!*************************************************!*\
  !*** ./src/app/lampoffers/lampoffers.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LampoffersPageModule": () => (/* binding */ LampoffersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _lampoffers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lampoffers-routing.module */ 6201);
/* harmony import */ var _lampoffers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lampoffers.page */ 2128);







let LampoffersPageModule = class LampoffersPageModule {
};
LampoffersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _lampoffers_routing_module__WEBPACK_IMPORTED_MODULE_0__.LampoffersPageRoutingModule
        ],
        declarations: [_lampoffers_page__WEBPACK_IMPORTED_MODULE_1__.LampoffersPage]
    })
], LampoffersPageModule);



/***/ }),

/***/ 2128:
/*!***********************************************!*\
  !*** ./src/app/lampoffers/lampoffers.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LampoffersPage": () => (/* binding */ LampoffersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _lampoffers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lampoffers.page.html?ngResource */ 1058);
/* harmony import */ var _lampoffers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lampoffers.page.scss?ngResource */ 2122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let LampoffersPage = class LampoffersPage {
    constructor() { }
    ngOnInit() {
    }
};
LampoffersPage.ctorParameters = () => [];
LampoffersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-lampoffers',
        template: _lampoffers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_lampoffers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LampoffersPage);



/***/ }),

/***/ 2122:
/*!************************************************************!*\
  !*** ./src/app/lampoffers/lampoffers.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW1wb2ZmZXJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1058:
/*!************************************************************!*\
  !*** ./src/app/lampoffers/lampoffers.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Lamp Previous Offers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <ion-label>JAN-2022</ion-label><ion-button>View</ion-button>\n    </ion-item>\n    <ion-item>\n      <ion-label>FEB-2022</ion-label><ion-button>View</ion-button>\n    </ion-item>\n  </ion-card>  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_lampoffers_lampoffers_module_ts.js.map
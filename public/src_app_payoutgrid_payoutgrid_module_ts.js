"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payoutgrid_payoutgrid_module_ts"],{

/***/ 1704:
/*!*********************************************************!*\
  !*** ./src/app/payoutgrid/payoutgrid-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayoutgridPageRoutingModule": () => (/* binding */ PayoutgridPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _payoutgrid_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payoutgrid.page */ 1856);




const routes = [
    {
        path: '',
        component: _payoutgrid_page__WEBPACK_IMPORTED_MODULE_0__.PayoutgridPage
    }
];
let PayoutgridPageRoutingModule = class PayoutgridPageRoutingModule {
};
PayoutgridPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PayoutgridPageRoutingModule);



/***/ }),

/***/ 6858:
/*!*************************************************!*\
  !*** ./src/app/payoutgrid/payoutgrid.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayoutgridPageModule": () => (/* binding */ PayoutgridPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _payoutgrid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payoutgrid-routing.module */ 1704);
/* harmony import */ var _payoutgrid_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payoutgrid.page */ 1856);







let PayoutgridPageModule = class PayoutgridPageModule {
};
PayoutgridPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payoutgrid_routing_module__WEBPACK_IMPORTED_MODULE_0__.PayoutgridPageRoutingModule
        ],
        declarations: [_payoutgrid_page__WEBPACK_IMPORTED_MODULE_1__.PayoutgridPage]
    })
], PayoutgridPageModule);



/***/ }),

/***/ 1856:
/*!***********************************************!*\
  !*** ./src/app/payoutgrid/payoutgrid.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayoutgridPage": () => (/* binding */ PayoutgridPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _payoutgrid_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payoutgrid.page.html?ngResource */ 4055);
/* harmony import */ var _payoutgrid_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payoutgrid.page.scss?ngResource */ 6552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PayoutgridPage = class PayoutgridPage {
    constructor() { }
    ngOnInit() {
    }
};
PayoutgridPage.ctorParameters = () => [];
PayoutgridPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-payoutgrid',
        template: _payoutgrid_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payoutgrid_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PayoutgridPage);



/***/ }),

/***/ 6552:
/*!************************************************************!*\
  !*** ./src/app/payoutgrid/payoutgrid.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlvdXRncmlkLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4055:
/*!************************************************************!*\
  !*** ./src/app/payoutgrid/payoutgrid.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Payout Grid</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-item>\n    <ion-label>JAN-2022</ion-label><ion-button>View</ion-button>\n  </ion-item>\n  <ion-item>\n    <ion-label>FEB-2022</ion-label><ion-button>View</ion-button>\n  </ion-item>\n</ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_payoutgrid_payoutgrid_module_ts.js.map
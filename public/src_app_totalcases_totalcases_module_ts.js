"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_totalcases_totalcases_module_ts"],{

/***/ 9263:
/*!*********************************************************!*\
  !*** ./src/app/totalcases/totalcases-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalcasesPageRoutingModule": () => (/* binding */ TotalcasesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _totalcases_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./totalcases.page */ 221);




const routes = [
    {
        path: '',
        component: _totalcases_page__WEBPACK_IMPORTED_MODULE_0__.TotalcasesPage
    }
];
let TotalcasesPageRoutingModule = class TotalcasesPageRoutingModule {
};
TotalcasesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TotalcasesPageRoutingModule);



/***/ }),

/***/ 5689:
/*!*************************************************!*\
  !*** ./src/app/totalcases/totalcases.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalcasesPageModule": () => (/* binding */ TotalcasesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _totalcases_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./totalcases-routing.module */ 9263);
/* harmony import */ var _totalcases_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./totalcases.page */ 221);







let TotalcasesPageModule = class TotalcasesPageModule {
};
TotalcasesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _totalcases_routing_module__WEBPACK_IMPORTED_MODULE_0__.TotalcasesPageRoutingModule
        ],
        declarations: [_totalcases_page__WEBPACK_IMPORTED_MODULE_1__.TotalcasesPage]
    })
], TotalcasesPageModule);



/***/ }),

/***/ 221:
/*!***********************************************!*\
  !*** ./src/app/totalcases/totalcases.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TotalcasesPage": () => (/* binding */ TotalcasesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _totalcases_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./totalcases.page.html?ngResource */ 3976);
/* harmony import */ var _totalcases_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./totalcases.page.scss?ngResource */ 2966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TotalcasesPage = class TotalcasesPage {
    constructor() { }
    ngOnInit() {
    }
};
TotalcasesPage.ctorParameters = () => [];
TotalcasesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-totalcases',
        template: _totalcases_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_totalcases_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TotalcasesPage);



/***/ }),

/***/ 2966:
/*!************************************************************!*\
  !*** ./src/app/totalcases/totalcases.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3RhbGNhc2VzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3976:
/*!************************************************************!*\
  !*** ./src/app/totalcases/totalcases.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>totalcases</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_totalcases_totalcases_module_ts.js.map
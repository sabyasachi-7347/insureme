"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_adminlogin_adminlogin_module_ts"],{

/***/ 6444:
/*!*********************************************************!*\
  !*** ./src/app/adminlogin/adminlogin-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminloginPageRoutingModule": () => (/* binding */ AdminloginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _adminlogin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminlogin.page */ 3759);




const routes = [
    {
        path: '',
        component: _adminlogin_page__WEBPACK_IMPORTED_MODULE_0__.AdminloginPage
    }
];
let AdminloginPageRoutingModule = class AdminloginPageRoutingModule {
};
AdminloginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminloginPageRoutingModule);



/***/ }),

/***/ 5760:
/*!*************************************************!*\
  !*** ./src/app/adminlogin/adminlogin.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminloginPageModule": () => (/* binding */ AdminloginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _adminlogin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminlogin-routing.module */ 6444);
/* harmony import */ var _adminlogin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminlogin.page */ 3759);







let AdminloginPageModule = class AdminloginPageModule {
};
AdminloginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _adminlogin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminloginPageRoutingModule
        ],
        declarations: [_adminlogin_page__WEBPACK_IMPORTED_MODULE_1__.AdminloginPage]
    })
], AdminloginPageModule);



/***/ }),

/***/ 3759:
/*!***********************************************!*\
  !*** ./src/app/adminlogin/adminlogin.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminloginPage": () => (/* binding */ AdminloginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _adminlogin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminlogin.page.html?ngResource */ 7959);
/* harmony import */ var _adminlogin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminlogin.page.scss?ngResource */ 589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AdminloginPage = class AdminloginPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminloginPage.ctorParameters = () => [];
AdminloginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-adminlogin',
        template: _adminlogin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_adminlogin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminloginPage);



/***/ }),

/***/ 589:
/*!************************************************************!*\
  !*** ./src/app/adminlogin/adminlogin.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmxvZ2luLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7959:
/*!************************************************************!*\
  !*** ./src/app/adminlogin/adminlogin.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n \n</ion-content>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_adminlogin_adminlogin_module_ts.js.map
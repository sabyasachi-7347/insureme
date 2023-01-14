"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_salesdata_salesdata_module_ts"],{

/***/ 658:
/*!*******************************************************!*\
  !*** ./src/app/salesdata/salesdata-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesdataPageRoutingModule": () => (/* binding */ SalesdataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _salesdata_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salesdata.page */ 7500);




const routes = [
    {
        path: '',
        component: _salesdata_page__WEBPACK_IMPORTED_MODULE_0__.SalesdataPage
    }
];
let SalesdataPageRoutingModule = class SalesdataPageRoutingModule {
};
SalesdataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SalesdataPageRoutingModule);



/***/ }),

/***/ 922:
/*!***********************************************!*\
  !*** ./src/app/salesdata/salesdata.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesdataPageModule": () => (/* binding */ SalesdataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _salesdata_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salesdata-routing.module */ 658);
/* harmony import */ var _salesdata_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salesdata.page */ 7500);







let SalesdataPageModule = class SalesdataPageModule {
};
SalesdataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _salesdata_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesdataPageRoutingModule
        ],
        declarations: [_salesdata_page__WEBPACK_IMPORTED_MODULE_1__.SalesdataPage]
    })
], SalesdataPageModule);



/***/ }),

/***/ 7500:
/*!*********************************************!*\
  !*** ./src/app/salesdata/salesdata.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesdataPage": () => (/* binding */ SalesdataPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _salesdata_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salesdata.page.html?ngResource */ 4650);
/* harmony import */ var _salesdata_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salesdata.page.scss?ngResource */ 68);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SalesdataPage = class SalesdataPage {
    constructor() { }
    ngOnInit() {
    }
};
SalesdataPage.ctorParameters = () => [];
SalesdataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-salesdata',
        template: _salesdata_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_salesdata_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SalesdataPage);



/***/ }),

/***/ 68:
/*!**********************************************************!*\
  !*** ./src/app/salesdata/salesdata.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".ion-margin {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\n.ion-margin ion-row:first-child {\n  font-weight: bold;\n}\n.ion-margin ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\n.ion-margin ion-col:last-child {\n  border-right: 1px solid black;\n}\n.ion-margin ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n.btnStyle {\n  text-align: center;\n}\n.btnStyleIn {\n  --border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzZGF0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUNJO0VBQ0UsaUJBQUE7QUFDTjtBQUNJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUNJO0VBQ0UsNkJBQUE7QUFDTjtBQUVJO0VBQ0UsOEJBQUE7QUFBTjtBQUlFO0VBQ0Usa0JBQUE7QUFESjtBQUlFO0VBQ0Usb0JBQUE7QUFESiIsImZpbGUiOiJzYWxlc2RhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1tYXJnaW4ge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcclxuICAgIFxyXG4gICAgaW9uLXJvdzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbCB7IFxyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbDpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG5TdHlsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG5TdHlsZUlue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuIl19 */";

/***/ }),

/***/ 4650:
/*!**********************************************************!*\
  !*** ./src/app/salesdata/salesdata.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Sales Data</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\">Select Date</ion-label>\n    <ion-select placeholder=\"Select date\">\n      <ion-select-option value=\"\">Select Date</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <br>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>LAN ID Number</ion-label>\n          <ion-input></ion-input>\n        </ion-item>  \n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Customer Name</ion-label>\n          <ion-input></ion-input>\n        </ion-item>  \n      </ion-col>\n    </ion-row>\n    <div class=\"btnStyle\">\n      <ion-button class=\"btnStyleIn\">Search</ion-button>\n    </div>\n  </ion-grid>\n  <div class=\"btnStyle\">\n    <ion-button>Export to Exel</ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_salesdata_salesdata_module_ts.js.map
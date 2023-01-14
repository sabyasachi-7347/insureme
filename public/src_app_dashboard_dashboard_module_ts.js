"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 5935);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 425);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 5935);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 5935:
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 3957);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 5065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let DashboardPage = class DashboardPage {
    constructor(router) {
        this.router = router;
        this.yearValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        this.dashboard = {};
        this.dashboard.totalredeem = "0";
        this.dashboard.invalidcases = "0";
        this.dashboard.totalcases = "0";
        this.dashboard.totalpaid = "0";
        this.dashboard.totalpending = "0";
    }
    goto(page) {
        this.router.navigate([page]);
    }
    ngOnInit() {
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dashboard',
        template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 5065:
/*!**********************************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".ion-margin {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\n.ion-margin ion-row:first-child {\n  font-weight: bold;\n}\n.ion-margin ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\n.ion-margin ion-col:last-child {\n  border-right: 1px solid black;\n}\n.ion-margin ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n.btnStyle {\n  text-align: center;\n}\n.btnStyleIn {\n  --border-radius: 50%;\n}\n.ion-margin {\n  --ion-grid-column-padding: 10px;\n  border-collapse: collapse;\n  border-style: hidden;\n}\n.ion-margin ion-row:first-child {\n  font-weight: bold;\n}\n.ion-margin ion-col {\n  border: 1px solid black;\n  border-bottom: 0;\n  border-right: 0;\n}\n.ion-margin ion-col:last-child {\n  border-right: 1px solid black;\n}\n.ion-margin ion-row:last-child {\n  border-bottom: 1px solid black;\n}\n.btnStyle {\n  text-align: center;\n}\n.btnStyleIn {\n  --border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUNJO0VBQ0UsaUJBQUE7QUFDTjtBQUNJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUNJO0VBQ0UsNkJBQUE7QUFDTjtBQUVJO0VBQ0UsOEJBQUE7QUFBTjtBQUlFO0VBQ0Usa0JBQUE7QUFESjtBQUlFO0VBQ0Usb0JBQUE7QUFESjtBQUlFO0VBQ0UsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBREo7QUFHSTtFQUNFLGlCQUFBO0FBRE47QUFHSTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRE47QUFHSTtFQUNFLDZCQUFBO0FBRE47QUFJSTtFQUNFLDhCQUFBO0FBRk47QUFNRTtFQUNFLGtCQUFBO0FBSEo7QUFNRTtFQUNFLG9CQUFBO0FBSEoiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tbWFyZ2luIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XHJcbiAgICBcclxuICAgIGlvbi1yb3c6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIGlvbi1jb2wgeyBcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgIH1cclxuICAgIGlvbi1jb2w6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tcm93Omxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuU3R5bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYnRuU3R5bGVJbntcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmlvbi1tYXJnaW4ge1xyXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcclxuICAgIFxyXG4gICAgaW9uLXJvdzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbCB7IFxyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWNvbDpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG5TdHlsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG5TdHlsZUlue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuIl19 */";

/***/ }),

/***/ 3957:
/*!**********************************************************!*\
  !*** ./src/app/dashboard/dashboard.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"margin: 15%;\">\n    <ion-row style=\"text-align: center;\">\n      <ion-col>\n          <ion-label>Total Points Redeem</ion-label>\n          <ion-input [(ngModel)]=\"dashboard.totalredeem\" readonly></ion-input>  \n      </ion-col>\n      <ion-col>\n          <ion-label>Total Points Pending</ion-label>\n          <ion-input [(ngModel)]=\"dashboard.totalpending\" readonly></ion-input>  \n      </ion-col>\n      </ion-row>\n      <ion-row style=\"text-align: center;\">\n      <ion-col>\n          <ion-label>Total Paid Points</ion-label>\n          <ion-input [(ngModel)]=\"dashboard.totalpaid\" readonly></ion-input>  \n      </ion-col>\n      <ion-col>\n        <ion-label>Total Number of Cases</ion-label>\n        <ion-input (click)=\"goto('totalcases')\" [(ngModel)]=\"dashboard.totalcases\" readonly></ion-input>  \n    </ion-col>\n    </ion-row>\n    <ion-row style=\"text-align: center;\">\n      <ion-col>\n        <ion-label>Total Invalid Cases</ion-label>\n        <ion-input (click)=\"goto('invalidcases')\" [(ngModel)]=\"dashboard.invalidcases\" readonly></ion-input>  \n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-item>\n    <ion-searchbar placeholder=\"Enter LAN Number\"></ion-searchbar>\n  </ion-item>\n  \n  <div>\n    <ion-card>\n      <ion-row>\n        <ion-col size=\"8\">Aniket Salvi</ion-col>\n        <ion-col size=\"4\">₹ 120000</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Issued Date</ion-col>\n        <ion-col>12-12-2022</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Status</ion-col>\n        <ion-col>Pending</ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n\n  <!-- <h2>Member Dashboard</h2>\n  <ion-item>\n    <ion-label position=\"floating\">Select Member</ion-label>\n    <ion-select placeholder=\"Select member\" interface=\"action-sheet\">\n      <ion-select-option value=\"all\">All Members</ion-select-option>\n      <ion-select-option value=\"m1\">M1</ion-select-option>\n      <ion-select-option value=\"m2\">M2</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Select Date</ion-label>\n    <ion-select placeholder=\"Select date\">\n      <ion-select-option value=\"all\">All Members</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <br>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Lead Number</ion-label>\n          <ion-input></ion-input>\n        </ion-item>  \n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Customer Name</ion-label>\n          <ion-input></ion-input>\n        </ion-item>  \n      </ion-col>\n    </ion-row>\n    <div class=\"btnStyle\">\n      <ion-button class=\"btnStyleIn\">Search</ion-button>\n    </div>\n  </ion-grid> -->\n  <div class=\"btnStyle\">\n    <ion-button>Export to Exel</ion-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map
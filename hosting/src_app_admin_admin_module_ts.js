"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 3176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageRoutingModule": () => (/* binding */ AdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page */ 153);




const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_0__.AdminPage
    }
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageModule": () => (/* binding */ AdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3176);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page */ 153);







let AdminPageModule = class AdminPageModule {
};
AdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminPageRoutingModule
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_1__.AdminPage]
    })
], AdminPageModule);



/***/ }),

/***/ 153:
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPage": () => (/* binding */ AdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page.html?ngResource */ 376);
/* harmony import */ var _admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page.scss?ngResource */ 8890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_commondata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/commondata.service */ 1056);







let AdminPage = class AdminPage {
    constructor(router, firestore, commondataService) {
        this.router = router;
        this.firestore = firestore;
        this.commondataService = commondataService;
        this.allPendingAgentsCount = '...';
        this.allPendingBusinessCount = '...';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.commondataService.allPendingAgents = [];
        this.users = this.firestore.collection("users", ref => ref.where('approvedbyadmin', "==", "false")).get().subscribe((doc) => {
            console.log("all docs here");
            console.log(doc);
            this.allPendingAgentsCount = doc.docs.length;
            doc.docs.forEach((snapDoc) => {
                console.log(snapDoc.data());
                this.commondataService.allPendingAgents.push(snapDoc.data());
            });
            // this.curentUser.email
        });
        console.log(this.commondataService.allPendingAgents);
        this.commondataService.allPendingBusiness = [];
        this.users = this.firestore.collection("business", ref => ref.where('approvedbyadmin', "==", "P")).get().subscribe((doc) => {
            console.log("all docs here");
            console.log(doc);
            this.allPendingBusinessCount = doc.docs.length;
            doc.docs.forEach((snapDoc) => {
                console.log(snapDoc.data());
                var temp = snapDoc.data();
                console.log(temp);
                temp.id = snapDoc.id;
                this.commondataService.allPendingBusiness.push(temp);
            });
            // this.curentUser.email
        });
        console.log(this.commondataService.allPendingBusiness);
    }
    goto(page) {
        console.log(this.commondataService.allPendingAgents);
        if (page == 'adminpendingagents') {
            this.router.navigate([page]);
        }
        else if (page == 'adminpendingbusiness') {
            this.router.navigate([page]);
        }
        else {
            this.router.navigate([page]);
        }
    }
    logout() {
        this.router.navigate(['login']);
    }
};
AdminPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore },
    { type: _services_commondata_service__WEBPACK_IMPORTED_MODULE_2__.CommondataService }
];
AdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-admin',
        template: _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminPage);



/***/ }),

/***/ 8890:
/*!**************************************************!*\
  !*** ./src/app/admin/admin.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.size-fab {\n  font-size: 200%;\n  border-radius: 50%;\n  padding: 6%;\n}\n\ndiv {\n  font-size: 50%;\n}\n\nbutton {\n  background: none;\n}\n\nh1 {\n  text-align: center;\n}\n\nion-card {\n  text-align: center;\n  height: 100%;\n}\n\nion-col {\n  margin-bottom: 10%;\n}\n\n.iconsty {\n  margin-top: 20px;\n}\n\n.iconstyaddb {\n  border-radius: 40px;\n}\n\nion-card {\n  background-color: #3880ff;\n  color: #ffffff;\n  font-size: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL015JTIwUHJvamVjdHMlMjBOb3QlMjBUbyUyMFVzZS9pbnN1cmVtZW5ld2dpdC9zcmMvYXBwL2FkbWluL2FkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZKOztBREtFO0VBQ0UscUJBQUE7QUNGSjs7QURNRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNISjs7QURNRTtFQUNFLGNBQUE7QUNISjs7QURNRTtFQUNFLGdCQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtBQ0hKOztBRFdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDUko7O0FEWUU7RUFDRSxrQkFBQTtBQ1RKOztBRGFFO0VBQ0UsZ0JBQUE7QUNWSjs7QURhRTtFQUNFLG1CQUFBO0FDVko7O0FEYUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDVkoiLCJmaWxlIjoiYWRtaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICBcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuc2l6ZS1mYWJ7XHJcbiAgICBmb250LXNpemU6IDIwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA2JTtcclxuICB9XHJcbiAgXHJcbiAgZGl2e1xyXG4gICAgZm9udC1zaXplOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvLyBpb24tY29udGVudHtcclxuICAvLyAgIC0tYmFja2dyb3VuZDojZDVkMmZmIDtcclxuICAvLyB9XHJcbiAgXHJcbiAgaW9uLWNhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICB9XHJcbiAgLy8vLyNkNWQyZmZcclxuICBcclxuICAuaWNvbnN0eSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuaWNvbnN0eWFkZGJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICB9IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaXplLWZhYiB7XG4gIGZvbnQtc2l6ZTogMjAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA2JTtcbn1cblxuZGl2IHtcbiAgZm9udC1zaXplOiA1MCU7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY29sIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG4uaWNvbnN0eSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pY29uc3R5YWRkYiB7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBmZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn0iXX0= */";

/***/ }),

/***/ 376:
/*!**************************************************!*\
  !*** ./src/app/admin/admin.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\"> \n    <!-- <ion-row>\n      <ion-col>\n        <img style=\"width: 30px; height: 30px; float: left; margin-left: 7%;\" (click)=\"goto('lampoffers')\" src=\"../../assets/imgs/lamp.png\">\n      </ion-col>\n      <ion-col> -->\n        <ion-title style=\"text-align: center;\">\n          <p>Welcome to Geniefin</p>\n        </ion-title>\n      <!-- </ion-col>\n      <ion-col>\n        <ion-icon style=\"float: right; font-size: 30px; margin-right: 7%; \" (click)=\"logout()\" name=\"power-outline\"></ion-icon>\n        <ion-icon style=\"float: right; font-size: 30px; \" (click)=\"openContactModal()\" name=\"call\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-icon style=\"float: right; font-size: 30px; margin-right: 7%; \" (click)=\"logout()\" name=\"power-outline\"></ion-icon>\n  <!-- <div>\n  <ion-icon style=\"float: right; font-size: 30px; margin-right: 7%; \" (click)=\"logout()\" name=\"power-outline\"></ion-icon>\n  <img style=\"width: 30px; height: 30px; float: left; margin-left: 7%;\" (click)=\"goto('lampoffers')\" src=\"../../assets/imgs/lamp.png\">\n  <ion-icon style=\"float: right; font-size: 30px; \" (click)=\"openContactModal()\" name=\"call\"></ion-icon>\n</div> -->\n<!-- <div style=\"margin-top: 12%;\">\n  <h1>WELCOME TO</h1>\n  <h1>GENIEFIN FINANCEAL SELLER APP</h1>\n</div> -->\n  <!-- <ion-fab vertical=\"center\" horizontal=\"center\" activated>\n    <ion-fab-button class=\"size-fab\">\n      <ion-icon name=\"settings-outline\" ></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      \n      <button class=\"size-fab\"><ion-icon name=\"person-add\"></ion-icon><div>\n        Add Member\n      </div></button>\n      <button class=\"size-fab\"><ion-icon name=\"people-outline\"></ion-icon>\n        <div>\n          Manage Members\n        </div></button>\n      \n    </ion-fab-list>\n    <ion-fab-list side=\"start\">\n      \n      <button class=\"size-fab\"><ion-icon name=\"newspaper-outline\"></ion-icon><div>\n        My Profile\n      </div> </button>\n      <button class=\"size-fab\"><ion-icon name=\"speedometer-outline\"></ion-icon><div>Dashboard</div></button>\n    </ion-fab-list>\n    <ion-fab-list side=\"end\">\n      <button class=\"size-fab\"><ion-icon name=\"card-outline\"></ion-icon><div>Payout Grid</div></button>\n      <button class=\"size-fab\"><ion-icon name=\"stats-chart-outline\"></ion-icon><div>Sales Data</div></button>\n    </ion-fab-list>\n  </ion-fab> -->\n\n\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"start\" activated>\n    <ion-fab-button class=\"size-fab\">\n      <ion-icon name=\"settings-outline\" ></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      \n      <button class=\"size-fab\"><ion-icon name=\"person-add\"></ion-icon><div>\n        Add Member\n      </div></button>\n      <button class=\"size-fab\"><ion-icon name=\"people-outline\"></ion-icon>\n        <div>\n          Manage Members\n        </div></button> -->\n      \n    <!-- </ion-fab-list>\n    <ion-fab-list side=\"start\"> -->\n      \n      <!-- <button class=\"size-fab\"><ion-icon name=\"newspaper-outline\"></ion-icon><div>\n        My Profile\n      </div> </button>\n      <button class=\"size-fab\"><ion-icon name=\"speedometer-outline\"></ion-icon><div>Dashboard</div></button> -->\n    <!-- </ion-fab-list>\n    <ion-fab-list side=\"end\"> -->\n      <!-- <button class=\"size-fab\"><ion-icon name=\"card-outline\"></ion-icon><div>Payout Grid</div></button>\n      <button class=\"size-fab\"><ion-icon name=\"stats-chart-outline\"></ion-icon><div>Sales Data</div></button>\n    </ion-fab-list>\n  </ion-fab> -->\n\n \n\n<div style=\"margin-top: 10%;\">\n  <!-- <ion-item>\n    <ion-label>Pick date</ion-label>\n    <ion-input\n      value=\"{{ date | date: 'dd/MM/yyyy' }}\"\n      id=\"date\"\n      class=\"ion-text-end\"\n    ></ion-input>\n    <ion-popover trigger=\"date\" size=\"cover\">\n      <ng-template>\n        <ion-datetime\n          presentation=\"date\"\n          [(ngModel)]=\"date\"\n        ></ion-datetime>\n      </ng-template>\n    </ion-popover>\n  </ion-item> -->\n  <ion-grid>\n    <!-- <ion-row>\n      <ion-col></ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col >\n        <ion-card (click)=\"goto('adminpendingagents')\">\n          <div>{{allPendingAgentsCount}}</div>\n          <div>\n            Pending Agent Request\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col >\n        <ion-card (click)=\"goto('adminpendingbusiness')\">\n          <div>{{allPendingBusinessCount}}</div>\n        <div>\n          Pending Business Request\n        </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row>\n      <ion-col >\n        <ion-card (click)=\"goto('adminmonthlypayouts')\">\n          <ion-icon class=\"iconsty\" name=\"wallet-outline\"></ion-icon>\n          <div>\n            Pending Payouts\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card (click)=\"goto('adminmanagemember')\">\n          <ion-icon class=\"iconsty\" name=\"people-outline\"></ion-icon>\n        <div>\n          Manage Members\n        </div>\n        </ion-card>\n      </ion-col>\n      <!-- <ion-col >\n        <ion-card (click)=\"goto('adminpayoutsetting')\">\n          <div>0</div><div>Pending Payout Setting</div>\n        </ion-card>\n      </ion-col> -->\n    </ion-row>\n\n    <ion-row>\n      <ion-col >\n        <ion-card (click)=\"goto('addbank')\">\n          <ion-icon class=\"iconsty\" name=\"card-outline\"></ion-icon><div>Add Bank</div>\n        </ion-card>\n      </ion-col>\n      <ion-col >\n        <ion-card (click)=\"goto('adminuploadpayoutgrid')\">\n          <ion-icon class=\"iconsty\" name=\"stats-chart-outline\"></ion-icon><div>Payuot Grid Upload</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"text-align: center; color: #ffffff;\">\n      <ion-col size=\"6\">\n        <ion-card (click)=\"goto('adminuploadlampoffer')\">\n          <img class=\"iconsty\" height=\"50px\" sstyle=\"max-height: 30%;color:#ffffff; max-width: 30%;\" src=\"../../assets/imgs/lamp.png\"><div>Lamp Offers Upload</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<!-- <div style=\"font-size:30px;\">Add Business</div> -->\n<div>\n<!-- <ion-fab vertical=\"bottom\" horizontal=\"center\" (click)=\"goto('addbusiness')\">\n  <ion-fab-button><ion-icon name=\"add\"></ion-icon></ion-fab-button>\n</ion-fab> -->\n</div> \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map
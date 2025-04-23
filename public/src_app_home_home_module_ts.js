"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contacts/contacts.module */ 6808);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_2__.ContactsPageModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var C_Users_ADMIN_Desktop_Incurance_Project_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _contacts_contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contacts/contacts.page */ 8186);









let HomePage = class HomePage {
  constructor(router, modalCtrl, animationCtrl) {
    this.router = router;
    this.modalCtrl = modalCtrl;
    this.animationCtrl = animationCtrl;
  }

  goto(pagename) {
    this.router.navigate([pagename]);
  }

  openContactModal() {
    var _this = this;

    return (0,C_Users_ADMIN_Desktop_Incurance_Project_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let contactModal = yield _this.modalCtrl.create({
        component: _contacts_contacts_page__WEBPACK_IMPORTED_MODULE_3__.ContactsPage,
        cssClass: 'contact',
        backdropDismiss: false
      });
      contactModal.present();
    })();
  }

  logout() {
    this.router.navigate(['loginwithpin']);
  }

};

HomePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AnimationController
}];

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.size-fab {\n  font-size: 200%;\n  border-radius: 50%;\n  padding: 6%;\n}\n\ndiv {\n  font-size: 50%;\n}\n\nbutton {\n  background: none;\n}\n\nh1 {\n  text-align: center;\n}\n\nion-card {\n  text-align: center;\n  height: 100%;\n}\n\nion-col {\n  margin-bottom: 10%;\n}\n\n.iconsty {\n  margin-top: 20px;\n}\n\n.iconstyaddb {\n  border-radius: 40px;\n}\n\nion-card {\n  background-color: #3880ff;\n  color: #ffffff;\n  font-size: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFSRjs7QUFZQTtFQUNFLGtCQUFBO0FBVEY7O0FBYUE7RUFDRSxnQkFBQTtBQVZGOztBQWFBO0VBQ0UsbUJBQUE7QUFWRjs7QUFhQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFWRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cbi5zaXplLWZhYntcbiAgZm9udC1zaXplOiAyMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDYlO1xufVxuXG5kaXZ7XG4gIGZvbnQtc2l6ZTogNTAlO1xufVxuXG5idXR0b257XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLy8gaW9uLWNvbnRlbnR7XG4vLyAgIC0tYmFja2dyb3VuZDojZDVkMmZmIDtcbi8vIH1cblxuaW9uLWNhcmR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gIGhlaWdodDogMTAwJTtcbiBcbn1cblxuaW9uLWNvbHtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuLy8vLyNkNWQyZmZcblxuLmljb25zdHkge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaWNvbnN0eWFkZGJ7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbmlvbi1jYXJke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAzOHB4O1xufSJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\"> \n    <!-- <ion-row>\n      <ion-col>\n        <img style=\"width: 30px; height: 30px; float: left; margin-left: 7%;\" (click)=\"goto('lampoffers')\" src=\"../../assets/imgs/lamp.png\">\n      </ion-col>\n      <ion-col> -->\n        <ion-title style=\"text-align: center;\">\n          <p>WELCOME TO</p>\n          <p>GENIEFIN FINANCEAL SELLER APP</p>\n        </ion-title>\n      <!-- </ion-col>\n      <ion-col>\n        <ion-icon style=\"float: right; font-size: 30px; margin-right: 7%; \" (click)=\"logout()\" name=\"power-outline\"></ion-icon>\n        <ion-icon style=\"float: right; font-size: 30px; \" (click)=\"openContactModal()\" name=\"call\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div>\n  <ion-icon style=\"float: right; font-size: 30px; margin-right: 7%; \" (click)=\"logout()\" name=\"power-outline\"></ion-icon>\n  <img style=\"width: 30px; height: 30px; float: left; margin-left: 7%;\" (click)=\"goto('lampoffers')\" src=\"../../assets/imgs/lamp.png\">\n  <ion-icon style=\"float: right; font-size: 30px; \" (click)=\"openContactModal()\" name=\"call\"></ion-icon>\n</div>\n<!-- <div style=\"margin-top: 12%;\">\n  <h1>WELCOME TO</h1>\n  <h1>GENIEFIN FINANCEAL SELLER APP</h1>\n</div> -->\n  <!-- <ion-fab vertical=\"center\" horizontal=\"center\" activated>\n    <ion-fab-button class=\"size-fab\">\n      <ion-icon name=\"settings-outline\" ></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      \n      <button class=\"size-fab\"><ion-icon name=\"person-add\"></ion-icon><div>\n        Add Member\n      </div></button>\n      <button class=\"size-fab\"><ion-icon name=\"people-outline\"></ion-icon>\n        <div>\n          Manage Members\n        </div></button>\n      \n    </ion-fab-list>\n    <ion-fab-list side=\"start\">\n      \n      <button class=\"size-fab\"><ion-icon name=\"newspaper-outline\"></ion-icon><div>\n        My Profile\n      </div> </button>\n      <button class=\"size-fab\"><ion-icon name=\"speedometer-outline\"></ion-icon><div>Dashboard</div></button>\n    </ion-fab-list>\n    <ion-fab-list side=\"end\">\n      <button class=\"size-fab\"><ion-icon name=\"card-outline\"></ion-icon><div>Payout Grid</div></button>\n      <button class=\"size-fab\"><ion-icon name=\"stats-chart-outline\"></ion-icon><div>Sales Data</div></button>\n    </ion-fab-list>\n  </ion-fab> -->\n\n\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"start\" activated>\n    <ion-fab-button class=\"size-fab\">\n      <ion-icon name=\"settings-outline\" ></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      \n      <button class=\"size-fab\"><ion-icon name=\"person-add\"></ion-icon><div>\n        Add Member\n      </div></button>\n      <button class=\"size-fab\"><ion-icon name=\"people-outline\"></ion-icon>\n        <div>\n          Manage Members\n        </div></button> -->\n      \n    <!-- </ion-fab-list>\n    <ion-fab-list side=\"start\"> -->\n      \n      <!-- <button class=\"size-fab\"><ion-icon name=\"newspaper-outline\"></ion-icon><div>\n        My Profile\n      </div> </button>\n      <button class=\"size-fab\"><ion-icon name=\"speedometer-outline\"></ion-icon><div>Dashboard</div></button> -->\n    <!-- </ion-fab-list>\n    <ion-fab-list side=\"end\"> -->\n      <!-- <button class=\"size-fab\"><ion-icon name=\"card-outline\"></ion-icon><div>Payout Grid</div></button>\n      <button class=\"size-fab\"><ion-icon name=\"stats-chart-outline\"></ion-icon><div>Sales Data</div></button>\n    </ion-fab-list>\n  </ion-fab> -->\n\n \n\n<div style=\"margin-top: 10%;\">\n  <!-- <ion-item>\n    <ion-label>Pick date</ion-label>\n    <ion-input\n      value=\"{{ date | date: 'dd/MM/yyyy' }}\"\n      id=\"date\"\n      class=\"ion-text-end\"\n    ></ion-input>\n    <ion-popover trigger=\"date\" size=\"cover\">\n      <ng-template>\n        <ion-datetime\n          presentation=\"date\"\n          [(ngModel)]=\"date\"\n        ></ion-datetime>\n      </ng-template>\n    </ion-popover>\n  </ion-item> -->\n  <ion-grid>\n    <!-- <ion-row>\n      <ion-col></ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col >\n        <ion-card (click)=\"goto('addmember')\">\n          <ion-icon class=\"iconsty\" name=\"person-add\"></ion-icon><div>\n            Add Member\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col >\n        <ion-card (click)=\"goto('managemember')\">\n          <ion-icon class=\"iconsty\" name=\"people-outline\"></ion-icon>\n        <div>\n          Manage Members\n        </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row>\n      <ion-col >\n        <ion-card (click)=\"goto('userprofile')\">\n          <ion-icon class=\"iconsty\" name=\"newspaper-outline\"></ion-icon><div>\n            My Profile\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col >\n        <ion-card (click)=\"goto('dashboard')\">\n          <ion-icon class=\"iconsty\" name=\"speedometer-outline\"></ion-icon><div>Dashboard</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col >\n        <ion-card (click)=\"goto('payoutgrid')\">\n          <ion-icon class=\"iconsty\" name=\"card-outline\"></ion-icon><div>Payout Grid</div>\n        </ion-card>\n      </ion-col>\n      <ion-col >\n        <ion-card (click)=\"goto('salesdata')\">\n          <ion-icon class=\"iconsty\" name=\"stats-chart-outline\"></ion-icon><div>Sales Data</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"text-align: center;\">\n      <ion-col>\n        <ion-card (click)=\"goto('addbusiness')\">\n          <ion-icon class=\"iconsty\" name=\"add\"></ion-icon><div>Add Business</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n  </ion-grid>\n</div>\n\n<!-- <div style=\"font-size:30px;\">Add Business</div> -->\n<div>\n<!-- <ion-fab vertical=\"bottom\" horizontal=\"center\" (click)=\"goto('addbusiness')\">\n  <ion-fab-button><ion-icon name=\"add\"></ion-icon></ion-fab-button>\n</ion-fab> -->\n</div> \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map
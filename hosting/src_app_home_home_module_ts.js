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
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
    this.userRole = JSON.parse(localStorage.userData)['role'];
  }

  goto(pagename) {
    this.router.navigate([pagename]);
  }

  openContactModal() {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.size-fab {\n  font-size: 200%;\n  border-radius: 50%;\n  padding: 6%;\n}\n\ndiv {\n  font-size: 50%;\n}\n\nbutton {\n  background: none;\n}\n\nh1 {\n  text-align: center;\n}\n\nion-card {\n  text-align: center;\n  height: 100%;\n}\n\nion-col {\n  margin-bottom: 10%;\n}\n\n.iconsty {\n  margin-top: 20px;\n}\n\n.iconstyaddb {\n  border-radius: 40px;\n}\n\nion-card {\n  background-color: #3880ff;\n  color: #ffffff;\n  font-size: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vTXklMjBQcm9qZWN0cyUyME5vdCUyMFRvJTIwVXNlL2luc3VyZW1lbmV3Z2l0L3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDUkY7O0FEWUE7RUFDRSxrQkFBQTtBQ1RGOztBRGFBO0VBQ0UsZ0JBQUE7QUNWRjs7QURhQTtFQUNFLG1CQUFBO0FDVkY7O0FEYUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDVkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4uc2l6ZS1mYWJ7XG4gIGZvbnQtc2l6ZTogMjAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA2JTtcbn1cblxuZGl2e1xuICBmb250LXNpemU6IDUwJTtcbn1cblxuYnV0dG9ue1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5oMXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi8vIGlvbi1jb250ZW50e1xuLy8gICAtLWJhY2tncm91bmQ6I2Q1ZDJmZiA7XG4vLyB9XG5cbmlvbi1jYXJke1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICBoZWlnaHQ6IDEwMCU7XG4gXG59XG5cbmlvbi1jb2x7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cbi8vLy8jZDVkMmZmXG5cbi5pY29uc3R5IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmljb25zdHlhZGRie1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuXG5pb24tY2FyZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBmZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn0iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpemUtZmFiIHtcbiAgZm9udC1zaXplOiAyMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDYlO1xufVxuXG5kaXYge1xuICBmb250LXNpemU6IDUwJTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5pY29uc3R5IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmljb25zdHlhZGRiIHtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAzOHB4O1xufSJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\"> \n    <!-- <ion-row>\n      <ion-col>\n        <img style=\"width: 30px; height: 30px; float: left; margin-left: 7%;\" (click)=\"goto('lampoffers')\" src=\"../../assets/imgs/lamp.png\">\n      </ion-col>\n      <ion-col> -->\n        <ion-title style=\"text-align: center;\">\n          <p>Welcome to Geniefin</p>\n        </ion-title>\n      <!-- </ion-col>\n      <ion-col>\n        <ion-icon style=\"float: right; font-size: 30px; margin-right: 7%; \" (click)=\"logout()\" name=\"power-outline\"></ion-icon>\n        <ion-icon style=\"float: right; font-size: 30px; \" (click)=\"openContactModal()\" name=\"call\"></ion-icon>\n      </ion-col>\n    </ion-row> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div>\n  <ion-icon style=\"float: right; font-size: 30px; margin-right: 7%; \" (click)=\"logout()\" name=\"power-outline\"></ion-icon>\n  <img *ngIf=\"userRole == 'agent'\" style=\"width: 30px; height: 30px; float: left; margin-left: 7%;\" (click)=\"goto('lampoffers')\" src=\"../../assets/imgs/lamp.png\">\n  <ion-icon *ngIf=\"userRole == 'agent'\" style=\"float: right; font-size: 30px; \" (click)=\"openContactModal()\" name=\"call\"></ion-icon>\n</div>\n<!-- <div style=\"margin-top: 12%;\">\n  <h1>WELCOME TO</h1>\n  <h1>GENIEFIN FINANCEAL SELLER APP</h1>\n</div> -->\n  <!-- <ion-fab vertical=\"center\" horizontal=\"center\" activated>\n    <ion-fab-button class=\"size-fab\">\n      <ion-icon name=\"settings-outline\" ></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      \n      <button class=\"size-fab\"><ion-icon name=\"person-add\"></ion-icon><div>\n        Add Member\n      </div></button>\n      <button class=\"size-fab\"><ion-icon name=\"people-outline\"></ion-icon>\n        <div>\n          Manage Members\n        </div></button>\n      \n    </ion-fab-list>\n    <ion-fab-list side=\"start\">\n      \n      <button class=\"size-fab\"><ion-icon name=\"newspaper-outline\"></ion-icon><div>\n        My Profile\n      </div> </button>\n      <button class=\"size-fab\"><ion-icon name=\"speedometer-outline\"></ion-icon><div>Dashboard</div></button>\n    </ion-fab-list>\n    <ion-fab-list side=\"end\">\n      <button class=\"size-fab\"><ion-icon name=\"card-outline\"></ion-icon><div>Payout Grid</div></button>\n      <button class=\"size-fab\"><ion-icon name=\"stats-chart-outline\"></ion-icon><div>Sales Data</div></button>\n    </ion-fab-list>\n  </ion-fab> -->\n\n\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"start\" activated>\n    <ion-fab-button class=\"size-fab\">\n      <ion-icon name=\"settings-outline\" ></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      \n      <button class=\"size-fab\"><ion-icon name=\"person-add\"></ion-icon><div>\n        Add Member\n      </div></button>\n      <button class=\"size-fab\"><ion-icon name=\"people-outline\"></ion-icon>\n        <div>\n          Manage Members\n        </div></button> -->\n      \n    <!-- </ion-fab-list>\n    <ion-fab-list side=\"start\"> -->\n      \n      <!-- <button class=\"size-fab\"><ion-icon name=\"newspaper-outline\"></ion-icon><div>\n        My Profile\n      </div> </button>\n      <button class=\"size-fab\"><ion-icon name=\"speedometer-outline\"></ion-icon><div>Dashboard</div></button> -->\n    <!-- </ion-fab-list>\n    <ion-fab-list side=\"end\"> -->\n      <!-- <button class=\"size-fab\"><ion-icon name=\"card-outline\"></ion-icon><div>Payout Grid</div></button>\n      <button class=\"size-fab\"><ion-icon name=\"stats-chart-outline\"></ion-icon><div>Sales Data</div></button>\n    </ion-fab-list>\n  </ion-fab> -->\n\n \n\n<div style=\"margin-top: 10%;\">\n  <!-- <ion-item>\n    <ion-label>Pick date</ion-label>\n    <ion-input\n      value=\"{{ date | date: 'dd/MM/yyyy' }}\"\n      id=\"date\"\n      class=\"ion-text-end\"\n    ></ion-input>\n    <ion-popover trigger=\"date\" size=\"cover\">\n      <ng-template>\n        <ion-datetime\n          presentation=\"date\"\n          [(ngModel)]=\"date\"\n        ></ion-datetime>\n      </ng-template>\n    </ion-popover>\n  </ion-item> -->\n  <ion-grid>\n    <!-- <ion-row>\n      <ion-col></ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col *ngIf=\"userRole == 'agent'\">\n        <ion-card (click)=\"goto('addmember')\">\n          <ion-icon class=\"iconsty\" name=\"person-add\"></ion-icon><div>\n            Add Member\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngIf=\"userRole == 'agent'\">\n        <ion-card (click)=\"goto('managemember')\">\n          <ion-icon class=\"iconsty\" name=\"people-outline\"></ion-icon>\n        <div>\n          Manage Members\n        </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row>\n      <ion-col >\n        <ion-card (click)=\"goto('userprofile')\">\n          <ion-icon class=\"iconsty\" name=\"newspaper-outline\"></ion-icon><div>\n            My Profile\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col >\n        <ion-card (click)=\"goto('dashboard')\">\n          <ion-icon class=\"iconsty\" name=\"speedometer-outline\"></ion-icon><div>Dashboard</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col *ngIf=\"userRole == 'agent'\">\n        <ion-card (click)=\"goto('payoutgrid')\">\n          <ion-icon class=\"iconsty\" name=\"card-outline\"></ion-icon><div>Payout Grid</div>\n        </ion-card>\n      </ion-col>\n      <ion-col >\n        <ion-card (click)=\"goto('salesdata')\">\n          <ion-icon class=\"iconsty\" name=\"stats-chart-outline\"></ion-icon><div>Sales Data</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"text-align: center;\">\n      <ion-col>\n        <ion-card (click)=\"goto('addbusiness')\">\n          <ion-icon class=\"iconsty\" name=\"add\"></ion-icon><div>Add Business</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n  </ion-grid>\n</div>\n\n<!-- <div style=\"font-size:30px;\">Add Business</div> -->\n<div>\n<!-- <ion-fab vertical=\"bottom\" horizontal=\"center\" (click)=\"goto('addbusiness')\">\n  <ion-fab-button><ion-icon name=\"add\"></ion-icon></ion-fab-button>\n</ion-fab> -->\n</div> \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map
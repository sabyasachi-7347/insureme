"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_intro_intro_module_ts"],{

/***/ 370:
/*!***********************************************!*\
  !*** ./src/app/intro/intro-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageRoutingModule": () => (/* binding */ IntroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page */ 5808);




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_0__.IntroPage
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ 25:
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageModule": () => (/* binding */ IntroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-routing.module */ 370);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page */ 5808);







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__.IntroPageRoutingModule
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_1__.IntroPage]
    })
], IntroPageModule);



/***/ }),

/***/ 5808:
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPage": () => (/* binding */ IntroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _intro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page.html?ngResource */ 9099);
/* harmony import */ var _intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page.scss?ngResource */ 1355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let IntroPage = class IntroPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goto() {
        localStorage.firstTimeLogin = "true";
        this.router.navigate(['login']);
    }
};
IntroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
IntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-intro',
        template: _intro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_intro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IntroPage);



/***/ }),

/***/ 1355:
/*!**************************************************!*\
  !*** ./src/app/intro/intro.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  text-align: center;\n}\n\n.logoimg {\n  max-width: 100%;\n  height: 20%;\n}\n\n.introimg {\n  width: 85%;\n}\n\np {\n  line-height: 1.2;\n}\n\n.buttonstyle {\n  --border-radius: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL015JTIwUHJvamVjdHMlMjBOb3QlMjBUbyUyMFVzZS9pbnN1cmVtZW5ld2dpdC9zcmMvYXBwL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBRE1BO0VBQ0ksZ0JBQUE7QUNISjs7QURNQTtFQUNJLG1CQUFBO0FDSEoiLCJmaWxlIjoiaW50cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmxvZ29pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5pbnRyb2ltZ3tcclxuICAgIHdpZHRoOiA4NSU7XHJcbn1cclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7XHJcbiAgICBcclxufVxyXG5cclxucHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuXHJcbi5idXR0b25zdHlsZXtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNSU7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ29pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAlO1xufVxuXG4uaW50cm9pbWcge1xuICB3aWR0aDogODUlO1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmJ1dHRvbnN0eWxlIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1JTtcbn0iXX0= */";

/***/ }),

/***/ 9099:
/*!**************************************************!*\
  !*** ./src/app/intro/intro.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <img class=\"logoimg\" src=\"../../assets/imgs/logo.png\"><br>\n  <div><h2>Welcome</h2>\n  <h3>Geniefin Solution Pvt Ltd</h3></div>\n<img class=\"introimg\" src=\"../../assets/imgs/introimage1.PNG\"><br>\n<p>Create your Team on <b>Geniefin</b> And\n  Track your business and income\n  On The Go.</p>\n<p>Provide Basic Details To Registered\n  On Geniefin.</p> \n<ion-button class=\"buttonstyle\" (click)=\"goto()\">\n  Get Started\n</ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_intro_intro_module_ts.js.map
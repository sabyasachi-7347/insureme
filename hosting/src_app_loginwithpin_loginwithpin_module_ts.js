"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_loginwithpin_loginwithpin_module_ts"],{

/***/ 4954:
/*!*************************************************************!*\
  !*** ./src/app/loginwithpin/loginwithpin-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginwithpinPageRoutingModule": () => (/* binding */ LoginwithpinPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _loginwithpin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginwithpin.page */ 8159);




const routes = [
    {
        path: '',
        component: _loginwithpin_page__WEBPACK_IMPORTED_MODULE_0__.LoginwithpinPage
    }
];
let LoginwithpinPageRoutingModule = class LoginwithpinPageRoutingModule {
};
LoginwithpinPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginwithpinPageRoutingModule);



/***/ }),

/***/ 9591:
/*!*****************************************************!*\
  !*** ./src/app/loginwithpin/loginwithpin.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginwithpinPageModule": () => (/* binding */ LoginwithpinPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _loginwithpin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginwithpin-routing.module */ 4954);
/* harmony import */ var _loginwithpin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginwithpin.page */ 8159);







let LoginwithpinPageModule = class LoginwithpinPageModule {
};
LoginwithpinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loginwithpin_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginwithpinPageRoutingModule
        ],
        declarations: [_loginwithpin_page__WEBPACK_IMPORTED_MODULE_1__.LoginwithpinPage]
    })
], LoginwithpinPageModule);



/***/ }),

/***/ 8159:
/*!***************************************************!*\
  !*** ./src/app/loginwithpin/loginwithpin.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginwithpinPage": () => (/* binding */ LoginwithpinPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _loginwithpin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginwithpin.page.html?ngResource */ 1761);
/* harmony import */ var _loginwithpin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginwithpin.page.scss?ngResource */ 7410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let LoginwithpinPage = class LoginwithpinPage {
    constructor(router) {
        this.router = router;
        this.d1 = "";
        this.d2 = "";
        this.d3 = "";
        this.d4 = "";
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.d1 = "";
        this.d2 = "";
        this.d3 = "";
        this.d4 = "";
        try {
            if (localStorage.pin && localStorage.pin != "") {
                this.setPin = '2';
            }
            else {
                this.setPin = '0';
            }
        }
        catch (e) {
            this.setPin = '0';
        }
    }
    goto(page) {
        this.router.navigate([page]);
    }
    otpController(event, next, prev, curr) {
        if (event.target.value.length < 1 && prev) {
            prev.setFocus();
        }
        else if (next && event.target.value.length > 0) {
            next.setFocus();
        }
        else {
            curr.blur();
            return 0;
        }
    }
    setpin() {
        if (this.d1 == "" || this.d2 == "" || this.d3 == "" || this.d4 == "") {
            alert("Please enter 4 digit PIN");
            return;
        }
        this.enteredPin = this.d1 + '' + this.d2 + '' + this.d3 + '' + this.d4;
        console.log(this.enteredPin);
        this.firstPIN = this.enteredPin;
        this.setPin = '1';
        this.d1 = "";
        this.d2 = "";
        this.d3 = "";
        this.d4 = "";
    }
    confirmPin() {
        if (this.d1 == "" || this.d2 == "" || this.d3 == "" || this.d4 == "") {
            alert("Please enter 4 digit PIN");
            return;
        }
        this.enteredPin = this.d1 + '' + this.d2 + '' + this.d3 + '' + this.d4;
        console.log(this.enteredPin);
        this.secondPIN = this.enteredPin;
        if (this.firstPIN == this.secondPIN) {
            localStorage.pin = JSON.stringify(this.firstPIN);
            this.goto('home');
        }
        else {
            alert("Set PIN and Confirm PIN not matched");
            return;
        }
    }
    signin() {
        if (this.d1 == "" || this.d2 == "" || this.d3 == "" || this.d4 == "") {
            alert("Please enter 4 digit PIN");
            return;
        }
        this.enteredPin = this.d1 + '' + this.d2 + '' + this.d3 + '' + this.d4;
        console.log(this.enteredPin);
        if (this.enteredPin == JSON.parse(localStorage.pin)) {
            this.d1 = "";
            this.d2 = "";
            this.d3 = "";
            this.d4 = "";
            this.goto('home');
        }
        else {
            alert("Wrong PIN entered, Please try again");
            this.d1 = "";
            this.d2 = "";
            this.d3 = "";
            this.d4 = "";
            return;
        }
    }
    forgotpin() {
        localStorage.pin = "";
        localStorage.role = "";
        localStorage.uuid = "";
        localStorage.userData = "";
        this.goto('login');
    }
};
LoginwithpinPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoginwithpinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-loginwithpin',
        template: _loginwithpin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loginwithpin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginwithpinPage);



/***/ }),

/***/ 7410:
/*!****************************************************************!*\
  !*** ./src/app/loginwithpin/loginwithpin.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-input {\n  display: inline-block;\n  text-align: center;\n  width: 50px;\n  height: 50px;\n  margin: 10px;\n  border-radius: 50%;\n  --background:#e1e1e1;\n  --padding-start:7px;\n}\n\n.buttonCont {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2lud2l0aHBpbi5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9NeSUyMFByb2plY3RzJTIwTm90JTIwVG8lMjBVc2UvaW5zdXJlbWVuZXdnaXQvc3JjL2FwcC9sb2dpbndpdGhwaW4vbG9naW53aXRocGluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFSTtFQUNJLGtCQUFBO0FDQ1IiLCJmaWxlIjoibG9naW53aXRocGluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6NTBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLWJhY2tncm91bmQ6I2UxZTFlMTtcclxuICAgIC0tcGFkZGluZy1zdGFydDo3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbkNvbnR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfSIsImlvbi1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1iYWNrZ3JvdW5kOiNlMWUxZTE7XG4gIC0tcGFkZGluZy1zdGFydDo3cHg7XG59XG5cbi5idXR0b25Db250IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 1761:
/*!****************************************************************!*\
  !*** ./src/app/loginwithpin/loginwithpin.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <img src=\"../../assets/imgs/loginscreen.PNG\" height=\"50%\" width=\"100%\">\n  <h3 class=\"buttonCont\">Login With PIN</h3>\n  <h3 class=\"buttonCont\" *ngIf=\"setPin=='0'\">Set PIN</h3>\n  <h3 class=\"buttonCont\" *ngIf=\"setPin=='1'\">Confirm PIN</h3>\n  <h3 class=\"buttonCont\" *ngIf=\"setPin=='2'\">Enter PIN</h3>\n  <ion-row text-center>\n    <ion-col style=\"text-align: center;\">\n     <ion-input #otp1 required  [(ngModel)]=\"d1\" type=\"password\" pattern=\"/^([0-9]{1})/\" (keyup)=\"otpController($event,otp2,'',otp1)\">\n     </ion-input>\n     <ion-input #otp2 required  [(ngModel)]=\"d2\" type=\"password\" pattern=\"/^([0-9]{1})/\" (keyup)=\"otpController($event,otp3,otp1,otp2)\">\n     </ion-input>\n     <ion-input #otp3 required  [(ngModel)]=\"d3\" type=\"password\" pattern=\"/^([0-9]{1})/\" (keyup)=\"otpController($event,otp4,otp2,otp3)\">\n     </ion-input>\n     <ion-input #otp4 required  [(ngModel)]=\"d4\" type=\"password\" pattern=\"/^([0-9]{1})/\" (keyup)=\"otpController($event,'',otp3,otp4)\">\n     </ion-input>\n     <ion-input #empt style=\"display: none;\" hidden></ion-input>\n    </ion-col>\n  </ion-row>\n  <div class=\"buttonCont\" *ngIf=\"setPin == '2'\">\n    <ion-button class=\"loginButton\" (click)=\"signin()\">Sign In</ion-button>\n  </div>\n  <div class=\"buttonCont\" *ngIf=\"setPin == '0'\">\n    <ion-button class=\"loginButton\" (click)=\"setpin()\">Set PIN</ion-button>\n  </div>\n  <div class=\"buttonCont\" *ngIf=\"setPin == '1'\">\n    <ion-button class=\"loginButton\" (click)=\"confirmPin()\">Confirm PIN</ion-button>\n  </div>\n  <br>\n  <div class=\"buttonCont\">\n    <a (click)=\"forgotpin()\" *ngIf=\"setPin == '2'\">Forgot PIN ?</a>\n  </div>\n  <div class=\"buttonCont\" *ngIf=\"setPin != '2'\">\n    <a (click)=\"goto('login')\">Back to Login</a>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_loginwithpin_loginwithpin_module_ts.js.map
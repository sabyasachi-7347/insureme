"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_addmember_addmember_module_ts"],{

/***/ 3797:
/*!*******************************************************!*\
  !*** ./src/app/addmember/addmember-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddmemberPageRoutingModule": () => (/* binding */ AddmemberPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _addmember_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addmember.page */ 182);




const routes = [
    {
        path: '',
        component: _addmember_page__WEBPACK_IMPORTED_MODULE_0__.AddmemberPage
    }
];
let AddmemberPageRoutingModule = class AddmemberPageRoutingModule {
};
AddmemberPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddmemberPageRoutingModule);



/***/ }),

/***/ 1792:
/*!***********************************************!*\
  !*** ./src/app/addmember/addmember.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddmemberPageModule": () => (/* binding */ AddmemberPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _addmember_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addmember-routing.module */ 3797);
/* harmony import */ var _addmember_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addmember.page */ 182);







let AddmemberPageModule = class AddmemberPageModule {
};
AddmemberPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addmember_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddmemberPageRoutingModule
        ],
        declarations: [_addmember_page__WEBPACK_IMPORTED_MODULE_1__.AddmemberPage]
    })
], AddmemberPageModule);



/***/ }),

/***/ 182:
/*!*********************************************!*\
  !*** ./src/app/addmember/addmember.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddmemberPage": () => (/* binding */ AddmemberPage)
/* harmony export */ });
/* harmony import */ var C_Users_ADMIN_Desktop_Incurance_Project_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _addmember_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addmember.page.html?ngResource */ 5089);
/* harmony import */ var _addmember_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addmember.page.scss?ngResource */ 3449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);







let AddmemberPage = class AddmemberPage {
  constructor(auth, firestore) {
    this.auth = auth;
    this.firestore = firestore;
    this.addbtn = true;
    this.name = "";
    this.email = "";
    this.mobile = "";
    this.phoneReg = '/^[0-9]+${10}/';
  }

  ngOnInit() {}

  showBtn() {
    if (this.name == "" || this.email == "" || this.mobile == "") {
      this.addbtn = true;
    } else {
      this.addbtn = false;
    }

    console.log(this.addbtn);
  }

  addMember() {
    var _this = this;

    return (0,C_Users_ADMIN_Desktop_Incurance_Project_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!/^[0-9]+$/.test(_this.mobile) || !(_this.mobile.length == 10)) {
        alert("Please enter a valid mobile number");
        return;
      } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(_this.email)) {
        alert("Please enter a valid email id");
        return;
      } else if (!/^[a-zA-Z ]+$/.test(_this.name)) {
        alert("Please enter a valid name");
        return;
      } else {
        _this.curentUser = JSON.parse(localStorage.userData);
        console.log(_this.curentUser);
        console.log(_this.curentUser.email);

        _this.auth.createUserWithEmailAndPassword(_this.email.trim(), _this.mobile.toString().trim()).then( /*#__PURE__*/function () {
          var _ref = (0,C_Users_ADMIN_Desktop_Incurance_Project_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            console.log(data);

            if (data.user.uid) {
              yield _this.firestore.collection("users").doc(_this.email.trim()).set({
                "name": _this.name.trim(),
                "email": _this.email.trim(),
                "mobile": _this.mobile.trim(),
                "enrolledby": _this.curentUser.email,
                "role": 'subagent'
              }).catch(error => {
                console.log(error);
                alert("Unable to process request");
                return;
              }).then(userResult => {
                console.log(userResult);
                alert("Sub Agent registered sucessfully");
                _this.name = "";
                _this.email = "";
                _this.mobile = ""; //  this.goto('login');

                return;
              });
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).catch(err => {
          console.log(err);
          console.log(JSON.parse(JSON.stringify(err)));
          var errMsg = JSON.parse(JSON.stringify(err));
          errMsg = errMsg.code;

          if (errMsg == 'auth/email-already-in-use') {
            alert("The email address is already in use by another account.");
          }
        });
      }
    })();
  }

};

AddmemberPage.ctorParameters = () => [{
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore
}];

AddmemberPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-addmember',
  template: _addmember_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_addmember_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddmemberPage);


/***/ }),

/***/ 3449:
/*!**********************************************************!*\
  !*** ./src/app/addmember/addmember.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".loginButton {\n  text-align: center;\n}\n\n.buttonCont {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZG1lbWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSiIsImZpbGUiOiJhZGRtZW1iZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luQnV0dG9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idXR0b25Db250e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 5089:
/*!**********************************************************!*\
  !*** ./src/app/addmember/addmember.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Member</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"../../assets/imgs/addmembers.png\" height=\"35%\" width=\"100%\">\n\n  <ion-item>\n    <ion-label position=\"floating\">Enter Your Full Name <ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input [(ngModel)]=\"name\" requred (ionChange)=\"showBtn()\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Email ID <ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input [(ngModel)]=\"email\" (ionChange)=\"showBtn()\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Mobile Number <ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input [(ngModel)]=\"mobile\" (ionChange)=\"showBtn()\"></ion-input>\n  </ion-item>\n  <!-- <ion-item *ngIf=\"false\">\n    <ion-label position=\"floating\">Aadhar Number</ion-label>\n    <ion-input></ion-input>\n  </ion-item>   -->\n \n  <div class=\"buttonCont\">\n    <ion-button class=\"loginButton\" [disabled]=\"addbtn\" (click)=\"addMember()\">Add Member</ion-button>\n  </div>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_addmember_addmember_module_ts.js.map
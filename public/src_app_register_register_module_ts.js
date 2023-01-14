"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 1880:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 8135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 8723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1880);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 8135);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 8135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var C_Users_ADMIN_Desktop_Incurance_Project_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.html?ngResource */ 4754);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_pluginutill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pluginutill.service */ 5827);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);











let RegisterPage = class RegisterPage {
  constructor(router, modalCtrl, actionSheetController, pluginServices, auth, firestore, formBuilder) {
    this.router = router;
    this.modalCtrl = modalCtrl;
    this.actionSheetController = actionSheetController;
    this.pluginServices = pluginServices;
    this.auth = auth;
    this.firestore = firestore;
    this.formBuilder = formBuilder;
    this.aadharFrontImg = "";
    this.aadharBackImg = "";
    this.passwordShow = false;
    this.passwordShowType = "password";
    this.registerForm = this.formBuilder.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]{10}'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(10)]],
      aadhaarno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]{12}'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(12)]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      cpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      passwordShow: [false, []]
    });
    this.errorMessages = {
      name: [{
        type: 'required',
        message: 'Please enter name'
      }, {
        type: 'pattern',
        message: 'Please enter valid name'
      }],
      email: [{
        type: 'required',
        message: 'Please enter email'
      }, {
        type: 'pattern',
        message: 'Please enter valid email'
      }],
      mobile: [{
        type: 'required',
        message: 'Please enter mobile number'
      }, {
        type: 'pattern',
        message: 'Please enter valid number'
      }, {
        type: 'minLength',
        message: 'Phone number should be 10 digits'
      }, {
        type: 'maxLength',
        message: 'Phone number should be 10 digits'
      }],
      aadhaarno: [{
        type: 'required',
        message: 'Please enter aadhaar number'
      }, {
        type: 'pattern',
        message: 'Please enter valid number'
      }, {
        type: 'minLength',
        message: 'Aadhaar number should be 12 digits'
      }, {
        type: 'maxLength',
        message: 'Aadhaar number should be 12 digits'
      }],
      password: [{
        type: 'required',
        message: 'Please enter password'
      }],
      cpassword: [{
        type: 'required',
        message: 'Please enter password'
      }]
    };
  }

  ngOnInit() {}

  get errorControl() {
    return this.registerForm.controls;
  }

  get name() {
    return this.registerForm.get("name");
  }

  get email() {
    return this.registerForm.get("email");
  }

  get mobile() {
    return this.registerForm.get("mobile");
  }

  get aadhaarno() {
    return this.registerForm.get("aadhaarno");
  }

  get password() {
    return this.registerForm.get("password");
  }

  get cpassword() {
    return this.registerForm.get("cpassword");
  }

  goto(page) {
    this.router.navigate([page]);
  }

  imageOptionPopup(imgName) {
    var _this = this;

    return (0,C_Users_ADMIN_Desktop_Incurance_Project_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(imgName);
      _this.imageName = imgName;
      const actionSheet = yield _this.actionSheetController.create({
        cssClass: 'small-togglePopup',
        buttons: [{
          cssClass: 'camera-icon',
          text: 'camera',
          icon: 'camera',
          handler: function () {
            var _ref = (0,C_Users_ADMIN_Desktop_Incurance_Project_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              console.log('Delete clicked'); // this.aadharFrontImg = "";
              // this.aadharBackImg = "";

              yield _this.pluginServices.captureImage().then(data => {
                _this.clickedimage = _this.pluginServices.clickedImage; // alert(this.clickedimage)

                if (imgName == "Aadhaar Front") {
                  _this.aadharFrontImg = _this.clickedimage;
                } else {
                  _this.aadharBackImg = _this.clickedimage;
                }
              });
            });

            return function handler() {
              return _ref.apply(this, arguments);
            };
          }()
        }, {
          cssClass: 'gallery-icon',
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            // this.aadharFrontImg = "";
            // this.aadharBackImg = "";
            _this.pluginServices.selectFromDevice().then(data => {
              _this.clickedimage = _this.pluginServices.clickedImage; // alert(this.clickedimage)

              if (imgName == "Aadhaar Front") {
                _this.aadharFrontImg = _this.clickedimage;
              } else {
                _this.aadharBackImg = _this.clickedimage;
              }
            });
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      yield actionSheet.present(); // if (this.dd.documentType != "" && this.dd.documentType != null && this.dd.documentType != undefined) {
      //   await actionSheet.present();
      // } else {
      //   alert("Please select document type first");
      // }
    })();
  }

  signup() {
    var _this2 = this;

    return (0,C_Users_ADMIN_Desktop_Incurance_Project_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.registerForm.value.password.trim() == '' || _this2.registerForm.value.cpassword.trim() == '' || _this2.registerForm.value.password.trim() != _this2.registerForm.value.cpassword.trim()) {
        alert("Password and Confirm Password field should not be empty and should be same");
        return;
      }

      if (_this2.aadharFrontImg == "" || _this2.aadharBackImg == "") {
        alert("Please attach aadhaar card picture");
        return;
      } else {
        _this2.auth.createUserWithEmailAndPassword(_this2.registerForm.value.email.trim(), _this2.registerForm.value.password).then( /*#__PURE__*/function () {
          var _ref2 = (0,C_Users_ADMIN_Desktop_Incurance_Project_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            console.log(data);

            if (data.user.uid) {
              yield _this2.firestore.collection("users").doc(_this2.registerForm.value.email.trim()).set({
                "name": _this2.registerForm.value.name.trim(),
                "email": _this2.registerForm.value.email.trim(),
                "mobile": _this2.registerForm.value.mobile.toString().trim(),
                "aadhaar": _this2.registerForm.value.aadhaarno.toString().trim(),
                "aadhaarFront": _this2.aadharFrontImg,
                "aadhaarBack": _this2.aadharBackImg,
                "enrolledby": 'admin',
                "role": 'agent'
              }).catch(error => {
                console.log(error);
                alert("Unable to process request");
                return;
              }).then(userResult => {
                console.log(userResult);
                alert("User registered sucessfully");

                _this2.registerForm.reset();

                _this2.aadharFrontImg = '';
                _this2.aadharBackImg = ''; //  this.goto('login');

                return;
              });
            }
          });

          return function (_x) {
            return _ref2.apply(this, arguments);
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

  showPassword() {
    if (this.passwordShow) {
      this.passwordShowType = "text";
    } else {
      this.passwordShowType = "password";
    }
  }

};

RegisterPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController
}, {
  type: _services_pluginutill_service__WEBPACK_IMPORTED_MODULE_3__.PluginutillService
}, {
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}];

RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-register',
  template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegisterPage);


/***/ }),

/***/ 6219:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".loginButton {\n  text-align: center;\n}\n\n.buttonCont {\n  text-align: center;\n}\n\n.rrr {\n  height: 13%;\n  margin-top: 168%;\n}\n\n.form-bg ion-label {\n  color: #a39f9f;\n}\n\n.form-bg ion-input {\n  color: #424242;\n}\n\n.form-bg ion-item {\n  margin-bottom: 10px;\n}\n\n.item-inner {\n  flex-direction: row-reverse !important;\n}\n\n.icon-uplod {\n  color: #5c46f2 !important;\n  margin: 17px -13px -33px 0 !important;\n  background-color: transparent;\n  font-size: 27px;\n  padding: 0px 0px 12px 0px;\n}\n\n.uplod-file-name {\n  color: #5c46f2 !important;\n}\n\n.serror-message {\n  color: #f20e0e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUE7RUFBbUIsY0FBQTtBQUluQjs7QUFIQTtFQUFtQixjQUFBO0FBT25COztBQU5BO0VBQWtCLG1CQUFBO0FBVWxCOztBQVJBO0VBQ0ksc0NBQUE7QUFXSjs7QUFSRTtFQUNFLHlCQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVdKOztBQVBBO0VBQ0UseUJBQUE7QUFVRjs7QUFSQTtFQUFnQixjQUFBO0FBWWhCIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbkJ1dHRvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnV0dG9uQ29udHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucnJyIHtcclxuICAgIGhlaWdodDogMTMlO1xyXG4gICAgbWFyZ2luLXRvcDogMTY4JTtcclxufVxyXG5cclxuLmZvcm0tYmcgaW9uLWxhYmVse2NvbG9yOiAjYTM5ZjlmfVxyXG4uZm9ybS1iZyBpb24taW5wdXR7Y29sb3I6ICM0MjQyNDJ9XHJcbi5mb3JtLWJnIGlvbi1pdGVte21hcmdpbi1ib3R0b206MTBweDt9XHJcblxyXG4uaXRlbS1pbm5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pY29uLXVwbG9ke1xyXG4gICAgY29sb3I6ICM1YzQ2ZjIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTdweCAtMTNweCAtMzNweCAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMTJweCAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbi51cGxvZC1maWxlLW5hbWV7XHJcbiAgY29sb3I6ICM1YzQ2ZjIgICFpbXBvcnRhbnQ7ICBcclxufVxyXG4uc2Vycm9yLW1lc3NhZ2V7Y29sb3I6ICNmMjBlMGU7fSJdfQ== */";

/***/ }),

/***/ 4754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <img src=\"../../assets/imgs/loginscreen.PNG\" height=\"50%\" width=\"100%\">\n  <h3 class=\"buttonCont\">Register</h3>\n  <h5 class=\"buttonCont\">Let's help with some details.</h5>\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"submitForm()\" novalidate>\n  <ion-item>\n    <ion-label position=\"floating\">Enter Your Full Name <ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input formControlName=\"name\"></ion-input>\n  </ion-item>\n  <div *ngFor=\"let error of errorMessages.name\">\n    <ng-container *ngIf=\"name.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div>\n  <ion-item>\n    <ion-label position=\"floating\">Email ID <ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input formControlName=\"email\"></ion-input>\n  </ion-item>\n  <div *ngFor=\"let error of errorMessages.email\">\n    <ng-container *ngIf=\"email.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div>\n  <ion-item>\n    <ion-label position=\"floating\">Mobile Number <ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input formControlName=\"mobile\" type=\"number\"></ion-input>\n  </ion-item>\n  <div *ngFor=\"let error of errorMessages.mobile\">\n    <ng-container *ngIf=\"mobile.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div>\n  <ion-item>\n    <ion-label position=\"floating\">Aadhaar Number <ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input formControlName=\"aadhaarno\" type=\"number\"></ion-input>\n  </ion-item>\n  <div *ngFor=\"let error of errorMessages.aadhaarno\">\n    <ng-container *ngIf=\"aadhaarno.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div>\n  <ion-item>\n    <ion-label position=\"floating\">Password <ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input type=\"{{passwordShowType}}\" formControlName=\"password\"></ion-input>\n  </ion-item>\n  <div *ngFor=\"let error of errorMessages.password\">\n    <ng-container *ngIf=\"password.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div>  \n  <ion-item>\n    <ion-label position=\"floating\">Confirm Password <ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input type=\"{{passwordShowType}}\" formControlName=\"cpassword\"></ion-input>\n  </ion-item>\n  <div *ngFor=\"let error of errorMessages.cpassword\">\n    <ng-container *ngIf=\"cpassword.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div>\n  <ion-item>\n    <ion-checkbox [(ngModel)]=\"passwordShow\" formControlName=\"passwordShow\" (ionChange)=\"showPassword()\" slot=\"start\"></ion-checkbox>\n  <ion-label>Show Password</ion-label>\n  </ion-item>\n<ion-row>\n  <ion-col size=\"6\" class=\"loginButton\" (click)=\"imageOptionPopup('Aadhaar Front')\">\n    <img [src]=\"aadharFrontImg == ''?'../../assets/imgs/logo.png':aadharFrontImg\">\n    <p>Adhar Front <ion-text color=\"danger\">*</ion-text></p>\n  </ion-col>\n  <ion-col size=\"6\" class=\"loginButton\" (click)=\"imageOptionPopup('Aadhaar Back')\">\n    <img [src]=\"aadharBackImg == ''?'../../assets/imgs/logo.png':aadharBackImg\">\n    <p>Adhar Back <ion-text color=\"danger\">*</ion-text></p>\n  </ion-col>\n</ion-row>\n  <div class=\"buttonCont\">\n    <ion-button class=\"loginButton\" (click)=\"signup()\" [disabled]=\"!registerForm.valid\">Sign Up</ion-button>\n  </div>   \n  <br>\n  <div class=\"buttonCont\">\n    <a (click)=\"goto('login')\">Already have an account ? Sign In</a>\n  </div>\n  <br>\n</form>\n</ion-content>\n ";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map
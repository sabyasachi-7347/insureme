"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/app-version/ngx */ 4582);











let LoginPage = class LoginPage {
  // docref: any;
  constructor(router, auth, firestore, formBuilder, appVer, plt, toastController) {
    this.router = router;
    this.auth = auth;
    this.firestore = firestore;
    this.formBuilder = formBuilder;
    this.appVer = appVer;
    this.plt = plt;
    this.toastController = toastController;
    this.passwordShow = false;
    this.passwordShowType = "password";
    this.loginForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      passwordShow: [false, []]
    });
    console.log(this.appVer);
    this.appVer.getVersionNumber().then(ver => {
      this.appVersions = ver;
      console.log(this.appVersions);
    }).catch(err => {
      console.log(err);
    });

    if (this.plt.is('android') || this.plt.is('ios')) {
      this.devicePlatform = "Mobile";
    } else {
      this.devicePlatform = "Web";
    }
  }

  ngOnInit() {
    try {
      if (localStorage.pin) {
        this.goto('loginwithpin');
      } else {}
    } catch (e) {}
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  login() {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this.loginForm.value);

      if (_this.loginForm.value.email.trim() == '' || _this.loginForm.value.password.trim() == '') {
        alert("Please enter email and password");
        return;
      }

      _this.auth.signInWithEmailAndPassword(_this.loginForm.value.email.trim(), _this.loginForm.value.password).then( /*#__PURE__*/function () {
        var _ref = (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          console.log(data);
          var toast = yield _this.toastController.create({
            message: "Logged in with " + _this.loginForm.value.email.trim(),
            duration: 5000,
            position: 'top'
          });
          toast.present();

          if (data.user.uid) {
            const docref = _this.firestore.collection("users").doc(_this.loginForm.value.email.trim());

            _this.colldata = docref.get().subscribe(doc => {
              console.log(doc.data());
              localStorage.userData = JSON.stringify(doc.data());
              localStorage.role = JSON.stringify(doc.data().role);

              if (doc.data().role == 'admin') {
                _this.goto('admin');
              } else {
                _this.goto('loginwithpin');
              }

              return doc.data();
            });
            console.log(_this.colldata);
            localStorage.uuid = JSON.stringify(data.user.uid);
          } else {}
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()); // let database = this.firestore.collection("users").snapshotChanges();
      // let collectionData:any = await database.subscribe((querySnapshot:any) => {
      //   let dataCollection = querySnapshot.map((documentSnapshot) => {
      //     return {"id":documentSnapshot.payload.doc.id,
      //     "name":documentSnapshot.payload.doc.data()['name']
      //   };
      //   });
      //   console.log("Data");
      //   console.log(dataCollection);
      // })

    })();
  }

  goto(page) {
    this.router.navigate([page]);
  }

  showPassword() {
    if (this.passwordShow) {
      this.passwordShowType = "text";
    } else {
      this.passwordShowType = "password";
    }
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuth
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}, {
  type: _awesome_cordova_plugins_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__.AppVersion
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".loginButton {\n  text-align: center;\n}\n\n.buttonCont {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL015JTIwUHJvamVjdHMlMjBOb3QlMjBUbyUyMFVzZS9pbnN1cmVtZW5ld2dpdC9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbkJ1dHRvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnV0dG9uQ29udHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5sb2dpbkJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbkNvbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <img src=\"../../assets/imgs/loginscreen.PNG\" height=\"50%\" width=\"100%\">\n  <h3 class=\"buttonCont\">Login</h3>\n  <form [formGroup]=\"loginForm\" novalidate>\n  \n  <ion-item>\n    <ion-label position=\"floating\"  form>Email ID</ion-label>\n    <ion-input formControlName=\"email\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Password</ion-label>\n    <ion-input type=\"{{passwordShowType}}\" formControlName=\"password\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-checkbox [(ngModel)]=\"passwordShow\" formControlName=\"passwordShow\" (ionChange)=\"showPassword()\" slot=\"start\"></ion-checkbox>\n  <ion-label>Show Password</ion-label>\n  </ion-item> \n  <div class=\"buttonCont\">\n    <!-- goto('loginwithpin') -->\n    <ion-button class=\"loginButton\" (click)=\"login()\">Sign In</ion-button>\n  </div>\n  <br>\n  <div class=\"buttonCont\">\n    <a (click)=\"goto('register')\">Don't have an account ? Sign Up</a>\n  </div>\n  <br>\n  <div class=\"buttonCont\">\n    <a (click)=\"goto('forgotpassword')\">Forgot Password ?</a>\n  </div>\n</form>\n<p style=\"text-align:center;\">Platform: {{devicePlatform}} <b *ngIf=\"devicePlatform != 'Web'\">Ver: {{appVersions}}</b></p>\n</ion-content>\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map
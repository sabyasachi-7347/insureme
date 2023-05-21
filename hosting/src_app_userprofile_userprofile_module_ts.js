"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_userprofile_userprofile_module_ts"],{

/***/ 3392:
/*!***********************************************************!*\
  !*** ./src/app/userprofile/userprofile-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserprofilePageRoutingModule": () => (/* binding */ UserprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _userprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userprofile.page */ 4837);




const routes = [
    {
        path: '',
        component: _userprofile_page__WEBPACK_IMPORTED_MODULE_0__.UserprofilePage
    }
];
let UserprofilePageRoutingModule = class UserprofilePageRoutingModule {
};
UserprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserprofilePageRoutingModule);



/***/ }),

/***/ 8564:
/*!***************************************************!*\
  !*** ./src/app/userprofile/userprofile.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserprofilePageModule": () => (/* binding */ UserprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _userprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userprofile-routing.module */ 3392);
/* harmony import */ var _userprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userprofile.page */ 4837);







let UserprofilePageModule = class UserprofilePageModule {
};
UserprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _userprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserprofilePageRoutingModule
        ],
        declarations: [_userprofile_page__WEBPACK_IMPORTED_MODULE_1__.UserprofilePage]
    })
], UserprofilePageModule);



/***/ }),

/***/ 4837:
/*!*************************************************!*\
  !*** ./src/app/userprofile/userprofile.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserprofilePage": () => (/* binding */ UserprofilePage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _userprofile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userprofile.page.html?ngResource */ 5570);
/* harmony import */ var _userprofile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userprofile.page.scss?ngResource */ 3615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_pluginutill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pluginutill.service */ 5827);








let UserprofilePage = class UserprofilePage {
  constructor(firestore, actionSheetController, pluginServices) {
    this.firestore = firestore;
    this.actionSheetController = actionSheetController;
    this.pluginServices = pluginServices;
    this.userProfileOpj = {};
    this.personalDataRead = true;
    this.bankDataRead = true;
    this.banks = [];
  }

  ngOnInit() {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.banks = []
      yield _this.firestore.collection("dropdown").doc('bankname').get().subscribe(doc => {
        console.log(doc.data().bankname);
        _this.banks = doc.data().bankname;
      });
      _this.userData = JSON.parse(localStorage.userData);
      _this.docref = _this.firestore.collection("users").doc(_this.userData.email.trim());

      _this.docref.get().subscribe(doc => {
        console.log(doc.data()); //  localStorage.userData = JSON.stringify(doc.data());

        _this.colldata = doc.data();
        _this.userProfileOpj.name = _this.colldata.name ? _this.colldata.name : '';
        _this.userProfileOpj.email = _this.colldata.email ? _this.colldata.email : '';
        _this.userProfileOpj.mobile = _this.colldata.mobile ? _this.colldata.mobile : '';
        _this.userProfileOpj.gender = _this.colldata.gender ? _this.colldata.gender : '';
        _this.userProfileOpj.beneficiary = _this.colldata.beneficiary ? _this.colldata.beneficiary : '';
        _this.userProfileOpj.bankname = _this.colldata.bankname ? _this.colldata.bankname : '';
        _this.userProfileOpj.acno = _this.colldata.acno ? _this.colldata.acno : '';
        _this.userProfileOpj.ifsc = _this.colldata.ifsc ? _this.colldata.ifsc : '';
        _this.userProfileOpj.panno = _this.colldata.panno ? _this.colldata.panno : '';
        _this.userProfileOpj.profilePicture = _this.colldata.profilePicture ? _this.colldata.profilePicture : '';
      });
    })();
  }

  openCamera() {
    var _this2 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Camera Selected");
      const actionSheet = yield _this2.actionSheetController.create({
        cssClass: 'small-togglePopup',
        buttons: [{
          cssClass: 'camera-icon',
          text: 'camera',
          icon: 'camera',
          handler: function () {
            var _ref = (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              console.log('Delete clicked'); // this.aadharFrontImg = "";
              // this.aadharBackImg = "";

              yield _this2.pluginServices.captureImage().then(data => {
                _this2.clickedimage = _this2.pluginServices.clickedImage; // alert(this.clickedimage)

                if (_this2.clickedimage == '' || _this2.clickedimage == undefined) {
                  alert("Photo not selected");
                  return;
                } else {
                  _this2.userProfileOpj.profilePicture = _this2.clickedimage;

                  _this2.firestore.collection("users").doc(_this2.userData.email.trim()).set({
                    "profilePicture": _this2.userProfileOpj.profilePicture
                  }, {
                    merge: true
                  }).then(() => {
                    console.log("Profile Picture Saved");
                  }).catch(err => {
                    console.log(err);
                  });
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
            _this2.pluginServices.selectFromDevice().then(data => {
              _this2.clickedimage = _this2.pluginServices.clickedImage; // alert(this.clickedimage)

              if (_this2.clickedimage == '' || _this2.clickedimage == undefined) {
                alert("Photo not selected");
                return;
              } else {
                _this2.userProfileOpj.profilePicture = _this2.clickedimage;

                _this2.firestore.collection("users").doc(_this2.userData.email.trim()).set({
                  "profilePicture": _this2.userProfileOpj.profilePicture
                }, {
                  merge: true
                }).then(() => {
                  console.log("Profile Picture Saved");
                }).catch(err => {
                  console.log(err);
                });
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
      yield actionSheet.present();
    })();
  }

  changeReadPersonal(data) {
    if (data) {
      this.personalDataRead = false;
    } else {
      this.personalDataRead = true;
      this.setPersonalData();
    }
  }

  changeReadBank(data) {
    if (data) {
      this.bankDataRead = false;
    } else {
      this.bankDataRead = true;
      this.setBankData();
    }
  }

  setPersonalData() {
    if (!/^[a-zA-Z ]+$/.test(this.userProfileOpj.name) || this.userProfileOpj.name == '' || this.userProfileOpj.name == undefined) {
      alert("Invalid name");
      this.personalDataRead = false;
      return;
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.userProfileOpj.email) || this.userProfileOpj.email == '' || this.userProfileOpj.email == undefined) {
      alert("Invalid email");
      this.personalDataRead = false;
      return;
    } else if (!/^[0-9]{10}/.test(this.userProfileOpj.mobile) || this.userProfileOpj.mobile == "" || this.userProfileOpj.mobile == undefined) {
      alert("Invalid mobile number");
      this.personalDataRead = false;
      return;
    } else if (this.userProfileOpj.gender == '') {
      alert("Please select gender");
      this.personalDataRead = false;
      return;
    }

    this.firestore.collection("users").doc(this.userData.email.trim()).set({
      "name": this.userProfileOpj.name,
      "email": this.userProfileOpj.email,
      "mobile": this.userProfileOpj.mobile,
      "gender": this.userProfileOpj.gender
    }, {
      merge: true
    }).then(() => {
      console.log("Personal Data Save entered");
    }).catch(err => {
      console.log(err);
    });
  }

  setBankData() {
    if (!/^[a-zA-Z ]+$/.test(this.userProfileOpj.beneficiary) || this.userProfileOpj.beneficiary == '' || this.userProfileOpj.beneficiary == undefined) {
      alert("Invalid name");
      this.bankDataRead = false;
      return;
    } else if (!/^[0-9]{14}/.test(this.userProfileOpj.acno) || this.userProfileOpj.acno == '' || this.userProfileOpj.acno == undefined) {
      alert("Invalid Account Number");
      this.bankDataRead = false;
      return;
    } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(this.userProfileOpj.ifsc) || this.userProfileOpj.ifsc == "") {
      alert("Invalid IFSC Code");
      this.bankDataRead = false;
      return;
    } else if (this.userProfileOpj.panno == '' || this.userProfileOpj.panno == undefined || !/[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(this.userProfileOpj.panno)) {
      alert("Invalid PAN Number");
      this.bankDataRead = false;
      return;
    } else if (this.userProfileOpj.bankname == '' || this.userProfileOpj.bankname == undefined) {
      alert("Please Select Bank Name");
      this.bankDataRead = false;
      return;
    }

    this.firestore.collection("users").doc(this.userData.email.trim()).set({
      "beneficiary": this.userProfileOpj.beneficiary,
      "acno": this.userProfileOpj.acno,
      "bankname": this.userProfileOpj.bankname,
      "ifsc": this.userProfileOpj.ifsc,
      "panno": this.userProfileOpj.panno
    }, {
      merge: true
    }).then(() => {
      console.log("Bank Data Save entered");
    }).catch(err => {
      console.log(err);
    });
  }

};

UserprofilePage.ctorParameters = () => [{
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController
}, {
  type: _services_pluginutill_service__WEBPACK_IMPORTED_MODULE_3__.PluginutillService
}];

UserprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-userprofile',
  template: _userprofile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_userprofile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], UserprofilePage);


/***/ }),

/***/ 3615:
/*!**************************************************************!*\
  !*** ./src/app/userprofile/userprofile.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".imgSty {\n  margin-top: 10%;\n  border-radius: 50%;\n  height: 20%;\n  width: 30%;\n}\n\n.imgCont, .buttonCont {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJwcm9maWxlLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL015JTIwUHJvamVjdHMlMjBOb3QlMjBUbyUyMFVzZS9pbnN1cmVtZW5ld2dpdC9zcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InVzZXJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdTdHl7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5pbWdDb250LCAuYnV0dG9uQ29udHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5pbWdTdHkge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5pbWdDb250LCAuYnV0dG9uQ29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 5570:
/*!**************************************************************!*\
  !*** ./src/app/userprofile/userprofile.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <img class=\"imgSty\" src=\"../../assets/imgs/loginscreen.PNG\"> -->\n  <div class=\"imgCont\">\n    <img class=\"imgSty\" [src]=\"userProfileOpj.profilePicture == ''?'../../assets/imgs/logo.png':userProfileOpj.profilePicture\">\n    <ion-icon name=\"camera\" (click)=\"openCamera()\"></ion-icon>\n  </div>\n  \n  <h3 class=\"buttonCont\">Welcome {{userProfileOpj.name}}</h3>\n  <br>\n  <h5 class=\"buttonCont\">Personal Details <ion-icon style=\"float: right; margin-right:20%;\" slot=\"end\" name=\"pencil\" *ngIf=\"personalDataRead\" (click)=\"changeReadPersonal(personalDataRead)\"></ion-icon><ion-icon style=\"float: right; margin-right:20%;\" slot=\"end\" name=\"checkmark\" *ngIf=\"!personalDataRead\" (click)=\"changeReadPersonal(personalDataRead)\"></ion-icon></h5>\n  <ion-item>\n    <ion-label position=\"floating\">Full Name</ion-label>\n    <ion-input [(ngModel)]=\"userProfileOpj.name\"  [readonly]=\"personalDataRead\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Email ID</ion-label>\n    <ion-input [(ngModel)]=\"userProfileOpj.email\" [readonly]=\"personalDataRead\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Mobile Number </ion-label>\n    <ion-input [(ngModel)]=\"userProfileOpj.mobile\" type=\"number\" [readonly]=\"personalDataRead\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Gender</ion-label>\n    <ion-select [(ngModel)]=\"userProfileOpj.gender\" interface=\"action-sheet\" [disabled]=\"personalDataRead\">\n      <ion-select-option value=\"male\">Male</ion-select-option>\n      <ion-select-option value=\"female\">Female</ion-select-option>\n      <ion-select-option value=\"other\">Other</ion-select-option>\n    </ion-select>\n  </ion-item>  \n  <br>\n  <h5 class=\"buttonCont\">Payout Details <ion-icon style=\"float: right; margin-right:20%;\" slot=\"end\" name=\"pencil\" *ngIf=\"bankDataRead\" (click)=\"changeReadBank(bankDataRead)\"></ion-icon><ion-icon style=\"float: right; margin-right:20%;\" slot=\"end\" name=\"checkmark\" *ngIf=\"!bankDataRead\" (click)=\"changeReadBank(bankDataRead)\"></ion-icon></h5>\n  <ion-item>\n    <ion-label position=\"floating\">Beneficiary Name</ion-label>\n    <ion-input [(ngModel)]=\"userProfileOpj.beneficiary\" [readonly]=\"bankDataRead\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Bank Name</ion-label>\n    <ion-input [(ngModel)]=\"userProfileOpj.bankname\" [readonly]=\"bankDataRead\"></ion-input>\n    <!-- <ion-select [(ngModel)]=\"userProfileOpj.bankname\" [disabled]=\"bankDataRead\">\n      <ion-select-option *ngFor=\"let bank of banks\" value=\"{{bank}}\">{{bank}}</ion-select-option>\n    </ion-select> -->\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Account Number</ion-label>\n    <ion-input [(ngModel)]=\"userProfileOpj.acno\" type=\"number\" [readonly]=\"bankDataRead\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">IFSC Code</ion-label>\n    <ion-input [(ngModel)]=\"userProfileOpj.ifsc\" [readonly]=\"bankDataRead\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">PAN Number</ion-label>\n    <ion-input [(ngModel)]=\"userProfileOpj.panno\" [readonly]=\"bankDataRead\"></ion-input>\n  </ion-item>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_userprofile_userprofile_module_ts.js.map
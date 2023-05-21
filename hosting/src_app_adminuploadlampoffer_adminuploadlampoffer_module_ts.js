"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_adminuploadlampoffer_adminuploadlampoffer_module_ts"],{

/***/ 1129:
/*!*****************************************************************************!*\
  !*** ./src/app/adminuploadlampoffer/adminuploadlampoffer-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminuploadlampofferPageRoutingModule": () => (/* binding */ AdminuploadlampofferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _adminuploadlampoffer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminuploadlampoffer.page */ 312);




const routes = [
    {
        path: '',
        component: _adminuploadlampoffer_page__WEBPACK_IMPORTED_MODULE_0__.AdminuploadlampofferPage
    }
];
let AdminuploadlampofferPageRoutingModule = class AdminuploadlampofferPageRoutingModule {
};
AdminuploadlampofferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminuploadlampofferPageRoutingModule);



/***/ }),

/***/ 8700:
/*!*********************************************************************!*\
  !*** ./src/app/adminuploadlampoffer/adminuploadlampoffer.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminuploadlampofferPageModule": () => (/* binding */ AdminuploadlampofferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _adminuploadlampoffer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminuploadlampoffer-routing.module */ 1129);
/* harmony import */ var _adminuploadlampoffer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminuploadlampoffer.page */ 312);







let AdminuploadlampofferPageModule = class AdminuploadlampofferPageModule {
};
AdminuploadlampofferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _adminuploadlampoffer_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminuploadlampofferPageRoutingModule
        ],
        declarations: [_adminuploadlampoffer_page__WEBPACK_IMPORTED_MODULE_1__.AdminuploadlampofferPage]
    })
], AdminuploadlampofferPageModule);



/***/ }),

/***/ 312:
/*!*******************************************************************!*\
  !*** ./src/app/adminuploadlampoffer/adminuploadlampoffer.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminuploadlampofferPage": () => (/* binding */ AdminuploadlampofferPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _adminuploadlampoffer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminuploadlampoffer.page.html?ngResource */ 7488);
/* harmony import */ var _adminuploadlampoffer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminuploadlampoffer.page.scss?ngResource */ 6182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/commondata.service */ 1056);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_pluginutill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pluginutill.service */ 5827);










let AdminuploadlampofferPage = class AdminuploadlampofferPage {
  constructor(commondataService, firestore, router, actionSheetController, pluginServices) {
    this.commondataService = commondataService;
    this.firestore = firestore;
    this.router = router;
    this.actionSheetController = actionSheetController;
    this.pluginServices = pluginServices;
    this.results = [];
    this.allUsers = [];
    this.name = "";
    this.email = "";
    this.years = "";
    this.selectedDate = "";
    this.imageName = "";
    this.clickedimage = '';
    this.uploadpaygrid = "";
  }

  ngOnInit() {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.firestore.collection("users").get().subscribe(doc => {
        console.log(doc);
        doc.docs.forEach(snapDoc => {
          console.log(snapDoc.data());

          _this.allUsers.push(snapDoc.data().name + ' | ' + snapDoc.data().email + ' | ' + snapDoc.data().mobile);

          _this.results = _this.allUsers;
        }); // this.curentUser.email
      });
      yield _this.firestore.collection("dropdown").doc('yearmonth').get().subscribe(doc => {
        console.log(doc.data().yearmonth);
        _this.years = doc.data().yearmonth;
      });
    })();
  }

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.allUsers.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

  selectUser(result) {
    var _this2 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var selectedUser = result.split(' | ')[1].trim();
      console.log(selectedUser);
      _this2.name = result.split(' | ')[0].trim();
      _this2.email = result.split(' | ')[1].trim();
    })();
  }

  imageOptionPopup(imgName) {
    var _this3 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(imgName);
      _this3.imageName = imgName + _this3.selectedDate;
      const actionSheet = yield _this3.actionSheetController.create({
        cssClass: 'small-togglePopup',
        buttons: [{
          cssClass: 'camera-icon',
          text: 'camera',
          icon: 'camera',
          handler: function () {
            var _ref = (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              console.log('Delete clicked'); // this.aadharFrontImg = "";
              // this.aadharBackImg = "";

              yield _this3.pluginServices.captureImage().then(data => {
                _this3.clickedimage = _this3.pluginServices.clickedImage; // alert(this.clickedimage)

                _this3.uploadpaygrid = _this3.clickedimage;
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
            _this3.pluginServices.selectFromDevice().then(data => {
              _this3.clickedimage = _this3.pluginServices.clickedImage; // alert(this.clickedimage)

              _this3.uploadpaygrid = _this3.clickedimage;
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

  uploadDetails() {
    var _this4 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.selectedDate == '') {
        alert("Please select date");
        return;
      }

      if (_this4.uploadpaygrid == '') {
        alert("Please upload image");
        return;
      }

      yield _this4.firestore.collection("lampoffer").doc(_this4.email.trim() + _this4.selectedDate.trim()).set({
        "date": _this4.selectedDate.trim(),
        "image": _this4.uploadpaygrid
      }).catch(error => {
        console.log(error);
        alert("Unable to process request");
        return;
      }).then(userResult => {
        console.log(userResult);
        alert("Offer Set for month " + _this4.selectedDate);
        _this4.selectedDate = "";
        _this4.uploadpaygrid = "";
      });
    })();
  }

};

AdminuploadlampofferPage.ctorParameters = () => [{
  type: _services_commondata_service__WEBPACK_IMPORTED_MODULE_3__.CommondataService
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController
}, {
  type: _services_pluginutill_service__WEBPACK_IMPORTED_MODULE_4__.PluginutillService
}];

AdminuploadlampofferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-adminuploadlampoffer',
  template: _adminuploadlampoffer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_adminuploadlampoffer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminuploadlampofferPage);


/***/ }),

/***/ 6182:
/*!********************************************************************************!*\
  !*** ./src/app/adminuploadlampoffer/adminuploadlampoffer.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbnVwbG9hZGxhbXBvZmZlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7488:
/*!********************************************************************************!*\
  !*** ./src/app/adminuploadlampoffer/adminuploadlampoffer.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Upload Lamp Offer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-item>\n        <ion-label>Date</ion-label>\n        <ion-select placeholder=\"Select member\" [(ngModel)]=\"selectedDate\">\n          <ion-select-option *ngFor=\"let date of years\" value=\"{{date}}\">{{date}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-col >\n        <img [src]=\"uploadpaygrid == '' ? '../../assets/imgs/logo.png' : uploadpaygrid\" (click)=\"imageOptionPopup('grid')\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-item>\n       <ion-button (click)=\"uploadDetails()\" expanded=\"full\">Upload</ion-button>\n      </ion-item>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_adminuploadlampoffer_adminuploadlampoffer_module_ts.js.map
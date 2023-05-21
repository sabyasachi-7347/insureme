"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_addbusiness_addbusiness_module_ts"],{

/***/ 7078:
/*!***********************************************************!*\
  !*** ./src/app/addbusiness/addbusiness-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddbusinessPageRoutingModule": () => (/* binding */ AddbusinessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _addbusiness_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addbusiness.page */ 4774);




const routes = [
    {
        path: '',
        component: _addbusiness_page__WEBPACK_IMPORTED_MODULE_0__.AddbusinessPage
    }
];
let AddbusinessPageRoutingModule = class AddbusinessPageRoutingModule {
};
AddbusinessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddbusinessPageRoutingModule);



/***/ }),

/***/ 3492:
/*!***************************************************!*\
  !*** ./src/app/addbusiness/addbusiness.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddbusinessPageModule": () => (/* binding */ AddbusinessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _addbusiness_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addbusiness-routing.module */ 7078);
/* harmony import */ var _addbusiness_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addbusiness.page */ 4774);







let AddbusinessPageModule = class AddbusinessPageModule {
};
AddbusinessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addbusiness_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddbusinessPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_addbusiness_page__WEBPACK_IMPORTED_MODULE_1__.AddbusinessPage]
    })
], AddbusinessPageModule);



/***/ }),

/***/ 4774:
/*!*************************************************!*\
  !*** ./src/app/addbusiness/addbusiness.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddbusinessPage": () => (/* binding */ AddbusinessPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _addbusiness_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addbusiness.page.html?ngResource */ 6622);
/* harmony import */ var _addbusiness_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addbusiness.page.scss?ngResource */ 2310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);








let AddbusinessPage = class AddbusinessPage {
  constructor(formBuilder, auth, firestore) {
    this.formBuilder = formBuilder;
    this.auth = auth;
    this.firestore = firestore;
    this.openDatetimeField = false;
    this.selectedDate = "";
    this.banks = [];
    this.addBusinessForm = this.formBuilder.group({
      typeOfBorrow: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      bankName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      lanNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z ]+$')]],
      disburseDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      disbursedAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[0-9]{1,7}')]],
      // currentPoint:['', [Validators.required,Validators.pattern('^[0-9]{1,3}')]],
      remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
    this.errorMessages = {
      typeOfBorrow: [{
        type: 'required',
        message: 'Please select type of borrow'
      }],
      bankName: [{
        type: 'required',
        message: 'Please select bank name'
      }],
      lanNo: [{
        type: 'required',
        message: 'Please enter LAN number'
      }],
      name: [{
        type: 'required',
        message: 'Please enter customer name'
      }, {
        type: 'pattern',
        message: 'Please enter valid name'
      }],
      disburseDate: [{
        type: 'required',
        message: 'please select disbursed date'
      }],
      disbursedAmount: [{
        type: 'required',
        message: 'Please enter disbursed amount'
      }, {
        type: 'pattern',
        message: 'Please enter valid amount'
      }],
      // currentPoint: [
      //   { type: 'required', message: 'Please enter current point' },
      //   { type: 'pattern', message: 'Please enter valid percentage' }
      // ],
      remarks: [{
        type: 'required',
        message: 'Please enter remarks'
      }]
    };
  }

  get errorControl() {
    return this.addBusinessForm.controls;
  }

  get typeOfBorrow() {
    return this.addBusinessForm.get("typeOfBorrow");
  }

  get bankName() {
    return this.addBusinessForm.get("bankName");
  }

  get lanNo() {
    return this.addBusinessForm.get("lanNo");
  }

  get name() {
    return this.addBusinessForm.get("name");
  }

  get disburseDate() {
    return this.addBusinessForm.get("disburseDate");
  }

  get disbursedAmount() {
    return this.addBusinessForm.get("disbursedAmount");
  } // get currentPoint() {
  //   return this.addBusinessForm.get("currentPoint");
  // }


  get remarks() {
    return this.addBusinessForm.get("remarks");
  }

  ngOnInit() {
    var _this = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.firestore.collection("dropdown").doc('bankname').get().subscribe(doc => {
        console.log(doc.data().bankname);
        _this.banks = doc.data().bankname;
      });
    })();
  }

  openDatetime() {
    this.openDatetimeField = true;
  }

  hideDatetime() {
    this.openDatetimeField = false;

    if (this.selectedDate) {
      this.selectedDate = this.selectedDate.split('T')[0];
      var selectedDateTemp = this.selectedDate.split('-')[2] + '-' + this.selectedDate.split('-')[1] + '-' + this.selectedDate.split('-')[0];
      this.selectedDate = selectedDateTemp;
    }
  }

  addNewBusiness() {
    var _this2 = this;

    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.curentUser = JSON.parse(localStorage.userData); // this.auth.createUserWithEmailAndPassword(this.email.trim(),this.mobile.toString().trim()).then(async (data)=>{
      // console.log(data);
      // if(data.user.uid)
      // {

      yield _this2.firestore.collection("business").doc().set({
        "typeOfBorrow": _this2.addBusinessForm.value.typeOfBorrow.trim(),
        "bankName": _this2.addBusinessForm.value.bankName.trim(),
        "lanNo": _this2.addBusinessForm.value.lanNo.trim(),
        "name": _this2.addBusinessForm.value.name.trim(),
        "disburseDate": _this2.selectedDate.trim(),
        "disbursedAmount": _this2.addBusinessForm.value.disbursedAmount.trim(),
        "approvedbyadmin": 'P',
        "agentPaid": 'false',
        "subAgentPaid": "false",
        // "currentPoint":this.addBusinessForm.value.currentPoint.trim(),
        "remarks": _this2.addBusinessForm.value.remarks.trim(),
        "createdBy": _this2.curentUser.email,
        "createdByName": _this2.curentUser.name,
        "agent": _this2.curentUser.enrolledby,
        "agentName": _this2.curentUser.enrolledbyName
      }).catch(error => {
        console.log(error);
        alert("Unable to process request");
        return;
      }).then(userResult => {
        console.log(userResult);
        alert("Business added sucessfully");

        _this2.addBusinessForm.reset(); //  this.goto('login');


        return;
      }); // }
      // })
      // .catch((err) => {
      //   console.log(err);
      //   console.log(JSON.parse(JSON.stringify(err)));
      //   var errMsg:any = JSON.parse(JSON.stringify(err))
      //   errMsg = errMsg.code;
      //   if(errMsg == 'auth/email-already-in-use'){
      //     alert("The email address is already in use by another account.")
      //   }
      // })
    })();
  }

};

AddbusinessPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
}, {
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore
}];

AddbusinessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-addbusiness',
  template: _addbusiness_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_addbusiness_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AddbusinessPage);


/***/ }),

/***/ 2310:
/*!**************************************************************!*\
  !*** ./src/app/addbusiness/addbusiness.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".loginButton {\n  text-align: center;\n}\n\n.buttonCont {\n  text-align: center;\n}\n\n.serror-message {\n  color: #f20e0e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGJ1c2luZXNzLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL015JTIwUHJvamVjdHMlMjBOb3QlMjBUbyUyMFVzZS9pbnN1cmVtZW5ld2dpdC9zcmMvYXBwL2FkZGJ1c2luZXNzL2FkZGJ1c2luZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQWdCLGNBQUE7QUNJaEIiLCJmaWxlIjoiYWRkYnVzaW5lc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luQnV0dG9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idXR0b25Db250e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zZXJyb3ItbWVzc2FnZXtjb2xvcjogI2YyMGUwZTt9IiwiLmxvZ2luQnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9uQ29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNmMjBlMGU7XG59Il19 */";

/***/ }),

/***/ 6622:
/*!**************************************************************!*\
  !*** ./src/app/addbusiness/addbusiness.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Business</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"../../assets/imgs/addmembers.png\" height=\"35%\" width=\"100%\">\n<form [formGroup]=\"addBusinessForm\" novalidate>\n  <ion-item>\n    <ion-label position=\"floating\">Type of Loans</ion-label>\n    <ion-select placeholder=\"Type of Loans\" interface=\"action-sheet\" formControlName=\"typeOfBorrow\">\n      <ion-select-option value=\"home\">Home</ion-select-option>\n      <ion-select-option value=\"personal\">Personal</ion-select-option>\n      <ion-select-option value=\"mortgage\">Mortgage</ion-select-option>\n      <ion-select-option value=\"business\">Business</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <div *ngFor=\"let error of errorMessages.typeOfBorrow\">\n    <ng-container *ngIf=\"typeOfBorrow.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div>\n    <ion-item>\n      <ion-label position=\"floating\">Bank Name</ion-label>\n      <ion-select placeholder=\"Bank Name\" formControlName=\"bankName\">\n        <ion-select-option *ngFor=\"let bank of banks\" value=\"{{bank}}\">{{bank}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  <div *ngFor=\"let error of errorMessages.bankName\">\n    <ng-container *ngIf=\"bankName.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div>\n  <ion-item>\n    <ion-label position=\"floating\">Aplication / LAN ID Number </ion-label>\n    <ion-input formControlName=\"lanNo\"></ion-input>\n  </ion-item>\n  <div *ngFor=\"let error of errorMessages.lanNo\">\n    <ng-container *ngIf=\"lanNo.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div>\n  <ion-item>\n    <ion-label position=\"floating\">Customer Name</ion-label>\n    <ion-input formControlName=\"name\"></ion-input>\n  </ion-item>\n  <div *ngFor=\"let error of errorMessages.name\">\n    <ng-container *ngIf=\"name.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div>\n  <ion-item>\n    <ion-label position=\"floating\">Disbursed Date</ion-label>\n    <ion-input (click)=\"openDatetime()\" [readonly]=\"true\" value=\"{{selectedDate}}\" *ngIf=\"!openDatetimeField\"></ion-input>\n    \n    <!-- <ion-input datetime=\"datetime\"></ion-input> -->\n<!-- <ion-modal [keepContentsMounted]=\"true\">\n    <ion-datetime placeholder=\"Select Date\" displayFormat=\"DD-MMM-YYYY\" formControlName=\"disburseDate\"></ion-datetime>\n</ion-modal> -->\n<div *ngIf=\"openDatetimeField\">\n  <ion-datetime placeholder=\"Select Date\" displayFormat=\"DD-MM-YYYY\" [(ngModel)]=\"selectedDate\"  formControlName=\"disburseDate\" ></ion-datetime>\n  <ion-button (click)=\"hideDatetime()\">OK</ion-button>\n</div>\n  </ion-item>\n  <div *ngFor=\"let error of errorMessages.disburseDate\">\n    <ng-container *ngIf=\"disburseDate.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div>  \n  <ion-item>\n    <ion-label position=\"floating\">Disbursed Amount </ion-label>\n    <ion-input formControlName=\"disbursedAmount\"></ion-input>\n  </ion-item>\n  <div *ngFor=\"let error of errorMessages.disbursedAmount\">\n    <ng-container *ngIf=\"disbursedAmount.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div>\n  <!-- <ion-item>\n    <ion-label position=\"floating\">Current Points %</ion-label>\n    <ion-input formControlName=\"currentPoint\"></ion-input>\n  </ion-item>\n  <div *ngFor=\"let error of errorMessages.currentPoint\">\n    <ng-container *ngIf=\"currentPoint.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div> -->\n  <ion-item>\n    <ion-label position=\"floating\">Remarks</ion-label>\n    <ion-input formControlName=\"remarks\"></ion-input>\n  </ion-item>\n  <div *ngFor=\"let error of errorMessages.remarks\">\n    <ng-container *ngIf=\"remarks.hasError(error.type)\"> \n         <small class=\"serror-message\">{{error.message}}</small>\n       </ng-container> \n     </div>\n</form>\n  <div class=\"buttonCont\">\n    <ion-button class=\"loginButton\" (click)=\"addNewBusiness()\" [disabled]=\"!addBusinessForm.valid\">Book Business</ion-button>\n  </div>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_addbusiness_addbusiness_module_ts.js.map
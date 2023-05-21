"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payoutallbusiness_payoutallbusiness_module_ts"],{

/***/ 5743:
/*!***********************************************************************!*\
  !*** ./src/app/payoutallbusiness/payoutallbusiness-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayoutallbusinessPageRoutingModule": () => (/* binding */ PayoutallbusinessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _payoutallbusiness_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payoutallbusiness.page */ 7993);




const routes = [
    {
        path: '',
        component: _payoutallbusiness_page__WEBPACK_IMPORTED_MODULE_0__.PayoutallbusinessPage
    }
];
let PayoutallbusinessPageRoutingModule = class PayoutallbusinessPageRoutingModule {
};
PayoutallbusinessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PayoutallbusinessPageRoutingModule);



/***/ }),

/***/ 2621:
/*!***************************************************************!*\
  !*** ./src/app/payoutallbusiness/payoutallbusiness.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayoutallbusinessPageModule": () => (/* binding */ PayoutallbusinessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _payoutallbusiness_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payoutallbusiness-routing.module */ 5743);
/* harmony import */ var _payoutallbusiness_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payoutallbusiness.page */ 7993);







let PayoutallbusinessPageModule = class PayoutallbusinessPageModule {
};
PayoutallbusinessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payoutallbusiness_routing_module__WEBPACK_IMPORTED_MODULE_0__.PayoutallbusinessPageRoutingModule
        ],
        declarations: [_payoutallbusiness_page__WEBPACK_IMPORTED_MODULE_1__.PayoutallbusinessPage]
    })
], PayoutallbusinessPageModule);



/***/ }),

/***/ 7993:
/*!*************************************************************!*\
  !*** ./src/app/payoutallbusiness/payoutallbusiness.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayoutallbusinessPage": () => (/* binding */ PayoutallbusinessPage)
/* harmony export */ });
/* harmony import */ var _Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _payoutallbusiness_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payoutallbusiness.page.html?ngResource */ 9693);
/* harmony import */ var _payoutallbusiness_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payoutallbusiness.page.scss?ngResource */ 760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);







let PayoutallbusinessPage = class PayoutallbusinessPage {
  // selectAll: boolean = false;
  constructor(route, router, firestore) {
    var _this = this;

    this.route = route;
    this.router = router;
    this.firestore = firestore;
    this.allAgentBusiness = [];
    this.selectedCategory = [];
    this.route.queryParams.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
        if (_this.router.getCurrentNavigation().extras.state) {
          _this.agentDetails = _this.router.getCurrentNavigation().extras.state;
          _this.selection = _this.agentDetails.selection;
          _this.allAgentBusiness = [];
          _this.totalAmount = 0;

          if (_this.selection == 'agent') {
            yield _this.firestore.collection("business", ref => ref.where('approvedbyadmin', "==", 'A').where('agent', "==", _this.agentDetails.email)).get().subscribe(doc => {
              console.log(doc);
              doc.docs.forEach(snapDoc => {
                console.log(snapDoc.data());
                var temp = snapDoc.data();
                temp.isChecked = true;
                temp.id = snapDoc.id;
                temp.amountToPayAgent = temp.amountToPayAgent ? temp.amountToPayAgent : 0;

                if (temp.agentPaid != 'true' || temp.agentPaid == undefined) {
                  _this.totalAmount = _this.totalAmount + temp.amountToPayAgent; // temp.amountToPayAgent = (temp.amountToPayAgent == '' || temp.amountToPayAgent == 'NaN')? 0 : temp.amountToPayAgent;

                  _this.allAgentBusiness.push(temp);
                } else {
                  console.log("already paid");
                }
              });
              console.log(_this.allAgentBusiness);
              _this.selectedCategory = [];

              for (let i = 0; i < _this.allAgentBusiness.length; i++) {
                _this.selectedCategory.push(_this.allAgentBusiness[i].id);
              } // this.curentUser.email

            });
          } else {
            yield _this.firestore.collection("business", ref => ref.where('approvedbyadmin', "==", 'A').where('createdBy', "==", _this.agentDetails.email)).get().subscribe(doc => {
              console.log(doc);
              doc.docs.forEach(snapDoc => {
                console.log(snapDoc.data());
                var temp = snapDoc.data();
                temp.isChecked = true;
                temp.id = snapDoc.id;
                temp.amountToPaySubAgent = temp.amountToPaySubAgent ? temp.amountToPaySubAgent : 0;

                if (temp.subAgentPaid != 'true' || temp.subAgentPaid == undefined) {
                  _this.totalAmount = _this.totalAmount + temp.amountToPaySubAgent; // temp.amountToPayAgent = (temp.amountToPayAgent == '' || temp.amountToPayAgent == 'NaN')? 0 : temp.amountToPayAgent;

                  _this.allAgentBusiness.push(temp);
                } else {
                  console.log("already paid");
                }
              });
              console.log(_this.allAgentBusiness);
              _this.selectedCategory = [];

              for (let i = 0; i < _this.allAgentBusiness.length; i++) {
                _this.selectedCategory.push(_this.allAgentBusiness[i].id);
              } // this.curentUser.email

            });
          } //  console.log(this.agentDetails);

        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  ngOnInit() {
    return (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  updateCheckedOptions(id, business) {
    let idx = this.selectedCategory.indexOf(id);

    if (this.selection == 'agent') {
      if (idx > -1) {
        this.selectedCategory.splice(idx, 1);
        this.totalAmount = this.totalAmount - business.amountToPayAgent;
      } else {
        this.selectedCategory.push(id);
        this.totalAmount = this.totalAmount + business.amountToPayAgent;
      }
    } else {
      if (idx > -1) {
        this.selectedCategory.splice(idx, 1);
        this.totalAmount = this.totalAmount - business.amountToPaySubAgent;
      } else {
        this.selectedCategory.push(id);
        this.totalAmount = this.totalAmount + business.amountToPaySubAgent;
      }
    }

    console.dir(this.selectedCategory); // if( this.selectedCategory.length == this.allAgentBusiness.length){
    //   this.selectAll =true;
    // }else{
    //   this.selectAll =false;
    // }
  } // changeSelectAll(event){
  //   console.log(event.detail.checked);
  //   if(event.detail.checked){
  //     this.selectedCategory = [];
  //     for (let i = 0; i < this.allAgentBusiness.length; i++) {
  //       this.selectedCategory.push(
  //         this.allAgentBusiness[i].id
  //           );
  //       }
  //     // this.curentUser.email
  //   }
  // }


  markPayment() {
    var _this2 = this;

    if (this.selection == 'agent') {
      this.selectedCategory.forEach( /*#__PURE__*/function () {
        var _ref2 = (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (id) {
          console.log(id);
          yield _this2.firestore.collection("business").doc(id).update({
            "agentPaid": 'true',
            "agentPayDate": new Date().getUTCFullYear() + '' + new Date().getUTCMonth() + '' + new Date().getUTCDate()
          }).catch(error => {
            console.log(error);
            alert("Unable to process request");
            return;
          }).then(userResult => {
            console.log(userResult); // this.commondataService.allPendingAgents.splice(i,1)

            return;
          });
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
      this.router.navigate(['adminmonthlypayouts']);
    } else {
      this.selectedCategory.forEach( /*#__PURE__*/function () {
        var _ref3 = (0,_Volumes_Sabyasachi_My_Projects_Not_To_Use_insuremenewgit_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (id) {
          console.log(id);
          yield _this2.firestore.collection("business").doc(id).update({
            "subAgentPaid": 'true',
            "subAgentPayDate": new Date().getUTCFullYear() + '' + new Date().getUTCMonth() + '' + new Date().getUTCDate()
          }).catch(error => {
            console.log(error);
            alert("Unable to process request");
            return;
          }).then(userResult => {
            console.log(userResult); // this.commondataService.allPendingAgents.splice(i,1)

            return;
          });
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
      this.router.navigate(['adminmonthlypayouts']);
    }
  }

};

PayoutallbusinessPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore
}];

PayoutallbusinessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-payoutallbusiness',
  template: _payoutallbusiness_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_payoutallbusiness_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PayoutallbusinessPage);


/***/ }),

/***/ 760:
/*!**************************************************************************!*\
  !*** ./src/app/payoutallbusiness/payoutallbusiness.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlvdXRhbGxidXNpbmVzcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9693:
/*!**************************************************************************!*\
  !*** ./src/app/payoutallbusiness/payoutallbusiness.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Payment Confirmation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>Name :</ion-col>\n    <ion-col>{{agentDetails.name}}</ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Bank :</ion-col>\n    <ion-col>{{agentDetails.bankname}}</ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Beneficiary :</ion-col>\n    <ion-col>{{agentDetails.beneficiary}}</ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>IFSC :</ion-col>\n    <ion-col>{{agentDetails.ifsc}}</ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>Account Number :</ion-col>\n    <ion-col>{{agentDetails.acno}}</ion-col>\n  </ion-row>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <!-- <ion-checkbox [checked]=\"selectAll\" (ionChange)=\"changeSelectAll($event)\"></ion-checkbox> -->\n      </ion-col>\n      <ion-col>\n        Business Name\n      </ion-col>\n      <ion-col>\n        Payable Amount\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let business of allAgentBusiness\">\n      <ion-col>\n        <ion-checkbox [checked]=\"selectedCategory.indexOf(business.id) >= 0\" (ionChange)=\"updateCheckedOptions(business.id,business,$event)\"></ion-checkbox>\n      </ion-col>\n      <ion-col>\n        {{business.name}}\n      </ion-col>\n      <ion-col *ngIf=\"selection == 'agent'\">\n        {{business.amountToPayAgent}}\n      </ion-col>\n      <ion-col *ngIf=\"selection != 'agent'\">\n        {{business.amountToPaySubAgent}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" (click)=\"markPayment()\">Mark Payment {{totalAmount}} As Paid</ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_payoutallbusiness_payoutallbusiness_module_ts.js.map
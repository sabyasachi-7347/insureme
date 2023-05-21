"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_viewbusinesslist_viewbusinesslist_module_ts"],{

/***/ 4059:
/*!*********************************************************************!*\
  !*** ./src/app/viewbusinesslist/viewbusinesslist-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewbusinesslistPageRoutingModule": () => (/* binding */ ViewbusinesslistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _viewbusinesslist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewbusinesslist.page */ 2971);




const routes = [
    {
        path: '',
        component: _viewbusinesslist_page__WEBPACK_IMPORTED_MODULE_0__.ViewbusinesslistPage
    }
];
let ViewbusinesslistPageRoutingModule = class ViewbusinesslistPageRoutingModule {
};
ViewbusinesslistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewbusinesslistPageRoutingModule);



/***/ }),

/***/ 1234:
/*!*************************************************************!*\
  !*** ./src/app/viewbusinesslist/viewbusinesslist.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewbusinesslistPageModule": () => (/* binding */ ViewbusinesslistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _viewbusinesslist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewbusinesslist-routing.module */ 4059);
/* harmony import */ var _viewbusinesslist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewbusinesslist.page */ 2971);







let ViewbusinesslistPageModule = class ViewbusinesslistPageModule {
};
ViewbusinesslistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _viewbusinesslist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewbusinesslistPageRoutingModule
        ],
        declarations: [_viewbusinesslist_page__WEBPACK_IMPORTED_MODULE_1__.ViewbusinesslistPage]
    })
], ViewbusinesslistPageModule);



/***/ }),

/***/ 2971:
/*!***********************************************************!*\
  !*** ./src/app/viewbusinesslist/viewbusinesslist.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewbusinesslistPage": () => (/* binding */ ViewbusinesslistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _viewbusinesslist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewbusinesslist.page.html?ngResource */ 8027);
/* harmony import */ var _viewbusinesslist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewbusinesslist.page.scss?ngResource */ 9298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);






let ViewbusinesslistPage = class ViewbusinesslistPage {
    constructor(route, router, firestore) {
        this.route = route;
        this.router = router;
        this.firestore = firestore;
        this.allbusiness = [];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.email = this.router.getCurrentNavigation().extras.state.email;
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.allbusiness = [];
        this.users = this.firestore.collection("business", ref => ref.where('createdBy', "==", this.email)).get().subscribe((doc) => {
            console.log("all docs here");
            console.log(doc);
            doc.docs.forEach((snapDoc) => {
                console.log(snapDoc.data());
                var temp = snapDoc.data();
                console.log(temp);
                temp.id = snapDoc.id;
                this.allbusiness.push(temp);
            });
            // this.curentUser.email
        });
    }
};
ViewbusinesslistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore }
];
ViewbusinesslistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-viewbusinesslist',
        template: _viewbusinesslist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_viewbusinesslist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewbusinesslistPage);



/***/ }),

/***/ 9298:
/*!************************************************************************!*\
  !*** ./src/app/viewbusinesslist/viewbusinesslist.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3YnVzaW5lc3NsaXN0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8027:
/*!************************************************************************!*\
  !*** ./src/app/viewbusinesslist/viewbusinesslist.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>View All Business</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-card *ngFor=\"let user of allbusiness;let i = index;\">\n    <ion-row >\n      <ion-col style=\"text-align: center;\">\n        {{user.name}}\n      </ion-col>\n      \n    </ion-row>  \n    <ion-row >\n      <ion-col size=\"6\" style=\"text-align: center;\">\n        LAN: {{user.lanNo}}\n      </ion-col>\n      <ion-col size=\"6\" style=\"text-align: center;\">\n        Created By: {{user.createdBy}}\n      </ion-col>\n    </ion-row>  \n    <ion-row >\n      <ion-col size=\"6\" style=\"text-align: center;\">\n        Amount: {{user.disbursedAmount}}\n      </ion-col>\n      <ion-col size=\"6\" style=\"text-align: center;\">\n        Type: {{user.typeOfBorrow}}\n      </ion-col>\n    </ion-row>  \n    <ion-row >\n      <ion-col style=\"text-align: center;\">\n        Remark: {{user.remarks}}\n      </ion-col>\n    </ion-row>  \n    </ion-card>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_viewbusinesslist_viewbusinesslist_module_ts.js.map
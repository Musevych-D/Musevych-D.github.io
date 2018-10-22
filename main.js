(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-timer\n  [global]=\"global\"\n  [local]=\"local\">\n\n</app-timer>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppComponent = class AppComponent {
    constructor() {
        this.global = {
            duration: 10,
            leftValue: 10
        };
        this.local = {
            duration: 3,
            leftValue: 3
        };
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_timer_timer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/timer/timer.module */ "./src/app/components/timer/timer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _components_timer_timer_module__WEBPACK_IMPORTED_MODULE_3__["TimerModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/timer/icon/icon.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/timer/icon/icon.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"iconWrap flexCenter posrel\"\n     (click)=\"onSelect()\">\n\n  <div class=\"iconCore w-100 h-100 posabs\"\n       [class.activeAvatar]=\"isActive\">\n  </div>\n\n  <div class=\"imgWrap posabs\"\n       [class.fadeOut]=\"viewState === 'timerView'\"\n       [class.innerBorder]=\"viewState === 'timerView'\">\n    <img src=\"{{avatar.imageSrc}}\" alt=\"\">\n  </div>\n\n  <div class=\"svgHolder posabs\"\n       [class.dHidden]=\"viewState !== 'timerView'\"\n       >\n    <svg class=\"svg w-100 h-100\"\n         [class.animation]=\"viewState === 'timerView'\">\n      <circle r=\"0\" cx=\"0\" cy=\"0\" class=\"circle\">\n      </circle>\n    </svg>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/timer/icon/icon.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/timer/icon/icon.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.iconWrap {\n  height: 145px;\n  width: 145px;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n  z-index: 1; }\n  div.iconWrap div.iconCore {\n    border-radius: 50%;\n    background-color: #1f2128;\n    border: 10px solid #3b3d44; }\n  div.iconWrap div.innerBorder {\n    border: 4px solid #face2a; }\n  div.iconWrap div.imgWrap {\n    border-radius: 50%;\n    overflow: hidden;\n    top: 10px;\n    left: 10px;\n    width: 125px;\n    height: 125px;\n    z-index: 3; }\n  div.iconWrap div.imgWrap img {\n      display: inline;\n      margin: 0 -50%;\n      height: 100%;\n      width: auto; }\n  div.iconWrap div.fadeOut:after, div.iconWrap div.fadeOut:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: none; }\n  div.iconWrap div.fadeOut:after {\n    background-color: #1f2128;\n    opacity: .6; }\n  div.iconWrap div.fadeOut:before {\n    top: 50%;\n    left: 50%;\n    margin: -20px;\n    background-image: url(\"/src/assets/svg/pencil.svg\");\n    background-size: 40px 40px;\n    background-repeat: no-repeat; }\n  div.iconWrap div.fadeOut:hover:after, div.iconWrap div.fadeOut:hover:before {\n    display: block; }\n  div.iconWrap div.svgHolder {\n    height: 145px;\n    width: 145px;\n    z-index: 2;\n    box-shadow: 0 10px #759c13; }\n  div.iconWrap div.svgHolder svg.svg {\n      -webkit-transform: rotateY(-180deg) rotateZ(-90deg);\n              transform: rotateY(-180deg) rotateZ(-90deg); }\n  div.iconWrap div.svgHolder svg.svg circle.circle {\n        stroke-dasharray: 424px;\n        stroke-dashoffset: 0;\n        stroke-linecap: round;\n        stroke-width: 10px;\n        stroke: #438a12;\n        fill: none; }\n  div.iconWrap div.svgHolder svg.svg .localAnimation,\n      div.iconWrap div.svgHolder svg.svg .globalAnimation {\n        -webkit-animation-name: timerCountdownLocal;\n                animation-name: timerCountdownLocal;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards;\n        -webkit-animation-timing-function: linear;\n                animation-timing-function: linear;\n        -webkit-animation-iteration-count: 1;\n                animation-iteration-count: 1; }\n  div.iconWrap div.svgHolder svg.svg .globalAnimation {\n        -webkit-animation-name: timerCountdownGlobal;\n                animation-name: timerCountdownGlobal; }\n  div.activeAvatar {\n  border-color: #438a12 !important; }\n  @-webkit-keyframes timerCountdownLocal {\n  from {\n    stroke-dashoffset: 0; }\n  to {\n    stroke-dashoffset: 424px; } }\n  @keyframes timerCountdownLocal {\n  from {\n    stroke-dashoffset: 0; }\n  to {\n    stroke-dashoffset: 424px; } }\n  @-webkit-keyframes timerCountdownGlobal {\n  from {\n    stroke-dashoffset: 0; }\n  to {\n    stroke-dashoffset: 424px; } }\n  @keyframes timerCountdownGlobal {\n  from {\n    stroke-dashoffset: 0; }\n  to {\n    stroke-dashoffset: 424px; } }\n"

/***/ }),

/***/ "./src/app/components/timer/icon/icon.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/timer/icon/icon.component.ts ***!
  \*********************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_icon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/icon.service */ "./src/app/components/timer/icon/service/icon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let IconComponent = class IconComponent {
    constructor(iconService) {
        this.iconService = iconService;
        this.isActive = false;
        this.activeAvatar$ = this.iconService.getActiveAvatar$();
    }
    ngOnInit() {
    }
    onSelect() {
        if (this.viewState === 'avatarPreview') {
            this.activeAvatar$.next(this.avatar.index);
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _service_icon_service__WEBPACK_IMPORTED_MODULE_1__["Avatar"])
], IconComponent.prototype, "avatar", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], IconComponent.prototype, "isActive", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], IconComponent.prototype, "viewState", void 0);
IconComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-icon',
        template: __webpack_require__(/*! ./icon.component.html */ "./src/app/components/timer/icon/icon.component.html"),
        styles: [__webpack_require__(/*! ./icon.component.sass */ "./src/app/components/timer/icon/icon.component.sass")]
    }),
    __metadata("design:paramtypes", [_service_icon_service__WEBPACK_IMPORTED_MODULE_1__["IconService"]])
], IconComponent);



/***/ }),

/***/ "./src/app/components/timer/icon/icon.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/timer/icon/icon.module.ts ***!
  \******************************************************/
/*! exports provided: IconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconModule", function() { return IconModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.component */ "./src/app/components/timer/icon/icon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let IconModule = class IconModule {
};
IconModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ],
        exports: [_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]],
        declarations: [_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]],
        bootstrap: [_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"]],
    })
], IconModule);



/***/ }),

/***/ "./src/app/components/timer/icon/service/icon.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/timer/icon/service/icon.service.ts ***!
  \***************************************************************/
/*! exports provided: Avatar, IconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconService", function() { return IconService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


class Avatar {
    constructor(index, imageSrc) {
        this.index = index;
        this.imageSrc = imageSrc;
    }
}
let IconService = class IconService {
    constructor() {
        this.avatarListSize = 8;
        this.activeAvatar$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.avatarList = this.buildAvatarList();
    }
    buildAvatarList() {
        const avatarList = [];
        for (let i = 0; i < this.avatarListSize; i++) {
            const imageSrc = `/src/assets/img/${i}.jpg`;
            avatarList.push(new Avatar(i, imageSrc));
        }
        return avatarList;
    }
    fetchAvatarList() {
        return this.avatarList;
    }
    getActiveAvatar$() {
        return this.activeAvatar$;
    }
};
IconService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], IconService);



/***/ }),

/***/ "./src/app/components/timer/modal_avatarPicker/modal.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/timer/modal_avatarPicker/modal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fadeOut w-100scr h-100scr flexCenter\">\n\n  <div class=\"modalWrap flex jc-sb ai-center fDir-col\">\n\n    <div class=\"header w-100 flex jc-sb ai-center\">\n      <h2 class=\"title\">choose game avatar</h2>\n      <div class=\"btn closeBtn\" (click)=\"onClose()\">\n        &#215;\n      </div>\n    </div>\n\n    <div class=\"contentWrap w-100 flex jc-sa ai-center fDir-row fWrap-wrap\">\n      <app-icon\n        *ngFor=\"let avatar of avatarList\"\n        [avatar]=\"avatar\"\n        [isActive]=\"avatar.index === activeAvatarIndex\"\n        [viewState]=\"'avatarPreview'\"\n        >\n\n      </app-icon>\n    </div>\n\n    <div class=\"footer flexCenter w-100\">\n      <button class=\"saveBtn\" (click)=\"onSave()\">save</button>\n    </div>\n\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/timer/modal_avatarPicker/modal.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/components/timer/modal_avatarPicker/modal.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.fadeOut {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.2); }\n\ndiv.modalWrap {\n  height: 500px;\n  width: 700px;\n  background-color: #1f2128;\n  border-radius: 10px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); }\n\ndiv.header {\n  height: 50px;\n  padding-left: 10px;\n  padding-right: 10px; }\n\ndiv.header h2.title {\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 25px;\n    line-height: 30px; }\n\ndiv.header div.closeBtn {\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    background-color: red;\n    text-align: center;\n    font-size: 30px;\n    line-height: 26px; }\n\ndiv.contentWrap {\n  height: 350px;\n  background-color: #262830; }\n\ndiv.footer {\n  height: 100px; }\n\ndiv.footer button.saveBtn {\n    text-transform: uppercase;\n    width: 150px;\n    height: 40px;\n    border-radius: 30px;\n    background-image: linear-gradient(to bottom, #759c13, #438a12);\n    font-size: 20px;\n    line-height: 20px;\n    box-shadow: 0 1px 0 1px rgba(255, 255, 255, 0.2) inset, 0 3px 5px rgba(0, 1, 6, 0.5), 0 0 1px 1px rgba(0, 1, 6, 0.2) inset; }\n"

/***/ }),

/***/ "./src/app/components/timer/modal_avatarPicker/modal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/timer/modal_avatarPicker/modal.component.ts ***!
  \************************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _icon_service_icon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon/service/icon.service */ "./src/app/components/timer/icon/service/icon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ModalComponent = class ModalComponent {
    constructor(iconService) {
        this.iconService = iconService;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeAvatar$ = this.iconService.getActiveAvatar$();
    }
    ngOnInit() {
        this.activeAvatar$.subscribe((avatarIndex) => this.activeAvatarIndex = avatarIndex);
    }
    onSave() {
        this.save.emit(this.activeAvatarIndex);
        this.close.emit(false);
    }
    onClose() {
        this.close.emit(false);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], ModalComponent.prototype, "avatarList", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], ModalComponent.prototype, "save", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
], ModalComponent.prototype, "close", void 0);
ModalComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/timer/modal_avatarPicker/modal.component.html"),
        styles: [__webpack_require__(/*! ./modal.component.sass */ "./src/app/components/timer/modal_avatarPicker/modal.component.sass")]
    }),
    __metadata("design:paramtypes", [_icon_service_icon_service__WEBPACK_IMPORTED_MODULE_1__["IconService"]])
], ModalComponent);



/***/ }),

/***/ "./src/app/components/timer/modal_avatarPicker/modal.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/timer/modal_avatarPicker/modal.module.ts ***!
  \*********************************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component */ "./src/app/components/timer/modal_avatarPicker/modal.component.ts");
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon.module */ "./src/app/components/timer/icon/icon.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ModalModule = class ModalModule {
};
ModalModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _icon_icon_module__WEBPACK_IMPORTED_MODULE_3__["IconModule"],
        ],
        exports: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
        declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
        bootstrap: [_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]],
    })
], ModalModule);



/***/ }),

/***/ "./src/app/components/timer/timer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/timer/timer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timerWrap w-100scr h-100scr\">\n  <app-icon\n    [appTimer]= \"timerStates\"\n    [avatar]=\"avatar\"\n    [viewState]=\"'timerView'\"\n    (click)=\"isModalShown = true\"></app-icon>\n</div>\n\n\n<div class=\"modalWrap\" [@toggleModal]=\"modal\">\n\n  <app-modal\n\n    [avatarList]=\"avatarList\"\n    (save)=\"setNewAvatar($event)\"\n    (close)=\"onClose($event)\">\n\n  </app-modal>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/timer/timer.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/components/timer/timer.component.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timerWrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2; }\n\n.modalWrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: -1; }\n"

/***/ }),

/***/ "./src/app/components/timer/timer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/timer/timer.component.ts ***!
  \*****************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _icon_service_icon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon/service/icon.service */ "./src/app/components/timer/icon/service/icon.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let TimerComponent = class TimerComponent {
    constructor(iconService) {
        this.iconService = iconService;
        this.isModalShown = false;
        this.avatarList = this.iconService.fetchAvatarList();
        this.avatar = this.avatarList[0];
    }
    get modal() {
        return this.isModalShown ? 'show' : 'hide';
    }
    ngOnInit() {
        this.timerStates = {
            global: this.global,
            local: this.local
        };
    }
    setNewAvatar(avatarIndex) {
        this.avatar = this.avatarList[avatarIndex];
    }
    onClose(bool) {
        this.isModalShown = bool;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], TimerComponent.prototype, "global", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], TimerComponent.prototype, "local", void 0);
TimerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-timer',
        template: __webpack_require__(/*! ./timer.component.html */ "./src/app/components/timer/timer.component.html"),
        styles: [__webpack_require__(/*! ./timer.component.sass */ "./src/app/components/timer/timer.component.sass")],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('toggleModal', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 1,
                    zIndex: 999
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 0,
                    zIndex: -999
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in')),
            ]),
        ]
    }),
    __metadata("design:paramtypes", [_icon_service_icon_service__WEBPACK_IMPORTED_MODULE_1__["IconService"]])
], TimerComponent);



/***/ }),

/***/ "./src/app/components/timer/timer.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/timer/timer.directive.ts ***!
  \*****************************************************/
/*! exports provided: TimerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerDirective", function() { return TimerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let TimerDirective = class TimerDirective {
    constructor(el) {
        this.el = el;
        this.states = {
            local: 'local',
            global: 'global'
        };
        this.svg = document.createElement('svg');
        this.circle = document.createElement('circle');
    }
    ngOnInit() {
        this.rootElement = this.el.nativeElement.firstElementChild;
        this.svgHolder = this.rootElement.querySelector('.svgHolder');
        this.svg = this.svgHolder.querySelector('svg');
        this.circle = this.svg.firstElementChild;
        this.computedStyle = getComputedStyle(this.rootElement);
        this.svgCircleDia = parseFloat(this.computedStyle.height);
        this.svgRadius = (this.svgCircleDia - parseFloat(this.computedStyle['border-width']) * 2) / 2;
        this.circle.setAttribute('r', `${this.svgRadius - 5}`);
        this.circle.setAttribute('cx', `${this.svgRadius}`);
        this.circle.setAttribute('cy', `${this.svgRadius}`);
    }
    ngAfterViewInit() {
        this.setState(this.states.local);
        this.applyStateAnimation();
        this.switchState(this.states.global);
    }
    switchState(newState) {
        setTimeout(() => {
            this.circle.classList.remove(`${this.currentState}Animation`);
            this.setState(this.states[newState]);
            this.applyStateAnimation();
        }, this.timerValues[this.currentState].leftValue * 1000);
    }
    setState(newState) {
        return this.currentState = newState;
    }
    applyStateAnimation() {
        this.circle.classList.add(`${this.currentState}Animation`);
        this.circle.style.stroke = (this.currentState === this.states.local) ? '#438a12' : '#db5700';
        this.circle.style.animationDuration = `${this.timerValues[this.currentState].leftValue}s`;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appTimer'),
    __metadata("design:type", Object)
], TimerDirective.prototype, "timerValues", void 0);
TimerDirective = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[appTimer]'
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
], TimerDirective);



/***/ }),

/***/ "./src/app/components/timer/timer.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/timer/timer.module.ts ***!
  \**************************************************/
/*! exports provided: TimerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerModule", function() { return TimerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer.component */ "./src/app/components/timer/timer.component.ts");
/* harmony import */ var _timer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer.directive */ "./src/app/components/timer/timer.directive.ts");
/* harmony import */ var _icon_icon_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/icon.module */ "./src/app/components/timer/icon/icon.module.ts");
/* harmony import */ var _modal_avatarPicker_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal_avatarPicker/modal.module */ "./src/app/components/timer/modal_avatarPicker/modal.module.ts");
/* harmony import */ var _icon_service_icon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon/service/icon.service */ "./src/app/components/timer/icon/service/icon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let TimerModule = class TimerModule {
};
TimerModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _modal_avatarPicker_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"],
            _icon_icon_module__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
        ],
        exports: [_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"]],
        declarations: [_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"], _timer_directive__WEBPACK_IMPORTED_MODULE_4__["TimerDirective"]],
        providers: [_icon_service_icon_service__WEBPACK_IMPORTED_MODULE_7__["IconService"]],
        bootstrap: [_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"]],
    })
], TimerModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\CV\testTasks\Spribe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
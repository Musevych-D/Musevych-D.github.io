(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/shop/description/description.module": [
		"./src/app/components/shop/description/description.module.ts",
		"components-shop-description-description-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ava-header></ava-header>\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'test-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shop_shop_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shop/shop.module */ "./src/app/components/shop/shop.module.ts");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.module */ "./src/app/components/header/header.module.ts");
/* harmony import */ var _components_header_cart_cart_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/cart/cart.module */ "./src/app/components/header/cart/cart.module.ts");
/* harmony import */ var _components_header_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/cart/service/cart.service */ "./src/app/components/header/cart/service/cart.service.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/greeting/greeting.component */ "./src/app/components/greeting/greeting.component.ts");
/* harmony import */ var _shared_services_shop_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared-services/shop.service */ "./src/app/shared-services/shop.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _components_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_10__["GreetingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["routing"],
                _components_shop_shop_module__WEBPACK_IMPORTED_MODULE_4__["ShopModule"],
                _components_header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
                _components_header_cart_cart_module__WEBPACK_IMPORTED_MODULE_6__["CartModule"],
            ],
            providers: [_components_header_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"], _shared_services_shop_service__WEBPACK_IMPORTED_MODULE_11__["ShopService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_shop_category_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shop/category/category.component */ "./src/app/components/shop/category/category.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/greeting/greeting.component */ "./src/app/components/greeting/greeting.component.ts");
/* harmony import */ var _components_shop_all_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shop/all/all.component */ "./src/app/components/shop/all/all.component.ts");






var routes = [
    { path: '', component: _components_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_4__["GreetingComponent"] },
    {
        path: 'shop', component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_1__["ShopComponent"], children: [
            { path: '', pathMatch: 'full', redirectTo: 'all' },
            { path: 'all', component: _components_shop_all_all_component__WEBPACK_IMPORTED_MODULE_5__["AllComponent"] },
            // not using any components
            // module under loadChildren path would be loaded on demand. (can be checked in the network tab)
            { path: 'description', loadChildren: './components/shop/description/description.module' },
            { path: ':categoryId', component: _components_shop_category_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"] }
        ]
    },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/greeting/greeting.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/greeting/greeting.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"greeting\">\n\n  <div class=\"greeting__text\">\n    <p>This is a greeting page, press \"Shop\" button, it will lead to another view.</p>\n    <a [routerLink]=\"['/shop', 'all']\">Shop</a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/greeting/greeting.component.sass":
/*!*************************************************************!*\
  !*** ./src/app/components/greeting/greeting.component.sass ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".greeting {\n  padding: 20px; }\n  .greeting .greeting__text {\n    text-align: center; }\n  .greeting .greeting__text a {\n      font-size: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmVldGluZy9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHRlc3QtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxncmVldGluZ1xcZ3JlZXRpbmcuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhLEVBSWE7RUFMNUI7SUFHSSxtQkFBa0IsRUFFSTtFQUwxQjtNQUtNLGdCQUFlLEVBQUciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyZWV0aW5nL2dyZWV0aW5nLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWV0aW5nIHtcbiAgcGFkZGluZzogMjBweDtcbiAgLmdyZWV0aW5nX190ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYSB7XG4gICAgICBmb250LXNpemU6IDUwcHg7IH0gfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/greeting/greeting.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/greeting/greeting.component.ts ***!
  \***********************************************************/
/*! exports provided: GreetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreetingComponent", function() { return GreetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GreetingComponent = /** @class */ (function () {
    function GreetingComponent() {
    }
    GreetingComponent.prototype.ngOnInit = function () {
    };
    GreetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ava-greeting',
            template: __webpack_require__(/*! ./greeting.component.html */ "./src/app/components/greeting/greeting.component.html"),
            styles: [__webpack_require__(/*! ./greeting.component.sass */ "./src/app/components/greeting/greeting.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], GreetingComponent);
    return GreetingComponent;
}());



/***/ }),

/***/ "./src/app/components/header/cart/cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/header/cart/cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cart\">\n  <p>Cart</p>\n  <div class=\"cart__items\">\n    <p>Currently has <span>{{cart.products.length}}</span> products in.</p>\n  </div>\n  <div class=\"cart__total\">\n    <p>Total is: <span>{{cart.total}}</span>$</p>\n  </div>\n  <button\n    class=\"cart__clearButton\"\n    (click)=\"clearCart()\"\n  >\n    Clear Cart\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/cart/cart.component.sass":
/*!************************************************************!*\
  !*** ./src/app/components/header/cart/cart.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart {\n  position: relative; }\n  .cart .cart__items,\n  .cart .cart__total {\n    display: block; }\n  .cart .cart__clearButton {\n    position: absolute;\n    top: 0;\n    right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvY2FydC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHRlc3QtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0IsRUFRSDtFQVRqQjs7SUFJSSxlQUFjLEVBQUc7RUFKckI7SUFPSSxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFNBQVEsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2NhcnQvY2FydC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuY2FydF9faXRlbXMsXG4gIC5jYXJ0X190b3RhbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cblxuICAuY2FydF9fY2xlYXJCdXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7IH0gfVxuXG4vL2Rpc3BsYXk6IGlubGluZS1ibG9ja1xuIl19 */"

/***/ }),

/***/ "./src/app/components/header/cart/cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/header/cart/cart.component.ts ***!
  \**********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/cart.service */ "./src/app/components/header/cart/service/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart = this.cartService.getCartState();
        this.sub = this.cartService.getCart$().subscribe(function (cartState) {
            return _this.cart = cartState;
        }, function (err) {
            return console.log(err);
        });
    };
    CartComponent.prototype.ngOnDestroy = function () {
    };
    CartComponent.prototype.clearCart = function () {
        this.cartService.resetCartState();
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ava-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/components/header/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.sass */ "./src/app/components/header/cart/cart.component.sass")]
        }),
        __metadata("design:paramtypes", [_service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/components/header/cart/cart.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/cart/cart.module.ts ***!
  \*******************************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ "./src/app/components/header/cart/cart.component.ts");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/cart.service */ "./src/app/components/header/cart/service/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]],
            declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]],
            providers: [_service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]],
        })
    ], CartModule);
    return CartModule;
}());



/***/ }),

/***/ "./src/app/components/header/cart/service/cart.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/header/cart/service/cart.service.ts ***!
  \****************************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = /** @class */ (function () {
    function CartService() {
        this.cart$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.cartDefaultState = { products: [], total: 0 };
        this.resetCartState();
    }
    CartService.prototype.getCart$ = function () {
        return this.cart$;
    };
    CartService.prototype.getCartState = function () {
        return this.cartState;
    };
    CartService.prototype.addToCart = function (product) {
        this.updateCartState(product);
    };
    CartService.prototype.updateCartState = function (product) {
        this.cartState.products.push(product);
        this.cartState.total += +product.price;
    };
    CartService.prototype.resetCartState = function () {
        this.cartState = JSON.parse(JSON.stringify(this.cartDefaultState));
        this.cart$.next(this.cartState);
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"header__backLink\">\n    <a [routerLink]=\"['/']\">Back to main</a>\n  </div>\n  <div class=\"header__cartHolder\">\n    <ava-cart></ava-cart>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  line-height: 100px;\n  min-height: 100px; }\n  .header .header__backLink {\n    display: inline-block;\n    text-align: center;\n    width: 30%; }\n  .header .header__cartHolder {\n    display: inline-block;\n    text-align: left;\n    float: right;\n    width: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFx0ZXN0LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsa0JBQWlCLEVBU0E7RUFYbkI7SUFJSSxzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLFdBQVUsRUFBRztFQU5qQjtJQVFJLHNCQUFxQjtJQUNyQixpQkFBZ0I7SUFDaEIsYUFBWTtJQUNaLFdBQVUsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAuaGVhZGVyX19iYWNrTGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMzAlOyB9XG4gIC5oZWFkZXJfX2NhcnRIb2xkZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMzAlOyB9IH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ava-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/components/header/header.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.ts ***!
  \****************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.module */ "./src/app/components/header/cart/cart.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _cart_cart_module__WEBPACK_IMPORTED_MODULE_4__["CartModule"]],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
            bootstrap: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ava-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.sass */ "./src/app/components/not-found/not-found.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/all/all.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/shop/all/all.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all__products\" *ngIf=\"!selectedCategory\">\n  <ava-product *ngFor=\"let product of productList\" [product]=\"product\"></ava-product>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shop/all/all.component.sass":
/*!********************************************************!*\
  !*** ./src/app/components/shop/all/all.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all__products {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL2FsbC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHRlc3QtYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaG9wXFxhbGxcXGFsbC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixnQkFBZTtFQUNmLDhCQUE2QixFQUFHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG9wL2FsbC9hbGwuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxsX19wcm9kdWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/shop/all/all.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/shop/all/all.component.ts ***!
  \******************************************************/
/*! exports provided: AllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllComponent", function() { return AllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared-services/shop.service */ "./src/app/shared-services/shop.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllComponent = /** @class */ (function () {
    function AllComponent(productService) {
        this.productService = productService;
    }
    AllComponent.prototype.ngOnInit = function () {
        this.productList = this.productService.getProductListLocal();
    };
    AllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ava-all',
            template: __webpack_require__(/*! ./all.component.html */ "./src/app/components/shop/all/all.component.html"),
            styles: [__webpack_require__(/*! ./all.component.sass */ "./src/app/components/shop/all/all.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_services_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"]])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/category/category.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shop/category/category.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"category\" *ngIf=\"category\">\n  <div class=\"category__name\">\n    <p>{{category.id}}</p>\n  </div>\n  <div class=\"category__products\">\n    <ava-product *ngFor=\"let product of category.products\" [product]=\"product\"></ava-product>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shop/category/category.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/components/shop/category/category.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category .category__name {\n  text-align: center; }\n  .category .category__name p {\n    font-size: 50px; }\n  .category .category__products {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL2NhdGVnb3J5L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcdGVzdC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNob3BcXGNhdGVnb3J5XFxjYXRlZ29yeS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFrQixFQUVJO0VBSjFCO0lBSU0sZ0JBQWUsRUFBRztFQUp4QjtFQU1JLGNBQWE7RUFDYixnQkFBZTtFQUNmLDhCQUE2QixFQUFHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG9wL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5IHtcbiAgLmNhdGVnb3J5X19uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDUwcHg7IH0gfVxuICAuY2F0ZWdvcnlfX3Byb2R1Y3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/shop/category/category.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shop/category/category.component.ts ***!
  \****************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared-services/shop.service */ "./src/app/shared-services/shop.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(shopService, route) {
        this.shopService = shopService;
        this.route = route;
        this.category$ = this.shopService.getSelectedCategory$();
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (param) {
            _this.category = _this.shopService.getCategory(param['categoryId']);
            _this.category$.next(param['categoryId']);
        }, function (err) {
            console.log(err);
        });
    };
    CategoryComponent.prototype.ngOnDestroy = function () {
        this.category$.next('');
        this.sub.unsubscribe();
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ava-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/components/shop/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.sass */ "./src/app/components/shop/category/category.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_services_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/category/category.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/shop/category/category.module.ts ***!
  \*************************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.component */ "./src/app/components/shop/category/category.component.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/product.module */ "./src/app/components/shop/product/product.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_3__["ProductModule"]],
            exports: [_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"]],
            declarations: [_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"]],
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ }),

/***/ "./src/app/components/shop/product/product.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shop/product/product.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product\">\n  <div class=\"product__picture\">\n    <img src=\"/assets/img/{{product.imgSrc}}.jpg\" alt=\"\">\n  </div>\n\n  <div class=\"product__id\">\n    <p>Product #{{product.id}}</p>\n  </div>\n  <div class=\"product__category\">\n    <p>{{product.category}}</p>\n  </div>\n  <div class=\"product__price\">\n    <p>Price: {{product.price}}$</p>\n  </div>\n\n  <ng-container></ng-container>\n  <button\n    class=\"product__btn\"\n    (click)=\"addToCart(product)\"\n  >\n    Add to cart\n  </button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/shop/product/product.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/components/shop/product/product.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product {\n  margin: 10px 10px;\n  width: 130px;\n  height: 160px;\n  padding: 0px 10px;\n  display: inline-block;\n  border: 2px solid orange;\n  text-align: center; }\n  .product .product__id,\n  .product .product__category,\n  .product .product__price {\n    text-align: center; }\n  .product .product__picture {\n    width: 100%;\n    height: 50px;\n    -o-object-fit: scale-down;\n       object-fit: scale-down; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Byb2R1Y3QvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFx0ZXN0LWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hvcFxccHJvZHVjdFxccHJvZHVjdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osY0FBYTtFQUNiLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIseUJBQXdCO0VBQ3hCLG1CQUFrQixFQVFXO0VBZi9COzs7SUFXSSxtQkFBa0IsRUFBRztFQVh6QjtJQWFJLFlBQVc7SUFDWCxhQUFZO0lBQ1osMEJBQXNCO09BQXRCLHVCQUFzQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0IHtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC5wcm9kdWN0X19pZCxcbiAgLnByb2R1Y3RfX2NhdGVnb3J5LFxuICAucHJvZHVjdF9fcHJpY2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAucHJvZHVjdF9fcGljdHVyZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247IH0gfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/shop/product/product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shop/product/product.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared-services/shop.service */ "./src/app/shared-services/shop.service.ts");
/* harmony import */ var _header_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../header/cart/service/cart.service */ "./src/app/components/header/cart/service/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = /** @class */ (function () {
    function ProductComponent(cartService) {
        this.cartService = cartService;
        this.isAddedToCart = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.addToCart = function (product) {
        this.isAddedToCart = true;
        this.cartService.addToCart(product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_services_shop_service__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ProductComponent.prototype, "product", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ava-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/shop/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.sass */ "./src/app/components/shop/product/product.component.sass")]
        }),
        __metadata("design:paramtypes", [_header_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/product/product.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/shop/product/product.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "./src/app/components/shop/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
            declarations: [_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/components/shop/shop.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/shop/shop.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shop\">\n\n  <p>This is a Shop view</p>\n\n  <ng-container *ngIf=\"categoryList\">\n    <div class=\"shop__categoryTabs\">\n\n      <span>\n          Sort by categories:\n      </span>\n\n      <div\n        class=\"shop__categoryTab\"\n        *ngFor=\"let category of categoryList\"\n      >\n\n        <a\n          [routerLink]=\"['./', category.id]\"\n          [class.shop__categoryTab-disabled]=\"selectedCategory !== category.id\"\n          [class.shop__categoryTab-active]=\"selectedCategory === category.id\"\n          (click)=\"onCategorySelect(category.id)\"\n        >\n          {{category.id}}\n        </a>\n\n      </div>\n\n      <button (click)=\"backToShop()\">Back to shop</button>\n\n    </div>\n  </ng-container>\n\n  <router-outlet></router-outlet>\n\n  <a [routerLink]=\"['/shop', 'description']\">To description (Lazy loaded module)</a>\n\n\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/shop/shop.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/shop/shop.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shop {\n  text-align: center; }\n  .shop p {\n    font-size: 50px; }\n  .shop .shop__categoryTabs {\n    text-align: center; }\n  .shop .shop__categoryTabs .shop__categoryTab {\n      padding: 15px 5px;\n      display: inline-block; }\n  .shop .shop__categoryTabs .shop__categoryTab-active {\n      color: green; }\n  .shop .shop__categoryTabs .shop__categoryTab-disabled {\n      color: darkred; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcdGVzdC1hcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNob3BcXHNob3AuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxtQkFBa0IsRUFXTztFQVozQjtJQUdJLGdCQUFlLEVBQUc7RUFIdEI7SUFLSSxtQkFBa0IsRUFPRztFQVp6QjtNQU9NLGtCQUFpQjtNQUNqQixzQkFBcUIsRUFBRztFQVI5QjtNQVVNLGFBQVksRUFBRztFQVZyQjtNQVlNLGVBQWMsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9zaG9wLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2hvcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcCB7XG4gICAgZm9udC1zaXplOiA1MHB4OyB9XG4gIC5zaG9wX19jYXRlZ29yeVRhYnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAuc2hvcF9fY2F0ZWdvcnlUYWIge1xuICAgICAgcGFkZGluZzogMTVweCA1cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAuc2hvcF9fY2F0ZWdvcnlUYWItYWN0aXZlIHtcbiAgICAgIGNvbG9yOiBncmVlbjsgfVxuICAgIC5zaG9wX19jYXRlZ29yeVRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogZGFya3JlZDsgfSB9IH1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/shop/shop.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/shop/shop.component.ts ***!
  \***************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared-services/shop.service */ "./src/app/shared-services/shop.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopComponent = /** @class */ (function () {
    function ShopComponent(shopService, router) {
        this.shopService = shopService;
        this.router = router;
        this.selectedCategory = '';
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.categoryList = this.shopService.getCategoriesList();
        this.selectedCategory$ = this.shopService.getSelectedCategory$();
    };
    ShopComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sub = this.selectedCategory$.subscribe(function (categoryId) {
            _this.activateTab(categoryId);
        }, function (err) {
            return console.log(err);
        });
    };
    ShopComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ShopComponent.prototype.onCategorySelect = function (category) {
        this.selectedCategory$.next(category);
    };
    ShopComponent.prototype.activateTab = function (category) {
        return this.selectedCategory = category;
    };
    ShopComponent.prototype.backToShop = function () {
        this.router.navigate(['/shop', 'all']);
        this.selectedCategory = '';
    };
    ShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ava-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/components/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.sass */ "./src/app/components/shop/shop.component.sass")]
        }),
        __metadata("design:paramtypes", [_shared_services_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/components/shop/shop.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/shop/shop.module.ts ***!
  \************************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _category_category_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/category.module */ "./src/app/components/shop/category/category.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.module */ "./src/app/components/shop/product/product.module.ts");
/* harmony import */ var _all_all_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all/all.component */ "./src/app/components/shop/all/all.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ShopModule = /** @class */ (function () {
    function ShopModule() {
    }
    ShopModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _category_category_module__WEBPACK_IMPORTED_MODULE_3__["CategoryModule"], _product_product_module__WEBPACK_IMPORTED_MODULE_5__["ProductModule"]],
            exports: [_shop_component__WEBPACK_IMPORTED_MODULE_2__["ShopComponent"]],
            declarations: [_shop_component__WEBPACK_IMPORTED_MODULE_2__["ShopComponent"], _all_all_component__WEBPACK_IMPORTED_MODULE_6__["AllComponent"]],
        })
    ], ShopModule);
    return ShopModule;
}());



/***/ }),

/***/ "./src/app/shared-services/shop.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared-services/shop.service.ts ***!
  \*************************************************/
/*! exports provided: Product, ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Product = /** @class */ (function () {
    function Product(id, category, price, imgSrc) {
        this.id = id;
        this.category = category;
        this.price = price;
        this.imgSrc = imgSrc;
    }
    return Product;
}());

var ShopService = /** @class */ (function () {
    function ShopService() {
        this.selectedCategory$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.productList = this.getProductListRemote(30);
        this.categoryList = this.setCategoriesList(this.productList);
    }
    ShopService.prototype.getSelectedCategory$ = function () {
        return this.selectedCategory$;
    };
    ShopService.prototype.getCategory = function (categoryId) {
        return this.categoryList.find(function (category) {
            return category.id === categoryId;
        });
    };
    ShopService.prototype.getCategoriesList = function () {
        return this.categoryList;
    };
    ShopService.prototype.setCategoriesList = function (productList) {
        return this.sortProductsByCategory(productList);
    };
    ShopService.prototype.getProductListLocal = function () {
        return this.productList;
    };
    ShopService.prototype.getProductListRemote = function (quantity) {
        return this.fetchProductListImitation(quantity);
    };
    ShopService.prototype.fetchProductListImitation = function (quantity) {
        var arr = [];
        for (var index = 1; index <= quantity; index++) {
            var categoryId = Math.ceil(index / 10);
            var price = (Math.floor(Math.random() * (index * 2 - 1 + 1) + 1)).toFixed();
            arr.push(new Product("" + index, "category" + categoryId, price, categoryId));
        }
        return arr;
    };
    ShopService.prototype.sortProductsByCategory = function (productList) {
        var obj = {};
        var arr = [];
        productList.forEach(function (product) {
            if (!obj[product.category]) {
                obj[product.category] = [];
            }
            obj[product.category].push(product);
        });
        for (var categoryId in obj) {
            arr.push({ id: categoryId, products: obj[categoryId] });
        }
        return arr;
    };
    ShopService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ShopService);
    return ShopService;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\test-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
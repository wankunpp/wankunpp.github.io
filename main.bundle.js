webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".bg-overlay{\n    background: url('port03.3c00d9b82be4f801c7c6.jpg') fixed;\n    background-size:cover;\n    position: relative;\n    min-height:500px;\n    \n}\n\n\n\n.overlay{\n    background-color: rgba(0,0,0,0.67);\n    min-height:500px;\n}\n\n\n\n.wrapper-message{\n    color: white;\n    position: absolute;\n    left: 0;\n    top: 40%;\n    width: 100%;\n    text-align: center;\n    font-size: 50px;\n}\n\n\n\nsection {\n\tposition: relative;\n}\n\n\n\nhr{\n    margin-top:50px;\n    margin-bottom: 50px;\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-overlay\">\n    <div class=\"overlay\">\n        <div class=\"row justify-content-md-center\">\n            <div class=\"wrapper-message\">\n                <h1>Beauty</h1>\n            </div>\n        </div>\n    </div>\n</section>\n<hr/>\n<div class= \"container \" >\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <p><img style=\"padding-right: 40px;\" src=\"../assets/img/image_123986672.JPG\" alt=\"\" width=\"400\" align=\"left\" /></p>\n        \n            <h6>About Lareina: </h6><br><br>\n            <p>A veritable artist whose calling is to reveal the sparkle and inner glow in everyone, Jasmine Hoffman is an expert of her trade. With more than 16 years experience and an impressive resume, having worked with celebrities such as Katy Perry, Halle Berry, Selma Blair, Jessica Alba, Kelly Osbourne, Jessi Cruickshank from MTV Canada, Amanda Bines and Bif Naked.</p><br>\n            <p>Jasmine&#8217;s acclaim comes, in part, from her unique ability to highlight the most spectacular features of each client to reveal their beautiful selves. She loves making brides feel gorgeous for the most important day of their lives, including for destination weddings anywhere in the world. Jasmine is highly skilled in makeup application for graduates, film, TV, fashion shoots and special occasions. She discovered her love for makeup and skin care early in life, then graduated from the Vancouver Film School for television and film in 2000, where she honed her skills into a personal masterpiece.</p><br>\n            <p>Since then, Jasmine has worked on countless projects, including the most glamorous weddings and elite photoshoots. Her exquisite work has been published by well-respected blogs and wedding magazines around the world. She uses only the highest-quality beauty products on the market, such as Shu Uemura, Makeup Forever, MAC and Stila, for a flawlessly beautiful look, every time. Whether it&#8217;s for a wedding, a boudoir photoshoot or just a girls&#8217; night out, Jasmine&#8217;s consistently creates a positively breathtaking image. Her studio is located in the fabulous Yaletown neighborhood of Vancouver, Canada.</p><br>\n            <p>Jasmine&#8217;s true makeup artistry will make you sparkle, inside and out!</p>\n            \n        </div>\n        </div>\n</div>\n\n    "

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_component__ = __webpack_require__("./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_cosmetics_cosmetics_component__ = __webpack_require__("./src/app/services/cosmetics/cosmetics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_cosmetics_cosme_detail_cosme_detail_component__ = __webpack_require__("./src/app/services/cosmetics/cosme-detail/cosme-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_register_register_component__ = __webpack_require__("./src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_guard_service__ = __webpack_require__("./src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_service_component__ = __webpack_require__("./src/app/services/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__makeup_makeup_component__ = __webpack_require__("./src/app/makeup/makeup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'makeup', component: __WEBPACK_IMPORTED_MODULE_13__makeup_makeup_component__["a" /* MakeupComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_12__services_service_component__["a" /* ServicesComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__["a" /* LoginComponent */], },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'cosmetics', component: __WEBPACK_IMPORTED_MODULE_7__services_cosmetics_cosmetics_component__["a" /* CosmeticsComponent */] },
    { path: 'cosmetics/:name', component: __WEBPACK_IMPORTED_MODULE_8__services_cosmetics_cosme_detail_cosme_detail_component__["a" /* CosmeDetailComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__auth_register_register_component__["a" /* RegisterComponent */] },
    { path: 'shopping-cart', component: __WEBPACK_IMPORTED_MODULE_11__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_auth_guard_service__["a" /* AuthGuard */]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */].forRoot(appRoutes),],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".content{\n    min-height: calc(100vh - 100px);\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- navbar -->\n<app-header></app-header>\n\n<app-alert></app-alert>\n\n<div class=\"content\">\n\n    <router-outlet></router-outlet>\n</div>\n\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (event) {
            window.scroll(0, 0);
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__portfolio_portfolio_component__ = __webpack_require__("./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_service_component__ = __webpack_require__("./src/app/services/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_cosmetics_cosmetics_component__ = __webpack_require__("./src/app/services/cosmetics/cosmetics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_cosmetics_cosme_detail_cosme_detail_component__ = __webpack_require__("./src/app/services/cosmetics/cosme-detail/cosme-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_register_register_component__ = __webpack_require__("./src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_alert_alert_component__ = __webpack_require__("./src/app/auth/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_carousel__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_cosmetics_cosmetics_services__ = __webpack_require__("./src/app/services/cosmetics/cosmetics.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__auth_user_user_service__ = __webpack_require__("./src/app/auth/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__auth_alert_alert_service__ = __webpack_require__("./src/app/auth/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__auth_authentication_service__ = __webpack_require__("./src/app/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_data_cart_service__ = __webpack_require__("./src/app/shared-data/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_data_appointment_service__ = __webpack_require__("./src/app/shared-data/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__auth_auth_guard_service__ = __webpack_require__("./src/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__makeup_makeup_component__ = __webpack_require__("./src/app/makeup/makeup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_cosmetics_filter_pipe__ = __webpack_require__("./src/app/services/cosmetics/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_31__makeup_makeup_component__["a" /* MakeupComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__services_cosmetics_cosmetics_component__["a" /* CosmeticsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__services_cosmetics_cosme_detail_cosme_detail_component__["a" /* CosmeDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_17__auth_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_16__auth_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_30__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_13__services_service_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_31__makeup_makeup_component__["a" /* MakeupComponent */],
                __WEBPACK_IMPORTED_MODULE_32__services_cosmetics_filter_pipe__["a" /* filterPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_20__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyB1WkwOaj1w7_KPBS640_8R99UVThmjDu0'
                }),
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_23__services_cosmetics_cosmetics_services__["a" /* CosmeticsService */],
                __WEBPACK_IMPORTED_MODULE_24__auth_user_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_25__auth_alert_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_26__auth_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_29__auth_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_27__shared_data_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_28__shared_data_appointment_service__["a" /* AppointmentSerivce */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/alert/alert.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{'alert':message, 'alert-success':message.type ==='success', 'alert-danger':message.type === 'alert','alert-error':message.type==='error'}\">{{message.text}}</div>\n"

/***/ }),

/***/ "./src/app/auth/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_service__ = __webpack_require__("./src/app/auth/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alert',
            template: __webpack_require__("./src/app/auth/alert/alert.component.html"),
            styles: [__webpack_require__("./src/app/auth/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/auth/alert/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.alertChanged = false;
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                if (_this.alertChanged) {
                    _this.alertChanged = false;
                }
                else {
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, alertChanged) {
        if (alertChanged === void 0) { alertChanged = false; }
        this.alertChanged = alertChanged;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, alertChanged) {
        if (alertChanged === void 0) { alertChanged = false; }
        this.alertChanged = alertChanged;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/auth/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated().then(function (authenticated) {
            if (authenticated) {
                return true;
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_model__ = __webpack_require__("./src/app/auth/user/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
        this.loggedIn = false;
        this.StatusChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.activeUser = new __WEBPACK_IMPORTED_MODULE_2__user_user_model__["a" /* User */](0, '', '');
        this.UserChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    AuthenticationService.prototype.isAuthenticated = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.loggedIn);
            }, 800);
        });
        return promise;
    };
    AuthenticationService.prototype.login = function () {
        this.loggedIn = true;
        this.StatusChanged.next(this.loggedIn);
    };
    AuthenticationService.prototype.logout = function () {
        this.loggedIn = false;
        this.StatusChanged.next(this.loggedIn);
    };
    AuthenticationService.prototype.setActiveUser = function (user) {
        this.activeUser = user;
        this.UserChanged.next(this.activeUser);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"padding:5em\">\n  <span *ngIf=\"loginFail\" style=\"color: red\">Username or Password is Wrong!</span>\n    <div class=\"col-md-6 col-md-offset-3\">\n        <h2>Login</h2>\n        <form name=\"form\" (ngSubmit)=\" login()\" #f=\"ngForm\" >\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" class=\"form-control\" name=\"username\" ngModel required #username=\"ngModel\"/>\n                <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n            </div>\n            <div class=\"form-group\" >\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" ngModel required #password=\"ngModel\" />\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\" >Login</button>\n                <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n            </div>\n        </form>\n    </div>\n      <h1>User List</h1>\n<table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">ID</th>\n        <th scope=\"col\">Username</th>\n        <th scope=\"col\">Password</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let user of users\" >\n      <tr>\n        <th scope=\"row\">{{user.id}}</th>\n        <td>{{user.username}}</td>\n        <td>{{user.password}}</td>\n      \n      </tr>\n      </tbody>\n    </table>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__("./src/app/auth/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_model__ = __webpack_require__("./src/app/auth/user/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_service__ = __webpack_require__("./src/app/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alert_alert_service__ = __webpack_require__("./src/app/auth/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, userService, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loginFail = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.userService.getUsers();
        this.userService.usersChanged.subscribe(function (users) {
            _this.users = users;
        });
    };
    LoginComponent.prototype.login = function () {
        var username = this.form.value['username'];
        var password = this.form.value['password'];
        if (this.users.find(function (user) { return user.username === username && user.password === password; })) {
            this.loginFail = false;
            this.authenticationService.login();
            this.authenticationService.setActiveUser(new __WEBPACK_IMPORTED_MODULE_4__user_user_model__["a" /* User */](0, username, password));
            this.authenticationService.StatusChanged.next(this.authenticationService.loggedIn);
            this.router.navigate(['/']);
        }
        else {
            this.loginFail = true;
        }
        console.log(this.authenticationService.loggedIn);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NgForm */])
    ], LoginComponent.prototype, "form", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_6__alert_alert_service__["a" /* AlertService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"padding:5em\">\n  <span *ngIf=\"hasUser\" style=\"color:red\"> this username is already exit</span>\n  <div class=\"col-md-6 col-md-offset-3\">\n      <h2>Register</h2>\n      <form name=\"form\" (ngSubmit)=\"register(f)\" #f=\"ngForm\" >\n          <div class=\"form-group\">\n              <label for=\"username\">Username</label>\n              <input type=\"text\" class=\"form-control\" name=\"username\" ngModel required #username=\"ngModel\"/>\n              <div *ngIf=\"!username.valid &&username.touched\" class=\"help-block\" style=\"color:red\">Username is required</div>\n          </div>\n          <div class=\"form-group\" >\n              <label for=\"password\">Password</label>\n              <input type=\"password\" class=\"form-control\" name=\"password\" ngModel required  #password=\"ngModel\"/>\n              <div *ngIf=\"!password.valid && password.touched\" class=\"help-block\" style=\"color:red\">Password is required</div>\n          </div>\n          <div class=\"form-group\">\n              <button type=\"submit\" [disabled]=\"!f.valid\" class=\"btn btn-primary\">Register</button>\n              <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n          </div>\n      </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("./src/app/auth/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_model__ = __webpack_require__("./src/app/auth/user/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.hasUser = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var username = this.form.value['username'];
        var password = this.form.value['password'];
        if (this.userService.getUsers().find(function (user) { return user.username === username; })) {
            this.hasUser = true;
        }
        else {
            var id = this.userService.getUsers().length + 1;
            this.userService.addUser(new __WEBPACK_IMPORTED_MODULE_4__user_user_model__["a" /* User */](id, username, password));
            this.router.navigate(['/login']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* NgForm */])
    ], RegisterComponent.prototype, "form", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__("./src/app/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/user/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/auth/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");

var UserService = /** @class */ (function () {
    function UserService() {
        this.usersChanged = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.users = [
            { id: 1, username: 'www', password: '111' },
            { id: 2, username: 'qqq', password: '111' },
            { id: 3, username: 'zzz', password: '111' },
        ];
    }
    UserService.prototype.getUsers = function () {
        return this.users.slice();
    };
    UserService.prototype.addUser = function (user) {
        this.users.push(user);
        this.usersChanged.next(this.users.slice());
    };
    return UserService;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".contact-section{\n    background-color: #f0f1e9;\n}\n\n\nagm-map{\n    height:300px;\n    padding:20px;\n    \n}\n\n\n.contact-form{\n    padding-left: 30px;\n}\n\n\ninput{\n    border:none;\n    border-bottom: solid 2px;\n    width: 80%;\n    display:block;\n    background: transparent;\n    font-family: Poppins-SemiBold;\n    font-size: 20px;\n    color:#555555;\n    line-height:1;\n    padding:10px 0 0 0;\n}\n\n\ntextarea{\n    display:block;\n    background: transparent;\n    font-family: Poppins-SemiBold;\n    font-size: 20px;\n}\n\n\n.send-button{\n    margin-top:20px;\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\" class=\"contact-section\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6\">\n              <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"15\">\n                  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map>\n          </div>\n          <div class= \"col-md-6 col-sm-6 contact-form\">\n              <h2>Contact us</h2>\n              <form id=\"contac-form\" [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <label for=\"name\">Name</label>\n                        <input type=\"text\" class=\"form-control\" name=\"name\" formControlName=\"name\" >\n                        <p *ngIf=\"!contactForm.get('name').valid && contactForm.get('name').touched\" style=\"color:red\"> Please input valid name </p>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <label for=\"phone\">Phone Number</label>\n                        <input type=\"text\" class=\"form-control\" name=\"phone\" formControlName=\"phone\">\n                        <p *ngIf=\"!contactForm.get('phone').valid && contactForm.get('phone').touched\" style=\"color:red\"> Please input valid phone number </p>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <label for=\"name\">email</label>\n                            <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\">\n                            <p *ngIf=\"!contactForm.get('email').valid && contactForm.get('email').touched\" style=\"color:red\"> Please input valid email address </p>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <label for=\"name\">Message</label>\n                            <textarea type=\"text\" class=\"form-control\" name=\"message\" formControlName=\"message\"></textarea>\n                            <p *ngIf=\"!contactForm.get('message').valid && contactForm.get('message').touched\" style=\"color:red\"> Please leave your meaasge to us </p>\n                        </div>\n                     </div>\n                  <button type=\"submit\" class=\"btn btn-secondary send-button\" [disabled]=\"!contactForm.valid\">Send message</button>\n              </form>\n          </div>\n      </div>\n      \n      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.lat = 45.4935009;
        this.lng = -73.5798465;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ContactComponent.prototype.initForm = function () {
        this.contactForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("Kun Wang", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("5146544093", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("wangkunpp@gmail.com", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'message': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]("test", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
        });
    };
    ContactComponent.prototype.onSubmit = function () {
        console.log(this.contactForm);
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer-distributed{\n\tbackground-color: #292c2f;\n\t-webkit-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n\t        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\twidth: 100%;\n\ttext-align: left;\n\tfont: bold 16px sans-serif;\n\tposition: relative;\n\tpadding: 55px 50px;\n\tmargin-top: 0px;\n\tbottom: 0;\n\t\n}\n\n.footer-distributed .footer-left,\n.footer-distributed .footer-center,\n.footer-distributed .footer-right{\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n\n/* Footer left */\n\n.footer-distributed .footer-left{\n\twidth: 40%;\n}\n\n/* The company logo */\n\n.footer-distributed h3{\n\tcolor:  #ffffff;\n\tfont: normal 36px 'Cookie', cursive;\n\tmargin: 0;\n}\n\n.footer-distributed h3 span{\n\tcolor:  #5383d3;\n}\n\n/* Footer links */\n\n.footer-distributed .footer-links{\n\tcolor:  #ffffff;\n\tmargin: 20px 0 12px;\n\tpadding: 0;\n}\n\n.footer-distributed .footer-links a{\n\tdisplay:inline-block;\n\tline-height: 1.8;\n\ttext-decoration: none;\n\tcolor:  inherit;\n}\n\n.footer-distributed .footer-company-name{\n\tcolor:  #8f9296;\n\tfont-size: 14px;\n\tfont-weight: normal;\n\tmargin: 0;\n}\n\n/* Footer Center */\n\n.footer-distributed .footer-center{\n\twidth: 35%;\n}\n\n.footer-distributed .footer-center i{\n\tbackground-color:  #33383b;\n\tcolor: #ffffff;\n\tfont-size: 25px;\n\twidth: 38px;\n\theight: 38px;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tline-height: 42px;\n\tmargin: 10px 15px;\n\tvertical-align: middle;\n}\n\n.footer-distributed .footer-center i.fa-envelope{\n\tfont-size: 17px;\n\tline-height: 38px;\n}\n\n.footer-distributed .footer-center p{\n\tdisplay: inline-block;\n\tcolor: #ffffff;\n\tvertical-align: middle;\n\tmargin:0;\n}\n\n.footer-distributed .footer-center p span{\n\tdisplay:block;\n\tfont-weight: normal;\n\tfont-size:14px;\n\tline-height:2;\n}\n\n.footer-distributed .footer-center p a{\n\tcolor:  #5383d3;\n\ttext-decoration: none;;\n}\n\n/* Footer Right */\n\n.footer-distributed .footer-right{\n\twidth: 20%;\n}\n\n.footer-distributed .footer-company-about{\n\tline-height: 20px;\n\tcolor:  #92999f;\n\tfont-size: 13px;\n\tfont-weight: normal;\n\tmargin: 0;\n}\n\n.footer-distributed .footer-company-about span{\n\tdisplay: block;\n\tcolor:  #ffffff;\n\tfont-size: 14px;\n\tfont-weight: bold;\n\tmargin-bottom: 20px;\n}\n\n.footer-distributed .footer-icons{\n\tmargin-top: 25px;\n}\n\n.footer-distributed .footer-icons a{\n\tdisplay: inline-block;\n\twidth: 35px;\n\theight: 35px;\n\tcursor: pointer;\n\tbackground-color:  #33383b;\n\tborder-radius: 2px;\n\n\tfont-size: 20px;\n\tcolor: #ffffff;\n\ttext-align: center;\n\tline-height: 35px;\n\n\tmargin-right: 3px;\n\tmargin-bottom: 5px;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-distributed \">\n\n  <div class=\"footer-left\">\n\n    <h3>Company\n      <span>logo</span>\n    </h3>\n\n    <p class=\"footer-links\">\n      <a href=\"#\">Home</a>\n      ·\n      <a href=\"#\">Blog</a>\n      ·\n      <a href=\"#\">Pricing</a>\n      ·\n      <a href=\"#\">About</a>\n      ·\n      <a href=\"#\">Faq</a>\n      ·\n      <a href=\"#\">Contact</a>\n    </p>\n\n    <p class=\"footer-company-name\">Company Name &copy; 2015</p>\n  </div>\n\n  <div class=\"footer-center\">\n\n    <div>\n      <i class=\"fa fa-map-marker\"></i>\n      <p>1821a Saint-Catherine St W,\n        <br> Montreal, QC\n        <br>H3H 1M2</p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-phone\"></i>\n      <p>+1 5146544093</p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-envelope\"></i>\n      <p>\n        <a href=\"\">lareinamakeup.com</a>\n      </p>\n    </div>\n\n  </div>\n\n  <div class=\"footer-right\">\n\n    <p class=\"footer-company-about\">\n      <span>About the company</span>\n      larina lolor lvziyan\n    </p>\n\n    <div class=\"footer-icons\">\n\n      <a href=\"#\">\n        <i class=\"fa fa-facebook\"></i>\n      </a>\n      <a href=\"#\">\n        <i class=\"fa fa-twitter\"></i>\n      </a>\n      <a href=\"#\">\n        <i class=\"fa fa-linkedin\"></i>\n      </a>\n      <a href=\"#\">\n        <i class=\"fa fa-github\"></i>\n      </a>\n\n    </div>\n\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "/* .header{\n    background: url('../../assets/img/bg-banner03.jpg') no-repeat fixed;\n    background-size: cover;\n    min-height: 630px;\n    position: relative;\n}\n\n.bg-color{\n    \n    background-color:rgba(0,0,0,0.67);\n    min-height:650px;\n} */\n/* \n.navbar{\n    background-color:black;\n    border: 0px;\n    padding:10px 0;\n    transition: all 0.3s;\n}\n\n.navbar-brand{\n    font-size:30px;\n    font-family: 'Satisfy',cursive;\n    margin: 0 0 0 150px;\n}\n\n.navbar-nav{\n    margin: 0 150px 0 0 ;\n}\n\n.nav-item{\n    margin-right: 20px;\n}\n\n.nav-item>a{\n    font-size:14px;\n    font-weight: 400;\n    color:#fff;\n    outline:none;\n}\n\n.nav-item>a:hover, .nav-item>a:focus{\n    color:#bfd159;\n    background-color: transparent;\n} */\nheader{\n    padding-bottom: 5em;\n    background-size: cover;\n    \n}\nnav .navbar-brand{\n    font-size:30px;\n    font-family: Arial, Helvetica, sans-serif;\n    padding-left: 100px;\n    \n}\nnav > ul li a{\n    padding-bottom: 5px;\n    color:#000;\n    position: relative;\n    font-weight: 400;\n}\n#dropdown-menu-services{\n    text-decoration: none;\n}\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <div class=\"bg-color\">\n        <header id=\"main-header\">\n            <nav class=\"navbar navbar-expand-sm  navbar-light  fixed-top\" [ngStyle]=\"{backgroundColor:checkScroll()}\">\n                <a class=\"navbar-brand\" routerLink=\"\">Lareina Studio </a>\n                <ul class=\"navbar-nav mx-auto \">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/\" routerActive=\"active\">Welcome</a>\n                    </li>\n                    <li class=\"nav-item\" >\n                        <a class=\"nav-link\" routerLink=\"about\" routerActive=\"active\">About</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"portfolio\" routerActive=\"active\">Portfolio</a>\n                    </li>\n                    <!-- <li class=\"nav-item dropdown\" (mouseenter)=\"onMouseenter()\" >\n                        <a class=\"nav-link\" style=\"cursor:pointer;\">Services</a>\n                                <ul class=\"dropdown-menu\" [style.display]=\"isshow===true?'block':'none'\" (mouseleave)=\"onMouseleave()\">\n                                        <li>\n                                            <a class=\"nav-link dropdown-item\" routerLink=\"/rates\">Makeup</a>\n                                            <a class=\"nav-link dropdown-item\" routerLink=\"/cosmetics\">Cosmetics</a>\n                                            <a class=\"nav-link dropdown-item\" href=\"#\">Cakes</a>\n                                        </li>\n                                    </ul>\n                    </li> -->\n                    <li class=\"nav-item dropdown\" id=\"dropdown-services\"   >\n                            <a class=\"nav-link\" style=\"cursor:pointer;\" routerLink=\"services\" routerActive=\"active\">Services</a>\n                                    <ul class=\"dropdown-menu\" id=\"dropdown-menu-services\"  >\n                                            <li>\n                                                <a class=\"nav-link dropdown-item\" routerLink=\"/makeup\">Makeup</a>\n                                                <a class=\"nav-link dropdown-item\" routerLink=\"/cosmetics\">Cosmetics</a>\n                                                <a class=\"nav-link dropdown-item\" href=\"#\">Cakes</a>\n                                            </li>\n                                        </ul>\n                        </li>\n                  \n                \n\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"contact\" routerActive=\"active\">Contact</a>\n                    </li>\n\n                </ul>\n                <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item\"  *ngIf=\"!isLoggin\">\n                                <a class=\"nav-link\" routerLink=\"register\" routerActive=\"active\">Signup</a>\n                            </li>\n                    <li class=\"nav-item\"  *ngIf=\"!isLoggin\">\n                        <a class=\"nav-link\" routerLink=\"login\" routerActive=\"active\">login</a>\n                    </li>\n                    <li class=\"nav-item dropdown\" dropdown *ngIf=\"isLoggin\">\n                        <button class=\"btn btn-secondary btn-sm\" dropdownToggle (click)=\"false\" style=\"cursor:pointer;\">Hello, {{activeUser.username}}</button>\n                        <ul *dropdownMenu class=\"dropdown-menu\">\n                            <li>\n                                <a class=\"nav-link dropdown-item\" routerLink=\"/shopping-cart\">My Services</a>\n                                <div class=\"dropdown-divider\"></div>\n                                <a class=\"nav-link dropdown-item\" (click)=\"logout()\">Logout</a>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n\n            </nav>\n        </header>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__ = __webpack_require__("./src/app/auth/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggin = this.authService.loggedIn;
        this.activeUser = this.authService.activeUser;
        this.statusSubscription = this.authService.StatusChanged.subscribe(function (isloggedin) {
            _this.isLoggin = isloggedin;
        });
        this.userSubscription = this.authService.UserChanged.subscribe(function (user) {
            _this.activeUser = user;
        });
        $('#dropdown-services').hover(function () {
            $('#dropdown-menu-services').slideDown("fast");
        }, function () {
            $('#dropdown-menu-services').slideUp("fast");
        });
    };
    HeaderComponent.prototype.checkScroll = function () {
        var scrollPosition = window.pageYOffset;
        if (scrollPosition > 30)
            return 'white';
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
        this.authService.StatusChanged.next(this.authService.loggedIn);
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.statusSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "checkScroll", null);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__["a" /* AuthenticationService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ".bg-overlay{\n    background: url('port03.3c00d9b82be4f801c7c6.jpg') fixed;\n    background-size:cover;\n    position: relative;\n    min-height:500px;\n    \n}\n\n.bg-overlay-2{\n    background: url('port02.b60a75e512c4f3c7223d.jpg') fixed;\n    background-size:cover;\n    position: relative;\n    min-height:500px;\n    \n}\n\n.bg-overlay-3{\n    background: url('bg-banner03.d0e0f565892be726616a.jpg') fixed;\n    background-size:cover;\n    position: relative;\n    min-height:500px;\n    \n}\n\n.overlay{\n    background-color: rgba(0,0,0,0.67);\n    min-height:500px;\n}\n\n.wrapper-message{\n    color: white;\n    position: absolute;\n    left: 0;\n    top: 40%;\n    width: 100%;\n    text-align: center;\n    font-size: 50px;\n}\n\nsection {\n\tposition: relative;\n}\n\nsection.padding{\n    padding:20px;\n}\n\nsection.bg-grey {\n\tbackground-color: #f9f9f9;\n}\n\nsection .section-title {\n\tfont-size: 34px;\n}\n\nsection .section-lead {\n\tfont-size: 18px;\n\tfont-weight: 200;\n\tmargin-top: 15px;\n}\n\n.direct-button{\n    font-size:25px;\n    margin:20px 0;\n}\n\nagm-map{\n    height:400px;\n    padding: 10px;\n    \n}"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-overlay\">\n    <div class=\"overlay\">\n        <div class=\"row justify-content-md-center\">\n            <div class=\"wrapper-message\">\n                <h1>Beauty</h1>\n            </div>\n        </div>\n    </div>\n</section>\n<section class=\"padding bg-grey\">\n    <div class=\"container\">\n        <h2 class=\"section-title text-center\">Introducing our beauty team</h2>\n        <p class=\"section-lead text-center text-muted\">Send us your inquiry, we will help you and reply as soon as possible</p>\n    </div>\n    <div style=\"text-align:center;\">\n        <button class=\"btn btn-outline-secondary direct-button\" routerLink=\"about\">Discover more</button>\n    </div>\n    <hr/>\n</section>\n\n<section class=\"bg-overlay-2\">\n        <div class=\"overlay\">\n            <div class=\"row justify-content-md-center\">\n                <div class=\"wrapper-message\">\n                    <h1>Gallery</h1>\n                </div>\n            </div>\n        </div>\n    </section>\n<section class=\"padding bg-grey\">\n    <div class=\"container\">\n        <h2 class=\"section-title text-center\">See our beautiful work</h2>\n        <p class=\"section-lead text-center text-muted\">Send us your inquiry, we will help you and reply as soon as possible</p>\n    </div>\n    <div style=\"text-align:center;\">\n        <button class=\"btn btn-outline-secondary direct-button\" routerLink=\"portfolio\" >View Photos</button>\n    </div>\n    <hr/>\n</section>\n\n<section class=\"bg-overlay-3\">\n    <div class=\"overlay\">\n        <div class=\"row justify-content-md-center\">\n            <div class=\"wrapper-message\">\n                <h1>Services</h1>\n            </div>\n        </div>\n    </div>\n</section>\n<section class=\"padding bg-grey\">\n<div class=\"container\">\n    <h2 class=\"section-title text-center\">Explore our services</h2>\n    <p class=\"section-lead text-center text-muted\">Send us your inquiry, we will help you and reply as soon as possible</p>\n</div>\n<div style=\"text-align:center;\">\n    <button class=\"btn btn-outline-secondary direct-button\" routerLink=\"services\" >Explore Services</button>\n</div>\n<hr/>\n</section>\n\n<section name=\"company-map\">\n        <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"16\">\n                        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                    </agm-map>\n                </div>\n        </div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        this.lat = 45.4935009;
        this.lng = -73.5798465;
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/makeup/makeup.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n.title{\n    font-size: 24px;\n    margin-bottom: 50px;\n}\n\n.section-padding{\n    padding:60px 0px;\n}\n\n.service-form{\n    padding-left: 50px;\n}\n\n.service-type{\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-size:30px;\n    \n}\n\n.service-price{\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\n\n}\n\n.flipInX{\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n}\n\n.date-confirm{\n    margin-top:50px;\n    margin-left: 50px;\n}"

/***/ }),

/***/ "./src/app/makeup/makeup.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"myRates\" class=\"section-padding\">\n  <div class=\"container\"  >\n      <div class=\"col-md-12 title text-center\">\n              <h2>Our prices</h2>\n      </div>\n      <div class=\"row service-form flipInX\">\n          <div class=\"col-md-4 text-top service-type\">\n              Bridal\n          </div>\n          <div class =\"col-md-8 text-left service-price\">\n              <p>Bride: $270</p>\n              <p>Includes:</p>\n              <ul>\n                  <li>Consultation</li>\n                  <li>Day-of make up</li>\n              </ul>\n          </div>\n       </div> \n      <hr/>\n      <div class=\"row service-form flipInX\">\n              <div class=\"col-md-4 text-top service-type\">\n                  Lessons\n                  </div>\n                  <div class =\"col-md-8 text-left service-price\">\n                      <p>Bride: $270</p>\n                      <p>Includes:</p>\n                      <ul>\n                          <li>Consultation</li>\n                          <li>Day-of make up</li>\n                      </ul>\n                  </div>\n              </div> \n  </div>\n</section>\n<hr/>\n<div class=\"container\" style=\"min-height:30em;\">\n    <div class=\"row\">\n       \n            <div class=\"col-xs-8 col-8 col-md-5 col-lg-4 form-group\">\n                <h3>Make a Appointment</h3>\n              <input class=\"form-control\" placeholder=\"Please choose a date\" bsDatepicker [(ngModel)]=\"datepickerModel\" [minDate]=\"minDate\" [bsConfig]=\"{ dateInputFormat: 'MMMM Do YYYY' }\"/>\n              \n              </div>\n              <div style=\"padding:30px\" *ngIf=\"datepickerModel && !isLogged\">\n                <p style=\"color:red;font-size:30px;\">you have to log in first!!!!</p>\n                <button class=\"btn btn-info\" routerLink=\"/login\">Go to login</button>\n              </div>\n              <div class=\"date-confirm\" *ngIf=\"datepickerModel && isLogged\">\n                    <p >You have an appointment at: <span> <b>{{datepickerModel|date:'fullDate'}}</b></span></p>\n                    <button class=\"btn btn-success\" (click)=\"onAddAppointment(datepickerModel)\" [disabled]=\"hasAppoint\" >Confirm</button>\n                    <button class=\"btn btn-danger\" (click)=\"cancelAppointment()\">Cancel</button>\n            </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/makeup/makeup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_appointment_service__ = __webpack_require__("./src/app/shared-data/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_appointment_model__ = __webpack_require__("./src/app/shared-data/appointment.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_authentication_service__ = __webpack_require__("./src/app/auth/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MakeupComponent = /** @class */ (function () {
    function MakeupComponent(appointmentService, authService) {
        this.appointmentService = appointmentService;
        this.authService = authService;
        this.hasAppoint = false;
        this.minDate = new Date();
        this.minDate.setDate(this.minDate.getDate() + 1);
    }
    MakeupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AllAppontment = this.appointmentService.getAppointments();
        this.appointmentSubscription = this.appointmentService.appointmentChanged.subscribe(function (Appointments) {
            _this.AllAppontment = Appointments;
        });
        this.isLogged = this.authService.loggedIn;
        this.statusSubscription = this.authService.StatusChanged.subscribe(function (islogged) {
            _this.isLogged = islogged;
        });
    };
    MakeupComponent.prototype.onAddAppointment = function (date) {
        this.appointmentService.newAppointments(new __WEBPACK_IMPORTED_MODULE_2__shared_data_appointment_model__["a" /* Appointment */]('user', date));
        this.hasAppoint = true;
    };
    MakeupComponent.prototype.cancelAppointment = function () {
        this.appointmentService.cancelAppointment();
        this.hasAppoint = false;
    };
    MakeupComponent.prototype.ngOnDestroy = function () {
        this.appointmentSubscription.unsubscribe();
        this.statusSubscription.unsubscribe();
    };
    MakeupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-makeup',
            template: __webpack_require__("./src/app/makeup/makeup.component.html"),
            styles: [__webpack_require__("./src/app/makeup/makeup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_data_appointment_service__["a" /* AppointmentSerivce */], __WEBPACK_IMPORTED_MODULE_3__auth_authentication_service__["a" /* AuthenticationService */]])
    ], MakeupComponent);
    return MakeupComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/***/ (function(module, exports) {

module.exports = ".bg-overlay-2{\n    background: url('port02.b60a75e512c4f3c7223d.jpg') fixed;\n    background-size:cover;\n    position: relative;\n    min-height:500px;\n    \n}\n\n\n\n.overlay{\n    background-color: rgba(0,0,0,0.67);\n    min-height:500px;\n}\n\n\n\n.wrapper-message{\n    color: white;\n    position: absolute;\n    left: 0;\n    top: 40%;\n    width: 100%;\n    text-align: center;\n    font-size: 50px;\n}\n\n\n\nsection {\n\tposition: relative;\n}\n\n\n\n.section-padding{\n    padding:60px 0px;\n}\n\n\n\n.grid-padding{\n    padding:0 8px;\n}\n\n\n\n.grid-padding img{\n    margin-bottom: 15px;\n}\n\n\n\n.padding-right-zero{\n    padding-right:0px !important;\n}\n\n\n\n#myGrid{\n    margin-top: 50px;\n}\n\n\n\n.fadeInRight{\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n}\n\n\n\n/* .arrow-back, .arrow-forward{\n\tposition:absolute;\n\topacity:0.9;\n\tbackground-color:black;\n\tpadding:10px;\n\ttop:190;\n\tcolor:white;\n\ttext-weight:bold;\n\tcursor:pointer;\n} */\n\n\n\n.arrow-back{\n    position: absolute;\n    background-color: grey;\n    top:250px;\n    left: 0px;\n    padding:4px;\n    cursor: pointer;\n    \n}\n\n\n\n.arrow-forward{\n    position: absolute;\n    background-color: grey;\n    top:250px;\n    padding:4px;\n    right:0;\n    cursor: pointer;\n    float: right ;\n}\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-overlay-2\">\n    <div class=\"overlay\">\n        <div class=\"row justify-content-md-center\">\n            <div class=\"wrapper-message\">\n                <h1>Gallery</h1>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section id=\"portfolio\" class=\"section-padding\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <h2 class=\"title text-center\">Lets See My work</h2>\n          </div>\n          <div class=\"col-md-12\">\n              <div id=\"myGrid\" class=\"grid-padding fadeInRight\">\n                  <div class=\"row\">\n                      <div class=\"col-md-4 col-sm-4 padding-right-zero\" *ngFor=\"let image of images;let i=index\" >\n                          <img [src]=\"image.imgUrl\" data-toggle=\"modal\" class=\"img-fluid\" (click)=openImage(template);>\n                          <ng-template #template> \n                            <!-- <div class=\"modal-header\">\n                                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                                  <span aria-hidden=\"true\">&times;</span>\n                                </button>\n                              </div>\n                              <div class=\"modal-body\">\n                                <img [src]=\"image.imgUrl\" class=\"img-fluid\" style=\"height:500px; width:100%\">\n                                <div class=\"arrow-back text-left\" (click)=\"navigateBack(image)\">\n                                    &lt;\n                                 </div>\n                                 <div class=\"arrow-forward text-right\" (click)=\"navigateForward(true)\">\n                                    &gt;\n                                 </div>\n                               </div> -->\n                            <carousel>\n                            <slide *ngFor=\"let image of images\">\n                                <img [src]=\"image.imgUrl\" alt=\"First slide\" style=\"display: block; width: 100%;height:500px;\">\n                            </slide>\n                            </carousel> \n                          </ng-template>\n                      </div>\n                  </div>\n                  \n              </div>\n          </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__("./src/app/portfolio/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(modalService) {
        this.modalService = modalService;
        this.images = __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* images_data */];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent.prototype.openImage = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return images_data; });
var images_data = [
    { imgUrl: "../assets/img/port01.jpg" },
    { imgUrl: "../assets/img/port02.jpg" },
    { imgUrl: "../assets/img/port03.jpg" },
    { imgUrl: "../assets/img/portfolio01.jpg" },
    { imgUrl: "../assets/img/portfolio02.jpg" },
];


/***/ }),

/***/ "./src/app/services/cosmetics/cosme-detail/cosme-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/cosmetics/cosme-detail/cosme-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding:50px;\">\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <img [src]=\"cosmetic.imgUrl\" class=\"img-fluid\" style=\"width:100%\">\n    </div>\n    <div class=\"col-md-7 text-center\" style=\"padding-top:30px;\">\n      <h2>{{cosmetic.name}}</h2>\n      <h3>{{cosmetic.description}}</h3>\n      <p>Price: ${{cosmetic.price}}</p>\n      <button class=\"btn btn-success\" (click)=\"onAddtoCart(cosmetic)\">Add to Cart</button>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/services/cosmetics/cosme-detail/cosme-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CosmeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cosmetics_services__ = __webpack_require__("./src/app/services/cosmetics/cosmetics.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_cart_service__ = __webpack_require__("./src/app/shared-data/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CosmeDetailComponent = /** @class */ (function () {
    function CosmeDetailComponent(route, cosmeService, cartService) {
        this.route = route;
        this.cosmeService = cosmeService;
        this.cartService = cartService;
    }
    CosmeDetailComponent.prototype.ngOnInit = function () {
        var name = this.route.snapshot.params['name'];
        this.cosmetic = this.cosmeService.getCosme(name);
    };
    CosmeDetailComponent.prototype.onAddtoCart = function (cosme) {
        this.cosmeService.addCosmeToCart(cosme);
    };
    CosmeDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cosme-detail',
            template: __webpack_require__("./src/app/services/cosmetics/cosme-detail/cosme-detail.component.html"),
            styles: [__webpack_require__("./src/app/services/cosmetics/cosme-detail/cosme-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__cosmetics_services__["a" /* CosmeticsService */], __WEBPACK_IMPORTED_MODULE_3__shared_data_cart_service__["a" /* CartService */]])
    ], CosmeDetailComponent);
    return CosmeDetailComponent;
}());



/***/ }),

/***/ "./src/app/services/cosmetics/cosmetics.component.css":
/***/ (function(module, exports) {

module.exports = ".cos-search-bar{\n    padding:20px 200px;\n    background-color: #181d1d41;\n}\n\n.cos-container{\n    max-width:1200px;\n    min-height:1000px;\n    position: relative;\n    margin: 0 auto;\n    padding-top: 10px;\n    padding-left: 15px;\n    padding-right: 15px;\n    \n}\n\n.card-item{\n    display: block;\n    width: 100%;\n    position: relative;\n    background:lightgrey;\n    overflow: hidden;\n    z-index: 9;\n    bottom: 0;\n    margin-bottom: 30px;\n}\n\n.card-item figure{\n    height:240px;\n    overflow: hidden;\n    z-index: 12;\n    position: relative;\n}\n\n.card-item img{\n    z-index: 8;\n    opacity: 1;\n    width: 100%;\n    height:240px;\n\n}\n\n.card-item .card-text{\n    padding: 0px 10px 10px 20px;\n    text-align: center;\n}\n\n.card-item .card-text h2, .card-item .card-text span{\n    text-decoration: none !important;\n}\n\n.card-item .card-text h2{\n    font-size: 20px;\n    font-weight: 400;\n    margin:0 0 10px 0;\n    color:#66D37E;\n}\n\n.card-item .card-text span{\n    color:#b3b3b3;\n    font-size: 16px;\n    font-weight: 400;\n}\n\n.card-item .card-text p{\n    color: #000;\n}\n\n.card-item .card-text span.btn{\n    color: #666666 !important;\n    opacity: 1;\n    visibility: visible;\n    bottom: 0;\n    background: #ebebeb;\n    border:2px solid #ebebeb !important;\n    position: relative;\n}"

/***/ }),

/***/ "./src/app/services/cosmetics/cosmetics.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row cos-search-bar\" >\n    <div class=\"input-group mb-3\">\n      <input type=\"text\" class=\"form-control\" #Name >\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"onSearch(Name.value)\">Search</button>\n      </div>\n    </div>\n  </div>\n  <hr/>\n  <div class=\"cos-container\">\n    <div class=\"row justify-content-center\">\n      <h2>Our Cosmetic Products</h2>\n    </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-4 col-sm-6\" *ngFor=\"let cosme of cosmetics|filter:filteredName:'name'\" >\n      <a  class=\"card-item\" [routerLink]=\"[cosme.name]\">\n        <figure>\n            <img [src]=\"cosme.imgUrl\" alt=\"cosmetic\" class=\"img-fluid\">\n        </figure>\n        <div class=\"card-text\">\n          <h2>{{cosme.name}}</h2>\n          <p>Price: ${{cosme.price}}</p>\n          <p><span class=\"btn btn-primary\">Learn More</span></p>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/services/cosmetics/cosmetics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CosmeticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cosmetics_services__ = __webpack_require__("./src/app/services/cosmetics/cosmetics.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CosmeticsComponent = /** @class */ (function () {
    function CosmeticsComponent(cosmeService) {
        this.cosmeService = cosmeService;
        this.filteredName = '';
    }
    CosmeticsComponent.prototype.ngOnInit = function () {
        this.cosmetics = this.cosmeService.getCosmes();
    };
    CosmeticsComponent.prototype.onSearch = function (name) {
        this.filteredName = name;
    };
    CosmeticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cosmetics',
            template: __webpack_require__("./src/app/services/cosmetics/cosmetics.component.html"),
            styles: [__webpack_require__("./src/app/services/cosmetics/cosmetics.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cosmetics_services__["a" /* CosmeticsService */]])
    ], CosmeticsComponent);
    return CosmeticsComponent;
}());



/***/ }),

/***/ "./src/app/services/cosmetics/cosmetics.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CosmeticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_cart_service__ = __webpack_require__("./src/app/shared-data/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_item_model__ = __webpack_require__("./src/app/shared-data/item.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CosmeticsService = /** @class */ (function () {
    function CosmeticsService(cartService) {
        this.cartService = cartService;
        this.cosmetics = [
            { 'name': 'shuazi', 'price': 200, 'imgUrl': '../../assets/img/cosmetics/images.jpeg', 'description': 'this is the first item' },
            { 'name': 'fenpu', 'price': 300, 'imgUrl': '../../assets/img/cosmetics/machiajul-pasagera.jpg', 'description': 'this is the first item' },
            { 'name': 'meibi', 'price': 400, 'imgUrl': '../../assets/img/cosmetics/makeup-brush-1746322_960_720.jpg', 'description': 'this is the first item' },
            { 'name': 'kouhong', 'price': 500, 'imgUrl': '../../assets/img/cosmetics/makeup-brush-1746322_960_720.jpg', 'description': 'this is the first item' },
            { 'name': 'kouhong2', 'price': 600, 'imgUrl': '../../assets/img/cosmetics/pedzle-przechowywanie.jpg', 'description': 'this is the first item' }
        ];
    }
    CosmeticsService.prototype.getCosmes = function () {
        return this.cosmetics.slice();
    };
    CosmeticsService.prototype.getCosme = function (name) {
        return this.cosmetics.find(function (cosme) { return cosme.name === name; });
    };
    CosmeticsService.prototype.addCosmeToCart = function (cosme) {
        var item = this.cartService.getCart().find(function (item) { return item.name === cosme.name; });
        if (item != null) {
            this.cartService.updateItem(item);
        }
        else {
            var newItem = new __WEBPACK_IMPORTED_MODULE_2__shared_data_item_model__["a" /* Item */](cosme.name, cosme.description, cosme.imgUrl, cosme.price, 1);
            this.cartService.addToCart(newItem);
        }
    };
    CosmeticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_data_cart_service__["a" /* CartService */]])
    ], CosmeticsService);
    return CosmeticsService;
}());



/***/ }),

/***/ "./src/app/services/cosmetics/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var filterPipe = /** @class */ (function () {
    function filterPipe() {
    }
    filterPipe.prototype.transform = function (value, filterString) {
        if (value.length === 0) {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item.name.indexOf(filterString) != -1) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    filterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter',
        })
    ], filterPipe);
    return filterPipe;
}());



/***/ }),

/***/ "./src/app/services/service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("./src/app/services/services.component.html"),
            styles: [__webpack_require__("./src/app/services/services.component.css")]
        })
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/***/ (function(module, exports) {

module.exports = ".bg-overlay-3{\n    background: url('bg-banner03.d0e0f565892be726616a.jpg') fixed;\n    background-size:cover;\n    position: relative;\n    min-height:500px;\n    \n}\n\n\n.overlay{\n    background-color: rgba(0,0,0,0.67);\n    min-height:500px;\n}\n\n\n.wrapper-message{\n    color: white;\n    position: absolute;\n    left: 0;\n    top: 40%;\n    width: 100%;\n    text-align: center;\n    font-size: 50px;\n}\n\n\nsection {\n\tposition: relative;\n}\n"

/***/ }),

/***/ "./src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-overlay-3\">\n    <div class=\"overlay\">\n        <div class=\"row justify-content-md-center\">\n            <div class=\"wrapper-message\">\n                <h1>Services</h1>\n            </div>\n        </div>\n    </div>\n</section>\n\n<p>\n    services works\n</p>"

/***/ }),

/***/ "./src/app/shared-data/appointment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appointment; });
var Appointment = /** @class */ (function () {
    function Appointment(user, date) {
        this.user = user;
        this.date = date;
    }
    return Appointment;
}());



/***/ }),

/***/ "./src/app/shared-data/appointment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentSerivce; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");

var AppointmentSerivce = /** @class */ (function () {
    function AppointmentSerivce() {
        this.allAppointment = [];
        this.appointmentChanged = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
    }
    AppointmentSerivce.prototype.getAppointments = function () {
        return this.allAppointment.slice();
    };
    AppointmentSerivce.prototype.newAppointments = function (newappointment) {
        this.allAppointment.push(newappointment);
        this.appointmentChanged.next(this.allAppointment.slice());
    };
    AppointmentSerivce.prototype.cancelAppointment = function () {
        this.allAppointment.splice(0, 1);
        this.appointmentChanged.next(this.allAppointment.slice());
    };
    return AppointmentSerivce;
}());



/***/ }),

/***/ "./src/app/shared-data/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_model__ = __webpack_require__("./src/app/shared-data/item.model.ts");


var CartService = /** @class */ (function () {
    function CartService() {
        this.cart = [];
        this.cartChanged = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
    }
    CartService.prototype.getCart = function () {
        return this.cart.slice();
    };
    CartService.prototype.addToCart = function (item) {
        this.cart.push(item);
        this.cartChanged.next(this.cart.slice());
    };
    CartService.prototype.deleteFromCart = function (item) {
        var index = this.cart.indexOf(item);
        this.cart.splice(index, 1);
        this.cartChanged.next(this.cart.slice());
    };
    CartService.prototype.updateItem = function (item) {
        var newItem = new __WEBPACK_IMPORTED_MODULE_1__item_model__["a" /* Item */](item.name, item.description, item.imgUrl, item.price, item.amount + 1);
        var index = this.cart.indexOf(item);
        this.cart[index] = newItem;
        this.cartChanged.next(this.cart.slice());
    };
    return CartService;
}());



/***/ }),

/***/ "./src/app/shared-data/item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = /** @class */ (function () {
    function Item(name, description, imgUrl, price, amount) {
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
        this.price = price;
        this.amount = amount;
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports) {

module.exports = ".cart{\n    margin: 2em;\n    padding-left:100px;\n}"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container cart\">\n    <h2 class=\"text-center\" style=\"min-height:3em;\">Your Appointment</h2>\n    <div class=\"row\" *ngIf=\"appointment\">\n      <div class = \"text-center\">\n        <p style=\"color:rgba(151, 34, 19, 0.541);font-size:40px\">You have an appointment at:<b> {{appointment.date|date:'fullDate'}} </b></p>\n      </div>\n      <div class=\"offset-md-5\">\n          <button class=\"btn btn-danger\" (click)=\"cancelAppointment()\">Cancel</button>\n      </div>\n      \n      \n    </div>\n    <hr/>\n\n    <h2 class=\"text-center\">Shopping Cart</h2>\n    <hr/>\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\"></th>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Price</th>\n          <th scope=\"col\">Amount</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let item of cart\">\n        <tr>\n          <th scope=\"row\"><img [src]=\"item.imgUrl\"  class=\"img-fluid\" style=\"height:200px ;width:200px\"></th>\n          <td><h3>{{item.name}}</h3><p>{{item.description}}</p></td>\n          <td>{{item.price*item.amount}}</td>\n          <td>\n            {{item.amount}} &nbsp;&nbsp;&nbsp; \n            <button class=\"btn btn-success\" (click)=\"onAdd(item)\">Add</button>\n            <button class=\"btn btn-danger\" (click)=\"onDelete(item)\">Delete</button>\n          </td>\n          \n        </tr>\n        </tbody>\n        </table>\n</div>"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_cart_service__ = __webpack_require__("./src/app/shared-data/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_appointment_service__ = __webpack_require__("./src/app/shared-data/appointment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(cartService, appointmentService) {
        this.cartService = cartService;
        this.appointmentService = appointmentService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart = this.cartService.getCart();
        this.appointment = this.appointmentService.getAppointments()[0];
        this.cartService.cartChanged.subscribe(function (cart) {
            _this.cart = cart;
        });
        this.appointmentService.appointmentChanged.subscribe(function (appointments) {
            _this.appointment = appointments[0];
        });
    };
    ShoppingCartComponent.prototype.onAdd = function (item) {
        this.cartService.updateItem(item);
    };
    ShoppingCartComponent.prototype.onDelete = function (item) {
        this.cartService.deleteFromCart(item);
    };
    ShoppingCartComponent.prototype.cancelAppointment = function () {
        this.appointmentService.cancelAppointment();
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-cart',
            template: __webpack_require__("./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("./src/app/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_data_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_2__shared_data_appointment_service__["a" /* AppointmentSerivce */]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
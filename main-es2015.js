(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fail/fail.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fail/fail.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div id=\"scene\">\r\n    <div data-depth=\"1.00\" ><img src=\"assets/TeatroSinFondo.jpg\"  class=\"pic1\"></div>\r\n    \r\n    <div data-depth=\"0.5\"><p class=\"pic4 pulsate\">The End!</p></div>\r\n    \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  \r\n    <!-- Navigation -->\r\n <nav class=\"navbar navbar-expand-lg  fixed-top\" id=\"mainNav\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand \" [routerLink]=\"['/movies/home']\" routerLinkActive=\"router-link-active\" [routerLinkActiveOptions]=\"{ exact: true }\" >Home</a>\r\n      <button class=\"navbar-toggler navbar-toggler-left\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        Menu\r\n        \r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n\r\n            <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n                <a class=\"nav-link \" [routerLink]=\"['/search']\" aria-disabled=\"true\">Buscar</a>\r\n              </li>\r\n         \r\n          <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n            <a class=\"nav-link \" [routerLink]=\"['/movies/popular']\" routerLinkActive=\"router-link-active\"aria-disabled=\"true\">Popular</a>\r\n          </li>\r\n          \r\n          <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n            <a class=\"nav-link \" [routerLink]=\"['/movies/upcoming']\" routerLinkActive=\"router-link-active\"aria-disabled=\"true\">Upcoming</a>\r\n          </li>\r\n          <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n              <a class=\"nav-link \" [routerLink]=\"['/movies/home']\" routerLinkActive=\"router-link-active\" [routerLinkActiveOptions]=\"{ exact: true }\"aria-disabled=\"true\">Refresh</a>\r\n            </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  \r\n\r\n</header>\r\n\r\n\r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div id=\"scene\">\r\n    <div data-depth=\"1.00\" ><img src=\"assets/TeatroSinFondo.jpg\"  class=\"pic1\"></div>\r\n    \r\n    <div data-depth=\"0.5\"><p class=\"pic4 pulsate\">Welcome to the Cinema!</p></div>\r\n    \r\n\r\n    \r\n    \r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-detail/movie-detail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-detail/movie-detail.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"detail\">\r\n               \r\n     <img class=\"posterDelantero\"  src=\"https://image.tmdb.org/t/p/w300/{{movie.poster_path}}\" alt=\"movie detail\">\r\n\r\n      \r\n\r\n        <p class=\"info\" >{{movie.overview}}</p>\r\n\r\n       \r\n                \r\n\r\n    \r\n                <img class=\"posterTrasero\"  src=\"https://image.tmdb.org/t/p/w300/{{movie.backdrop_path}}\" alt=\"movie back poster\">\r\n\r\n        \r\n                <button class=\"btn btn-primary\" type=\"submit\" routerLink=\"/movies/popular\" routerLinkActive=\"router-link-active\" >Atrás</button>\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-list/movie-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-list/movie-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap\">\r\n\r\n        <div class=\"tarjeta-wrap\" *ngFor=\"let movie of movies\">\r\n            <div class=\"tarjeta\">\r\n                    <span>{{movie.title}}</span>\r\n                <div class=\"delante\">\r\n                        <a routerLink=\"/movie/{{movie.id}}\" routerLinkActive=\"router-link-active\" ></a>\r\n                        \r\n                        <br>\r\n                        <img src=\"https://image.tmdb.org/t/p/w300/{{movie.poster_path}}\" alt=\"poster\">\r\n                </div>\r\n                <div class=\"detras\" >\r\n                        <img src=\"https://image.tmdb.org/t/p/w300/{{movie?.backdrop_path}}\" alt=\"poster detras\">\r\n                            <br>\r\n                        <p>{{movie?.overview}}</p>\r\n                        <a routerLink=\"/movie/{{movie.id}}\" routerLinkActive=\"router-link-active\" >Detalles</a>\r\n                        \r\n                </div>\r\n    \r\n                \r\n    \r\n            </div>\r\n            </div>\r\n    </div>\r\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movies.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movies.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"wrap\">\r\n    \r\n    <div class=\"tarjeta-wrap\" *ngFor=\"let movie of movies\">\r\n        <div class=\"tarjeta\">\r\n                <span>{{movie.title}}</span>\r\n            <div class=\"delante\">\r\n                    <a routerLink=\"/movie/{{movie.id}}\" routerLinkActive=\"router-link-active\" ></a>\r\n                    \r\n                    <br>\r\n                    <img src=\"https://image.tmdb.org/t/p/w300/{{movie.poster_path}}\" alt=\"poster\">\r\n            </div>\r\n            <div class=\"detras\" >\r\n                    <img src=\"https://image.tmdb.org/t/p/w300/{{movie?.backdrop_path}}\" alt=\"poster detras\">\r\n                        <br>\r\n                    <p>{{movie?.overview}}</p>\r\n                    <a routerLink=\"/movie/{{movie.id}}\" routerLinkActive=\"router-link-active\" >Detalles</a>\r\n                    \r\n            </div>\r\n\r\n            \r\n\r\n        </div>\r\n        </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prueba/prueba.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/prueba/prueba.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"busqueda1\">\r\n    <input type=\"text\" name=\"search\" placeholder=\"Buscar\" (keyup)=\"searchMovies($event.target.value)\">\r\n</div>\r\n<app-movie-list class=\"list\" [movies]=\"movies\"></app-movie-list>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movies/movies.component */ "./src/app/components/movies/movies.component.ts");
/* harmony import */ var _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movie-detail/movie-detail.component */ "./src/app/components/movie-detail/movie-detail.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/prueba/prueba.component */ "./src/app/components/prueba/prueba.component.ts");
/* harmony import */ var _components_fail_fail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/fail/fail.component */ "./src/app/components/fail/fail.component.ts");








const routes = [
    { path: 'movies/home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'movies/:category', component: _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"] },
    { path: 'movie/:id', component: _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailComponent"] },
    { path: 'search', component: _components_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_6__["PruebaComponent"] },
    { path: 'movies/404', component: _components_fail_fail_component__WEBPACK_IMPORTED_MODULE_7__["FailComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angularmovies';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/movie-list/movie-list.component */ "./src/app/components/movie-list/movie-list.component.ts");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/movies/movies.component */ "./src/app/components/movies/movies.component.ts");
/* harmony import */ var _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/movie-detail/movie-detail.component */ "./src/app/components/movie-detail/movie-detail.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/prueba/prueba.component */ "./src/app/components/prueba/prueba.component.ts");
/* harmony import */ var _components_fail_fail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/fail/fail.component */ "./src/app/components/fail/fail.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_12__["MoviesComponent"],
            _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_11__["MovieListComponent"],
            _components_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_13__["MovieDetailComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _components_prueba_prueba_component__WEBPACK_IMPORTED_MODULE_15__["PruebaComponent"],
            _components_fail_fail_component__WEBPACK_IMPORTED_MODULE_16__["FailComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/fail/fail.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/fail/fail.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#scene {\n  height: 100%;\n  width: 100%;\n  background: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n#scene .pic1 {\n  height: 90vh;\n  width: 90vw;\n}\n#scene .pic4 {\n  height: 40vh;\n  width: 70vw;\n  padding-left: 8em;\n  padding-top: 2.5em;\n  color: white;\n  font-size: 3.5em;\n  font-family: \"Mansalva\", cursive;\n  align-self: center;\n  align-items: center;\n  text-align: center;\n}\n#scene .pulsate {\n  -webkit-animation: pulsate 10s ease-out;\n  -webkit-animation-iteration-count: infinite;\n  opacity: 0.5;\n}\n@-webkit-keyframes pulsate {\n  0% {\n    opacity: 0.7;\n    color: #FF2B26;\n  }\n  50% {\n    opacity: 1;\n    color: #164FEB;\n  }\n  100% {\n    opacity: 0.8;\n    color: #A3FF68;\n  }\n}\n@media (max-width: 700px) {\n  .pic1 {\n    padding-top: 3em;\n  }\n\n  .pic4 {\n    padding-left: 2em !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYWlsL0M6XFxVc2Vyc1xcbWlqdWFcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxBbmd1bGFyTW92aWVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmYWlsXFxmYWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZhaWwvZmFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQUo7QURFSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQU47QURJSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRlI7QURRSTtFQUNJLHVDQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0FDTlI7QURRSTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGNBQUE7RUNOVjtFRFFNO0lBQ0ksVUFBQTtJQUNBLGNBQUE7RUNOVjtFRFFNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7RUNOVjtBQUNGO0FEWUE7RUFDSTtJQUNJLGdCQUFBO0VDVE47O0VEWUU7SUFFSSw0QkFBQTtFQ1ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZhaWwvZmFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzY2VuZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwIDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLnBpYzF7XHJcbiAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgd2lkdGg6IDkwdnc7ICBcclxuICAgICAgXHJcblxyXG4gICAgfVxyXG4gICAgLnBpYzQgIHtcclxuICAgICAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICAgICAgd2lkdGg6IDcwdnc7IFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOGVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyLjVlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjVlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJ01hbnNhbHZhJywgY3Vyc2l2ZTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bHNhdGUge1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzYXRlIDEwcyBlYXNlLW91dDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyBcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2F0ZSB7XHJcbiAgICAgICAgMCUgeyBcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGMkIyNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgNTAlIHsgXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEuMDtcclxuICAgICAgICAgICAgY29sb3I6ICMxNjRGRUI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUgeyBcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICBjb2xvcjogI0EzRkY2ODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLnBpYzF7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDNlbTtcclxuICBcclxuICAgICAgfVxyXG4gICAgLnBpYzQgIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyZW0gIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59IiwiI3NjZW5lIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNzY2VuZSAucGljMSB7XG4gIGhlaWdodDogOTB2aDtcbiAgd2lkdGg6IDkwdnc7XG59XG4jc2NlbmUgLnBpYzQge1xuICBoZWlnaHQ6IDQwdmg7XG4gIHdpZHRoOiA3MHZ3O1xuICBwYWRkaW5nLWxlZnQ6IDhlbTtcbiAgcGFkZGluZy10b3A6IDIuNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMy41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1hbnNhbHZhXCIsIGN1cnNpdmU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3NjZW5lIC5wdWxzYXRlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNhdGUgMTBzIGVhc2Utb3V0O1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBvcGFjaXR5OiAwLjU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2F0ZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgY29sb3I6ICNGRjJCMjY7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjMTY0RkVCO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBjb2xvcjogI0EzRkY2ODtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnBpYzEge1xuICAgIHBhZGRpbmctdG9wOiAzZW07XG4gIH1cblxuICAucGljNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyZW0gIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/fail/fail.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/fail/fail.component.ts ***!
  \***************************************************/
/*! exports provided: FailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailComponent", function() { return FailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_2__);



let FailComponent = class FailComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterContentInit() {
        const scene = document.getElementById('scene');
        const parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_2__(scene, {
            relativeInput: true,
            hoverOnly: true
        });
    }
};
FailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fail/fail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fail.component.scss */ "./src/app/components/fail/fail.component.scss")).default]
    })
], FailComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#mainNav {\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  background: linear-gradient(to right, #1565C0, #b92b27);\n  color: white !important;\n  font-family: \"PT Sans Narrow\", sans-serif;\n}\n@media only screen and (max-width: 1024px) {\n  #mainNav {\n    font-size: 2em;\n  }\n}\n@media only screen and (max-width: 800px) {\n  #mainNav {\n    font-size: 1.5em;\n    margin-right: 0em;\n  }\n}\n@media only screen and (max-width: 600px) {\n  #mainNav {\n    font-size: 1.2em;\n    margin-right: 0em;\n  }\n}\n@media only screen and (max-width: 400px) {\n  #mainNav {\n    font-size: 1.2em;\n    margin-right: 0em;\n  }\n}\n.navbar-toggler {\n  color: white;\n  cursor: pointer;\n  border: 1px solid #2e2be2;\n  align-self: baseline;\n  outline: none;\n}\n@media only screen and (max-width: 800px) {\n  .navbar-toggler {\n    margin-right: 1.7em;\n    font-size: 1em;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .navbar-toggler {\n    margin-right: 2em;\n    font-size: 0.8em;\n  }\n}\n.navbar-toggler:hover {\n  color: black;\n  transform: scale(1);\n}\n.navbar-brand {\n  align-self: baseline;\n  font-size: 1em;\n}\n@media only screen and (max-width: 1024px) {\n  .navbar-brand {\n    font-size: 1em;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .navbar-brand {\n    margin-left: 2em;\n    font-size: 1em;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .navbar-brand {\n    margin-left: 2em;\n    font-size: 0.8em;\n  }\n}\na {\n  color: white;\n}\na:hover {\n  text-decoration: none;\n  color: black;\n  transform: scale(1);\n}\n#navbarResponsive {\n  transition: all 0.3s ease;\n}\n.nav-item:active {\n  transition: all 0.3s ease;\n}\n@media only screen and (max-width: 1024px) {\n  .nav-link {\n    font-size: 1em;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .nav-link {\n    font-size: 1em;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .nav-link {\n    font-size: 0.8em;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .nav-link {\n    font-size: 0.7em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxtaWp1YVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXEFuZ3VsYXJNb3ZpZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx1REFBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7QUNESjtBREVJO0VBUko7SUFTUSxjQUFBO0VDQ047QUFDRjtBREVJO0VBYko7SUFjUSxnQkFBQTtJQUNBLGlCQUFBO0VDQ047QUFDRjtBRENJO0VBbEJKO0lBbUJRLGdCQUFBO0lBQ0EsaUJBQUE7RUNFTjtBQUNGO0FEQUk7RUF2Qko7SUF3QlEsZ0JBQUE7SUFFQSxpQkFBQTtFQ0VOO0FBQ0Y7QURLQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUNGSjtBRE9JO0VBVko7SUFZUSxtQkFBQTtJQUNBLGNBQUE7RUNMTjtBQUNGO0FET0k7RUFoQko7SUFpQlEsaUJBQUE7SUFDQSxnQkFBQTtFQ0pOO0FBQ0Y7QURZQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ1RKO0FEV0E7RUFDRyxvQkFBQTtFQUNDLGNBQUE7QUNSSjtBRFNJO0VBSEo7SUFLUSxjQUFBO0VDUE47QUFDRjtBRFVJO0VBVEo7SUFVUSxnQkFBQTtJQUNBLGNBQUE7RUNQTjtBQUNGO0FEU0k7RUFkSjtJQWdCUSxnQkFBQTtJQUNBLGdCQUFBO0VDUE47QUFDRjtBRGFBO0VBQ0ksWUFBQTtBQ1ZKO0FEYUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1ZKO0FEWUE7RUFDSSx5QkFBQTtBQ1RKO0FEV0E7RUFDSSx5QkFBQTtBQ1JKO0FEV0E7RUFDRztJQUNDLGNBQUE7RUNSRjtBQUNGO0FEYUE7RUFDSTtJQUNJLGNBQUE7RUNYTjtBQUNGO0FEY0E7RUFDSTtJQUNJLGdCQUFBO0VDWk47QUFDRjtBRGVBO0VBRUk7SUFDSSxnQkFBQTtFQ2ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiNtYWluTmF2IHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE1NjVDMCwgI2I5MmIyNyk7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnMgTmFycm93XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMC44ZW07XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBlbTtcclxuICAgICBcclxuICAgIH0gXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBlbTtcclxuICAgICBcclxuICAgIH0gXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwZW07XHJcbiAgICBcclxuICAgIH1cclxuICAgXHJcbiBcclxuXHJcbiAgICBcclxuICB9XHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNDYsIDQzLCAyMjYpO1xyXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjdlbTtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICBcclxuICAgIH0gXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBcclxufVxyXG4ubmF2YmFyLXRvZ2dsZXI6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIFxyXG4gICAgfSBcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBcclxuICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICB9XHJcbiAgIFxyXG4gICBcclxuXHJcbiAgICBcclxufVxyXG5hIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG59XHJcbmE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4jbmF2YmFyUmVzcG9uc2l2ZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbn1cclxuLm5hdi1pdGVtOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgIC5uYXYtbGlua3tcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICB9IFxyXG4gICAgXHJcbiAgICBcclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLm5hdi1saW5re1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgfSBcclxuICBcclxufSBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm5hdi1saW5re1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICB9IFxyXG4gIFxyXG59IFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICBcclxuICAgIC5uYXYtbGlua3tcclxuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgIFxyXG4gICAgfSBcclxuICAgIFxyXG59XHJcblxyXG5cclxuIiwiI21haW5OYXYge1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE1NjVDMCwgI2I5MmIyNyk7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zIE5hcnJvd1wiLCBzYW5zLXNlcmlmO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgI21haW5OYXYge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICNtYWluTmF2IHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNtYWluTmF2IHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIG1hcmdpbi1yaWdodDogMGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICNtYWluTmF2IHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIG1hcmdpbi1yaWdodDogMGVtO1xuICB9XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmUyYmUyO1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm5hdmJhci10b2dnbGVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuN2VtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxufVxuXG4ubmF2YmFyLXRvZ2dsZXI6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubmF2YmFyLWJyYW5kIHtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbiNuYXZiYXJSZXNwb25zaXZlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLm5hdi1pdGVtOmFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5uYXYtbGluayB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm5hdi1saW5rIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubmF2LWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLm5hdi1saW5rIHtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICB9XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#scene {\n  height: 100%;\n  width: 100%;\n  background: #000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n#scene .pic1 {\n  height: 90vh;\n  width: 90vw;\n}\n#scene .pic4 {\n  height: 40vh;\n  width: 70vw;\n  padding-left: 8em;\n  padding-top: 2.5em;\n  color: white;\n  font-size: 3.5em;\n  font-family: \"Mansalva\", cursive;\n  align-self: center;\n  align-items: center;\n  text-align: center;\n}\n#scene .pulsate {\n  -webkit-animation: pulsate 10s ease-out;\n  -webkit-animation-iteration-count: infinite;\n  opacity: 0.5;\n}\n@-webkit-keyframes pulsate {\n  0% {\n    opacity: 0.7;\n    color: #FF2B26;\n  }\n  50% {\n    opacity: 1;\n    color: #164FEB;\n  }\n  100% {\n    opacity: 0.8;\n    color: #A3FF68;\n  }\n}\n@media (max-width: 700px) {\n  .pic1 {\n    padding-top: 3em;\n  }\n\n  .pic4 {\n    padding-left: 2em !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcbWlqdWFcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxBbmd1bGFyTW92aWVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQUo7QURFSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQU47QURJSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRlI7QURRSTtFQUNJLHVDQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0FDTlI7QURRSTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGNBQUE7RUNOVjtFRFFNO0lBQ0ksVUFBQTtJQUNBLGNBQUE7RUNOVjtFRFFNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7RUNOVjtBQUNGO0FEWUE7RUFDSTtJQUNJLGdCQUFBO0VDVE47O0VEWUU7SUFFSSw0QkFBQTtFQ1ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzY2VuZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwIDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLnBpYzF7XHJcbiAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgd2lkdGg6IDkwdnc7ICBcclxuICAgICAgXHJcblxyXG4gICAgfVxyXG4gICAgLnBpYzQgIHtcclxuICAgICAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICAgICAgd2lkdGg6IDcwdnc7IFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOGVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyLjVlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjVlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJ01hbnNhbHZhJywgY3Vyc2l2ZTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnB1bHNhdGUge1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzYXRlIDEwcyBlYXNlLW91dDtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyBcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2F0ZSB7XHJcbiAgICAgICAgMCUgeyBcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGMkIyNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgNTAlIHsgXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEuMDtcclxuICAgICAgICAgICAgY29sb3I6ICMxNjRGRUI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUgeyBcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICBjb2xvcjogI0EzRkY2ODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLnBpYzF7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDNlbTtcclxuICBcclxuICAgICAgfVxyXG4gICAgLnBpYzQgIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyZW0gIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59IiwiI3NjZW5lIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNzY2VuZSAucGljMSB7XG4gIGhlaWdodDogOTB2aDtcbiAgd2lkdGg6IDkwdnc7XG59XG4jc2NlbmUgLnBpYzQge1xuICBoZWlnaHQ6IDQwdmg7XG4gIHdpZHRoOiA3MHZ3O1xuICBwYWRkaW5nLWxlZnQ6IDhlbTtcbiAgcGFkZGluZy10b3A6IDIuNWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMy41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1hbnNhbHZhXCIsIGN1cnNpdmU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3NjZW5lIC5wdWxzYXRlIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNhdGUgMTBzIGVhc2Utb3V0O1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBvcGFjaXR5OiAwLjU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2F0ZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgY29sb3I6ICNGRjJCMjY7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjMTY0RkVCO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBjb2xvcjogI0EzRkY2ODtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnBpYzEge1xuICAgIHBhZGRpbmctdG9wOiAzZW07XG4gIH1cblxuICAucGljNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyZW0gIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterContentInit() {
        const scene = document.getElementById('scene');
        const parallaxInstance = new Parallax(scene, {
            relativeInput: true,
            hoverOnly: true
        });
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/movie-detail/movie-detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie-detail/movie-detail.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".detail {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  align-content: center;\n  justify-content: space-between;\n  height: 100vh;\n  background-image: url('curtain-2757815_960_720.png');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  color: white;\n}\n@media only screen and (max-width: 1024px) {\n  .detail {\n    flex-direction: column;\n    height: auto;\n    width: 100vw;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .detail {\n    flex-direction: column;\n    height: auto;\n    width: 100vw;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .detail {\n    flex-direction: column;\n    height: auto;\n    width: 100vw;\n  }\n}\n.posterDelantero {\n  align-self: baseline;\n  flex: 1;\n  padding-left: 8em;\n  padding-top: 4em;\n  width: auto;\n  height: auto;\n}\n@media only screen and (max-width: 1024px) {\n  .posterDelantero {\n    margin-top: 2em;\n    padding-left: 20rem;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .posterDelantero {\n    align-self: center;\n    padding-left: 0rem;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .posterDelantero {\n    align-self: center;\n    padding-left: 1rem;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .posterDelantero {\n    align-self: center;\n    padding-left: 0.6rem;\n  }\n}\n.info {\n  align-self: center;\n  text-align: center;\n  flex: 1;\n  padding: 4em;\n  font-size: 1.2em;\n}\n@media only screen and (max-width: 1024px) {\n  .info {\n    font-size: 2em;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .info {\n    font-size: 1.7em;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .info {\n    font-size: 1.3em;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .info {\n    font-size: 1em;\n  }\n}\n.posterTrasero {\n  align-self: baseline;\n  flex: 1;\n  padding: 4em;\n  width: auto;\n  height: auto;\n}\n@media only screen and (max-width: 1024px) {\n  .posterTrasero {\n    align-self: center;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .posterTrasero {\n    align-self: center;\n    padding-left: 0em;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .posterTrasero {\n    align-self: center;\n    padding-left: 6em;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .posterTrasero {\n    align-self: center;\n    padding-left: 5em;\n  }\n}\nbutton {\n  outline: none;\n  position: relative;\n  top: -30vh;\n  left: -40vh;\n  min-width: 6vw;\n  min-height: 5vh;\n}\n@media only screen and (max-width: 1024px) {\n  button {\n    top: 0vh;\n    left: 0vh;\n  }\n}\n@media only screen and (max-width: 800px) {\n  button {\n    top: 0vh;\n    left: 0vh;\n  }\n}\n@media only screen and (max-width: 400px) {\n  button {\n    top: 0vh;\n    left: 0vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1kZXRhaWwvQzpcXFVzZXJzXFxtaWp1YVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXEFuZ3VsYXJNb3ZpZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1vdmllLWRldGFpbFxcbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG9EQUFBO0VBQ0EsNEJBQUE7RUFDSCw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDRyxZQUFBO0FDQ0o7QURBSTtFQWRKO0lBZ0JRLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUNFTjtBQUNGO0FEQ0k7RUF0Qko7SUF3QlEsc0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQ0NOO0FBQ0Y7QURFSTtFQTlCSjtJQWdDWSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VDQVY7QUFDRjtBRFdJO0VBRUksb0JBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FDVlI7QURXUTtFQVRKO0lBWVEsZUFBQTtJQUNBLG1CQUFBO0VDVlY7QUFDRjtBRFlRO0VBaEJKO0lBbUJRLGtCQUFBO0lBQ0Esa0JBQUE7RUNYVjtBQUNGO0FEYVE7RUF2Qko7SUEwQlEsa0JBQUE7SUFDQSxrQkFBQTtFQ1pWO0FBQ0Y7QURjUTtFQTlCSjtJQWlDUSxrQkFBQTtJQUNBLG9CQUFBO0VDYlY7QUFDRjtBRHNCSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDbkJSO0FEb0JRO0VBTko7SUFPUSxjQUFBO0VDakJWO0FBQ0Y7QURtQlE7RUFWSjtJQVdRLGdCQUFBO0VDaEJWO0FBQ0Y7QURrQlE7RUFkSjtJQWVRLGdCQUFBO0VDZlY7QUFDRjtBRGtCUTtFQW5CSjtJQXFCUSxjQUFBO0VDaEJWO0FBQ0Y7QUR1Qkk7RUFFSSxvQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNyQlI7QURzQlE7RUFQSjtJQVFRLGtCQUFBO0VDbkJWO0FBQ0Y7QURzQlE7RUFaSjtJQWFRLGtCQUFBO0lBQ0EsaUJBQUE7RUNuQlY7QUFDRjtBRHFCUTtFQWpCSjtJQWtCUSxrQkFBQTtJQUNBLGlCQUFBO0VDbEJWO0FBQ0Y7QURvQlE7RUF0Qko7SUF3QlEsa0JBQUE7SUFDQSxpQkFBQTtFQ2xCVjtBQUNGO0FEeUJJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ3RCUjtBRHVCUTtFQVBKO0lBU1EsUUFBQTtJQUNBLFNBQUE7RUNyQlY7QUFDRjtBRHdCUTtFQWRKO0lBZ0JRLFFBQUE7SUFDQSxTQUFBO0VDdEJWO0FBQ0Y7QUR3QlE7RUFwQko7SUFxQlEsUUFBQTtJQUNBLFNBQUE7RUNyQlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9jdXJ0YWluLTI3NTc4MTVfOTYwXzcyMC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gXHJcblxyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICBcclxuICAgIFxyXG4gICAgfSBcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG5cclxuXHJcblxyXG59XHJcbiAgICBcclxuXHJcbiAgICAucG9zdGVyRGVsYW50ZXJvIHtcclxuICAgICAgICBcclxuICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOGVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0ZW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjByZW0gIDtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW0gO1xyXG4gICAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtIDtcclxuICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC42cmVtIDtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmluZm8ge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBwYWRkaW5nOiA0ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5wb3N0ZXJUcmFzZXJvIHtcclxuICAgICAgICBcclxuICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHBhZGRpbmc6IDRlbTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDIyZW0gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwZW0gO1xyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNmVtIDtcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVlbSA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtMzB2aDtcclxuICAgICAgICBsZWZ0OiAtNDB2aDtcclxuICAgICAgICBtaW4td2lkdGg6IDZ2dztcclxuICAgICAgICBtaW4taGVpZ2h0OiA1dmg7XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdG9wOiAwdmg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDB2aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB0b3A6IDB2aDtcclxuICAgICAgICAgICAgbGVmdDogMHZoO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgICAgIHRvcDogMHZoO1xyXG4gICAgICAgICAgICBsZWZ0OiAwdmg7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiIsIi5kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2N1cnRhaW4tMjc1NzgxNV85NjBfNzIwLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZGV0YWlsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmRldGFpbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5kZXRhaWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxufVxuXG4ucG9zdGVyRGVsYW50ZXJvIHtcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmctbGVmdDogOGVtO1xuICBwYWRkaW5nLXRvcDogNGVtO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnBvc3RlckRlbGFudGVybyB7XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIHBhZGRpbmctbGVmdDogMjByZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnBvc3RlckRlbGFudGVybyB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucG9zdGVyRGVsYW50ZXJvIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5wb3N0ZXJEZWxhbnRlcm8ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNnJlbTtcbiAgfVxufVxuXG4uaW5mbyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA0ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaW5mbyB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmluZm8ge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmluZm8ge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmluZm8ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG5cbi5wb3N0ZXJUcmFzZXJvIHtcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDRlbTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5wb3N0ZXJUcmFzZXJvIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnBvc3RlclRyYXNlcm8ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDBlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucG9zdGVyVHJhc2VybyB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogNmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5wb3N0ZXJUcmFzZXJvIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA1ZW07XG4gIH1cbn1cblxuYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zMHZoO1xuICBsZWZ0OiAtNDB2aDtcbiAgbWluLXdpZHRoOiA2dnc7XG4gIG1pbi1oZWlnaHQ6IDV2aDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGJ1dHRvbiB7XG4gICAgdG9wOiAwdmg7XG4gICAgbGVmdDogMHZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIGJ1dHRvbiB7XG4gICAgdG9wOiAwdmg7XG4gICAgbGVmdDogMHZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIGJ1dHRvbiB7XG4gICAgdG9wOiAwdmg7XG4gICAgbGVmdDogMHZoO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/movie-detail/movie-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/movie-detail/movie-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");




let MovieDetailComponent = class MovieDetailComponent {
    constructor(movieService, route) {
        this.movieService = movieService;
        this.route = route;
        this.page = 0;
    }
    ngOnInit() {
        this.paramsSubscription = this.route.params.subscribe(params => {
            this.getDetail(params.id);
        });
    }
    getDetail(id) {
        this.movieService.getDetail(id, 'es-ES', '1').subscribe(res => this.movie = res, error => console.log(error));
    }
};
MovieDetailComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-detail/movie-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-detail.component.scss */ "./src/app/components/movie-detail/movie-detail.component.scss")).default]
    })
], MovieDetailComponent);



/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-content: space-around;\n  padding-top: 3em;\n  -webkit-box-pack: space-around;\n  -webkit-justify-content: space-around;\n  -ms-flex-pack: space-around;\n  background-image: url('theater-4023278_960_720.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n}\n@media only screen and (max-width: 1024px) {\n  .wrap {\n    padding-top: 8em;\n    grid-template-columns: repeat(1, 1fr);\n    justify-content: center;\n    z-index: 0;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .wrap {\n    padding-top: 8em;\n    margin-top: 0em;\n    grid-template-columns: repeat(1, 1fr);\n    justify-content: center;\n    z-index: 0;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .wrap {\n    padding-top: 5em;\n    margin-top: 0em;\n    grid-template-columns: repeat(1, 1fr);\n    justify-content: center;\n    z-index: 0;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .wrap {\n    padding-top: 5em;\n    margin-top: 0em;\n    grid-template-columns: repeat(1, 1fr);\n    justify-content: center;\n    z-index: 0;\n  }\n}\n.tarjeta-wrap {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 0.5em;\n  perspective: 800;\n}\n@media only screen and (max-width: 1024px) {\n  .tarjeta-wrap {\n    height: 83vh;\n    margin-bottom: 10vh;\n    padding-left: 4em;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .tarjeta-wrap {\n    height: 87vh;\n    margin-bottom: 10vh;\n    padding-left: 4em;\n    align-self: center;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .tarjeta-wrap {\n    height: 77vh;\n    padding-left: 0em;\n    align-self: center;\n    margin-bottom: 10vh;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .tarjeta-wrap {\n    height: 67vh;\n    margin-bottom: 10vh;\n    padding-left: 0em;\n    align-self: center;\n  }\n}\n.tarjeta {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 19.56vw;\n  height: 67vh;\n  background: #0a0a09;\n  color: #16BFFD;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: 0.7s ease;\n  border-radius: 0.3em;\n  text-align: center;\n  align-self: center;\n}\n@media only screen and (max-width: 1024px) {\n  .tarjeta {\n    height: 95vh;\n    width: 80vw;\n    align-self: center;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .tarjeta {\n    height: 95vh;\n    width: 80vw;\n    align-self: center;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .tarjeta {\n    height: 85vh;\n    width: 80vw;\n    align-self: center;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .tarjeta {\n    height: 75vh;\n    width: 80vw;\n    align-self: center;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  span {\n    font-size: 3em;\n  }\n}\n@media only screen and (max-width: 800px) {\n  span {\n    font-size: 2em;\n  }\n}\n@media only screen and (max-width: 600px) {\n  span {\n    font-size: 1.5em;\n  }\n}\n@media only screen and (max-width: 400px) {\n  span {\n    font-size: 1.2em;\n  }\n}\n.delante,\n.detras {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n@media only screen and (max-width: 1024px) {\n  .delante > img {\n    height: 75vh;\n    width: 70vw;\n    margin-top: 2.5em;\n  }\n\n  .detras > img {\n    height: 35vh;\n    width: 40vw;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .delante > img {\n    height: 65vh;\n    width: 70vw;\n    margin-top: 1.2em;\n  }\n\n  .detras > img {\n    height: 30vh;\n    width: 40vw;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .delante > img {\n    height: 55vh;\n    width: 70vw;\n    margin-top: 1.8em;\n  }\n\n  .detras > img {\n    height: 30vh;\n    width: 40vw;\n  }\n}\n.delante > img, .detras > img {\n  border-radius: 0.3em;\n}\n.detras > a {\n  color: white;\n  border-bottom: 1.5px solid black;\n}\n@media only screen and (max-width: 1024px) {\n  .detras > a {\n    font-size: 3em;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .detras > a {\n    font-size: 2em;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .detras > a {\n    font-size: 1em;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .detras > a {\n    font-size: 0.8em;\n  }\n}\n.detras {\n  transform: rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 0.85em;\n  font-family: \"Oxygen\", sans-serif;\n  background: #000046;\n  background: linear-gradient(to right, #1cb5e0, #000046);\n  flex-wrap: wrap;\n  flex-direction: column;\n  border-radius: 0.3em;\n}\n@media only screen and (max-width: 800px) {\n  .detras {\n    width: 100%;\n    height: 85vh;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .detras {\n    width: 100%;\n    height: 82vh;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .detras {\n    width: 100%;\n    height: 75vh;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .detras > p {\n    font-size: 2.4em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .detras > p {\n    font-size: 1.8em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .detras > p {\n    font-size: 1.2em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .detras > p {\n    font-size: 0.9em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n.tarjeta-wrap:hover .tarjeta {\n  transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1saXN0L0M6XFxVc2Vyc1xcbWlqdWFcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxBbmd1bGFyTW92aWVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtb3ZpZS1saXN0XFxtb3ZpZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vdmllLWxpc3QvbW92aWUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFPQSw4QkFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFFQSxvREFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDTkQ7QURPQztFQXBCRDtJQXNCRSxnQkFBQTtJQUVBLHFDQUFBO0lBQ0EsdUJBQUE7SUFDQSxVQUFBO0VDTkE7QUFDRjtBRFFDO0VBN0JEO0lBOEJFLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLHFDQUFBO0lBQ0EsdUJBQUE7SUFDQSxVQUFBO0VDTEE7QUFDRjtBRE1DO0VBcENEO0lBcUNFLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLHFDQUFBO0lBQ0EsdUJBQUE7SUFDQSxVQUFBO0VDSEE7QUFDRjtBREtDO0VBNUNEO0lBNkNFLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLHFDQUFBO0lBQ0EsdUJBQUE7SUFDQSxVQUFBO0VDRkE7QUFDRjtBREtBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtBQ0ZEO0FER0M7RUFQRDtJQVFFLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VDQUE7QUFDRjtBREVDO0VBYkQ7SUFjRSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDQ0E7QUFDRjtBRENDO0VBcEJEO0lBcUJFLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUNFQTtBQUNGO0FEQUM7RUEzQkQ7SUE0QkUsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ0dBO0FBQ0Y7QURHQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFFQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FEO0FEQ0M7RUFoQkQ7SUFpQkUsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQ0VBO0FBQ0Y7QURBQztFQXRCRDtJQXVCRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDR0E7QUFDRjtBREZDO0VBM0JEO0lBNEJFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNLQTtBQUNGO0FESEM7RUFqQ0Q7SUFrQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQ01BO0FBQ0Y7QURIQTtFQUNDO0lBQ0MsY0FBQTtFQ01BO0FBQ0Y7QURIQTtFQUNDO0lBQ0MsY0FBQTtFQ0tBO0FBQ0Y7QURGQTtFQUNDO0lBQ0MsZ0JBQUE7RUNJQTtBQUNGO0FEREE7RUFDQztJQUNDLGdCQUFBO0VDR0E7QUFDRjtBREVBOztFQUVDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUNBRDtBREdBO0VBRUc7SUFDRixZQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0VDREM7O0VER0Q7SUFDQyxZQUFBO0lBQ0EsV0FBQTtFQ0FBO0FBQ0Y7QURHQTtFQUVDO0lBQ0MsWUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtFQ0ZBOztFRElBO0lBQ0MsWUFBQTtJQUNBLFdBQUE7RUNERDtBQUNGO0FETUE7RUFFQztJQUNDLFlBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7RUNMQTs7RURPQTtJQUNDLFlBQUE7SUFDQSxXQUFBO0VDSkQ7QUFDRjtBRFNBO0VBQ0Msb0JBQUE7QUNQRDtBRFNBO0VBQ0MsWUFBQTtFQUNBLGdDQUFBO0FDTkQ7QURPQztFQUhEO0lBS0csY0FBQTtFQ0xEO0FBQ0Y7QURPQztFQVJEO0lBVUUsY0FBQTtFQ0xBO0FBQ0Y7QURPQztFQWJEO0lBZUUsY0FBQTtFQ0xBO0FBQ0Y7QURPQztFQWxCRDtJQW9CRSxnQkFBQTtFQ0xBO0FBQ0Y7QURTQTtFQUVDLDBCQUFBO0VBSUEsYUFBQTtFQUlBLHVCQUFBO0VBSUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNHLHVCQUFBO0VBQ0gsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBRUEsdURBQUE7RUFLQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ1ZEO0FEY0M7RUFsQ0Q7SUFtQ0UsV0FBQTtJQUNBLFlBQUE7RUNYQTtBQUNGO0FEYUM7RUF2Q0Q7SUF3Q0UsV0FBQTtJQUNBLFlBQUE7RUNWQTtBQUNGO0FEYUM7RUE3Q0Q7SUErQ0UsV0FBQTtJQUNBLFlBQUE7RUNYQTtBQUNGO0FEY0E7RUFDQztJQUNDLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQ1hBO0FBQ0Y7QURhQTtFQUNDO0lBQ0MsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0VDWEE7QUFDRjtBRGFBO0VBQ0M7SUFDQyxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7RUNYQTtBQUNGO0FEYUE7RUFDQztJQUNDLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQ1hBO0FBQ0Y7QURnQkE7RUFFQywwQkFBQTtBQ2REIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdHBhZGRpbmctdG9wOiAzZW07XHJcblx0XHJcblx0XHJcblx0Ly8gZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0Ly8gZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdC8vIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdC8vIGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1ib3gtcGFjazogc3BhY2UtYXJvdW5kO1xyXG5cdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0LW1zLWZsZXgtcGFjazogc3BhY2UtYXJvdW5kO1xyXG5cdFxyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi90aGVhdGVyLTQwMjMyNzhfOTYwXzcyMC5qcGcnKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdFxyXG5cdFx0cGFkZGluZy10b3A6IDhlbTtcclxuXHRcdC8vIG1hcmdpbi10b3A6IDJlbTtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHotaW5kZXg6IDA7XHJcblxyXG5cdH1cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcblx0XHRwYWRkaW5nLXRvcDogOGVtO1xyXG5cdFx0bWFyZ2luLXRvcDogMGVtO1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ei1pbmRleDogMDtcclxuXHR9IFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHRcdHBhZGRpbmctdG9wOiA1ZW07XHJcblx0XHRtYXJnaW4tdG9wOiAwZW07XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR6LWluZGV4OiAwO1xyXG5cdH0gXHJcblxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHRcdHBhZGRpbmctdG9wOiA1ZW07XHJcblx0XHRtYXJnaW4tdG9wOiAwZW07XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR6LWluZGV4OiAwO1xyXG5cdH1cclxufVxyXG5cclxuLnRhcmpldGEtd3JhcCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRwYWRkaW5nOiAwLjVlbTtcclxuXHQtd2Via2l0LXBlcnNwZWN0aXZlOiA4MDA7XHJcblx0cGVyc3BlY3RpdmU6IDgwMDtcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cdFx0aGVpZ2h0OiA4M3ZoO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTB2aDtcclxuXHRcdHBhZGRpbmctbGVmdDogNGVtO1xyXG5cdFxyXG5cdH1cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcblx0XHRoZWlnaHQ6IDg3dmg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA0ZW07XHJcblx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0ICBcclxuXHR9IFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHRcdGhlaWdodDogNzd2aDtcclxuXHRcdHBhZGRpbmctbGVmdDogMGVtO1xyXG5cdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTB2aDtcclxuXHR9IFxyXG5cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblx0XHRoZWlnaHQ6IDY3dmg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwZW07XHJcblx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0XHRcclxuXHRcclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbi50YXJqZXRhIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdHdpZHRoOiAxOS41NnZ3O1xyXG5cdGhlaWdodDogNjd2aDtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMTAsIDEwLCA5KTtcclxuXHRjb2xvcjogIzE2QkZGRDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG5cdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuN3MgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiAuN3MgZWFzZTtcclxuXHRib3JkZXItcmFkaXVzOiAwLjNlbTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblx0XHRoZWlnaHQ6IDk1dmg7XHJcblx0XHR3aWR0aDogODB2dztcclxuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHRcclxuXHR9XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG5cdFx0aGVpZ2h0OiA5NXZoO1xyXG5cdFx0d2lkdGg6IDgwdnc7XHJcblx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0fSBcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblx0XHRoZWlnaHQ6IDg1dmg7XHJcblx0XHR3aWR0aDogODB2dztcclxuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHR9IFxyXG5cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblx0XHRoZWlnaHQ6IDc1dmg7XHJcblx0XHR3aWR0aDogODB2dztcclxuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHRcclxuXHR9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHRzcGFuIHtcclxuXHRcdGZvbnQtc2l6ZTogM2VtO1xyXG5cdH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG5cdHNwYW4ge1xyXG5cdFx0Zm9udC1zaXplOiAyZW07XHJcblx0fVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblx0c3BhbiB7XHJcblx0XHRmb250LXNpemU6IDEuNWVtO1xyXG5cdH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG5cdHNwYW4ge1xyXG5cdFx0Zm9udC1zaXplOiAxLjJlbTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuLmRlbGFudGUsXHJcbi5kZXRyYXMge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblx0XHJcbiAgIC5kZWxhbnRlID4gaW1nIHtcclxuXHRoZWlnaHQ6IDc1dmg7XHJcblx0d2lkdGg6IDcwdnc7XHJcblx0bWFyZ2luLXRvcDogMi41ZW07XHJcbiAgIH1cclxuXHQuZGV0cmFzID4gaW1ne1xyXG5cdFx0aGVpZ2h0OiAzNXZoO1xyXG5cdFx0d2lkdGg6IDQwdnc7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cdFxyXG5cdC5kZWxhbnRlID4gaW1nIHtcclxuXHQgaGVpZ2h0OiA2NXZoO1xyXG5cdCB3aWR0aDogNzB2dztcclxuXHQgbWFyZ2luLXRvcDogMS4yZW07XHJcblx0fVxyXG5cdCAuZGV0cmFzID4gaW1ne1xyXG5cdFx0IGhlaWdodDogMzB2aDtcclxuXHRcdCB3aWR0aDogNDB2dztcclxuXHRcdCBcclxuXHR9XHJcblx0XHJcbiB9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblx0XHJcblx0LmRlbGFudGUgPiBpbWcge1xyXG5cdCBoZWlnaHQ6IDU1dmg7XHJcblx0IHdpZHRoOiA3MHZ3O1xyXG5cdCBtYXJnaW4tdG9wOiAxLjhlbTtcclxuXHR9XHJcblx0IC5kZXRyYXMgPiBpbWd7XHJcblx0XHQgaGVpZ2h0OiAzMHZoO1xyXG5cdFx0IHdpZHRoOiA0MHZ3O1xyXG5cdFx0IFxyXG5cdH1cclxuXHRcclxuIH1cclxuXHJcbi5kZWxhbnRlID4gaW1nLC5kZXRyYXMgPiBpbWcge1xyXG5cdGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG59XHJcbi5kZXRyYXMgPiBhIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMS41cHggc29saWQgYmxhY2s7XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdFxyXG5cdFx0XHRmb250LXNpemU6IDNlbTtcclxuXHRcdFxyXG5cdH1cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcblx0XHRcclxuXHRcdGZvbnQtc2l6ZTogMmVtO1xyXG5cdFxyXG5cdH1cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblx0XHRcclxuXHRcdGZvbnQtc2l6ZTogMWVtO1xyXG5cdFxyXG5cdH1cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblx0XHRcclxuXHRcdGZvbnQtc2l6ZTogMC44ZW07XHJcblx0XHJcblx0fVxyXG59XHJcblxyXG4uZGV0cmFzIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuXHQtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG5cdC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdGZvbnQtc2l6ZTogMC44NWVtO1xyXG5cdGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcclxuXHRiYWNrZ3JvdW5kOiAjMDAwMDQ2OyBcclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFjYjVlMCwgIzAwMDA0Nik7IFxyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuXHRcdHRvIHJpZ2h0LFxyXG5cdFx0IzFjYjVlMCxcclxuXHRcdCMwMDAwNDZcclxuXHQpOyBcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRib3JkZXItcmFkaXVzOiAwLjNlbTtcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cdFx0XHJcblx0fVxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRoZWlnaHQ6IDg1dmg7XHJcblx0ICBcclxuXHR9IFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRoZWlnaHQ6IDgydmg7XHJcblx0ICBcclxuXHR9IFxyXG5cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblx0XHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0aGVpZ2h0OiA3NXZoO1xyXG5cdFxyXG5cdH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cdC5kZXRyYXMgPiBwIHtcclxuXHRcdGZvbnQtc2l6ZTogMi40ZW07XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0fVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuXHQuZGV0cmFzID4gcCB7XHJcblx0XHRmb250LXNpemU6IDEuOGVtO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblx0LmRldHJhcyA+IHAge1xyXG5cdFx0Zm9udC1zaXplOiAxLjJlbTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHR9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG5cdC5kZXRyYXMgPiBwIHtcclxuXHRcdGZvbnQtc2l6ZTogMC45ZW07XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcblxyXG4udGFyamV0YS13cmFwOmhvdmVyIC50YXJqZXRhIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4iLCIud3JhcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nLXRvcDogM2VtO1xuICAtd2Via2l0LWJveC1wYWNrOiBzcGFjZS1hcm91bmQ7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIC1tcy1mbGV4LXBhY2s6IHNwYWNlLWFyb3VuZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi90aGVhdGVyLTQwMjMyNzhfOTYwXzcyMC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC53cmFwIHtcbiAgICBwYWRkaW5nLXRvcDogOGVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAud3JhcCB7XG4gICAgcGFkZGluZy10b3A6IDhlbTtcbiAgICBtYXJnaW4tdG9wOiAwZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC53cmFwIHtcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xuICAgIG1hcmdpbi10b3A6IDBlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLndyYXAge1xuICAgIHBhZGRpbmctdG9wOiA1ZW07XG4gICAgbWFyZ2luLXRvcDogMGVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMDtcbiAgfVxufVxuXG4udGFyamV0YS13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogODAwO1xuICBwZXJzcGVjdGl2ZTogODAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnRhcmpldGEtd3JhcCB7XG4gICAgaGVpZ2h0OiA4M3ZoO1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gICAgcGFkZGluZy1sZWZ0OiA0ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnRhcmpldGEtd3JhcCB7XG4gICAgaGVpZ2h0OiA4N3ZoO1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gICAgcGFkZGluZy1sZWZ0OiA0ZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50YXJqZXRhLXdyYXAge1xuICAgIGhlaWdodDogNzd2aDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAudGFyamV0YS13cmFwIHtcbiAgICBoZWlnaHQ6IDY3dmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cblxuLnRhcmpldGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxOS41NnZ3O1xuICBoZWlnaHQ6IDY3dmg7XG4gIGJhY2tncm91bmQ6ICMwYTBhMDk7XG4gIGNvbG9yOiAjMTZCRkZEO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnRhcmpldGEge1xuICAgIGhlaWdodDogOTV2aDtcbiAgICB3aWR0aDogODB2dztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnRhcmpldGEge1xuICAgIGhlaWdodDogOTV2aDtcbiAgICB3aWR0aDogODB2dztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRhcmpldGEge1xuICAgIGhlaWdodDogODV2aDtcbiAgICB3aWR0aDogODB2dztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnRhcmpldGEge1xuICAgIGhlaWdodDogNzV2aDtcbiAgICB3aWR0aDogODB2dztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG4uZGVsYW50ZSxcbi5kZXRyYXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmRlbGFudGUgPiBpbWcge1xuICAgIGhlaWdodDogNzV2aDtcbiAgICB3aWR0aDogNzB2dztcbiAgICBtYXJnaW4tdG9wOiAyLjVlbTtcbiAgfVxuXG4gIC5kZXRyYXMgPiBpbWcge1xuICAgIGhlaWdodDogMzV2aDtcbiAgICB3aWR0aDogNDB2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZGVsYW50ZSA+IGltZyB7XG4gICAgaGVpZ2h0OiA2NXZoO1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIG1hcmdpbi10b3A6IDEuMmVtO1xuICB9XG5cbiAgLmRldHJhcyA+IGltZyB7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHdpZHRoOiA0MHZ3O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5kZWxhbnRlID4gaW1nIHtcbiAgICBoZWlnaHQ6IDU1dmg7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgbWFyZ2luLXRvcDogMS44ZW07XG4gIH1cblxuICAuZGV0cmFzID4gaW1nIHtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgd2lkdGg6IDQwdnc7XG4gIH1cbn1cbi5kZWxhbnRlID4gaW1nLCAuZGV0cmFzID4gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG59XG5cbi5kZXRyYXMgPiBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCBibGFjaztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5kZXRyYXMgPiBhIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZGV0cmFzID4gYSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmRldHJhcyA+IGEge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5kZXRyYXMgPiBhIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG59XG5cbi5kZXRyYXMge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk94eWdlblwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDQ2O1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFjYjVlMCwgIzAwMDA0Nik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFjYjVlMCwgIzAwMDA0Nik7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5kZXRyYXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODV2aDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZGV0cmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgydmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmRldHJhcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3NXZoO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5kZXRyYXMgPiBwIHtcbiAgICBmb250LXNpemU6IDIuNGVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmRldHJhcyA+IHAge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZGV0cmFzID4gcCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5kZXRyYXMgPiBwIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbn1cbi50YXJqZXRhLXdyYXA6aG92ZXIgLnRhcmpldGEge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieListComponent = class MovieListComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MovieListComponent.prototype, "movies", void 0);
MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-list/movie-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-list.component.scss */ "./src/app/components/movie-list/movie-list.component.scss")).default]
    })
], MovieListComponent);



/***/ }),

/***/ "./src/app/components/movies/movies.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/movies/movies.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-content: space-around;\n  padding-top: 3em;\n  -webkit-box-pack: space-around;\n  -webkit-justify-content: space-around;\n  -ms-flex-pack: space-around;\n  background-image: url('theater-4023278_960_720.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n}\n@media only screen and (max-width: 1024px) {\n  .wrap {\n    padding-top: 0em;\n    margin-top: 0em;\n    grid-template-columns: repeat(1, 1fr);\n    justify-content: center;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .wrap {\n    padding-top: 0em;\n    margin-top: 0em;\n    grid-template-columns: repeat(1, 1fr);\n    justify-content: center;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .wrap {\n    padding-top: 0em;\n    margin-top: 0em;\n    grid-template-columns: repeat(1, 1fr);\n    justify-content: center;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .wrap {\n    padding-top: 0em;\n    margin-top: 0em;\n    grid-template-columns: repeat(1, 1fr);\n    justify-content: center;\n  }\n}\n.tarjeta-wrap {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 0.5em;\n  perspective: 800;\n}\n@media only screen and (max-width: 1024px) {\n  .tarjeta-wrap {\n    height: 83vh;\n    margin-bottom: 10vh;\n    padding-left: 4em;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .tarjeta-wrap {\n    height: 87vh;\n    margin-bottom: 10vh;\n    padding-left: 4em;\n    align-self: center;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .tarjeta-wrap {\n    height: 77vh;\n    padding-left: 0em;\n    align-self: center;\n    margin-bottom: 10vh;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .tarjeta-wrap {\n    height: 67vh;\n    margin-bottom: 10vh;\n    padding-left: 0em;\n    align-self: center;\n  }\n}\n.tarjeta {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 19.56vw;\n  height: 67vh;\n  background: #0a0a09;\n  color: #16BFFD;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: 0.7s ease;\n  border-radius: 0.3em;\n  text-align: center;\n  align-self: center;\n}\n@media only screen and (max-width: 1024px) {\n  .tarjeta {\n    height: 95vh;\n    width: 80vw;\n    align-self: center;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .tarjeta {\n    height: 95vh;\n    width: 80vw;\n    align-self: center;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .tarjeta {\n    height: 85vh;\n    width: 80vw;\n    align-self: center;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .tarjeta {\n    height: 75vh;\n    width: 80vw;\n    align-self: center;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  span {\n    font-size: 3em;\n  }\n}\n@media only screen and (max-width: 800px) {\n  span {\n    font-size: 2em;\n  }\n}\n@media only screen and (max-width: 600px) {\n  span {\n    font-size: 1.5em;\n  }\n}\n@media only screen and (max-width: 400px) {\n  span {\n    font-size: 1.2em;\n  }\n}\n.delante,\n.detras {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n@media only screen and (max-width: 1024px) {\n  .delante > img {\n    height: 75vh;\n    width: 70vw;\n    margin-top: 2.5em;\n  }\n\n  .detras > img {\n    height: 35vh;\n    width: 40vw;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .delante > img {\n    height: 65vh;\n    width: 70vw;\n    margin-top: 1.2em;\n  }\n\n  .detras > img {\n    height: 30vh;\n    width: 40vw;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .delante > img {\n    height: 55vh;\n    width: 70vw;\n    margin-top: 1.8em;\n  }\n\n  .detras > img {\n    height: 30vh;\n    width: 40vw;\n  }\n}\n.delante > img, .detras > img {\n  border-radius: 0.3em;\n}\n.detras > a {\n  color: white;\n  border-bottom: 1.5px solid black;\n}\n@media only screen and (max-width: 1024px) {\n  .detras > a {\n    font-size: 3em;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .detras > a {\n    font-size: 2em;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .detras > a {\n    font-size: 1em;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .detras > a {\n    font-size: 0.8em;\n  }\n}\n.detras {\n  transform: rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 0.85em;\n  font-family: \"Oxygen\", sans-serif;\n  background: #000046;\n  background: linear-gradient(to right, #1cb5e0, #000046);\n  flex-wrap: wrap;\n  flex-direction: column;\n  border-radius: 0.3em;\n}\n@media only screen and (max-width: 800px) {\n  .detras {\n    width: 100%;\n    height: 85vh;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .detras {\n    width: 100%;\n    height: 82vh;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .detras {\n    width: 100%;\n    height: 75vh;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  .detras > p {\n    font-size: 2.4em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .detras > p {\n    font-size: 1.8em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .detras > p {\n    font-size: 1.2em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n@media only screen and (max-width: 400px) {\n  .detras > p {\n    font-size: 0.9em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n.tarjeta-wrap:hover .tarjeta {\n  transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvQzpcXFVzZXJzXFxtaWp1YVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXEFuZ3VsYXJNb3ZpZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1vdmllc1xcbW92aWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBT0EsOEJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBRUEsb0RBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ05EO0FET0M7RUFwQkQ7SUFzQkUsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EscUNBQUE7SUFDQSx1QkFBQTtFQ0xBO0FBQ0Y7QURPQztFQTVCRDtJQTZCRSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxxQ0FBQTtJQUNBLHVCQUFBO0VDSkE7QUFDRjtBRE1DO0VBbkNEO0lBb0NFLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLHFDQUFBO0lBQ0EsdUJBQUE7RUNIQTtBQUNGO0FETUM7RUEzQ0Q7SUE0Q0UsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EscUNBQUE7SUFDQSx1QkFBQTtFQ0hBO0FBQ0Y7QURPQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7QUNKRDtBREtDO0VBUEQ7SUFRRSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQ0ZBO0FBQ0Y7QURJQztFQWJEO0lBY0UsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ0RBO0FBQ0Y7QURHQztFQXBCRDtJQXFCRSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDQUE7QUFDRjtBREVDO0VBM0JEO0lBNEJFLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNDQTtBQUNGO0FES0E7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLDRCQUFBO0VBRUEscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGRDtBREdDO0VBaEJEO0lBaUJFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNBQTtBQUNGO0FERUM7RUF0QkQ7SUF1QkUsWUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQ0NBO0FBQ0Y7QURBQztFQTNCRDtJQTRCRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDR0E7QUFDRjtBRERDO0VBakNEO0lBa0NFLFlBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUNJQTtBQUNGO0FEREE7RUFDQztJQUNDLGNBQUE7RUNJQTtBQUNGO0FEREE7RUFDQztJQUNDLGNBQUE7RUNHQTtBQUNGO0FEQUE7RUFDQztJQUNDLGdCQUFBO0VDRUE7QUFDRjtBRENBO0VBQ0M7SUFDQyxnQkFBQTtFQ0NBO0FBQ0Y7QURJQTs7RUFFQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FDRkQ7QURLQTtFQUVHO0lBQ0YsWUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtFQ0hDOztFREtEO0lBQ0MsWUFBQTtJQUNBLFdBQUE7RUNGQTtBQUNGO0FES0E7RUFFQztJQUNDLFlBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7RUNKQTs7RURNQTtJQUNDLFlBQUE7SUFDQSxXQUFBO0VDSEQ7QUFDRjtBRFFBO0VBRUM7SUFDQyxZQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0VDUEE7O0VEU0E7SUFDQyxZQUFBO0lBQ0EsV0FBQTtFQ05EO0FBQ0Y7QURXQTtFQUNDLG9CQUFBO0FDVEQ7QURXQTtFQUNDLFlBQUE7RUFDQSxnQ0FBQTtBQ1JEO0FEU0M7RUFIRDtJQUtHLGNBQUE7RUNQRDtBQUNGO0FEU0M7RUFSRDtJQVVFLGNBQUE7RUNQQTtBQUNGO0FEU0M7RUFiRDtJQWVFLGNBQUE7RUNQQTtBQUNGO0FEU0M7RUFsQkQ7SUFvQkUsZ0JBQUE7RUNQQTtBQUNGO0FEV0E7RUFFQywwQkFBQTtFQUlBLGFBQUE7RUFJQSx1QkFBQTtFQUlBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDRyx1QkFBQTtFQUNILGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUVBLHVEQUFBO0VBS0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNaRDtBRGdCQztFQWxDRDtJQW1DRSxXQUFBO0lBQ0EsWUFBQTtFQ2JBO0FBQ0Y7QURlQztFQXZDRDtJQXdDRSxXQUFBO0lBQ0EsWUFBQTtFQ1pBO0FBQ0Y7QURlQztFQTdDRDtJQStDRSxXQUFBO0lBQ0EsWUFBQTtFQ2JBO0FBQ0Y7QURnQkE7RUFDQztJQUNDLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQ2JBO0FBQ0Y7QURlQTtFQUNDO0lBQ0MsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0VDYkE7QUFDRjtBRGVBO0VBQ0M7SUFDQyxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7RUNiQTtBQUNGO0FEZUE7RUFDQztJQUNDLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQ2JBO0FBQ0Y7QURrQkE7RUFFQywwQkFBQTtBQ2hCRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWVzL21vdmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0cGFkZGluZy10b3A6IDNlbTtcclxuXHRcclxuXHRcclxuXHQvLyBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHQvLyBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0Ly8gZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0Ly8gZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWJveC1wYWNrOiBzcGFjZS1hcm91bmQ7XHJcblx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHQtbXMtZmxleC1wYWNrOiBzcGFjZS1hcm91bmQ7XHJcblx0XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3RoZWF0ZXItNDAyMzI3OF85NjBfNzIwLmpwZycpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cdFx0XHJcblx0XHRwYWRkaW5nLXRvcDogMGVtO1xyXG5cdFx0bWFyZ2luLXRvcDogMGVtO1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuXHR9XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG5cdFx0cGFkZGluZy10b3A6IDBlbTtcclxuXHRcdG1hcmdpbi10b3A6IDBlbTtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQgIFxyXG5cdH0gXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cdFx0cGFkZGluZy10b3A6IDBlbTtcclxuXHRcdG1hcmdpbi10b3A6IDBlbTtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQgIFxyXG5cdH0gXHJcblxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHRcdHBhZGRpbmctdG9wOiAwZW07XHJcblx0XHRtYXJnaW4tdG9wOiAwZW07XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHJcblx0fVxyXG59XHJcblxyXG4udGFyamV0YS13cmFwIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdHBhZGRpbmc6IDAuNWVtO1xyXG5cdC13ZWJraXQtcGVyc3BlY3RpdmU6IDgwMDtcclxuXHRwZXJzcGVjdGl2ZTogODAwO1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblx0XHRoZWlnaHQ6IDgzdmg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA0ZW07XHJcblx0XHJcblx0fVxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuXHRcdGhlaWdodDogODd2aDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwdmg7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDRlbTtcclxuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHQgIFxyXG5cdH0gXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cdFx0aGVpZ2h0OiA3N3ZoO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwZW07XHJcblx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG5cdH0gXHJcblxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHRcdGhlaWdodDogNjd2aDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwdmg7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDBlbTtcclxuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHRcdFxyXG5cdFxyXG5cdH1cclxuXHRcclxufVxyXG5cclxuLnRhcmpldGEge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0d2lkdGg6IDE5LjU2dnc7XHJcblx0aGVpZ2h0OiA2N3ZoO1xyXG5cdGJhY2tncm91bmQ6IHJnYigxMCwgMTAsIDkpO1xyXG5cdGNvbG9yOiAjMTZCRkZEO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC43cyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IC43cyBlYXNlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdGhlaWdodDogOTV2aDtcclxuXHRcdHdpZHRoOiA4MHZ3O1xyXG5cdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFxyXG5cdH1cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcblx0XHRoZWlnaHQ6IDk1dmg7XHJcblx0XHR3aWR0aDogODB2dztcclxuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHR9IFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHRcdGhlaWdodDogODV2aDtcclxuXHRcdHdpZHRoOiA4MHZ3O1xyXG5cdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdH0gXHJcblxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHRcdGhlaWdodDogNzV2aDtcclxuXHRcdHdpZHRoOiA4MHZ3O1xyXG5cdFx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdFxyXG5cdH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cdHNwYW4ge1xyXG5cdFx0Zm9udC1zaXplOiAzZW07XHJcblx0fVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcblx0c3BhbiB7XHJcblx0XHRmb250LXNpemU6IDJlbTtcclxuXHR9XHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHRzcGFuIHtcclxuXHRcdGZvbnQtc2l6ZTogMS41ZW07XHJcblx0fVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblx0c3BhbiB7XHJcblx0XHRmb250LXNpemU6IDEuMmVtO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG4uZGVsYW50ZSxcclxuLmRldHJhcyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHQtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcclxuICAgLmRlbGFudGUgPiBpbWcge1xyXG5cdGhlaWdodDogNzV2aDtcclxuXHR3aWR0aDogNzB2dztcclxuXHRtYXJnaW4tdG9wOiAyLjVlbTtcclxuICAgfVxyXG5cdC5kZXRyYXMgPiBpbWd7XHJcblx0XHRoZWlnaHQ6IDM1dmg7XHJcblx0XHR3aWR0aDogNDB2dztcclxuXHRcdFxyXG5cdH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblx0XHJcblx0LmRlbGFudGUgPiBpbWcge1xyXG5cdCBoZWlnaHQ6IDY1dmg7XHJcblx0IHdpZHRoOiA3MHZ3O1xyXG5cdCBtYXJnaW4tdG9wOiAxLjJlbTtcclxuXHR9XHJcblx0IC5kZXRyYXMgPiBpbWd7XHJcblx0XHQgaGVpZ2h0OiAzMHZoO1xyXG5cdFx0IHdpZHRoOiA0MHZ3O1xyXG5cdFx0IFxyXG5cdH1cclxuXHRcclxuIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHRcclxuXHQuZGVsYW50ZSA+IGltZyB7XHJcblx0IGhlaWdodDogNTV2aDtcclxuXHQgd2lkdGg6IDcwdnc7XHJcblx0IG1hcmdpbi10b3A6IDEuOGVtO1xyXG5cdH1cclxuXHQgLmRldHJhcyA+IGltZ3tcclxuXHRcdCBoZWlnaHQ6IDMwdmg7XHJcblx0XHQgd2lkdGg6IDQwdnc7XHJcblx0XHQgXHJcblx0fVxyXG5cdFxyXG4gfVxyXG5cclxuLmRlbGFudGUgPiBpbWcsLmRldHJhcyA+IGltZyB7XHJcblx0Ym9yZGVyLXJhZGl1czogMC4zZW07XHJcbn1cclxuLmRldHJhcyA+IGEge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCBibGFjaztcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cdFx0XHJcblx0XHRcdGZvbnQtc2l6ZTogM2VtO1xyXG5cdFx0XHJcblx0fVxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuXHRcdFxyXG5cdFx0Zm9udC1zaXplOiAyZW07XHJcblx0XHJcblx0fVxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHRcdFxyXG5cdFx0Zm9udC1zaXplOiAxZW07XHJcblx0XHJcblx0fVxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHRcdFxyXG5cdFx0Zm9udC1zaXplOiAwLjhlbTtcclxuXHRcclxuXHR9XHJcbn1cclxuXHJcbi5kZXRyYXMge1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG5cdC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0LW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcblx0LXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0Zm9udC1zaXplOiAwLjg1ZW07XHJcblx0Zm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xyXG5cdGJhY2tncm91bmQ6ICMwMDAwNDY7IFxyXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWNiNWUwLCAjMDAwMDQ2KTsgXHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG5cdFx0dG8gcmlnaHQsXHJcblx0XHQjMWNiNWUwLFxyXG5cdFx0IzAwMDA0NlxyXG5cdCk7IFxyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblx0XHRcclxuXHR9XHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdGhlaWdodDogODV2aDtcclxuXHQgIFxyXG5cdH0gXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdGhlaWdodDogODJ2aDtcclxuXHQgIFxyXG5cdH0gXHJcblxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHRcclxuXHRcdHdpZHRoOjEwMCU7XHJcblx0XHRoZWlnaHQ6IDc1dmg7XHJcblx0XHJcblx0fVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblx0LmRldHJhcyA+IHAge1xyXG5cdFx0Zm9udC1zaXplOiAyLjRlbTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHR9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG5cdC5kZXRyYXMgPiBwIHtcclxuXHRcdGZvbnQtc2l6ZTogMS44ZW07XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0fVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHQuZGV0cmFzID4gcCB7XHJcblx0XHRmb250LXNpemU6IDEuMmVtO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblx0LmRldHJhcyA+IHAge1xyXG5cdFx0Zm9udC1zaXplOiAwLjllbTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdFxyXG5cdH1cclxufVxyXG5cclxuXHJcbi50YXJqZXRhLXdyYXA6aG92ZXIgLnRhcmpldGEge1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcblx0dHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbiIsIi53cmFwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmctdG9wOiAzZW07XG4gIC13ZWJraXQtYm94LXBhY2s6IHNwYWNlLWFyb3VuZDtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgLW1zLWZsZXgtcGFjazogc3BhY2UtYXJvdW5kO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL3RoZWF0ZXItNDAyMzI3OF85NjBfNzIwLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXAge1xuICAgIHBhZGRpbmctdG9wOiAwZW07XG4gICAgbWFyZ2luLXRvcDogMGVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLndyYXAge1xuICAgIHBhZGRpbmctdG9wOiAwZW07XG4gICAgbWFyZ2luLXRvcDogMGVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLndyYXAge1xuICAgIHBhZGRpbmctdG9wOiAwZW07XG4gICAgbWFyZ2luLXRvcDogMGVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLndyYXAge1xuICAgIHBhZGRpbmctdG9wOiAwZW07XG4gICAgbWFyZ2luLXRvcDogMGVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLnRhcmpldGEtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMC41ZW07XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDgwMDtcbiAgcGVyc3BlY3RpdmU6IDgwMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC50YXJqZXRhLXdyYXAge1xuICAgIGhlaWdodDogODN2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xuICAgIHBhZGRpbmctbGVmdDogNGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC50YXJqZXRhLXdyYXAge1xuICAgIGhlaWdodDogODd2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xuICAgIHBhZGRpbmctbGVmdDogNGVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudGFyamV0YS13cmFwIHtcbiAgICBoZWlnaHQ6IDc3dmg7XG4gICAgcGFkZGluZy1sZWZ0OiAwZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnRhcmpldGEtd3JhcCB7XG4gICAgaGVpZ2h0OiA2N3ZoO1xuICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XG4gICAgcGFkZGluZy1sZWZ0OiAwZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG59XG5cbi50YXJqZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTkuNTZ2dztcbiAgaGVpZ2h0OiA2N3ZoO1xuICBiYWNrZ3JvdW5kOiAjMGEwYTA5O1xuICBjb2xvcjogIzE2QkZGRDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC50YXJqZXRhIHtcbiAgICBoZWlnaHQ6IDk1dmg7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC50YXJqZXRhIHtcbiAgICBoZWlnaHQ6IDk1dmg7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50YXJqZXRhIHtcbiAgICBoZWlnaHQ6IDg1dmg7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC50YXJqZXRhIHtcbiAgICBoZWlnaHQ6IDc1dmg7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuLmRlbGFudGUsXG4uZGV0cmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5kZWxhbnRlID4gaW1nIHtcbiAgICBoZWlnaHQ6IDc1dmg7XG4gICAgd2lkdGg6IDcwdnc7XG4gICAgbWFyZ2luLXRvcDogMi41ZW07XG4gIH1cblxuICAuZGV0cmFzID4gaW1nIHtcbiAgICBoZWlnaHQ6IDM1dmg7XG4gICAgd2lkdGg6IDQwdnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmRlbGFudGUgPiBpbWcge1xuICAgIGhlaWdodDogNjV2aDtcbiAgICB3aWR0aDogNzB2dztcbiAgICBtYXJnaW4tdG9wOiAxLjJlbTtcbiAgfVxuXG4gIC5kZXRyYXMgPiBpbWcge1xuICAgIGhlaWdodDogMzB2aDtcbiAgICB3aWR0aDogNDB2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuZGVsYW50ZSA+IGltZyB7XG4gICAgaGVpZ2h0OiA1NXZoO1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIG1hcmdpbi10b3A6IDEuOGVtO1xuICB9XG5cbiAgLmRldHJhcyA+IGltZyB7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHdpZHRoOiA0MHZ3O1xuICB9XG59XG4uZGVsYW50ZSA+IGltZywgLmRldHJhcyA+IGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuXG4uZGV0cmFzID4gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgYmxhY2s7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZGV0cmFzID4gYSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmRldHJhcyA+IGEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5kZXRyYXMgPiBhIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuZGV0cmFzID4gYSB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxufVxuXG4uZGV0cmFzIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBmb250LWZhbWlseTogXCJPeHlnZW5cIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogIzAwMDA0NjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxY2I1ZTAsICMwMDAwNDYpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxY2I1ZTAsICMwMDAwNDYpO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZGV0cmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg1dmg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmRldHJhcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MnZoO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5kZXRyYXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzV2aDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZGV0cmFzID4gcCB7XG4gICAgZm9udC1zaXplOiAyLjRlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5kZXRyYXMgPiBwIHtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmRldHJhcyA+IHAge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuZGV0cmFzID4gcCB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG59XG4udGFyamV0YS13cmFwOmhvdmVyIC50YXJqZXRhIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/movies/movies.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/movies/movies.component.ts ***!
  \*******************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MoviesComponent = class MoviesComponent {
    constructor(movieService, route) {
        this.movieService = movieService;
        this.route = route;
        this.page = 0;
    } //inyectamos el servicio MovieService en el componente moviesComponent
    ngOnInit() {
        this.paramsSubscription = this.route.paramMap.subscribe(paramsMap => {
            this.getMovies(paramsMap['params']['category']); //upcoming o /movies
        });
    }
    getMovies(category) {
        this.movieService.getMovies(category, 'es-ES', '1').subscribe(res => this.movies = res['results'], error => console.log(error));
    }
    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
        console.log(this.paramsSubscription);
    }
};
MoviesComponent.ctorParameters = () => [
    { type: src_app_services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movies.component.scss */ "./src/app/components/movies/movies.component.scss")).default]
    })
], MoviesComponent);



/***/ }),

/***/ "./src/app/components/prueba/prueba.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/prueba/prueba.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".busqueda1 {\n  display: flex;\n  justify-content: center;\n  background: linear-gradient(to right, #1565C0, #b92b27);\n  color: white;\n  text-align: center;\n  padding: 0.5em 0;\n  height: 6vh;\n  width: 100vw;\n  margin-top: 3em;\n  position: fixed;\n  z-index: -1;\n}\n\ninput {\n  font-size: 1em;\n  cursor: pointer;\n  text-align: center;\n  color: white;\n  border: 2px solid #2e2be2;\n  border-radius: 3px;\n  background-color: transparent;\n  outline: none;\n}\n\n::-webkit-input-placeholder {\n  color: #E91E63;\n}\n\n:focus::-webkit-input-placeholder {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.list {\n  margin-top: 2em;\n}\n\n@media only screen and (max-width: 1024px) {\n  .busqueda1 {\n    padding-top: 3em;\n    z-index: 1;\n  }\n\n  .list {\n    padding-top: 3em;\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  .busqueda1 {\n    margin-top: 1.8em;\n    padding-top: 2em;\n    z-index: 1;\n    height: 10vh;\n    font-size: 1em;\n  }\n\n  .list {\n    margin-top: 0.8em;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .busqueda1 {\n    margin-top: 1em;\n    padding-top: 2em;\n    z-index: 1;\n    height: 10vh;\n  }\n\n  .list {\n    margin-top: 0.8em;\n  }\n}\n\n@media only screen and (max-width: 400px) {\n  .busqueda1 {\n    margin-top: 1em;\n    padding-top: 2em;\n    z-index: 1;\n    height: 10vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcnVlYmEvQzpcXFVzZXJzXFxtaWp1YVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXEFuZ3VsYXJNb3ZpZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBydWViYVxccHJ1ZWJhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BydWViYS9wcnVlYmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1REFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURHRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FEQ0U7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsVUFBQTtFQ0VKOztFREVBO0lBQ0UsZ0JBQUE7RUNDRjtBQUNGOztBREdFO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VDREo7O0VESUE7SUFDRSxpQkFBQTtFQ0RGO0FBQ0Y7O0FESUU7RUFDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VDRko7O0VES0E7SUFDRSxpQkFBQTtFQ0ZGO0FBQ0Y7O0FES0U7RUFFRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VDSko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJ1ZWJhL3BydWViYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXNxdWVkYTEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTU2NUMwLCAjYjkyYjI3KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC41ZW0gMDtcclxuICAgIGhlaWdodDogNnZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNDYsIDQzLCAyMjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgfVxyXG4gIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjRTkxRTYzOyBcclxuICAgXHJcbiAgfVxyXG4gIDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwOyBcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XHJcbiAgfVxyXG4gXHJcbiAgLmxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLmJ1c3F1ZWRhMSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzZW07XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuICAubGlzdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogM2VtO1xyXG4gIH1cclxuICAgXHJcblxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuYnVzcXVlZGExIHtcclxuICAgICAgbWFyZ2luLXRvcDogMS44ZW07XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGhlaWdodDogMTB2aDtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIC5saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDAuOGVtO1xyXG4gIH1cclxuICAgXHJcbiAgfSBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYnVzcXVlZGExIHtcclxuICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIC5saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDAuOGVtO1xyXG4gIH1cclxuICAgXHJcbiAgfSBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICBcclxuICAgIC5idXNxdWVkYTEge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGhlaWdodDogMTB2aDtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG4gIFxyXG4gICAgXHJcbiAgICBcclxuICB9IiwiLmJ1c3F1ZWRhMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNTY1QzAsICNiOTJiMjcpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC41ZW0gMDtcbiAgaGVpZ2h0OiA2dmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWFyZ2luLXRvcDogM2VtO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMmUyYmUyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0U5MUU2Mztcbn1cblxuOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYnVzcXVlZGExIHtcbiAgICBwYWRkaW5nLXRvcDogM2VtO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAubGlzdCB7XG4gICAgcGFkZGluZy10b3A6IDNlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYnVzcXVlZGExIHtcbiAgICBtYXJnaW4tdG9wOiAxLjhlbTtcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG5cbiAgLmxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDAuOGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5idXNxdWVkYTEge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICB9XG5cbiAgLmxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDAuOGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5idXNxdWVkYTEge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/prueba/prueba.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/prueba/prueba.component.ts ***!
  \*******************************************************/
/*! exports provided: PruebaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebaComponent", function() { return PruebaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movie.service */ "./src/app/services/movie.service.ts");



let PruebaComponent = class PruebaComponent {
    constructor(movieService) {
        this.movieService = movieService;
        this.movies = [];
    }
    ngOnInit() {
    }
    searchMovies(search) {
        if (search.length > 0)
            this.movieService.searchMovie(encodeURI(search)).subscribe(res => this.movies = res['results']);
        else
            this.movies = [];
    }
};
PruebaComponent.ctorParameters = () => [
    { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] }
];
PruebaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prueba',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prueba.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/prueba/prueba.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prueba.component.scss */ "./src/app/components/prueba/prueba.component.scss")).default]
    })
], PruebaComponent);



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MovieService = class MovieService {
    constructor(http) {
        this.http = http;
    } //inyectamos el httpClient de angular para hacer AJAX
    getMovies(category, language, page) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${category}?api_key=3d602d7ff833ce531e0c9f46a78acb81&language=${language}&page=${page}`);
    }
    getDetail(id, language, page) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3d602d7ff833ce531e0c9f46a78acb81&language=${language}&page=${page}`);
    }
    searchMovie(search) {
        return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=3d602d7ff833ce531e0c9f46a78acb81&language=en-US&page=1&include_adult=false&query=${search}`);
    }
};
MovieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MovieService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mijua\OneDrive\Escritorio\AngularMovies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
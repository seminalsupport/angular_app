function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/landingpage/landingpage.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/landingpage/landingpage.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountLandingpageLandingpageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <!-- <div class=\"row no-gutters vh-100 loader-screen\">\n        <div class=\"col align-self-center text-white text-center\">\n            <img src=\"assets/img/logo.png\" alt=\"logo\">\n            <h1><span class=\"font-weight-light\">Namma</span>BBMP</h1>\n            <div class=\"laoderhorizontal\"><div></div><div></div><div></div><div></div></div>\n        </div>\n    </div>-->\n    <div class=\"row no-gutters vh-100 proh bg-template\">\n         <!-- <img src=\"assets/img/seminallogo.png\" alt=\"logo\" class=\"apple right-image align-self-center\"> -->\n             <!--<img src=\"assets/img/seminallogo.png\" alt=\"logo\" class=\"logo-small\">-->\n        <div class=\"col align-self-center px-3  text-center\">\n            <!-- <img src=\"img/logo.png\" alt=\"logo\" class=\"logo-small\">-->\n            <h2 class=\"text-white\"><span class=\"font-weight-light\"></span>Welcome to WTAX Dashboard</h2> \n            <form class=\"form-container shadow\">\n                \n\n                \n<br>\n<br>\n\n                <div class=\"form-group\">\n                   \n                       <select class=\"form-control form-control-lg\">\n                        <option value=\"0\">- Please Select City -</option>\n                        <option value=\"1\" >Ranebennur</option>\n                        <option value=\"2\" >Harihara</option>\n                        <option value=\"3\" >Kundapur</option>\n                        </select>\n                </div>\n\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-auto\">\n                        <a routerLink=\"/home\" class=\"btn btn-lg btn-default btn-rounded shadow\"><span>Go</span><i class=\"material-icons\">arrow_forward</i></a>       \n                        <br>\n                        <br>\n                        <a routerLink=\"/login\">Logout</a> here.\n                    </div>\n                </div>\n\n                \n            </form>\n            <p class=\"text-center text-white\">\n                Powered By- Seminal Softwares Pvt Ltd, Vijayapur<br>\n               \n            </p>\n        </div>\n    </div>\n    \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <!-- <div class=\"row no-gutters vh-100 loader-screen\">\n    <div class=\"col align-self-center text-white text-center\">\n        <img src=\"assets/img/logo.png\" alt=\"logo\">\n        <h1><span class=\"font-weight-light\">Namma </span>BBMP</h1>\n        <div class=\"laoderhorizontal\"><div></div><div></div><div></div><div></div></div>\n    </div>\n</div>-->\n<div class=\"row no-gutters vh-100 proh bg-template\">\n    <!-- <img src=\"img/apple.png\" alt=\"logo\" class=\"apple right-image align-self-center\"> -->\n    <div class=\"col align-self-center px-3 text-center\">\n      <!--  <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"logo-small\">-->\n      <h2 class=\"text-white \"><span class=\"font-weight-light\">Sign</span>In</h2>\n        <form class=\"form-signin shadow\">\n            <div class=\"form-group float-label\">\n                <input type=\"text\" id=\"inputUsername\" class=\"form-control\" required autofocus>\n                <label for=\"inputUsername\" class=\"form-control-label\">Username</label>\n            </div>\n\n            <div class=\"form-group float-label\">\n                <input type=\"password\" id=\"inputPassword\" class=\"form-control\" required>\n                <label for=\"inputPassword\" class=\"form-control-label\">Password</label>\n            </div>\n\n            <div class=\"form-group my-4 text-left\">\n                <div class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"rememberme\">\n                    <label class=\"custom-control-label\" for=\"rememberme\">Remember Me</label>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-auto\">\n                    <a routerLink=\"/landingpage\" class=\"btn btn-lg btn-default btn-rounded shadow\"><span>Sign in</span><i class=\"material-icons\">arrow_forward</i></a>\n                </div>\n               <!-- <div class=\"col align-self-center text-right pl-0\">\n                    <a href=\"forgot-password.html\">Forgot Password?</a>\n                </div>-->\n            </div>\n        </form>\n       <!-- <p class=\"text-center text-white\">\n            Don't have account yet?<br>\n            <a routerLink=\"/landingpage\">Sign Up</a> here.\n        </p>-->\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/account/account-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/account/account-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AccountRoutingModule */

  /***/
  function srcAppAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function () {
      return AccountRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/account/login/login.component.ts");
    /* harmony import */


    var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./landingpage/landingpage.component */
    "./src/app/account/landingpage/landingpage.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'landingpage',
      component: _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_4__["LandingpageComponent"]
    }];

    var AccountRoutingModule = /*#__PURE__*/_createClass(function AccountRoutingModule() {
      _classCallCheck(this, AccountRoutingModule);
    });

    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccountRoutingModule);
    /***/
  },

  /***/
  "./src/app/account/account.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/account/account.module.ts ***!
    \*******************************************/

  /*! exports provided: AccountModule */

  /***/
  function srcAppAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
      return AccountModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _account_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./account-routing.module */
    "./src/app/account/account-routing.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/account/login/login.component.ts");
    /* harmony import */


    var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./landingpage/landingpage.component */
    "./src/app/account/landingpage/landingpage.component.ts");

    var AccountModule = /*#__PURE__*/_createClass(function AccountModule() {
      _classCallCheck(this, AccountModule);
    });

    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_4__["LandingpageComponent"]],
      imports: [_account_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountRoutingModule"]]
    })], AccountModule);
    /***/
  },

  /***/
  "./src/app/account/landingpage/landingpage.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/account/landingpage/landingpage.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountLandingpageLandingpageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-container {\r\n    border-radius: 20px;\r\n    background-color: #ffffff;\r\n    padding: 20px;\r\n    margin: 30px auto;\r\n    max-width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sYW5kaW5ncGFnZS9sYW5kaW5ncGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2xhbmRpbmdwYWdlL2xhbmRpbmdwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/account/landingpage/landingpage.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/account/landingpage/landingpage.component.ts ***!
    \**************************************************************/

  /*! exports provided: LandingpageComponent */

  /***/
  function srcAppAccountLandingpageLandingpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function () {
      return LandingpageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LandingpageComponent = /*#__PURE__*/function () {
      function LandingpageComponent() {
        _classCallCheck(this, LandingpageComponent);
      }

      _createClass(LandingpageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingpageComponent;
    }();

    LandingpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landingpage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landingpage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/landingpage/landingpage.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landingpage.component.css */
      "./src/app/account/landingpage/landingpage.component.css"))["default"]]
    })], LandingpageComponent);
    /***/
  },

  /***/
  "./src/app/account/login/login.component.css":
  /*!***************************************************!*\
    !*** ./src/app/account/login/login.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/account/login/login.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/account/login/login.component.ts ***!
    \**************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAccountLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/account/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  }
}]);
//# sourceMappingURL=account-account-module-es5.js.map
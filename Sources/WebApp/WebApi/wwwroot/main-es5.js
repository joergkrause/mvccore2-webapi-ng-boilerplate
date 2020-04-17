function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./modules/admin/admin.module": "./src/app/modules/admin/admin.module.ts"
    };

    function webpackAsyncContext(req) {
      return Promise.resolve().then(function () {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        var id = map[req];
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: getBaseUrl, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _guards_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./guards/index */
    "./src/app/guards/index.ts");
    /* harmony import */


    var _components_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/index */
    "./src/app/components/index.ts");
    /* harmony import */


    var _services_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/index */
    "./src/app/services/index.ts");
    /* harmony import */


    var _configurations_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./configurations/routes */
    "./src/app/configurations/routes.ts");
    /* harmony import */


    var _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./modules/admin/admin.module */
    "./src/app/modules/admin/admin.module.ts");
    /* harmony import */


    var _components_root_site_root_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/root/site-root.component */
    "./src/app/components/root/site-root.component.ts");
    /* harmony import */


    var _components_info_site_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/info/site-info.component */
    "./src/app/components/info/site-info.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_login_login_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/login/login-form.component */
    "./src/app/components/login/login-form.component.ts");
    /* harmony import */


    var _components_logout_logout_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/logout/logout-form.component */
    "./src/app/components/logout/logout-form.component.ts");
    /* harmony import */


    var _components_registration_registration_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/registration/registration-form.component */
    "./src/app/components/registration/registration-form.component.ts");
    /* harmony import */


    var _components_profile_profile_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/profile/profile-form.component */
    "./src/app/components/profile/profile-form.component.ts"); // The admin part is separated to it's own module


    function getBaseUrl() {
      return _services_index__WEBPACK_IMPORTED_MODULE_12__["ConfigService"].apiURI;
    }

    var material = [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"]];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_components_root_site_root_component__WEBPACK_IMPORTED_MODULE_15__["SiteRootComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [// router config
      _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__["HashLocationStrategy"]
      }, // handle Bearer token for all requests
      {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _services_index__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptorService"],
        multi: true
      }, // Nswag's generated code can be configured here
      {
        provide: _services_index__WEBPACK_IMPORTED_MODULE_12__["API_BASE_URL"],
        useFactory: getBaseUrl
      }, // regular demo data
      _services_index__WEBPACK_IMPORTED_MODULE_12__["MachineDataService"], // Account data, user details
      _services_index__WEBPACK_IMPORTED_MODULE_12__["AccountService"], // Login/Logout
      _services_index__WEBPACK_IMPORTED_MODULE_12__["AuthService"], // generic publish/subscribe
      _services_index__WEBPACK_IMPORTED_MODULE_12__["EmitterService"], // APIs to server
      _services_index__WEBPACK_IMPORTED_MODULE_12__["ApiAccounts"], _services_index__WEBPACK_IMPORTED_MODULE_12__["ApiAuth"], _services_index__WEBPACK_IMPORTED_MODULE_12__["ApiMachines"], // prevent routes for non-authenticated users
      _guards_index__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
      imports: [[_modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_14__["AdminModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_configurations_routes__WEBPACK_IMPORTED_MODULE_13__["routesConfig"]), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]].concat(material)]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_components_root_site_root_component__WEBPACK_IMPORTED_MODULE_15__["SiteRootComponent"], _components_info_site_info_component__WEBPACK_IMPORTED_MODULE_16__["SiteInfoComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"], _components_login_login_form_component__WEBPACK_IMPORTED_MODULE_18__["LoginFormComponent"], _components_logout_logout_form_component__WEBPACK_IMPORTED_MODULE_19__["LogoutFormComponent"], _components_registration_registration_form_component__WEBPACK_IMPORTED_MODULE_20__["RegistrationFormComponent"], _components_profile_profile_form_component__WEBPACK_IMPORTED_MODULE_21__["ProfileFormComponent"]],
        imports: [_modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_14__["AdminModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_index__WEBPACK_IMPORTED_MODULE_11__["SiteRootComponent"], _components_index__WEBPACK_IMPORTED_MODULE_11__["SiteInfoComponent"], _components_index__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], _components_index__WEBPACK_IMPORTED_MODULE_11__["LoginFormComponent"], _components_index__WEBPACK_IMPORTED_MODULE_11__["LogoutFormComponent"], _components_index__WEBPACK_IMPORTED_MODULE_11__["RegistrationFormComponent"], _components_index__WEBPACK_IMPORTED_MODULE_11__["ProfileFormComponent"]],
          imports: [_modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_14__["AdminModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_configurations_routes__WEBPACK_IMPORTED_MODULE_13__["routesConfig"]), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]].concat(material),
          providers: [// router config
          _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__["HashLocationStrategy"]
          }, // handle Bearer token for all requests
          {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _services_index__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptorService"],
            multi: true
          }, // Nswag's generated code can be configured here
          {
            provide: _services_index__WEBPACK_IMPORTED_MODULE_12__["API_BASE_URL"],
            useFactory: getBaseUrl
          }, // regular demo data
          _services_index__WEBPACK_IMPORTED_MODULE_12__["MachineDataService"], // Account data, user details
          _services_index__WEBPACK_IMPORTED_MODULE_12__["AccountService"], // Login/Logout
          _services_index__WEBPACK_IMPORTED_MODULE_12__["AuthService"], // generic publish/subscribe
          _services_index__WEBPACK_IMPORTED_MODULE_12__["EmitterService"], // APIs to server
          _services_index__WEBPACK_IMPORTED_MODULE_12__["ApiAccounts"], _services_index__WEBPACK_IMPORTED_MODULE_12__["ApiAuth"], _services_index__WEBPACK_IMPORTED_MODULE_12__["ApiMachines"], // prevent routes for non-authenticated users
          _guards_index__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
          bootstrap: [_components_index__WEBPACK_IMPORTED_MODULE_11__["SiteRootComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/index */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function DashboardComponent_mat_card_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
      }
    }

    function DashboardComponent_li_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var machine_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", machine_r2.name, " ( ", machine_r2.location, " ) ");
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(accountService, machineService) {
        _classCallCheck(this, DashboardComponent);

        this.accountService = accountService;
        this.machineService = machineService;
        this.machines = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // Get account information
          this.accountService.getUserDetails().then(function (user) {
            return _this.user = user;
          })["catch"](function (error) {
            return _this.error = error.message;
          });
          this.machineService.getMachines().then(function (machines) {
            return _this.machines = machines;
          })["catch"](function (error) {
            return _this.error = error.message;
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["MachineDataService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 50,
      vars: 5,
      consts: [[4, "ngIf"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""], [4, "ngFor", "ngForOf"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_mat_card_2_Template, 2, 1, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "User Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profile Info and Claims");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "dl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "dd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "E-Mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "dd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "DETAILS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "MORE...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Machine Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Data from Demo Database");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "dl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Number of Machines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "dd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "List of Machines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "dd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DashboardComponent_li_44_Template, 2, 2, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "MANAGE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "MORE...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.machines.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.machines);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQzpcXEFwcHNcXERlbW9zXFxjb3JlMy1ib2lsZXJwbGF0ZVxcU291cmNlc1xcV2ViQXBwXFxGcm9udEVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQ0NsQjs7QURFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUNDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iLCIuZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: 'dashboard.component.html',
          styleUrls: ['dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: _services_index__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
        }, {
          type: _services_index__WEBPACK_IMPORTED_MODULE_1__["MachineDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/index.ts":
  /*!*************************************!*\
    !*** ./src/app/components/index.ts ***!
    \*************************************/

  /*! exports provided: SiteRootComponent, SiteInfoComponent, DashboardComponent, LoginFormComponent, LogoutFormComponent, RegistrationFormComponent, ProfileFormComponent */

  /***/
  function srcAppComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _root_site_root_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./root/site-root.component */
    "./src/app/components/root/site-root.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SiteRootComponent", function () {
      return _root_site_root_component__WEBPACK_IMPORTED_MODULE_0__["SiteRootComponent"];
    });
    /* harmony import */


    var _info_site_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./info/site-info.component */
    "./src/app/components/info/site-info.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SiteInfoComponent", function () {
      return _info_site_info_component__WEBPACK_IMPORTED_MODULE_1__["SiteInfoComponent"];
    });
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"];
    });
    /* harmony import */


    var _login_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login-form.component */
    "./src/app/components/login/login-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
      return _login_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"];
    });
    /* harmony import */


    var _logout_logout_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./logout/logout-form.component */
    "./src/app/components/logout/logout-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LogoutFormComponent", function () {
      return _logout_logout_form_component__WEBPACK_IMPORTED_MODULE_4__["LogoutFormComponent"];
    });
    /* harmony import */


    var _registration_registration_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registration/registration-form.component */
    "./src/app/components/registration/registration-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function () {
      return _registration_registration_form_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationFormComponent"];
    });
    /* harmony import */


    var _profile_profile_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile/profile-form.component */
    "./src/app/components/profile/profile-form.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileFormComponent", function () {
      return _profile_profile_form_component__WEBPACK_IMPORTED_MODULE_6__["ProfileFormComponent"];
    }); // Globally used pages directly loaded by router
    // All working parts are in separate modules loaded on request

    /***/

  },

  /***/
  "./src/app/components/info/site-info.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/info/site-info.component.ts ***!
    \********************************************************/

  /*! exports provided: SiteInfoComponent */

  /***/
  function srcAppComponentsInfoSiteInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SiteInfoComponent", function () {
      return SiteInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SiteInfoComponent = function SiteInfoComponent() {
      _classCallCheck(this, SiteInfoComponent);
    };

    SiteInfoComponent.ɵfac = function SiteInfoComponent_Factory(t) {
      return new (t || SiteInfoComponent)();
    };

    SiteInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SiteInfoComponent,
      selectors: [["site-info"]],
      decls: 30,
      vars: 2,
      consts: [[1, "alert", "alert-info"], [1, "alert", "alert-danger"]],
      template: function SiteInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There are three pre-defined users: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Weird Guest (Login: weird@guest.com, Password: p@ssw0rd)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Doris Demo (Login: doris@demo.com, Password: p@ssw0rd)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Andy Admin (Login: andy@admin.com, Password: p@ssw0rd)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " There are three roles defined, each role has one member: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Guest (Member: Weird Guest)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User (Member: Doris Demo)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Admin (Member: Andy Admin)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "There is one Policy as a User claim defined:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "The members \"Doris Demo\" and \"Andy Admin\" have this claim.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Weird Guest has no claim and hence cannot access the backend API.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Login, Register and this Info page can be opened by all users. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "A Guard is protecting the dashboard from user not properly logged on. If you click on \"Dashboard\" as an anonymous user your're are going to be redirected to the login form.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", "{", "\"role\": \"api_access\" ", "}", "");
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiteInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'site-info',
          templateUrl: 'site-info.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login-form.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/login/login-form.component.ts ***!
    \**********************************************************/

  /*! exports provided: LoginFormComponent */

  /***/
  function srcAppComponentsLoginLoginFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
      return LoginFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/index */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginFormComponent_small_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r0.userName.valid || _r0.userName.pristine && !ctx_r2.submitted);
      }
    }

    function LoginFormComponent_small_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r0.password.valid || _r0.password.pristine && !ctx_r3.submitted);
      }
    }

    function LoginFormComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logging in...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginFormComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "An error occured:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.errors, " ");
      }
    }

    var LoginFormComponent = /*#__PURE__*/function () {
      function LoginFormComponent(authService, router, activatedRoute) {
        _classCallCheck(this, LoginFormComponent);

        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.credentials = {
          userName: '',
          password: ''
        };
      }

      _createClass(LoginFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // subscribe to router event
          this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this2.credentials.userName = param['userName'];
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // prevent memory leak by unsubscribing
          this.subscription.unsubscribe();
        }
      }, {
        key: "login",
        value: function login(_ref) {
          var _this3 = this;

          var value = _ref.value,
              valid = _ref.valid;
          this.submitted = true;
          this.isRequesting = true;
          this.errors = '';

          if (valid) {
            this.authService.login(value).then(function () {
              _this3.isRequesting = false;
              return true;
            }).then(function (result) {
              if (result) {
                _this3.router.navigate(['/dashboard']);
              }
            }, function (error) {
              return _this3.errors = error;
            });
          }
        }
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
      return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginFormComponent,
      selectors: [["login-form"]],
      decls: 24,
      vars: 5,
      consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-block"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "userName"], ["id", "userName", "type", "email", "required", "", "name", "userName", "tmFocus", "", "validateEmail", "", "placeholder", "Email", 1, "form-control", 3, "ngModel"], ["email", "ngModel"], ["class", "text-danger", 3, "hidden", 4, "ngIf"], ["for", "password"], ["id", "password", "type", "password", "required", "", "name", "password", "placeholder", "Password", "ngModel", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "text-danger", 3, "hidden"], ["role", "alert", 1, "alert", "alert-danger"]],
      template: function LoginFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            return ctx.login(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Username (eMail)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginFormComponent_small_13_Template, 2, 1, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginFormComponent_small_18_Template, 2, 1, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginFormComponent_div_22_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginFormComponent_div_23_Template, 4, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid || ctx.isRequesting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRequesting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'login-form',
          templateUrl: 'login-form.component.html'
        }]
      }], function () {
        return [{
          type: _services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/logout/logout-form.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/logout/logout-form.component.ts ***!
    \************************************************************/

  /*! exports provided: LogoutFormComponent */

  /***/
  function srcAppComponentsLogoutLogoutFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutFormComponent", function () {
      return LogoutFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/index */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LogoutFormComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You're about logging out.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LogoutFormComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You're successfully being logged out.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LogoutFormComponent = /*#__PURE__*/function () {
      function LogoutFormComponent(authService, cd) {
        var _this4 = this;

        _classCallCheck(this, LogoutFormComponent);

        this.authService = authService;
        this.cd = cd;
        this.loggedOut = false; // function returns a delayed answer to simulate something serious

        this.authService.logout().then(function () {
          return _this4.loggedOut = true;
        });
      }

      _createClass(LogoutFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this is an alternative way to get the information immediately, no weird delay 
          // this.authService.authNavStatus$.subscribe(data => this.loggedOut = data);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.cd.detectChanges();
        }
      }]);

      return LogoutFormComponent;
    }();

    LogoutFormComponent.ɵfac = function LogoutFormComponent_Factory(t) {
      return new (t || LogoutFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    LogoutFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoutFormComponent,
      selectors: [["logout-form"]],
      decls: 8,
      vars: 2,
      consts: [[1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-block"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]],
      template: function LogoutFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LogoutFormComponent_div_6_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LogoutFormComponent_div_7_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedOut);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedOut);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'logout-form',
          templateUrl: 'logout-form.component.html'
        }]
      }], function () {
        return [{
          type: _services_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/profile/profile-form.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/profile/profile-form.component.ts ***!
    \**************************************************************/

  /*! exports provided: ProfileFormComponent */

  /***/
  function srcAppComponentsProfileProfileFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileFormComponent", function () {
      return ProfileFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/index */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ProfileFormComponent = /*#__PURE__*/function () {
      function ProfileFormComponent(accountService) {
        _classCallCheck(this, ProfileFormComponent);

        this.accountService = accountService;
      }

      _createClass(ProfileFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.accountService.getUserClaims().then(function (claims) {
            return _this5.claims = claims;
          });
        }
      }, {
        key: "setProfile",
        value: function setProfile() {// TODO: Write profile
        }
      }]);

      return ProfileFormComponent;
    }();

    ProfileFormComponent.ɵfac = function ProfileFormComponent_Factory(t) {
      return new (t || ProfileFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["AccountService"]));
    };

    ProfileFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileFormComponent,
      selectors: [["profile-form"]],
      decls: 2,
      vars: 3,
      template: function ProfileFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "json");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.claims));
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'profile-form',
          templateUrl: './profile-form.component.html'
        }]
      }], function () {
        return [{
          type: _services_index__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/registration/registration-form.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/registration/registration-form.component.ts ***!
    \************************************************************************/

  /*! exports provided: RegistrationFormComponent */

  /***/
  function srcAppComponentsRegistrationRegistrationFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function () {
      return RegistrationFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/index */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegistrationFormComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registering...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationFormComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Oops!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.errors, " ");
      }
    }

    var RegistrationFormComponent = /*#__PURE__*/function () {
      function RegistrationFormComponent(authService, router) {
        _classCallCheck(this, RegistrationFormComponent);

        this.authService = authService;
        this.router = router;
        this.submitted = false;
      }

      _createClass(RegistrationFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registerUser",
        value: function registerUser(_ref2) {
          var _this6 = this;

          var value = _ref2.value,
              valid = _ref2.valid;
          this.submitted = true;
          this.isRequesting = true;
          this.errors = '';

          if (valid) {
            this.authService.register(value).then(function () {
              return _this6.isRequesting = false;
            }).then(function (result) {
              if (result) {
                _this6.router.navigate(['/login'], {
                  queryParams: {
                    brandNew: true,
                    email: value.email
                  }
                });
              }
            }, function (errors) {
              return _this6.errors = errors.error ? Object.values(errors.error).join('') : JSON.stringify(errors);
            });
          }
        }
      }]);

      return RegistrationFormComponent;
    }();

    RegistrationFormComponent.ɵfac = function RegistrationFormComponent_Factory(t) {
      return new (t || RegistrationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    RegistrationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationFormComponent,
      selectors: [["registration-form"]],
      decls: 37,
      vars: 4,
      consts: [["id", "reg-form", 1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-header", "bg-white"], [1, "card-title"], [1, "card-block"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "first-name"], ["id", "first-name", "type", "text", "required", "", "name", "firstName", "placeholder", "Your first name", "tmFocus", "", "ngModel", "", 1, "form-control"], ["for", "last-name"], ["id", "last-name", "type", "text", "required", "", "name", "lastName", "placeholder", "Your last name", "ngModel", "", 1, "form-control"], ["for", "email"], ["id", "email", "type", "text", "required", "", "name", "email", "validateEmail", "", "placeholder", "Email", "ngModel", "", 1, "form-control"], ["email", "ngModel"], [1, "text-danger", 3, "hidden"], ["for", "password"], ["id", "password", "type", "password", "required", "", "name", "password", "placeholder", "Password", "ngModel", "", 1, "form-control"], ["for", "location"], ["id", "location", "type", "text", "required", "", "name", "location", "placeholder", "Location", "ngModel", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"]],
      template: function RegistrationFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create your account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationFormComponent_Template_form_ngSubmit_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            return ctx.registerUser(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Please enter a valid email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegistrationFormComponent_div_35_Template, 2, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegistrationFormComponent_div_36_Template, 4, 1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine && !ctx.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid || ctx.isRequesting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRequesting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'registration-form',
          templateUrl: './registration-form.component.html'
        }]
      }], function () {
        return [{
          type: _services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/root/site-root.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/root/site-root.component.ts ***!
    \********************************************************/

  /*! exports provided: SiteRootComponent */

  /***/
  function srcAppComponentsRootSiteRootComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SiteRootComponent", function () {
      return SiteRootComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SiteRootComponent_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r4.isActive);
      }
    }

    function SiteRootComponent_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r5.isActive);
      }
    }

    function SiteRootComponent_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r6 = ctx.$implicit;

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r6.path)("active", _r7.isActive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r6.label, " ");
      }
    }

    function SiteRootComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx_r3.userName, "");
      }
    }

    var SiteRootComponent = /*#__PURE__*/function () {
      function SiteRootComponent(authService, emitterService, router, cd) {
        var _this7 = this;

        _classCallCheck(this, SiteRootComponent);

        this.authService = authService;
        this.emitterService = emitterService;
        this.router = router;
        this.cd = cd;
        this.isLoggedIn = false;
        this.navLinks = [];
        this.emitterService.get('USER_LOGON').subscribe(function (data) {
          return _this7.userName = data.userName;
        });
        this.authService.authNavStatus$.subscribe(function (data) {
          return _this7.isLoggedIn = data;
        });
      }

      _createClass(SiteRootComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this$navLinks;

          this.isLoggedIn = this.authService.isLoggedIn;

          (_this$navLinks = this.navLinks).push.apply(_this$navLinks, _toConsumableArray(this.router.config.filter(function (r) {
            return r.data && r.data.mainmenu;
          }).map(function (r) {
            return {
              path: r.path,
              label: r.data.title.toString()
            };
          })));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.cd.detectChanges();
        }
      }]);

      return SiteRootComponent;
    }();

    SiteRootComponent.ɵfac = function SiteRootComponent_Factory(t) {
      return new (t || SiteRootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["EmitterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    SiteRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SiteRootComponent,
      selectors: [["site-root"]],
      decls: 10,
      vars: 4,
      consts: [["mat-tab-nav-bar", ""], ["mat-tab-link", "", "routerLink", "/login", "routerLinkActive", "", 3, "active", 4, "ngIf"], ["mat-tab-link", "", "routerLink", "/logout", "routerLinkActive", "", 3, "active", 4, "ngIf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["routerLink", "/admin"], ["class", "pull-right", 4, "ngIf"], ["mat-tab-link", "", "routerLink", "/login", "routerLinkActive", "", 3, "active"], ["rla", "routerLinkActive"], ["mat-tab-link", "", "routerLink", "/logout", "routerLinkActive", "", 3, "active"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], [1, "pull-right"]],
      template: function SiteRootComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Professional App Foundation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SiteRootComponent_a_3_Template, 3, 1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SiteRootComponent_a_4_Template, 3, 1, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SiteRootComponent_a_5_Template, 3, 3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Administration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SiteRootComponent_span_8_Template, 2, 1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navLinks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: [".main-container[_ngcontent-%COMP%] {\r\n  margin-top: 60px;\r\n  margin-left: 235px;\r\n  padding: 15px;\r\n  -ms-overflow-x: hidden;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n  .main-container[_ngcontent-%COMP%] {\r\n    margin-left: 0px !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb290L3NpdGUtcm9vdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jvb3Qvc2l0ZS1yb290LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIzNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiteRootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'site-root',
          templateUrl: 'site-root.component.html',
          styleUrls: ['site-root.component.scss']
        }]
      }], function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_1__["EmitterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/configurations/routes.ts":
  /*!******************************************!*\
    !*** ./src/app/configurations/routes.ts ***!
    \******************************************/

  /*! exports provided: routesConfig */

  /***/
  function srcAppConfigurationsRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routesConfig", function () {
      return routesConfig;
    });
    /* harmony import */


    var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../components/index */
    "./src/app/components/index.ts");
    /* harmony import */


    var _guards_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../guards/index */
    "./src/app/guards/index.ts");

    var routesConfig = [{
      path: '',
      redirectTo: 'info',
      pathMatch: 'full'
    }, {
      path: 'info',
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["SiteInfoComponent"],
      data: {
        mainmenu: true,
        title: 'Site Info'
      }
    }, {
      path: 'register',
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["RegistrationFormComponent"],
      data: {
        mainmenu: true,
        title: 'User Registration'
      }
    }, {
      path: 'login/:email',
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["LoginFormComponent"],
      data: {
        title: 'User Login'
      }
    }, {
      path: 'login',
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["LoginFormComponent"],
      data: {
        title: 'User Login'
      }
    }, {
      path: 'logout',
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["LogoutFormComponent"],
      data: {
        title: 'User Logout'
      }
    }, {
      path: 'dashboard',
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
      canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
      data: {
        mainmenu: true,
        title: 'Dashboard'
      }
    }, {
      path: 'admin',
      loadChildren: './modules/admin/admin.module#AdminModule',
      data: {
        mainmenu: true,
        title: 'Administration'
      }
    }];
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/index */
    "./src/app/services/index.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.authService.isLoggedIn) {
            this.router.navigate(['/login']);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/index.ts":
  /*!*********************************!*\
    !*** ./src/app/guards/index.ts ***!
    \*********************************/

  /*! exports provided: AuthGuard, StorageGuard */

  /***/
  function srcAppGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
    });
    /* harmony import */


    var _storage_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./storage.guard */
    "./src/app/guards/storage.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StorageGuard", function () {
      return _storage_guard__WEBPACK_IMPORTED_MODULE_1__["StorageGuard"];
    });
    /***/

  },

  /***/
  "./src/app/guards/storage.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/guards/storage.guard.ts ***!
    \*****************************************/

  /*! exports provided: StorageGuard */

  /***/
  function srcAppGuardsStorageGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageGuard", function () {
      return StorageGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var StorageGuard = /*#__PURE__*/function () {
      function StorageGuard(router) {
        _classCallCheck(this, StorageGuard);

        this.router = router;
      }

      _createClass(StorageGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (localStorage.getItem('isLoggedin')) {
            return true;
          }

          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return StorageGuard;
    }();

    StorageGuard.ɵfac = function StorageGuard_Factory(t) {
      return new (t || StorageGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    StorageGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StorageGuard,
      factory: StorageGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/admin/admin.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/modules/admin/admin.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppModulesAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _configurations_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./configurations/routes */
    "./src/app/modules/admin/configurations/routes.ts");
    /* harmony import */


    var _components_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/index */
    "./src/app/modules/admin/components/index.ts");
    /* harmony import */


    var _components_root_admin_root_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/root/admin-root.component */
    "./src/app/modules/admin/components/root/admin-root.component.ts");
    /* harmony import */


    var _components_users_admin_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/users/admin-users.component */
    "./src/app/modules/admin/components/users/admin-users.component.ts");
    /* harmony import */


    var _components_roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/roles/admin-roles.component */
    "./src/app/modules/admin/components/roles/admin-roles.component.ts");
    /* harmony import */


    var _components_claims_admin_claims_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/claims/admin-claims.component */
    "./src/app/modules/admin/components/claims/admin-claims.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      },
      providers: [],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_configurations_routes__WEBPACK_IMPORTED_MODULE_5__["routesConfig"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
        declarations: [_components_root_admin_root_component__WEBPACK_IMPORTED_MODULE_7__["AdminRootComponent"], _components_users_admin_users_component__WEBPACK_IMPORTED_MODULE_8__["AdminUsersComponent"], _components_roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_9__["AdminRolesComponent"], _components_claims_admin_claims_component__WEBPACK_IMPORTED_MODULE_10__["AdminClaimsComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_components_root_admin_root_component__WEBPACK_IMPORTED_MODULE_7__["AdminRootComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_index__WEBPACK_IMPORTED_MODULE_6__["AdminRootComponent"], _components_index__WEBPACK_IMPORTED_MODULE_6__["AdminUsersComponent"], _components_index__WEBPACK_IMPORTED_MODULE_6__["AdminRolesComponent"], _components_index__WEBPACK_IMPORTED_MODULE_6__["AdminClaimsComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_configurations_routes__WEBPACK_IMPORTED_MODULE_5__["routesConfig"])],
          exports: [_components_index__WEBPACK_IMPORTED_MODULE_6__["AdminRootComponent"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/admin/components/claims/admin-claims.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/admin/components/claims/admin-claims.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AdminClaimsComponent */

  /***/
  function srcAppModulesAdminComponentsClaimsAdminClaimsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminClaimsComponent", function () {
      return AdminClaimsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminClaimsComponent = /*#__PURE__*/function () {
      function AdminClaimsComponent() {
        _classCallCheck(this, AdminClaimsComponent);
      }

      _createClass(AdminClaimsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminClaimsComponent;
    }();

    AdminClaimsComponent.ɵfac = function AdminClaimsComponent_Factory(t) {
      return new (t || AdminClaimsComponent)();
    };

    AdminClaimsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminClaimsComponent,
      selectors: [["admin-claims"]],
      decls: 2,
      vars: 0,
      template: function AdminClaimsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claims Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".main-container[_ngcontent-%COMP%] {\r\n  margin-top: 60px;\r\n  margin-left: 235px;\r\n  padding: 15px;\r\n  -ms-overflow-x: hidden;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n  .main-container[_ngcontent-%COMP%] {\r\n    margin-left: 0px !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9jb21wb25lbnRzL2NsYWltcy9hZG1pbi1jbGFpbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9jb21wb25lbnRzL2NsYWltcy9hZG1pbi1jbGFpbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW4tbGVmdDogMjM1cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLm1haW4tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminClaimsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'admin-claims',
          templateUrl: 'admin-claims.component.html',
          styleUrls: ['admin-claims.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/admin/components/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/admin/components/index.ts ***!
    \***************************************************/

  /*! exports provided: AdminRootComponent, AdminRolesComponent, AdminUsersComponent, AdminClaimsComponent */

  /***/
  function srcAppModulesAdminComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _root_admin_root_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./root/admin-root.component */
    "./src/app/modules/admin/components/root/admin-root.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminRootComponent", function () {
      return _root_admin_root_component__WEBPACK_IMPORTED_MODULE_0__["AdminRootComponent"];
    });
    /* harmony import */


    var _roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./roles/admin-roles.component */
    "./src/app/modules/admin/components/roles/admin-roles.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminRolesComponent", function () {
      return _roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_1__["AdminRolesComponent"];
    });
    /* harmony import */


    var _users_admin_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./users/admin-users.component */
    "./src/app/modules/admin/components/users/admin-users.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function () {
      return _users_admin_users_component__WEBPACK_IMPORTED_MODULE_2__["AdminUsersComponent"];
    });
    /* harmony import */


    var _claims_admin_claims_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./claims/admin-claims.component */
    "./src/app/modules/admin/components/claims/admin-claims.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminClaimsComponent", function () {
      return _claims_admin_claims_component__WEBPACK_IMPORTED_MODULE_3__["AdminClaimsComponent"];
    }); // Globally used pages directly loaded by router
    // All working parts are in separate modules loaded on request

    /***/

  },

  /***/
  "./src/app/modules/admin/components/roles/admin-roles.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/admin/components/roles/admin-roles.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AdminRolesComponent */

  /***/
  function srcAppModulesAdminComponentsRolesAdminRolesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRolesComponent", function () {
      return AdminRolesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminRolesComponent = /*#__PURE__*/function () {
      function AdminRolesComponent() {
        _classCallCheck(this, AdminRolesComponent);
      }

      _createClass(AdminRolesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminRolesComponent;
    }();

    AdminRolesComponent.ɵfac = function AdminRolesComponent_Factory(t) {
      return new (t || AdminRolesComponent)();
    };

    AdminRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminRolesComponent,
      selectors: [["admin-roles"]],
      decls: 2,
      vars: 0,
      template: function AdminRolesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Roles Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".main-container[_ngcontent-%COMP%] {\r\n  margin-top: 60px;\r\n  margin-left: 235px;\r\n  padding: 15px;\r\n  -ms-overflow-x: hidden;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n  .main-container[_ngcontent-%COMP%] {\r\n    margin-left: 0px !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9jb21wb25lbnRzL3JvbGVzL2FkbWluLXJvbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tcG9uZW50cy9yb2xlcy9hZG1pbi1yb2xlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMzVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubWFpbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'admin-roles',
          templateUrl: 'admin-roles.component.html',
          styleUrls: ['admin-roles.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/admin/components/root/admin-root.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/admin/components/root/admin-root.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AdminRootComponent */

  /***/
  function srcAppModulesAdminComponentsRootAdminRootComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRootComponent", function () {
      return AdminRootComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["users"];
    };

    var _c1 = function _c1(a0) {
      return {
        admin: a0
      };
    };

    var _c2 = function _c2(a0) {
      return {
        outlets: a0
      };
    };

    var _c3 = function _c3(a0) {
      return [a0];
    };

    var _c4 = function _c4() {
      return ["roles"];
    };

    var _c5 = function _c5() {
      return ["claims"];
    };

    var AdminRootComponent = /*#__PURE__*/function () {
      function AdminRootComponent() {
        _classCallCheck(this, AdminRootComponent);
      }

      _createClass(AdminRootComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminRootComponent;
    }();

    AdminRootComponent.ɵfac = function AdminRootComponent_Factory(t) {
      return new (t || AdminRootComponent)();
    };

    AdminRootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminRootComponent,
      selectors: [["admin-root"]],
      decls: 20,
      vars: 24,
      consts: [[3, "routerLink"], [1, "alert", "alert-info"], ["name", "admin"]],
      template: function AdminRootComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Administration Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " |\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " |\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Claims");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Manage users, roles, and claims here. The backend has hardwired protection for two roles: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "'admin': Administrative access to this module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "'user': Access to all demo data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " The backend also provides additional protection by using the claim 'role=api_access'. All users that need backend API access need to carry this claim.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)))));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4)))));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c5)))));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".main-container[_ngcontent-%COMP%] {\r\n  margin-top: 60px;\r\n  margin-left: 235px;\r\n  padding: 15px;\r\n  -ms-overflow-x: hidden;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n  .main-container[_ngcontent-%COMP%] {\r\n    margin-left: 0px !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9jb21wb25lbnRzL3Jvb3QvYWRtaW4tcm9vdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2NvbXBvbmVudHMvcm9vdC9hZG1pbi1yb290LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIzNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'admin-root',
          templateUrl: 'admin-root.component.html',
          styleUrls: ['admin-root.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/admin/components/users/admin-users.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/admin/components/users/admin-users.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AdminUsersComponent */

  /***/
  function srcAppModulesAdminComponentsUsersAdminUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function () {
      return AdminUsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminUsersComponent = /*#__PURE__*/function () {
      function AdminUsersComponent() {
        _classCallCheck(this, AdminUsersComponent);
      }

      _createClass(AdminUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminUsersComponent;
    }();

    AdminUsersComponent.ɵfac = function AdminUsersComponent_Factory(t) {
      return new (t || AdminUsersComponent)();
    };

    AdminUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminUsersComponent,
      selectors: [["admin-users"]],
      decls: 2,
      vars: 0,
      template: function AdminUsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".main-container[_ngcontent-%COMP%] {\r\n  margin-top: 60px;\r\n  margin-left: 235px;\r\n  padding: 15px;\r\n  -ms-overflow-x: hidden;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n  .main-container[_ngcontent-%COMP%] {\r\n    margin-left: 0px !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9jb21wb25lbnRzL3VzZXJzL2FkbWluLXVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tcG9uZW50cy91c2Vycy9hZG1pbi11c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMzVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubWFpbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'admin-users',
          templateUrl: 'admin-users.component.html',
          styleUrls: ['admin-users.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/admin/configurations/routes.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/admin/configurations/routes.ts ***!
    \********************************************************/

  /*! exports provided: routesConfig */

  /***/
  function srcAppModulesAdminConfigurationsRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routesConfig", function () {
      return routesConfig;
    });
    /* harmony import */


    var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../components/index */
    "./src/app/modules/admin/components/index.ts");

    var routesConfig = [{
      path: '',
      redirectTo: 'root',
      pathMatch: 'full'
    }, {
      path: 'root',
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["AdminRootComponent"],
      children: [{
        path: 'users',
        component: _components_index__WEBPACK_IMPORTED_MODULE_0__["AdminUsersComponent"],
        outlet: 'admin'
      }, {
        path: 'roles',
        component: _components_index__WEBPACK_IMPORTED_MODULE_0__["AdminRolesComponent"],
        outlet: 'admin'
      }, {
        path: 'claims',
        component: _components_index__WEBPACK_IMPORTED_MODULE_0__["AdminClaimsComponent"],
        outlet: 'admin'
      }],
      data: {
        title: 'Administration'
      }
    }];
    /***/
  },

  /***/
  "./src/app/services/account.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/account.service.ts ***!
    \*********************************************/

  /*! exports provided: AccountService */

  /***/
  function srcAppServicesAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountService", function () {
      return AccountService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./base.service */
    "./src/app/services/base.service.ts");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/toPromise */
    "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
    /* harmony import */


    var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/frontendapi.services */
    "./src/app/services/lib/frontendapi.services.ts");

    var AccountService = /*#__PURE__*/function (_base_service__WEBPAC) {
      _inherits(AccountService, _base_service__WEBPAC);

      var _super = _createSuper(AccountService);

      function AccountService(api) {
        var _this8;

        _classCallCheck(this, AccountService);

        _this8 = _super.call(this);
        _this8.api = api;
        return _this8;
      }

      _createClass(AccountService, [{
        key: "getUserDetails",
        value: function getUserDetails() {
          var id = localStorage.getItem('user_id');
          return this.api.get(id).toPromise();
        }
      }, {
        key: "getUserClaims",
        value: function getUserClaims() {
          var id = localStorage.getItem('user_id');
          return this.api.getClaims(id).toPromise();
        }
      }]);

      return AccountService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]);

    AccountService.ɵfac = function AccountService_Factory(t) {
      return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_4__["ApiAccounts"]));
    };

    AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AccountService,
      factory: AccountService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_4__["ApiAccounts"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./base.service */
    "./src/app/services/base.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_mapTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/operator/mapTo */
    "./node_modules/rxjs-compat/_esm2015/add/operator/mapTo.js");
    /* harmony import */


    var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/delay */
    "./node_modules/rxjs-compat/_esm2015/add/operator/delay.js");
    /* harmony import */


    var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/add/operator/toPromise */
    "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
    /* harmony import */


    var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _emitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./emitter.service */
    "./src/app/services/emitter.service.ts");
    /* harmony import */


    var _account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./account.service */
    "./src/app/services/account.service.ts");
    /* harmony import */


    var _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./lib/frontendapi.services */
    "./src/app/services/lib/frontendapi.services.ts");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var AuthService = /*#__PURE__*/function (_base_service__WEBPAC2) {
      _inherits(AuthService, _base_service__WEBPAC2);

      var _super2 = _createSuper(AuthService);

      function AuthService(emitterService, api, accounts) {
        var _this9;

        _classCallCheck(this, AuthService);

        _this9 = _super2.call(this);
        _this9.emitterService = emitterService;
        _this9.api = api;
        _this9.accounts = accounts;
        _this9.baseUrl = ''; // Observable navItem source

        _this9._authNavStatusSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        _this9.__loggedIn = false;
        _this9.authNavStatus$ = _this9._authNavStatusSource.asObservable();

        _this9.authNavStatus$.subscribe(function (data) {
          console.log('AuthNav Changed', data);
        }); // check for an old token


        var lastToken = localStorage.getItem('expires_in');

        if (lastToken) {
          var oldTime = localStorage.getItem('time');
          var compareTime = new Date().getTime();
          console.log('Last Expires In', lastToken, compareTime);

          if (+oldTime + +lastToken < compareTime) {
            _this9.logout();
          } else {
            _this9._authNavStatusSource.next(true);
          }
        }

        return _this9;
      }

      _createClass(AuthService, [{
        key: "register",
        value: function register(model) {
          return this.api.post2(model).toPromise();
        }
      }, {
        key: "login",
        value: function login(model) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this10 = this;

            var res, currentTime;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.api.post(model).toPromise();

                  case 2:
                    res = _context.sent;

                    if (res) {
                      _context.next = 5;
                      break;
                    }

                    return _context.abrupt("return", Promise.reject());

                  case 5:
                    if (res.authToken) {
                      _context.next = 7;
                      break;
                    }

                    return _context.abrupt("return", Promise.resolve(false));

                  case 7:
                    // receive the token and store for all upcoming requests
                    localStorage.setItem('auth_token', res.authToken);
                    localStorage.setItem('user_id', res.id);
                    localStorage.setItem('expires_in', res.expiresIn.toString());
                    currentTime = new Date().getTime().toString();
                    localStorage.setItem('time', currentTime);
                    this.isLoggedIn = true; // pull user data and provide through emitter

                    this.accounts.getUserDetails().then(function (user) {
                      _this10.emitterService.get('USER_LOGON').emit(user);
                    });
                    return _context.abrupt("return", Promise.resolve(true));

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('user_id');
          localStorage.removeItem('expires_in');
          this.isLoggedIn = false;
          var o = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
          return o.delay(2000).mapTo(false).toPromise();
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          return this.__loggedIn;
        },
        set: function set(value) {
          this.__loggedIn = value;

          this._authNavStatusSource.next(value);
        }
      }]);

      return AuthService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]);

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_emitter_service__WEBPACK_IMPORTED_MODULE_7__["EmitterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_9__["ApiAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _emitter_service__WEBPACK_IMPORTED_MODULE_7__["EmitterService"]
        }, {
          type: _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_9__["ApiAuth"]
        }, {
          type: _account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth/tokeninterceptor.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/auth/tokeninterceptor.service.ts ***!
    \***********************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppServicesAuthTokeninterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * Adds the bearer token and the global JSON support, the latter header is required by ASP.NET Core WebAPI
     * */


    var TokenInterceptorService = /*#__PURE__*/function () {
      function TokenInterceptorService() {
        _classCallCheck(this, TokenInterceptorService);
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          request = request.clone({
            setHeaders: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(this.token)
            }
          });
          return next.handle(request);
        }
      }, {
        key: "token",
        get: function get() {
          return localStorage.getItem('auth_token');
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
      return new (t || TokenInterceptorService)();
    };

    TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptorService,
      factory: TokenInterceptorService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/base.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/base.service.ts ***!
    \******************************************/

  /*! exports provided: BaseService */

  /***/
  function srcAppServicesBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseService", function () {
      return BaseService;
    });
    /* harmony import */


    var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/Observable */
    "./node_modules/rxjs-compat/_esm2015/Observable.js");

    var BaseService = /*#__PURE__*/function () {
      function BaseService() {
        _classCallCheck(this, BaseService);
      }

      _createClass(BaseService, [{
        key: "handleError",
        value: function handleError(error) {
          var applicationError = error.headers.get('Application-Error'); // is applicationError 

          if (applicationError) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]["throw"](applicationError);
          } // has modelState Error


          var modelStateErrors = '';

          if (error.error) {
            var serverError = error.error;

            if (!serverError.type) {
              for (var key in serverError) {
                if (serverError[key]) modelStateErrors += serverError[key] + '\n';
              }
            }

            modelStateErrors = modelStateErrors = '' ? undefined : modelStateErrors;
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]["throw"](modelStateErrors || 'Server error');
          } // is regular message from infrastructure is somehow unexpected


          return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]["throw"](error.message);
        }
      }]);

      return BaseService;
    }();
    /***/

  },

  /***/
  "./src/app/services/config.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/config.service.ts ***!
    \********************************************/

  /*! exports provided: ConfigService */

  /***/
  function srcAppServicesConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
    });
    /**
     * Store the API's base URL in case we need to change it from default origin.
     * */


    var ConfigService = /*#__PURE__*/function () {
      function ConfigService() {
        _classCallCheck(this, ConfigService);
      }

      _createClass(ConfigService, null, [{
        key: "apiURI",
        get: function get() {
          return ConfigService._apiURI;
        },
        set: function set(value) {
          ConfigService._apiURI = value;
        }
      }]);

      return ConfigService;
    }();

    ConfigService._apiURI = window.location.origin;
    /***/
  },

  /***/
  "./src/app/services/emitter.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/emitter.service.ts ***!
    \*********************************************/

  /*! exports provided: EmitterService */

  /***/
  function srcAppServicesEmitterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmitterService", function () {
      return EmitterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * Broadcast events through components using a publish/subscribe pattern.
     */


    var EmitterService = /*#__PURE__*/function () {
      function EmitterService() {
        _classCallCheck(this, EmitterService);

        this._emitters = {};
      }

      _createClass(EmitterService, [{
        key: "get",
        value: function get(ID) {
          console.log("Emitter for ".concat(ID, " called"));

          if (!this._emitters[ID]) {
            console.log("Emitter for ".concat(ID, " added"));
            this._emitters[ID] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          } else {
            console.log("Emitter for ".concat(ID, " exists"));
          }

          return this._emitters[ID];
        }
      }]);

      return EmitterService;
    }();

    EmitterService.ɵfac = function EmitterService_Factory(t) {
      return new (t || EmitterService)();
    };

    EmitterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmitterService,
      factory: EmitterService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmitterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/index.ts":
  /*!***********************************!*\
    !*** ./src/app/services/index.ts ***!
    \***********************************/

  /*! exports provided: AccountService, MachineDataService, EmitterService, AuthService, ConfigService, API_BASE_URL, ApiAccounts, ApiAuth, ApiMachines, ApiClaim, ApiRole, ApiUser, UserViewModel, ClaimViewModel, TokenResponseViewModel, ModelStateDictionary, ModelStateEntry, ModelError, Exception, ModelValidationState, LogonViewModel, RegistrationViewModel, BaseViewModel, MachineViewModel, RoleViewModel, ApiException, TokenInterceptorService */

  /***/
  function srcAppServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./account.service */
    "./src/app/services/account.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccountService", function () {
      return _account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"];
    });
    /* harmony import */


    var _machinedata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./machinedata.service */
    "./src/app/services/machinedata.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MachineDataService", function () {
      return _machinedata_service__WEBPACK_IMPORTED_MODULE_1__["MachineDataService"];
    });
    /* harmony import */


    var _emitter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./emitter.service */
    "./src/app/services/emitter.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EmitterService", function () {
      return _emitter_service__WEBPACK_IMPORTED_MODULE_2__["EmitterService"];
    });
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"];
    });
    /* harmony import */


    var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./config.service */
    "./src/app/services/config.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"];
    });
    /* harmony import */


    var _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lib/frontendapi.services */
    "./src/app/services/lib/frontendapi.services.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["API_BASE_URL"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiAccounts", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ApiAccounts"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiAuth", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ApiAuth"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiMachines", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ApiMachines"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiClaim", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ApiClaim"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiRole", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ApiRole"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiUser", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ApiUser"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserViewModel", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["UserViewModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClaimViewModel", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ClaimViewModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TokenResponseViewModel", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["TokenResponseViewModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModelStateDictionary", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ModelStateDictionary"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModelStateEntry", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ModelStateEntry"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModelError", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ModelError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Exception", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["Exception"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModelValidationState", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ModelValidationState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LogonViewModel", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["LogonViewModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegistrationViewModel", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["RegistrationViewModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BaseViewModel", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["BaseViewModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MachineViewModel", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["MachineViewModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RoleViewModel", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["RoleViewModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiException", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ApiException"];
    });
    /* harmony import */


    var _auth_tokeninterceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/tokeninterceptor.service */
    "./src/app/services/auth/tokeninterceptor.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return _auth_tokeninterceptor_service__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptorService"];
    }); // services used in controllers
    // supporting api
    // helper for authentication

    /***/

  },

  /***/
  "./src/app/services/lib/frontendapi.services.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/lib/frontendapi.services.ts ***!
    \******************************************************/

  /*! exports provided: API_BASE_URL, ApiAccounts, ApiAuth, ApiMachines, ApiClaim, ApiRole, ApiUser, UserViewModel, ClaimViewModel, TokenResponseViewModel, ModelStateDictionary, ModelStateEntry, ModelError, Exception, ModelValidationState, LogonViewModel, RegistrationViewModel, BaseViewModel, MachineViewModel, RoleViewModel, ApiException */

  /***/
  function srcAppServicesLibFrontendapiServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function () {
      return API_BASE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiAccounts", function () {
      return ApiAccounts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiAuth", function () {
      return ApiAuth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiMachines", function () {
      return ApiMachines;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiClaim", function () {
      return ApiClaim;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiRole", function () {
      return ApiRole;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiUser", function () {
      return ApiUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserViewModel", function () {
      return UserViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClaimViewModel", function () {
      return ClaimViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenResponseViewModel", function () {
      return TokenResponseViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelStateDictionary", function () {
      return ModelStateDictionary;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelStateEntry", function () {
      return ModelStateEntry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelError", function () {
      return ModelError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Exception", function () {
      return Exception;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelValidationState", function () {
      return ModelValidationState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogonViewModel", function () {
      return LogonViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationViewModel", function () {
      return RegistrationViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseViewModel", function () {
      return BaseViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MachineViewModel", function () {
      return MachineViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleViewModel", function () {
      return RoleViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiException", function () {
      return ApiException;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* tslint:disable */

    /* eslint-disable */
    //----------------------
    // <auto-generated>
    //     Generated using the NSwag toolchain v13.1.6.0 (NJsonSchema v10.0.28.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
    // </auto-generated>
    //----------------------
    // ReSharper disable InconsistentNaming


    var API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('API_BASE_URL');

    var ApiAccounts = /*#__PURE__*/function () {
      function ApiAccounts(http, baseUrl) {
        _classCallCheck(this, ApiAccounts);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:5000";
      }

      _createClass(ApiAccounts, [{
        key: "get",
        value: function get(id) {
          var _this11 = this;

          var url_ = this.baseUrl + "/api/Accounts/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this11.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this11.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this12 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator = _createForOfIteratorHelper(response.headers.keys()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var key = _step.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this12.jsonParseReviver);
              result200 = UserViewModel.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this12.jsonParseReviver);
              result400 = resultData400 !== undefined ? resultData400 : null;
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "getClaims",
        value: function getClaims(id) {
          var _this13 = this;

          var url_ = this.baseUrl + "/api/Accounts/{id}/claims";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this13.processGetClaims(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this13.processGetClaims(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetClaims",
        value: function processGetClaims(response) {
          var _this14 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator2 = _createForOfIteratorHelper(response.headers.keys()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var key = _step2.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this14.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator3 = _createForOfIteratorHelper(resultData200),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var item = _step3.value;
                    result200.push(ClaimViewModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this14.jsonParseReviver);
              result400 = resultData400 !== undefined ? resultData400 : null;
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return ApiAccounts;
    }();

    ApiAccounts.ɵfac = function ApiAccounts_Factory(t) {
      return new (t || ApiAccounts)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    ApiAccounts.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ApiAccounts,
      factory: ApiAccounts.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ApiAccounts, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var ApiAuth = /*#__PURE__*/function () {
      function ApiAuth(http, baseUrl) {
        _classCallCheck(this, ApiAuth);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:5000";
      }

      _createClass(ApiAuth, [{
        key: "post",
        value: function post(credentials) {
          var _this15 = this;

          var url_ = this.baseUrl + "/api/Auth/login";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(credentials);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json",
              "Accept": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this15.processPost(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this15.processPost(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPost",
        value: function processPost(response) {
          var _this16 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator4 = _createForOfIteratorHelper(response.headers.keys()),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var key = _step4.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this16.jsonParseReviver);
              result200 = TokenResponseViewModel.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this16.jsonParseReviver);
              result400 = ModelStateDictionary.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "post2",
        value: function post2(model) {
          var _this17 = this;

          var url_ = this.baseUrl + "/api/Auth/register";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(model);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json",
              "Accept": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this17.processPost2(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this17.processPost2(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPost2",
        value: function processPost2(response) {
          var _this18 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator5 = _createForOfIteratorHelper(response.headers.keys()),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var key = _step5.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this18.jsonParseReviver);
              result200 = resultData200 !== undefined ? resultData200 : null;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this18.jsonParseReviver);
              result400 = ModelStateDictionary.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return ApiAuth;
    }();

    ApiAuth.ɵfac = function ApiAuth_Factory(t) {
      return new (t || ApiAuth)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    ApiAuth.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ApiAuth,
      factory: ApiAuth.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ApiAuth, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var ApiMachines = /*#__PURE__*/function () {
      function ApiMachines(http, baseUrl) {
        _classCallCheck(this, ApiMachines);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:5000";
      }

      _createClass(ApiMachines, [{
        key: "get",
        value: function get() {
          var _this19 = this;

          var url_ = this.baseUrl + "/api/Machines";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this19.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this19.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this20 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator6 = _createForOfIteratorHelper(response.headers.keys()),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var key = _step6.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }

          ;
          {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var resultdefault = null;
              var resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, _this20.jsonParseReviver);

              if (Array.isArray(resultDatadefault)) {
                resultdefault = [];

                var _iterator7 = _createForOfIteratorHelper(resultDatadefault),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var item = _step7.value;
                    resultdefault.push(MachineViewModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(resultdefault);
            }));
          }
        }
      }, {
        key: "post",
        value: function post(value) {
          var _this21 = this;

          var url_ = this.baseUrl + "/api/Machines";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(value);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this21.processPost(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this21.processPost(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPost",
        value: function processPost(response) {
          var _this22 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator8 = _createForOfIteratorHelper(response.headers.keys()),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var key = _step8.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }

          ;

          if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this22.jsonParseReviver);
              result400 = ModelStateDictionary.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          }
        }
      }, {
        key: "get2",
        value: function get2(id) {
          var _this23 = this;

          var url_ = this.baseUrl + "/api/Machines/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this23.processGet2(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this23.processGet2(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet2",
        value: function processGet2(response) {
          var _this24 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator9 = _createForOfIteratorHelper(response.headers.keys()),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var key = _step9.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }

          ;
          {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var resultdefault = null;
              var resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, _this24.jsonParseReviver);
              resultdefault = MachineViewModel.fromJS(resultDatadefault);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(resultdefault);
            }));
          }
        }
      }, {
        key: "put",
        value: function put(id, value) {
          var _this25 = this;

          var url_ = this.baseUrl + "/api/Machines/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(value);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this25.processPut(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this25.processPut(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPut",
        value: function processPut(response) {
          var _this26 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator10 = _createForOfIteratorHelper(response.headers.keys()),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var key = _step10.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          }

          ;

          if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this26.jsonParseReviver);
              result400 = ModelStateDictionary.fromJS(resultData400);
              return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
          } else {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          }
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this27 = this;

          var url_ = this.baseUrl + "/api/Machines/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this27.processDelete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this27.processDelete(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processDelete",
        value: function processDelete(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator11 = _createForOfIteratorHelper(response.headers.keys()),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var key = _step11.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }

          ;

          if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("A server side error occurred.", status, _responseText, _headers);
            }));
          } else {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          }
        }
      }]);

      return ApiMachines;
    }();

    ApiMachines.ɵfac = function ApiMachines_Factory(t) {
      return new (t || ApiMachines)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    ApiMachines.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ApiMachines,
      factory: ApiMachines.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ApiMachines, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var ApiClaim = /*#__PURE__*/function () {
      function ApiClaim(http, baseUrl) {
        _classCallCheck(this, ApiClaim);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:5000";
      }

      _createClass(ApiClaim, [{
        key: "get",
        value: function get(id) {
          var _this28 = this;

          var url_ = this.baseUrl + "/api/useradmin/Claim?";
          if (id !== undefined) url_ += "id=" + encodeURIComponent("" + id) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this28.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this28.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this29 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator12 = _createForOfIteratorHelper(response.headers.keys()),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var key = _step12.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this29.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator13 = _createForOfIteratorHelper(resultData200),
                    _step13;

                try {
                  for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                    var item = _step13.value;
                    result200.push(ClaimViewModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator13.e(err);
                } finally {
                  _iterator13.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "post",
        value: function post(value) {
          var _this30 = this;

          var url_ = this.baseUrl + "/api/useradmin/Claim";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(value);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this30.processPost(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this30.processPost(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPost",
        value: function processPost(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator14 = _createForOfIteratorHelper(response.headers.keys()),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var key = _step14.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "getUserForClaim",
        value: function getUserForClaim(id, claimViewModel) {
          var _this31 = this;

          var url_ = this.baseUrl + "/api/useradmin/Claim/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(claimViewModel);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json",
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this31.processGetUserForClaim(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this31.processGetUserForClaim(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetUserForClaim",
        value: function processGetUserForClaim(response) {
          var _this32 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator15 = _createForOfIteratorHelper(response.headers.keys()),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var key = _step15.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this32.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator16 = _createForOfIteratorHelper(resultData200),
                    _step16;

                try {
                  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                    var item = _step16.value;
                    result200.push(UserViewModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator16.e(err);
                } finally {
                  _iterator16.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "delete",
        value: function _delete(id, claimType) {
          var _this33 = this;

          var url_ = this.baseUrl + "/api/useradmin/Claim/{id}?";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          if (claimType !== undefined) url_ += "claimType=" + encodeURIComponent("" + claimType) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this33.processDelete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this33.processDelete(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processDelete",
        value: function processDelete(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator17 = _createForOfIteratorHelper(response.headers.keys()),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var key = _step17.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "put",
        value: function put(id, oldClaimType, newClaimType) {
          var _this34 = this;

          var url_ = this.baseUrl + "/api/useradmin/Claim/{id}/{oldClaimType}/{newClaimType}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          if (oldClaimType === undefined || oldClaimType === null) throw new Error("The parameter 'oldClaimType' must be defined.");
          url_ = url_.replace("{oldClaimType}", encodeURIComponent("" + oldClaimType));
          if (newClaimType === undefined || newClaimType === null) throw new Error("The parameter 'newClaimType' must be defined.");
          url_ = url_.replace("{newClaimType}", encodeURIComponent("" + newClaimType));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this34.processPut(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this34.processPut(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPut",
        value: function processPut(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator18 = _createForOfIteratorHelper(response.headers.keys()),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var key = _step18.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return ApiClaim;
    }();

    ApiClaim.ɵfac = function ApiClaim_Factory(t) {
      return new (t || ApiClaim)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    ApiClaim.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ApiClaim,
      factory: ApiClaim.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ApiClaim, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var ApiRole = /*#__PURE__*/function () {
      function ApiRole(http, baseUrl) {
        _classCallCheck(this, ApiRole);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:5000";
      }

      _createClass(ApiRole, [{
        key: "get",
        value: function get() {
          var _this35 = this;

          var url_ = this.baseUrl + "/api/useradmin/Role";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this35.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this35.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this36 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator19 = _createForOfIteratorHelper(response.headers.keys()),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var key = _step19.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this36.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator20 = _createForOfIteratorHelper(resultData200),
                    _step20;

                try {
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var item = _step20.value;
                    result200.push(RoleViewModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator20.e(err);
                } finally {
                  _iterator20.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "post",
        value: function post(role) {
          var _this37 = this;

          var url_ = this.baseUrl + "/api/useradmin/Role";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(role);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this37.processPost(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this37.processPost(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPost",
        value: function processPost(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator21 = _createForOfIteratorHelper(response.headers.keys()),
                _step21;

            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var key = _step21.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "getbyId",
        value: function getbyId(id) {
          var _this38 = this;

          var url_ = this.baseUrl + "/api/useradmin/Role/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this38.processGetbyId(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this38.processGetbyId(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetbyId",
        value: function processGetbyId(response) {
          var _this39 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator22 = _createForOfIteratorHelper(response.headers.keys()),
                _step22;

            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var key = _step22.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this39.jsonParseReviver);
              result200 = RoleViewModel.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "put",
        value: function put(id, role) {
          var _this40 = this;

          var url_ = this.baseUrl + "/api/useradmin/Role/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(role);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this40.processPut(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this40.processPut(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPut",
        value: function processPut(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator23 = _createForOfIteratorHelper(response.headers.keys()),
                _step23;

            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var key = _step23.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this41 = this;

          var url_ = this.baseUrl + "/api/useradmin/Role/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this41.processDelete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this41.processDelete(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processDelete",
        value: function processDelete(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator24 = _createForOfIteratorHelper(response.headers.keys()),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var key = _step24.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return ApiRole;
    }();

    ApiRole.ɵfac = function ApiRole_Factory(t) {
      return new (t || ApiRole)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    ApiRole.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ApiRole,
      factory: ApiRole.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ApiRole, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var ApiUser = /*#__PURE__*/function () {
      function ApiUser(http, baseUrl) {
        _classCallCheck(this, ApiUser);

        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:5000";
      }

      _createClass(ApiUser, [{
        key: "get",
        value: function get() {
          var _this42 = this;

          var url_ = this.baseUrl + "/api/useradmin/User";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this42.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this42.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this43 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator25 = _createForOfIteratorHelper(response.headers.keys()),
                _step25;

            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var key = _step25.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this43.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator26 = _createForOfIteratorHelper(resultData200),
                    _step26;

                try {
                  for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                    var item = _step26.value;
                    result200.push(UserViewModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator26.e(err);
                } finally {
                  _iterator26.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "post",
        value: function post(user) {
          var _this44 = this;

          var url_ = this.baseUrl + "/api/useradmin/User";
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(user);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this44.processPost(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this44.processPost(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPost",
        value: function processPost(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator27 = _createForOfIteratorHelper(response.headers.keys()),
                _step27;

            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var key = _step27.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "getById",
        value: function getById(id) {
          var _this45 = this;

          var url_ = this.baseUrl + "/api/useradmin/User/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this45.processGetById(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this45.processGetById(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetById",
        value: function processGetById(response) {
          var _this46 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator28 = _createForOfIteratorHelper(response.headers.keys()),
                _step28;

            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var key = _step28.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this46.jsonParseReviver);
              result200 = UserViewModel.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "put",
        value: function put(id, user) {
          var _this47 = this;

          var url_ = this.baseUrl + "/api/useradmin/User/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var content_ = JSON.stringify(user);
          var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this47.processPut(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this47.processPut(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPut",
        value: function processPut(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator29 = _createForOfIteratorHelper(response.headers.keys()),
                _step29;

            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var key = _step29.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this48 = this;

          var url_ = this.baseUrl + "/api/useradmin/User/{id}";
          if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
          url_ = url_.replace("{id}", encodeURIComponent("" + id));
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
          };
          return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this48.processDelete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this48.processDelete(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processDelete",
        value: function processDelete(response) {
          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator30 = _createForOfIteratorHelper(response.headers.keys()),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var key = _step30.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }
          }

          ;

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
          } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
      }]);

      return ApiUser;
    }();

    ApiUser.ɵfac = function ApiUser_Factory(t) {
      return new (t || ApiUser)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8));
    };

    ApiUser.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ApiUser,
      factory: ApiUser.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ApiUser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [API_BASE_URL]
          }]
        }];
      }, null);
    })();

    var UserViewModel = /*#__PURE__*/function () {
      function UserViewModel(data) {
        _classCallCheck(this, UserViewModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(UserViewModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.id = _data["id"];
            this.email = _data["email"];
            this.passwordHash = _data["passwordHash"];
            this.userName = _data["userName"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["id"] = this.id;
          data["email"] = this.email;
          data["passwordHash"] = this.passwordHash;
          data["userName"] = this.userName;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new UserViewModel();
          result.init(data);
          return result;
        }
      }]);

      return UserViewModel;
    }();

    var ClaimViewModel = /*#__PURE__*/function () {
      function ClaimViewModel(data) {
        _classCallCheck(this, ClaimViewModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ClaimViewModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.type = _data["type"];
            this.value = _data["value"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["type"] = this.type;
          data["value"] = this.value;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ClaimViewModel();
          result.init(data);
          return result;
        }
      }]);

      return ClaimViewModel;
    }();

    var TokenResponseViewModel = /*#__PURE__*/function () {
      function TokenResponseViewModel(data) {
        _classCallCheck(this, TokenResponseViewModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(TokenResponseViewModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.id = _data["id"];
            this.authToken = _data["authToken"];
            this.expiresIn = _data["expiresIn"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["id"] = this.id;
          data["authToken"] = this.authToken;
          data["expiresIn"] = this.expiresIn;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new TokenResponseViewModel();
          result.init(data);
          return result;
        }
      }]);

      return TokenResponseViewModel;
    }();

    var ModelStateDictionary = /*#__PURE__*/function () {
      function ModelStateDictionary(data) {
        _classCallCheck(this, ModelStateDictionary);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ModelStateDictionary, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.root = _data["Root"] ? ModelStateEntry.fromJS(_data["Root"]) : undefined;
            this.maxAllowedErrors = _data["MaxAllowedErrors"];
            this.hasReachedMaxErrors = _data["HasReachedMaxErrors"];
            this.errorCount = _data["ErrorCount"];
            this.count = _data["Count"];

            if (Array.isArray(_data["Keys"])) {
              this.keys = [];

              var _iterator31 = _createForOfIteratorHelper(_data["Keys"]),
                  _step31;

              try {
                for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                  var item = _step31.value;
                  this.keys.push(item);
                }
              } catch (err) {
                _iterator31.e(err);
              } finally {
                _iterator31.f();
              }
            }

            if (Array.isArray(_data["Values"])) {
              this.values = [];

              var _iterator32 = _createForOfIteratorHelper(_data["Values"]),
                  _step32;

              try {
                for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                  var _item = _step32.value;
                  this.values.push(ModelStateEntry.fromJS(_item));
                }
              } catch (err) {
                _iterator32.e(err);
              } finally {
                _iterator32.f();
              }
            }

            this.isValid = _data["IsValid"];
            this.validationState = _data["ValidationState"];
            this.item = _data["Item"] ? ModelStateEntry.fromJS(_data["Item"]) : undefined;
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["Root"] = this.root ? this.root.toJSON() : undefined;
          data["MaxAllowedErrors"] = this.maxAllowedErrors;
          data["HasReachedMaxErrors"] = this.hasReachedMaxErrors;
          data["ErrorCount"] = this.errorCount;
          data["Count"] = this.count;

          if (Array.isArray(this.keys)) {
            data["Keys"] = [];

            var _iterator33 = _createForOfIteratorHelper(this.keys),
                _step33;

            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                var item = _step33.value;
                data["Keys"].push(item);
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }
          }

          if (Array.isArray(this.values)) {
            data["Values"] = [];

            var _iterator34 = _createForOfIteratorHelper(this.values),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var _item2 = _step34.value;
                data["Values"].push(_item2.toJSON());
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }
          }

          data["IsValid"] = this.isValid;
          data["ValidationState"] = this.validationState;
          data["Item"] = this.item ? this.item.toJSON() : undefined;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ModelStateDictionary();
          result.init(data);
          return result;
        }
      }]);

      return ModelStateDictionary;
    }();

    var ModelStateEntry = /*#__PURE__*/function () {
      function ModelStateEntry(data) {
        _classCallCheck(this, ModelStateEntry);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ModelStateEntry, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.rawValue = _data["rawValue"];
            this.attemptedValue = _data["attemptedValue"];

            if (Array.isArray(_data["errors"])) {
              this.errors = [];

              var _iterator35 = _createForOfIteratorHelper(_data["errors"]),
                  _step35;

              try {
                for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                  var item = _step35.value;
                  this.errors.push(ModelError.fromJS(item));
                }
              } catch (err) {
                _iterator35.e(err);
              } finally {
                _iterator35.f();
              }
            }

            this.validationState = _data["validationState"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["rawValue"] = this.rawValue;
          data["attemptedValue"] = this.attemptedValue;

          if (Array.isArray(this.errors)) {
            data["errors"] = [];

            var _iterator36 = _createForOfIteratorHelper(this.errors),
                _step36;

            try {
              for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                var item = _step36.value;
                data["errors"].push(item.toJSON());
              }
            } catch (err) {
              _iterator36.e(err);
            } finally {
              _iterator36.f();
            }
          }

          data["validationState"] = this.validationState;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          throw new Error("The abstract class 'ModelStateEntry' cannot be instantiated.");
        }
      }]);

      return ModelStateEntry;
    }();

    var ModelError = /*#__PURE__*/function () {
      function ModelError(data) {
        _classCallCheck(this, ModelError);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ModelError, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.exception = _data["exception"] ? Exception.fromJS(_data["exception"]) : undefined;
            this.errorMessage = _data["errorMessage"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["exception"] = this.exception ? this.exception.toJSON() : undefined;
          data["errorMessage"] = this.errorMessage;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ModelError();
          result.init(data);
          return result;
        }
      }]);

      return ModelError;
    }();

    var Exception = /*#__PURE__*/function () {
      function Exception(data) {
        _classCallCheck(this, Exception);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(Exception, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.stackTrace = _data["StackTrace"];
            this.message = _data["Message"];
            this.innerException = _data["InnerException"] ? Exception.fromJS(_data["InnerException"]) : undefined;
            this.source = _data["Source"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["StackTrace"] = this.stackTrace;
          data["Message"] = this.message;
          data["InnerException"] = this.innerException ? this.innerException.toJSON() : undefined;
          data["Source"] = this.source;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new Exception();
          result.init(data);
          return result;
        }
      }]);

      return Exception;
    }();

    var ModelValidationState;

    (function (ModelValidationState) {
      ModelValidationState[ModelValidationState["Unvalidated"] = 0] = "Unvalidated";
      ModelValidationState[ModelValidationState["Invalid"] = 1] = "Invalid";
      ModelValidationState[ModelValidationState["Valid"] = 2] = "Valid";
      ModelValidationState[ModelValidationState["Skipped"] = 3] = "Skipped";
    })(ModelValidationState || (ModelValidationState = {}));

    var LogonViewModel = /*#__PURE__*/function () {
      function LogonViewModel(data) {
        _classCallCheck(this, LogonViewModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(LogonViewModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.userName = _data["userName"];
            this.password = _data["password"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["userName"] = this.userName;
          data["password"] = this.password;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new LogonViewModel();
          result.init(data);
          return result;
        }
      }]);

      return LogonViewModel;
    }();

    var RegistrationViewModel = /*#__PURE__*/function () {
      function RegistrationViewModel(data) {
        _classCallCheck(this, RegistrationViewModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RegistrationViewModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.email = _data["email"];
            this.password = _data["password"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.location = _data["location"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["email"] = this.email;
          data["password"] = this.password;
          data["firstName"] = this.firstName;
          data["lastName"] = this.lastName;
          data["location"] = this.location;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RegistrationViewModel();
          result.init(data);
          return result;
        }
      }]);

      return RegistrationViewModel;
    }();

    var BaseViewModel = /*#__PURE__*/function () {
      function BaseViewModel(data) {
        _classCallCheck(this, BaseViewModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(BaseViewModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.id = _data["id"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["id"] = this.id;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new BaseViewModel();
          result.init(data);
          return result;
        }
      }]);

      return BaseViewModel;
    }();

    var MachineViewModel = /*#__PURE__*/function (_BaseViewModel) {
      _inherits(MachineViewModel, _BaseViewModel);

      var _super3 = _createSuper(MachineViewModel);

      function MachineViewModel(data) {
        _classCallCheck(this, MachineViewModel);

        return _super3.call(this, data);
      }

      _createClass(MachineViewModel, [{
        key: "init",
        value: function init(_data) {
          _get(_getPrototypeOf(MachineViewModel.prototype), "init", this).call(this, _data);

          if (_data) {
            this.name = _data["name"];
            this.location = _data["location"];
            this.hasDevices = _data["hasDevices"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["name"] = this.name;
          data["location"] = this.location;
          data["hasDevices"] = this.hasDevices;

          _get(_getPrototypeOf(MachineViewModel.prototype), "toJSON", this).call(this, data);

          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new MachineViewModel();
          result.init(data);
          return result;
        }
      }]);

      return MachineViewModel;
    }(BaseViewModel);

    var RoleViewModel = /*#__PURE__*/function () {
      function RoleViewModel(data) {
        _classCallCheck(this, RoleViewModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(RoleViewModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["id"] = this.id;
          data["name"] = this.name;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new RoleViewModel();
          result.init(data);
          return result;
        }
      }]);

      return RoleViewModel;
    }();

    var ApiException = /*#__PURE__*/function (_Error) {
      _inherits(ApiException, _Error);

      var _super4 = _createSuper(ApiException);

      function ApiException(message, status, response, headers, result) {
        var _this49;

        _classCallCheck(this, ApiException);

        _this49 = _super4.call(this);
        _this49.isApiException = true;
        _this49.message = message;
        _this49.status = status;
        _this49.response = response;
        _this49.headers = headers;
        _this49.result = result;
        return _this49;
      }

      _createClass(ApiException, null, [{
        key: "isApiException",
        value: function isApiException(obj) {
          return obj.isApiException === true;
        }
      }]);

      return ApiException;
    }( /*#__PURE__*/_wrapNativeSuper(Error));

    function throwException(message, status, response, headers, result) {
      if (result !== null && result !== undefined) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(result);else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new ApiException(message, status, response, headers, null));
    }

    function blobToText(blob) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
        if (!blob) {
          observer.next("");
          observer.complete();
        } else {
          var reader = new FileReader();

          reader.onload = function (event) {
            observer.next(event.target.result);
            observer.complete();
          };

          reader.readAsText(blob);
        }
      });
    }
    /***/

  },

  /***/
  "./src/app/services/machinedata.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/machinedata.service.ts ***!
    \*************************************************/

  /*! exports provided: MachineDataService */

  /***/
  function srcAppServicesMachinedataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MachineDataService", function () {
      return MachineDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/frontendapi.services */
    "./src/app/services/lib/frontendapi.services.ts");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var MachineDataService = /*#__PURE__*/function () {
      function MachineDataService(api) {
        _classCallCheck(this, MachineDataService);

        this.api = api;
      }

      _createClass(MachineDataService, [{
        key: "getChartData",
        value: function getChartData() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    throw new Error('Not implemented');

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "getMachines",
        value: function getMachines() {
          return this.api.get().toPromise();
        }
      }]);

      return MachineDataService;
    }();

    MachineDataService.ɵfac = function MachineDataService_Factory(t) {
      return new (t || MachineDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_1__["ApiMachines"]));
    };

    MachineDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MachineDataService,
      factory: MachineDataService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MachineDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_1__["ApiMachines"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Apps\Demos\core3-boilerplate\Sources\WebApp\FrontEnd\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
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
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _guards_index__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./guards/index */
    "./src/app/guards/index.ts");
    /* harmony import */


    var _components_index__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/index */
    "./src/app/components/index.ts");
    /* harmony import */


    var _services_index__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./services/index */
    "./src/app/services/index.ts");
    /* harmony import */


    var _directives_index__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./directives/index */
    "./src/app/directives/index.ts");
    /* harmony import */


    var _configurations_routes__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./configurations/routes */
    "./src/app/configurations/routes.ts");
    /* harmony import */


    var _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./modules/admin/admin.module */
    "./src/app/modules/admin/admin.module.ts");
    /* harmony import */


    var _components_root_site_root_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/root/site-root.component */
    "./src/app/components/root/site-root.component.ts");
    /* harmony import */


    var _components_info_site_info_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./components/info/site-info.component */
    "./src/app/components/info/site-info.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_login_login_form_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./components/login/login-form.component */
    "./src/app/components/login/login-form.component.ts");
    /* harmony import */


    var _components_logout_logout_form_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./components/logout/logout-form.component */
    "./src/app/components/logout/logout-form.component.ts");
    /* harmony import */


    var _components_registration_registration_form_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./components/registration/registration-form.component */
    "./src/app/components/registration/registration-form.component.ts");
    /* harmony import */


    var _components_profile_profile_form_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./components/profile/profile-form.component */
    "./src/app/components/profile/profile-form.component.ts");
    /* harmony import */


    var _directives_disable_autofill_directive__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./directives/disable-autofill.directive */
    "./src/app/directives/disable-autofill.directive.ts");
    /* harmony import */


    var _directives_remove_host_directive__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./directives/remove-host.directive */
    "./src/app/directives/remove-host.directive.ts"); //Angular Material Components
    // The admin part is separated to it's own module


    function getBaseUrl() {
      return _services_index__WEBPACK_IMPORTED_MODULE_39__["ConfigService"].apiURI;
    }

    var material = [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"]];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_components_root_site_root_component__WEBPACK_IMPORTED_MODULE_43__["SiteRootComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [// router config
      _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
      }, // handle Bearer token for all requests
      {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _services_index__WEBPACK_IMPORTED_MODULE_39__["TokenInterceptorService"],
        multi: true
      }, // Nswag's generated code can be configured here
      {
        provide: _services_index__WEBPACK_IMPORTED_MODULE_39__["API_BASE_URL"],
        useFactory: getBaseUrl
      }, // regular demo data
      _services_index__WEBPACK_IMPORTED_MODULE_39__["MachineDataService"], // Account data, user details
      _services_index__WEBPACK_IMPORTED_MODULE_39__["AccountService"], // Login/Logout
      _services_index__WEBPACK_IMPORTED_MODULE_39__["AuthService"], // generic publish/subscribe
      _services_index__WEBPACK_IMPORTED_MODULE_39__["EmitterService"], // APIs to server
      _services_index__WEBPACK_IMPORTED_MODULE_39__["ApiAccounts"], _services_index__WEBPACK_IMPORTED_MODULE_39__["ApiAuth"], _services_index__WEBPACK_IMPORTED_MODULE_39__["ApiMachines"], // prevent routes for non-authenticated users
      _guards_index__WEBPACK_IMPORTED_MODULE_37__["AuthGuard"]],
      imports: [[_modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_42__["AdminModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_configurations_routes__WEBPACK_IMPORTED_MODULE_41__["routesConfig"]), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]].concat(material, [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_36__["MatPaginatorModule"]])]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_components_root_site_root_component__WEBPACK_IMPORTED_MODULE_43__["SiteRootComponent"], _components_info_site_info_component__WEBPACK_IMPORTED_MODULE_44__["SiteInfoComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_45__["DashboardComponent"], _components_login_login_form_component__WEBPACK_IMPORTED_MODULE_46__["LoginFormComponent"], _components_logout_logout_form_component__WEBPACK_IMPORTED_MODULE_47__["LogoutFormComponent"], _components_registration_registration_form_component__WEBPACK_IMPORTED_MODULE_48__["RegistrationFormComponent"], _components_profile_profile_form_component__WEBPACK_IMPORTED_MODULE_49__["ProfileFormComponent"], _directives_disable_autofill_directive__WEBPACK_IMPORTED_MODULE_50__["DiableAutofillDirective"], _directives_remove_host_directive__WEBPACK_IMPORTED_MODULE_51__["RemoveHostDirective"]],
        imports: [_modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_42__["AdminModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_36__["MatPaginatorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_index__WEBPACK_IMPORTED_MODULE_38__["SiteRootComponent"], _components_index__WEBPACK_IMPORTED_MODULE_38__["SiteInfoComponent"], _components_index__WEBPACK_IMPORTED_MODULE_38__["DashboardComponent"], _components_index__WEBPACK_IMPORTED_MODULE_38__["LoginFormComponent"], _components_index__WEBPACK_IMPORTED_MODULE_38__["LogoutFormComponent"], _components_index__WEBPACK_IMPORTED_MODULE_38__["RegistrationFormComponent"], _components_index__WEBPACK_IMPORTED_MODULE_38__["ProfileFormComponent"], _directives_index__WEBPACK_IMPORTED_MODULE_40__["DiableAutofillDirective"], _directives_index__WEBPACK_IMPORTED_MODULE_40__["RemoveHostDirective"]],
          imports: [_modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_42__["AdminModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_configurations_routes__WEBPACK_IMPORTED_MODULE_41__["routesConfig"]), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]].concat(material, [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_36__["MatPaginatorModule"]]),
          providers: [// router config
          _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
          }, // handle Bearer token for all requests
          {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_index__WEBPACK_IMPORTED_MODULE_39__["TokenInterceptorService"],
            multi: true
          }, // Nswag's generated code can be configured here
          {
            provide: _services_index__WEBPACK_IMPORTED_MODULE_39__["API_BASE_URL"],
            useFactory: getBaseUrl
          }, // regular demo data
          _services_index__WEBPACK_IMPORTED_MODULE_39__["MachineDataService"], // Account data, user details
          _services_index__WEBPACK_IMPORTED_MODULE_39__["AccountService"], // Login/Logout
          _services_index__WEBPACK_IMPORTED_MODULE_39__["AuthService"], // generic publish/subscribe
          _services_index__WEBPACK_IMPORTED_MODULE_39__["EmitterService"], // APIs to server
          _services_index__WEBPACK_IMPORTED_MODULE_39__["ApiAccounts"], _services_index__WEBPACK_IMPORTED_MODULE_39__["ApiAuth"], _services_index__WEBPACK_IMPORTED_MODULE_39__["ApiMachines"], // prevent routes for non-authenticated users
          _guards_index__WEBPACK_IMPORTED_MODULE_37__["AuthGuard"]],
          bootstrap: [_components_index__WEBPACK_IMPORTED_MODULE_38__["SiteRootComponent"]]
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

    function DashboardComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User Data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Profile Info and Claims");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "dl");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "dt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "dd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "dt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "E-Mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "dd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_4_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.showProfile();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "MORE...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user.email);
      }
    }

    function DashboardComponent_div_5_mat_card_1_li_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var machine_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", machine_r11.name, " ( ", machine_r11.location, " ) ");
      }
    }

    function DashboardComponent_div_5_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Machine Data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Data from Demo Database");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "dl");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "dt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Number of Machines");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "dd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "dt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "List of Machines");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "dd");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DashboardComponent_div_5_mat_card_1_li_18_Template, 2, 2, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "MANAGE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "MORE...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.machines.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.machines);
      }
    }

    function DashboardComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_5_mat_card_1_Template, 24, 2, "mat-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.machines)("ngIfElse", _r5);
      }
    }

    function DashboardComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "No User - please logon");
      }
    }

    function DashboardComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "No Machines - please logon");
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(accountService, machineService, router) {
        _classCallCheck(this, DashboardComponent);

        this.accountService = accountService;
        this.machineService = machineService;
        this.router = router;
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
      }, {
        key: "showProfile",
        value: function showProfile() {
          this.router.navigateByUrl('profile');
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["MachineDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 10,
      vars: 5,
      consts: [[4, "ngIf"], ["fxLayout", "row", "fxFlexAlign", "center", "fxLayoutAlign", "center", "fxLayoutGap", "20px", "fxLayoutGap.xs", "0px"], ["fxLayout", "column", "fxFlex", "40%", 4, "ngIf", "ngIfElse"], ["noUser", ""], ["noMachines", ""], ["fxLayout", "column", "fxFlex", "40%"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "assets/images/slider1.jpg"], ["mat-button", "", 3, "click"], ["class", "example-card", 4, "ngIf", "ngIfElse"], ["mat-card-image", "", "src", "assets/images/slider2.jpg"], [4, "ngFor", "ngForOf"], ["mat-button", ""]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_mat_card_2_Template, 2, 1, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_4_Template, 22, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_5_Template, 2, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_ng_template_6_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_ng_template_8_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.machines)("ngIfElse", _r5);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvQzpcXEFwcHNcXERlbW9zXFxjb3JlMy1ib2lsZXJwbGF0ZVxcU291cmNlc1xcV2ViQXBwXFxGcm9udEVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iLCIuZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */"]
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
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gerry Guest (Login: weird@guest.com, Password: P@ssw0rd)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Doris Demo (Login: doris@demo.com, Password: P@ssw0rd)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Andy Admin (Login: andy@admin.com, Password: P@ssw0rd)");

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


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

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

    function LoginFormComponent_mat_list_4_mat_list_item_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "folder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var provider_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", provider_r5.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", provider_r5.displayname, " ");
      }
    }

    function LoginFormComponent_mat_list_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginFormComponent_mat_list_4_mat_list_item_1_Template, 8, 2, "mat-list-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.providers);
      }
    }

    function LoginFormComponent_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The username or password were not recognised ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginFormComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logging in...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginFormComponent_mat_card_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "An error occured");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "json");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r3.errors), " ");
      }
    }

    var LoginFormComponent = /*#__PURE__*/function () {
      function LoginFormComponent(fb, route, router, authService) {
        _classCallCheck(this, LoginFormComponent);

        this.fb = fb;
        this.route = route;
        this.router = router;
        this.authService = authService;
      }

      _createClass(LoginFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/dashboard';
                    this.form = this.fb.group({
                      userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
                      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
                    });
                    _context.next = 4;
                    return this.authService.isLoggedIn();

                  case 4:
                    if (!_context.sent) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 7;
                    return this.router.navigate([this.returnUrl]);

                  case 7:
                    _context.next = 9;
                    return this.authService.providers();

                  case 9:
                    this.providers = _context.sent;

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var logonModel;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.loginInvalid = false;
                    this.error = false;
                    this.formSubmitAttempt = true;

                    if (!this.form.valid) {
                      _context2.next = 19;
                      break;
                    }

                    _context2.prev = 4;
                    logonModel = {
                      userName: this.form.get('userName').value,
                      password: this.form.get('password').value
                    };
                    _context2.next = 8;
                    return this.authService.login(logonModel);

                  case 8:
                    this.loginInvalid = !_context2.sent;
                    this.formSubmitAttempt = false;
                    this.router.navigateByUrl('dashboard');
                    _context2.next = 17;
                    break;

                  case 13:
                    _context2.prev = 13;
                    _context2.t0 = _context2["catch"](4);
                    this.error = true;
                    this.errors = _context2.t0;

                  case 17:
                    _context2.next = 20;
                    break;

                  case 19:
                    this.formSubmitAttempt = false;

                  case 20:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[4, 13]]);
          }));
        }
      }]);

      return LoginFormComponent;
    }();

    LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
      return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginFormComponent,
      selectors: [["login-form"]],
      decls: 23,
      vars: 5,
      consts: [[4, "ngIf"], ["autocomplete", "off", "spellcheck", "false", 3, "formGroup", "ngSubmit"], ["appearance", "legacy"], ["matInput", "", "placeholder", "Email", "formControlName", "userName"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password"], ["mat-raised-button", "", "color", "primary"], ["role", "alert", "color", "red", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["matListIcon", ""], ["matLine", ""], ["role", "alert", "color", "red"]],
      template: function LoginFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginFormComponent_mat_list_4_Template, 2, 1, "mat-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginFormComponent_mat_error_6_Template, 2, 0, "mat-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User Name (eMail)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Please provide a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Please provide a valid password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginFormComponent_div_21_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginFormComponent_mat_card_22_Template, 5, 3, "mat-card", 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.providers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginInvalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitAttempt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLine"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcQXBwc1xcRGVtb3NcXGNvcmUzLWJvaWxlcnBsYXRlXFxTb3VyY2VzXFxXZWJBcHBcXEZyb250RW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDJlbSBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'login-form',
          templateUrl: 'login-form.component.html',
          styleUrls: ['login-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
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
        var _this2 = this;

        _classCallCheck(this, LogoutFormComponent);

        this.authService = authService;
        this.cd = cd;
        this.loggedOut = false; // function returns a delayed answer to simulate something serious

        this.authService.logout().then(function () {
          return _this2.loggedOut = true;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfileFormComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Changing password...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileFormComponent_mat_card_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "An error occured");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "json");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r1.errors), "\n");
      }
    }

    var ProfileFormComponent = /*#__PURE__*/function () {
      function ProfileFormComponent(fb, authService, router) {
        _classCallCheck(this, ProfileFormComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.submitted = false;
        this.formSubmitAttempt = false;
        this.hide = true;
      }

      _createClass(ProfileFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newPasswordRepeat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.submitted = true;
          this.formSubmitAttempt = true;
          this.errors = '';

          if (this.form.valid) {
            var passwordModel = {
              oldPassword: this.form.get('oldPassword').value,
              newPassword: this.form.get('newPassword').value,
              newPasswordRepeat: this.form.get('newPasswordRepeat').value
            };
            this.authService.changePassword(passwordModel).then(function () {
              return _this3.formSubmitAttempt = false;
            }).then(function (result) {
              if (result) {
                _this3.router.navigate(['/login'], {
                  queryParams: {
                    brandNew: true
                  }
                });
              }
            }, function (errors) {
              return _this3.errors = errors.error ? Object.values(errors.error).join('') : JSON.stringify(errors);
            });
          }
        }
      }]);

      return ProfileFormComponent;
    }();

    ProfileFormComponent.ɵfac = function ProfileFormComponent_Factory(t) {
      return new (t || ProfileFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ProfileFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileFormComponent,
      selectors: [["profile-form"]],
      decls: 30,
      vars: 3,
      consts: [["autocomplete", "off", "spellcheck", "false", 3, "formGroup", "ngSubmit"], ["appearance", "legacy"], ["matInput", "", "type", "password", "placeholder", "old", "formControlName", "oldPassword"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "newPassword"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "newPasswordRepeat"], ["mat-raised-button", "", "color", "primary"], [4, "ngIf"], ["role", "alert", "color", "red", 4, "ngIf"], ["role", "alert", "color", "red"]],
      template: function ProfileFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileFormComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Change your Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Old Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Please provide your old password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Please provide a valid password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Please type the same password again ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Change");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProfileFormComponent_div_28_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProfileFormComponent_mat_card_29_Template, 5, 3, "mat-card", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formSubmitAttempt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL0M6XFxBcHBzXFxEZW1vc1xcY29yZTMtYm9pbGVycGxhdGVcXFNvdXJjZXNcXFdlYkFwcFxcRnJvbnRFbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2ZpbGVcXHByb2ZpbGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIiwibWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'profile-form',
          templateUrl: './profile-form.component.html',
          styleUrls: ['profile-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_index__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _directives_disable_autofill_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../directives/disable-autofill.directive */
    "./src/app/directives/disable-autofill.directive.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegistrationFormComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registering...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationFormComponent_mat_card_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "An error occured");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errors, "\n");
      }
    }

    var RegistrationFormComponent = /*#__PURE__*/function () {
      function RegistrationFormComponent(fb, authService, router) {
        _classCallCheck(this, RegistrationFormComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.submitted = false;
        this.hide = true;
      }

      _createClass(RegistrationFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ['']
          });
        }
      }, {
        key: "registerUser",
        value: function registerUser() {
          var _this4 = this;

          this.submitted = true;
          this.isRequesting = true;
          this.errors = '';

          if (this.form.valid) {
            var registerModel = {
              firstName: this.form.get('firstName').value,
              lastName: this.form.get('lastName').value,
              email: this.form.get('email').value,
              password: this.form.get('password').value,
              phone: this.form.get('phone').value
            };
            this.authService.register(registerModel).then(function () {
              return _this4.isRequesting = false;
            }).then(function (result) {
              if (result) {
                _this4.router.navigate(['/login'], {
                  queryParams: {
                    brandNew: true,
                    email: registerModel.email
                  }
                });
              }
            }, function (errors) {
              return _this4.errors = errors.error ? Object.values(errors.error).join('') : JSON.stringify(errors);
            });
          }
        }
      }]);

      return RegistrationFormComponent;
    }();

    RegistrationFormComponent.ɵfac = function RegistrationFormComponent_Factory(t) {
      return new (t || RegistrationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    RegistrationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationFormComponent,
      selectors: [["registration-form"]],
      decls: 44,
      vars: 7,
      consts: [["novalidate", "", "autocomplete", "off", "spellcheck", "false", 3, "formGroup", "ngSubmit"], ["appearance", "legacy"], ["matInput", "", "id", "firstName", "type", "text", "formControlName", "firstName", "placeholder", "Your first name", "tmFocus", "", "appDisableAutofill", ""], ["matInput", "", "id", "lastName", "type", "text", "formControlName", "lastName", "placeholder", "Your last name", "appDisableAutofill", ""], ["matInput", "", "id", "email", "type", "text", "formControlName", "email", "placeholder", "Email", "appDisableAutofill", ""], ["matInput", "", "id", "password", "type", "password", "formControlName", "password", "placeholder", "Password", "appDisableAutofill", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "id", "phone", "type", "text", "formControlName", "phone", "placeholder", "Phone"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], [4, "ngIf"], ["role", "alert", "color", "red", 4, "ngIf"], ["role", "alert", "color", "red"]],
      template: function RegistrationFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create your account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationFormComponent_Template_form_ngSubmit_4_listener() {
            return ctx.registerUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Please enter a name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Please enter a name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "E-Mail (used as logon)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Please enter a valid email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "This is used as logon id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationFormComponent_Template_button_click_29_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Please enter initial password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Phone Number (optional)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Just an additional profile information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RegistrationFormComponent_div_42_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RegistrationFormComponent_mat_card_43_Template, 4, 1, "mat-card", 10);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.isRequesting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRequesting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _directives_disable_autofill_directive__WEBPACK_IMPORTED_MODULE_7__["DiableAutofillDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
      styles: ["mat-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vQzpcXEFwcHNcXERlbW9zXFxjb3JlMy1ib2lsZXJwbGF0ZVxcU291cmNlc1xcV2ViQXBwXFxGcm9udEVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xccmVnaXN0cmF0aW9uXFxyZWdpc3RyYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAyZW0gYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iLCJtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'registration-form',
          templateUrl: './registration-form.component.html',
          styleUrls: ['registration-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

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

    function SiteRootComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome, ", ctx_r0.userName, "");
      }
    }

    function SiteRootComponent_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r8.isActive);
      }
    }

    function SiteRootComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r9.isActive);
      }
    }

    function SiteRootComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your Profile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r10.isActive);
      }
    }

    function SiteRootComponent_a_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r11 = ctx.$implicit;

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r11.path)("active", _r12.isActive);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r11.label, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        manager: a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        outlets: a0
      };
    };

    var _c2 = function _c2(a1) {
      return ["/admin", a1];
    };

    function SiteRootComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, link_r13.path))));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r13.label, "");
      }
    }

    var _c3 = function _c3() {
      return ["/admin"];
    };

    var SiteRootComponent = /*#__PURE__*/function () {
      function SiteRootComponent(authService, emitterService, router, cd) {
        var _this5 = this;

        _classCallCheck(this, SiteRootComponent);

        this.authService = authService;
        this.emitterService = emitterService;
        this.router = router;
        this.cd = cd;
        this.isLoggedIn = false;
        this.navLinks = [];
        this.navLinksLazy = [];
        this.emitterService.get('USER_LOGON').subscribe(function (data) {
          return _this5.userName = data.userName || data.email;
        });
        this.authService.authNavStatus$.subscribe(function (data) {
          return _this5.isLoggedIn = data;
        });
      }

      _createClass(SiteRootComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this$navLinks;

            var children;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.authService.isLoggedIn();

                  case 2:
                    this.isLoggedIn = _context3.sent;

                    (_this$navLinks = this.navLinks).push.apply(_this$navLinks, _toConsumableArray(this.router.config.filter(function (r) {
                      return r.data && r.data.mainmenu === true;
                    }).map(function (r) {
                      return {
                        path: r.path,
                        label: r.data.title.toString()
                      };
                    })));

                    children = this.router.config.filter(function (r) {
                      return r.outlet === 'manager';
                    });
                    this.navLinksLazy = children.map(function (c) {
                      return {
                        path: c.path,
                        label: c.data.title.toString()
                      };
                    });

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
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
      decls: 18,
      vars: 10,
      consts: [["fxLayout", "", "fxLayoutAlign", "center center"], ["class", "pull-right", 4, "ngIf"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "routerLink", "/login", "routerLinkActive", "", 3, "active", 4, "ngIf"], ["mat-tab-link", "", "routerLink", "/logout", "routerLinkActive", "", 3, "active", 4, "ngIf"], ["mat-tab-link", "", "routerLink", "/profile", "routerLinkActive", "", 3, "active", 4, "ngIf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "routerLinkActive", "", 3, "matMenuTriggerFor", "routerLink", "active"], ["rla", "routerLinkActive"], ["appMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "container"], ["name", "manager"], [1, "pull-right"], ["mat-tab-link", "", "routerLink", "/login", "routerLinkActive", "", 3, "active"], ["mat-tab-link", "", "routerLink", "/logout", "routerLinkActive", "", 3, "active"], ["mat-tab-link", "", "routerLink", "/profile", "routerLinkActive", "", 3, "active"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["mat-menu-item", "", 3, "routerLink"]],
      template: function SiteRootComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Professional App Foundation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SiteRootComponent_span_3_Template, 2, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SiteRootComponent_a_5_Template, 3, 1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SiteRootComponent_a_6_Template, 3, 1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SiteRootComponent_a_7_Template, 3, 1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SiteRootComponent_a_8_Template, 3, 3, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " User Administration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", null, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SiteRootComponent_button_14_Template, 2, 8, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navLinks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3))("active", _r5.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navLinksLazy);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiteRootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'site-root',
          templateUrl: 'site-root.component.html'
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
      path: 'register',
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["RegistrationFormComponent"],
      data: {
        mainmenu: true,
        title: 'User Registration'
      }
    }, {
      path: 'profile',
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["ProfileFormComponent"],
      data: {
        mainmenu: false,
        title: 'Your profile'
      }
    }, {
      path: 'info',
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["SiteInfoComponent"],
      data: {
        mainmenu: true,
        title: 'Site Info'
      }
    }, {
      path: 'dashboard',
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
      canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
      data: {
        mainmenu: true,
        title: 'Dashboard',
        role: 'User'
      }
    }, {
      path: 'admin',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ../modules/admin/admin.module */
        "./src/app/modules/admin/admin.module.ts")).then(function (m) {
          return m.AdminModule;
        });
      },
      data: {
        mainmenu: false,
        role: 'Admin'
      }
    }];
    /***/
  },

  /***/
  "./src/app/directives/disable-autofill.directive.ts":
  /*!**********************************************************!*\
    !*** ./src/app/directives/disable-autofill.directive.ts ***!
    \**********************************************************/

  /*! exports provided: DiableAutofillDirective */

  /***/
  function srcAppDirectivesDisableAutofillDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiableAutofillDirective", function () {
      return DiableAutofillDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DiableAutofillDirective = /*#__PURE__*/function () {
      function DiableAutofillDirective(el, renderer) {
        _classCallCheck(this, DiableAutofillDirective);

        this.el = el;
        this.renderer = renderer;
      }

      _createClass(DiableAutofillDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var randomString = Math.random().toString(36).slice(-6);
          this.renderer.setAttribute(this.el.nativeElement, 'name', randomString);
          this.renderer.setAttribute(this.el.nativeElement, 'autocomplete', randomString);
        }
      }]);

      return DiableAutofillDirective;
    }();

    DiableAutofillDirective.ɵfac = function DiableAutofillDirective_Factory(t) {
      return new (t || DiableAutofillDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    DiableAutofillDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DiableAutofillDirective,
      selectors: [["", "appDisableAutofill", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiableAutofillDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appDisableAutofill]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/directives/index.ts":
  /*!*************************************!*\
    !*** ./src/app/directives/index.ts ***!
    \*************************************/

  /*! exports provided: RemoveHostDirective, DiableAutofillDirective */

  /***/
  function srcAppDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _remove_host_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./remove-host.directive */
    "./src/app/directives/remove-host.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RemoveHostDirective", function () {
      return _remove_host_directive__WEBPACK_IMPORTED_MODULE_0__["RemoveHostDirective"];
    });
    /* harmony import */


    var _disable_autofill_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./disable-autofill.directive */
    "./src/app/directives/disable-autofill.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DiableAutofillDirective", function () {
      return _disable_autofill_directive__WEBPACK_IMPORTED_MODULE_1__["DiableAutofillDirective"];
    });
    /***/

  },

  /***/
  "./src/app/directives/remove-host.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/app/directives/remove-host.directive.ts ***!
    \*****************************************************/

  /*! exports provided: RemoveHostDirective */

  /***/
  function srcAppDirectivesRemoveHostDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemoveHostDirective", function () {
      return RemoveHostDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * Fixes a common issue with CSS not aware of angular. It removes the host component from physical DOM.
     */


    var RemoveHostDirective = /*#__PURE__*/function () {
      function RemoveHostDirective(el) {
        _classCallCheck(this, RemoveHostDirective);

        this.el = el;
      } //wait for the component to render completely


      _createClass(RemoveHostDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var nativeElement = this.el.nativeElement,
              parentElement = nativeElement.parentElement; // move all children out of the element

          while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
          } // remove the empty element(the host)


          parentElement.removeChild(nativeElement);
        }
      }]);

      return RemoveHostDirective;
    }();

    RemoveHostDirective.ɵfac = function RemoveHostDirective_Factory(t) {
      return new (t || RemoveHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    RemoveHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RemoveHostDirective,
      selectors: [["", "remove-host", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoveHostDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[remove-host]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
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

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var loggedIn;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.authService.isLoggedIn();

                  case 2:
                    loggedIn = _context4.sent;

                    if (loggedIn) {
                      _context4.next = 6;
                      break;
                    }

                    this.router.navigate(['/login']);
                    return _context4.abrupt("return", false);

                  case 6:
                    return _context4.abrupt("return", true);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
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
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");

    var StorageGuard = /*#__PURE__*/function () {
      function StorageGuard(router, authService) {
        _classCallCheck(this, StorageGuard);

        this.router = router;
        this.authService = authService;
      }

      _createClass(StorageGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isLoggedIn) {
            return true;
          }

          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return StorageGuard;
    }();

    StorageGuard.ɵfac = function StorageGuard_Factory(t) {
      return new (t || StorageGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
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
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
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
      styles: [".main-container[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9jb21wb25lbnRzL2NsYWltcy9DOlxcQXBwc1xcRGVtb3NcXGNvcmUzLWJvaWxlcnBsYXRlXFxTb3VyY2VzXFxXZWJBcHBcXEZyb250RW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pblxcY29tcG9uZW50c1xcY2xhaW1zXFxhZG1pbi1jbGFpbXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tcG9uZW50cy9jbGFpbXMvYWRtaW4tY2xhaW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLDJCQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tcG9uZW50cy9jbGFpbXMvYWRtaW4tY2xhaW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMzVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubWFpbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIubWFpbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMjM1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminClaimsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'admin-claims',
          templateUrl: 'admin-claims.component.html',
          styleUrls: ['admin-claims.component.scss']
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
      styles: [".main-container[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9jb21wb25lbnRzL3JvbGVzL0M6XFxBcHBzXFxEZW1vc1xcY29yZTMtYm9pbGVycGxhdGVcXFNvdXJjZXNcXFdlYkFwcFxcRnJvbnRFbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluXFxjb21wb25lbnRzXFxyb2xlc1xcYWRtaW4tcm9sZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tcG9uZW50cy9yb2xlcy9hZG1pbi1yb2xlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSwyQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2NvbXBvbmVudHMvcm9sZXMvYWRtaW4tcm9sZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIzNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMzVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'admin-roles',
          templateUrl: 'admin-roles.component.html',
          styleUrls: ['admin-roles.component.scss']
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
      decls: 12,
      vars: 0,
      consts: [[1, "alert", "alert-info"]],
      template: function AdminRootComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Administration Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Manage users, roles, and claims here. The backend has hardwired protection for two roles: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "'admin': Administrative access to this module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "'user': Access to all demo data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The backend also provides additional protection by using the claim 'role=api_access'. All users that need backend API access need to carry this claim.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        }
      },
      styles: [".main-container[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9jb21wb25lbnRzL3Jvb3QvQzpcXEFwcHNcXERlbW9zXFxjb3JlMy1ib2lsZXJwbGF0ZVxcU291cmNlc1xcV2ViQXBwXFxGcm9udEVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW5cXGNvbXBvbmVudHNcXHJvb3RcXGFkbWluLXJvb3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tcG9uZW50cy9yb290L2FkbWluLXJvb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsMkJBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9jb21wb25lbnRzL3Jvb3QvYWRtaW4tcm9vdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW4tbGVmdDogMjM1cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLm1haW4tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiLm1haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIzNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'admin-root',
          templateUrl: 'admin-root.component.html',
          styleUrls: ['admin-root.component.scss']
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
      styles: [".main-container[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9jb21wb25lbnRzL3VzZXJzL0M6XFxBcHBzXFxEZW1vc1xcY29yZTMtYm9pbGVycGxhdGVcXFNvdXJjZXNcXFdlYkFwcFxcRnJvbnRFbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluXFxjb21wb25lbnRzXFx1c2Vyc1xcYWRtaW4tdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tcG9uZW50cy91c2Vycy9hZG1pbi11c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSwyQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2NvbXBvbmVudHMvdXNlcnMvYWRtaW4tdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIzNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMzVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'admin-users',
          templateUrl: 'admin-users.component.html',
          styleUrls: ['admin-users.component.scss']
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
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../guards/auth.guard */
    "./src/app/guards/auth.guard.ts");

    var routesConfig = [{
      path: '',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["AdminRootComponent"],
      data: {
        title: 'User Administration'
      }
    }, {
      path: 'users',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["AdminUsersComponent"],
      outlet: 'manager',
      data: {
        title: 'User Manager'
      }
    }, {
      path: 'roles',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["AdminRolesComponent"],
      outlet: 'manager',
      data: {
        title: 'Roles Manager'
      }
    }, {
      path: 'claims',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
      component: _components_index__WEBPACK_IMPORTED_MODULE_0__["AdminClaimsComponent"],
      outlet: 'manager',
      data: {
        title: 'Claims Manager'
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
        var _this6;

        _classCallCheck(this, AccountService);

        _this6 = _super.call(this);
        _this6.api = api;
        return _this6;
      }

      _createClass(AccountService, [{
        key: "getUserDetails",
        value: function getUserDetails() {
          var id = localStorage.getItem('user_id');

          if (id) {
            return this.api.get(id).toPromise();
          }

          return Promise.reject('No User, please Logon');
        }
      }, {
        key: "getUserClaims",
        value: function getUserClaims() {
          var id = localStorage.getItem('user_id');

          if (id) {
            return this.api.getClaims(id).toPromise();
          }

          return Promise.reject('No User, please Logon');
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
        var _this7;

        _classCallCheck(this, AuthService);

        _this7 = _super2.call(this);
        _this7.emitterService = emitterService;
        _this7.api = api;
        _this7.accounts = accounts;
        _this7.baseUrl = ''; // Observable navItem source

        _this7._authNavStatusSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        _this7.__loggedIn = false;
        _this7.authNavStatus$ = _this7._authNavStatusSource.asObservable();

        _this7.authNavStatus$.subscribe(function (data) {
          _this7.__loggedIn = data;
          console.log('AuthNav Changed', data);
        }); // check for an old token


        var lastToken = localStorage.getItem('expires_in');

        if (lastToken) {
          var oldTime = localStorage.getItem('time');
          var compareTime = new Date().getTime();
          console.log('Last Expires In', lastToken, compareTime);

          if (+oldTime + +lastToken * 1000 < compareTime) {
            _this7.logout();
          } else {
            _this7.informListeners();

            _this7._authNavStatusSource.next(true);
          }
        }

        return _this7;
      }

      _createClass(AuthService, [{
        key: "providers",
        value: function providers() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", this.api.getProviders().toPromise());

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "register",
        value: function register(model) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    return _context6.abrupt("return", this.api.post2(model).toPromise());

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "changePassword",
        value: function changePassword(model) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var call;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    call = this.api.changePassword(model);
                    return _context7.abrupt("return", call.toPromise());

                  case 5:
                    _context7.prev = 5;
                    _context7.t0 = _context7["catch"](0);
                    _context7.next = 9;
                    return _context7.t0;

                  case 9:
                    return _context7.abrupt("return", _context7.sent);

                  case 10:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[0, 5]]);
          }));
        }
      }, {
        key: "login",
        value: function login(model) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var res, currentTime;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;
                    _context8.next = 3;
                    return this.api.post(model).toPromise();

                  case 3:
                    res = _context8.sent;

                    if (res) {
                      _context8.next = 6;
                      break;
                    }

                    return _context8.abrupt("return", Promise.reject('An unknown API error occured'));

                  case 6:
                    if (res.authToken) {
                      _context8.next = 8;
                      break;
                    }

                    return _context8.abrupt("return", Promise.resolve(false));

                  case 8:
                    // receive the token and store for all upcoming requests
                    localStorage.setItem('auth_token', res.authToken);
                    localStorage.setItem('user_id', res.id);
                    localStorage.setItem('expires_in', res.expiresIn.toString());
                    currentTime = new Date().getTime().toString();
                    localStorage.setItem('time', currentTime);

                    this._authNavStatusSource.next(true);

                    this.informListeners();
                    return _context8.abrupt("return", Promise.resolve(true));

                  case 18:
                    _context8.prev = 18;
                    _context8.t0 = _context8["catch"](0);
                    return _context8.abrupt("return", Promise.reject(_context8.t0));

                  case 21:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[0, 18]]);
          }));
        }
      }, {
        key: "informListeners",
        value: function informListeners() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var user;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.accounts.getUserDetails();

                  case 2:
                    user = _context9.sent;
                    this.emitterService.get('USER_LOGON').emit(user);

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var o;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    localStorage.removeItem('auth_token');
                    localStorage.removeItem('user_id');
                    localStorage.removeItem('expires_in');
                    o = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);

                    this._authNavStatusSource.next(false);

                    return _context10.abrupt("return", o.delay(2000).mapTo(false).toPromise());

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this._authNavStatusSource.next(this.__loggedIn);

                    return _context11.abrupt("return", this.__loggedIn);

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
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

  /*! exports provided: AccountService, MachineDataService, EmitterService, AuthService, ConfigService, API_BASE_URL, ApiAccounts, ApiAuth, ApiMachines, ApiClaim, ApiRole, ApiUser, UserViewModel, ClaimViewModel, ProviderViewModel, MarshalByRefObject, Stream, TokenResponseViewModel, ModelStateDictionary, ModelStateEntry, ModelError, Exception, ModelValidationState, LogonViewModel, RegistrationViewModel, ChangePasswordViewModel, BaseViewModel, MachineViewModel, RoleViewModel, ApiException, TokenInterceptorService */

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


    __webpack_require__.d(__webpack_exports__, "ProviderViewModel", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ProviderViewModel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MarshalByRefObject", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["MarshalByRefObject"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Stream", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["Stream"];
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


    __webpack_require__.d(__webpack_exports__, "ChangePasswordViewModel", function () {
      return _lib_frontendapi_services__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordViewModel"];
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

  /*! exports provided: API_BASE_URL, ApiAccounts, ApiAuth, ApiMachines, ApiClaim, ApiRole, ApiUser, UserViewModel, ClaimViewModel, ProviderViewModel, MarshalByRefObject, Stream, TokenResponseViewModel, ModelStateDictionary, ModelStateEntry, ModelError, Exception, ModelValidationState, LogonViewModel, RegistrationViewModel, ChangePasswordViewModel, BaseViewModel, MachineViewModel, RoleViewModel, ApiException */

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


    __webpack_require__.d(__webpack_exports__, "ProviderViewModel", function () {
      return ProviderViewModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarshalByRefObject", function () {
      return MarshalByRefObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Stream", function () {
      return Stream;
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


    __webpack_require__.d(__webpack_exports__, "ChangePasswordViewModel", function () {
      return ChangePasswordViewModel;
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
    //     Generated using the NSwag toolchain v13.4.1.0 (NJsonSchema v10.1.11.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
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
          var _this8 = this;

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
            return _this8.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this8.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this9 = this;

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

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this9.jsonParseReviver);
              result200 = UserViewModel.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this9.jsonParseReviver);
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
          var _this10 = this;

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
            return _this10.processGetClaims(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this10.processGetClaims(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetClaims",
        value: function processGetClaims(response) {
          var _this11 = this;

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

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this11.jsonParseReviver);

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
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this11.jsonParseReviver);
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
        key: "getProviders",
        value: function getProviders() {
          var _this12 = this;

          var url_ = this.baseUrl + "/api/Auth";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this12.processGetProviders(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this12.processGetProviders(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetProviders",
        value: function processGetProviders(response) {
          var _this13 = this;

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

          {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var resultdefault = null;
              var resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, _this13.jsonParseReviver);

              if (Array.isArray(resultDatadefault)) {
                resultdefault = [];

                var _iterator5 = _createForOfIteratorHelper(resultDatadefault),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var item = _step5.value;
                    resultdefault.push(ProviderViewModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(resultdefault);
            }));
          }
        }
      }, {
        key: "post",
        value: function post(credentials) {
          var _this14 = this;

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
            return _this14.processPost(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this14.processPost(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPost",
        value: function processPost(response) {
          var _this15 = this;

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

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this15.jsonParseReviver);
              result200 = TokenResponseViewModel.fromJS(resultData200);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this15.jsonParseReviver);
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
          var _this16 = this;

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
            return _this16.processPost2(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this16.processPost2(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPost2",
        value: function processPost2(response) {
          var _this17 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator7 = _createForOfIteratorHelper(response.headers.keys()),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var key = _step7.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this17.jsonParseReviver);
              result200 = resultData200 !== undefined ? resultData200 : null;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this17.jsonParseReviver);
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
        key: "changePassword",
        value: function changePassword(model) {
          var _this18 = this;

          var url_ = this.baseUrl + "/api/Auth/changepassword";
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
            return _this18.processChangePassword(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this18.processChangePassword(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processChangePassword",
        value: function processChangePassword(response) {
          var _this19 = this;

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

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this19.jsonParseReviver);
              result200 = resultData200 !== undefined ? resultData200 : null;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this19.jsonParseReviver);
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
        key: "confirmEmail",
        value: function confirmEmail(userId, confirmation) {
          var _this20 = this;

          var url_ = this.baseUrl + "/api/Auth/confirmemail?";
          if (userId !== undefined) url_ += "userId=" + encodeURIComponent("" + userId) + "&";
          if (confirmation !== undefined) url_ += "confirmation=" + encodeURIComponent("" + confirmation) + "&";
          url_ = url_.replace(/[?&]$/, "");
          var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Accept": "application/json"
            })
          };
          return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (response_) {
            return _this20.processConfirmEmail(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this20.processConfirmEmail(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processConfirmEmail",
        value: function processConfirmEmail(response) {
          var _this21 = this;

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

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this21.jsonParseReviver);
              result200 = resultData200 !== undefined ? resultData200 : null;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
          } else if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this21.jsonParseReviver);
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
          var _this22 = this;

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
            return _this22.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this22.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this23 = this;

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

          {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var resultdefault = null;
              var resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, _this23.jsonParseReviver);

              if (Array.isArray(resultDatadefault)) {
                resultdefault = [];

                var _iterator11 = _createForOfIteratorHelper(resultDatadefault),
                    _step11;

                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var item = _step11.value;
                    resultdefault.push(MachineViewModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(resultdefault);
            }));
          }
        }
      }, {
        key: "post",
        value: function post(value) {
          var _this24 = this;

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
            return _this24.processPost(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this24.processPost(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPost",
        value: function processPost(response) {
          var _this25 = this;

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

          if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this25.jsonParseReviver);
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
          var _this26 = this;

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
            return _this26.processGet2(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this26.processGet2(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet2",
        value: function processGet2(response) {
          var _this27 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator13 = _createForOfIteratorHelper(response.headers.keys()),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var key = _step13.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }

          {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var resultdefault = null;
              var resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, _this27.jsonParseReviver);
              resultdefault = MachineViewModel.fromJS(resultDatadefault);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(resultdefault);
            }));
          }
        }
      }, {
        key: "put",
        value: function put(id, value) {
          var _this28 = this;

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
            return _this28.processPut(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this28.processPut(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processPut",
        value: function processPut(response) {
          var _this29 = this;

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

          if (status === 400) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result400 = null;
              var resultData400 = _responseText === "" ? null : JSON.parse(_responseText, _this29.jsonParseReviver);
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
          var _this30 = this;

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
            return _this30.processDelete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this30.processDelete(response_);
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
          var _this31 = this;

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
            return _this31.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this31.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this32 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator16 = _createForOfIteratorHelper(response.headers.keys()),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var key = _step16.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this32.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator17 = _createForOfIteratorHelper(resultData200),
                    _step17;

                try {
                  for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                    var item = _step17.value;
                    result200.push(ClaimViewModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator17.e(err);
                } finally {
                  _iterator17.f();
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
          var _this33 = this;

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
            return _this33.processPost(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this33.processPost(response_);
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
          var _this34 = this;

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
            return _this34.processGetUserForClaim(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this34.processGetUserForClaim(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetUserForClaim",
        value: function processGetUserForClaim(response) {
          var _this35 = this;

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

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this35.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator20 = _createForOfIteratorHelper(resultData200),
                    _step20;

                try {
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var item = _step20.value;
                    result200.push(UserViewModel.fromJS(item));
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
        key: "delete",
        value: function _delete(id, claimType) {
          var _this36 = this;

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
            return _this36.processDelete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this36.processDelete(response_);
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
          var _this37 = this;

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
            return _this37.processPut(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this37.processPut(response_);
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
          var _this38 = this;

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
            return _this38.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this38.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this39 = this;

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

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this39.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator24 = _createForOfIteratorHelper(resultData200),
                    _step24;

                try {
                  for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                    var item = _step24.value;
                    result200.push(RoleViewModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator24.e(err);
                } finally {
                  _iterator24.f();
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
          var _this40 = this;

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
            return _this40.processPost(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this40.processPost(response_);
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
          var _this41 = this;

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
            return _this41.processGetbyId(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this41.processGetbyId(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetbyId",
        value: function processGetbyId(response) {
          var _this42 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator26 = _createForOfIteratorHelper(response.headers.keys()),
                _step26;

            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var key = _step26.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this42.jsonParseReviver);
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
          var _this43 = this;

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
            return _this43.processPut(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this43.processPut(response_);
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
          var _this44 = this;

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
            return _this44.processDelete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this44.processDelete(response_);
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
          var _this45 = this;

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
            return _this45.processGet(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this45.processGet(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGet",
        value: function processGet(response) {
          var _this46 = this;

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

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this46.jsonParseReviver);

              if (Array.isArray(resultData200)) {
                result200 = [];

                var _iterator30 = _createForOfIteratorHelper(resultData200),
                    _step30;

                try {
                  for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                    var item = _step30.value;
                    result200.push(UserViewModel.fromJS(item));
                  }
                } catch (err) {
                  _iterator30.e(err);
                } finally {
                  _iterator30.f();
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
          var _this47 = this;

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
            return _this47.processPost(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this47.processPost(response_);
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
            var _iterator31 = _createForOfIteratorHelper(response.headers.keys()),
                _step31;

            try {
              for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                var key = _step31.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator31.e(err);
            } finally {
              _iterator31.f();
            }
          }

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
          var _this48 = this;

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
            return _this48.processGetById(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this48.processGetById(response_);
              } catch (e) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
              }
            } else return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
          }));
        }
      }, {
        key: "processGetById",
        value: function processGetById(response) {
          var _this49 = this;

          var status = response.status;
          var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body : response.error instanceof Blob ? response.error : undefined;
          var _headers = {};

          if (response.headers) {
            var _iterator32 = _createForOfIteratorHelper(response.headers.keys()),
                _step32;

            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var key = _step32.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }
          }

          if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(function (_responseText) {
              var result200 = null;
              var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this49.jsonParseReviver);
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
          var _this50 = this;

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
            return _this50.processPut(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this50.processPut(response_);
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
            var _iterator33 = _createForOfIteratorHelper(response.headers.keys()),
                _step33;

            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                var key = _step33.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }
          }

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
          var _this51 = this;

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
            return _this51.processDelete(response_);
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
              try {
                return _this51.processDelete(response_);
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
            var _iterator34 = _createForOfIteratorHelper(response.headers.keys()),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var key = _step34.value;
                _headers[key] = response.headers.get(key);
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }
          }

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
            this.phoneNumber = _data["phoneNumber"];
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
          data["phoneNumber"] = this.phoneNumber;
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

    var ProviderViewModel = /*#__PURE__*/function () {
      function ProviderViewModel(data) {
        _classCallCheck(this, ProviderViewModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ProviderViewModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.name = _data["name"];
            this.displayName = _data["displayName"];
            this.icon = _data["icon"] ? Stream.fromJS(_data["icon"]) : undefined;
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["name"] = this.name;
          data["displayName"] = this.displayName;
          data["icon"] = this.icon ? this.icon.toJSON() : undefined;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ProviderViewModel();
          result.init(data);
          return result;
        }
      }]);

      return ProviderViewModel;
    }();

    var MarshalByRefObject = /*#__PURE__*/function () {
      function MarshalByRefObject(data) {
        _classCallCheck(this, MarshalByRefObject);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(MarshalByRefObject, [{
        key: "init",
        value: function init(_data) {}
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          throw new Error("The abstract class 'MarshalByRefObject' cannot be instantiated.");
        }
      }]);

      return MarshalByRefObject;
    }();

    var Stream = /*#__PURE__*/function (_MarshalByRefObject) {
      _inherits(Stream, _MarshalByRefObject);

      var _super3 = _createSuper(Stream);

      function Stream(data) {
        _classCallCheck(this, Stream);

        return _super3.call(this, data);
      }

      _createClass(Stream, [{
        key: "init",
        value: function init(_data) {
          _get(_getPrototypeOf(Stream.prototype), "init", this).call(this, _data);

          if (_data) {
            this.canTimeout = _data["canTimeout"];
            this.readTimeout = _data["readTimeout"];
            this.writeTimeout = _data["writeTimeout"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["canTimeout"] = this.canTimeout;
          data["readTimeout"] = this.readTimeout;
          data["writeTimeout"] = this.writeTimeout;

          _get(_getPrototypeOf(Stream.prototype), "toJSON", this).call(this, data);

          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          throw new Error("The abstract class 'Stream' cannot be instantiated.");
        }
      }]);

      return Stream;
    }(MarshalByRefObject);

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

              var _iterator35 = _createForOfIteratorHelper(_data["Keys"]),
                  _step35;

              try {
                for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                  var item = _step35.value;
                  this.keys.push(item);
                }
              } catch (err) {
                _iterator35.e(err);
              } finally {
                _iterator35.f();
              }
            }

            if (Array.isArray(_data["Values"])) {
              this.values = [];

              var _iterator36 = _createForOfIteratorHelper(_data["Values"]),
                  _step36;

              try {
                for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                  var _item = _step36.value;
                  this.values.push(ModelStateEntry.fromJS(_item));
                }
              } catch (err) {
                _iterator36.e(err);
              } finally {
                _iterator36.f();
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

            var _iterator37 = _createForOfIteratorHelper(this.keys),
                _step37;

            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var item = _step37.value;
                data["Keys"].push(item);
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }
          }

          if (Array.isArray(this.values)) {
            data["Values"] = [];

            var _iterator38 = _createForOfIteratorHelper(this.values),
                _step38;

            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var _item2 = _step38.value;
                data["Values"].push(_item2.toJSON());
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
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

              var _iterator39 = _createForOfIteratorHelper(_data["errors"]),
                  _step39;

              try {
                for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                  var item = _step39.value;
                  this.errors.push(ModelError.fromJS(item));
                }
              } catch (err) {
                _iterator39.e(err);
              } finally {
                _iterator39.f();
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

            var _iterator40 = _createForOfIteratorHelper(this.errors),
                _step40;

            try {
              for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                var item = _step40.value;
                data["errors"].push(item.toJSON());
              }
            } catch (err) {
              _iterator40.e(err);
            } finally {
              _iterator40.f();
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
            this.phone = _data["phone"];
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
          data["phone"] = this.phone;
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

    var ChangePasswordViewModel = /*#__PURE__*/function () {
      function ChangePasswordViewModel(data) {
        _classCallCheck(this, ChangePasswordViewModel);

        if (data) {
          for (var property in data) {
            if (data.hasOwnProperty(property)) this[property] = data[property];
          }
        }
      }

      _createClass(ChangePasswordViewModel, [{
        key: "init",
        value: function init(_data) {
          if (_data) {
            this.oldPassword = _data["oldPassword"];
            this.newPassword = _data["newPassword"];
            this.newPasswordRepeat = _data["newPasswordRepeat"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["oldPassword"] = this.oldPassword;
          data["newPassword"] = this.newPassword;
          data["newPasswordRepeat"] = this.newPasswordRepeat;
          return data;
        }
      }], [{
        key: "fromJS",
        value: function fromJS(data) {
          data = typeof data === 'object' ? data : {};
          var result = new ChangePasswordViewModel();
          result.init(data);
          return result;
        }
      }]);

      return ChangePasswordViewModel;
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

      var _super4 = _createSuper(MachineViewModel);

      function MachineViewModel(data) {
        _classCallCheck(this, MachineViewModel);

        return _super4.call(this, data);
      }

      _createClass(MachineViewModel, [{
        key: "init",
        value: function init(_data) {
          _get(_getPrototypeOf(MachineViewModel.prototype), "init", this).call(this, _data);

          if (_data) {
            this.name = _data["name"];
            this.location = _data["location"];
            this.startOperation = _data["startOperation"] ? new Date(_data["startOperation"].toString()) : undefined;
            this.hasDevices = _data["hasDevices"];
          }
        }
      }, {
        key: "toJSON",
        value: function toJSON(data) {
          data = typeof data === 'object' ? data : {};
          data["name"] = this.name;
          data["location"] = this.location;
          data["startOperation"] = this.startOperation ? this.startOperation.toISOString() : undefined;
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

      var _super5 = _createSuper(ApiException);

      function ApiException(message, status, response, headers, result) {
        var _this52;

        _classCallCheck(this, ApiException);

        _this52 = _super5.call(this);
        _this52.isApiException = true;
        _this52.message = message;
        _this52.status = status;
        _this52.response = response;
        _this52.headers = headers;
        _this52.result = result;
        return _this52;
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
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    throw new Error('Not implemented');

                  case 1:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
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
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("@nyaf/lib");
const forms_1 = require("@nyaf/forms");
const login_store_1 = require("./stores/login.store");
const store_1 = require("@nyaf/store");
const login_actions_1 = require("./actions/login.actions");
const services_1 = require("app/services");
let LoginFormComponent = class LoginFormComponent extends lib_1.BaseComponent {
    constructor() {
        super();
        this.model.setScope(new services_1.LogonViewModel());
        this.store.subscribe('error', (data) => {
            this.querySelector('app-alert').show(data.error);
        });
        this.store.subscribe('user', data => {
            this.querySelector('app-alert').hide();
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (lib_1.default.createElement(lib_1.default.Fragment, null,
                lib_1.default.createElement("form", null,
                    lib_1.default.createElement("div", { class: "form-group" },
                        lib_1.default.createElement("label", { for: "email" }, "Email address"),
                        lib_1.default.createElement("input", { type: "email", class: "form-control", id: "email", "aria-describedby": "emailHelp", name: "email", "n-bind": "value: userName" }),
                        lib_1.default.createElement("small", { id: "emailHelp", class: "form-text text-muted" }, "We'll never share your email with anyone else.")),
                    lib_1.default.createElement("div", { class: "form-group" },
                        lib_1.default.createElement("label", { for: "password" }, "Password"),
                        lib_1.default.createElement("input", { type: "password", class: "form-control", id: "password", name: "password", "n-bind": "value: password" })),
                    lib_1.default.createElement("div", { class: "form-group form-check" },
                        lib_1.default.createElement("input", { type: "checkbox", class: "form-check-input", id: "remember", name: "remember" }),
                        lib_1.default.createElement("label", { class: "form-check-label", for: "remember" }, "Remember")),
                    lib_1.default.createElement("button", { type: "submit", class: "btn btn-primary", "n-click": e => this.login(e) }, "Submit")),
                lib_1.default.createElement("app-alert", { type: "warning", text: "Username or password not recognized", close: false })));
        });
    }
    login(e) {
        this.store.dispatch(login_actions_1.LOGIN_USER, this.model.getScope());
    }
};
LoginFormComponent = __decorate([
    lib_1.CustomElement('site-login'),
    store_1.ProvideStore(login_store_1.default),
    forms_1.ViewModel(services_1.LogonViewModel)
], LoginFormComponent);
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.component.js.map
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
const registration_store_1 = require("./stores/registration.store");
const store_1 = require("@nyaf/store");
const services_1 = require("app/services");
const registration_actions_1 = require("./actions/registration.actions");
let RegisterFormComponent = class RegisterFormComponent extends lib_1.BaseComponent {
    constructor() {
        super();
        this.umlautMap = {
            '\u00dc': 'UE',
            '\u00c4': 'AE',
            '\u00d6': 'OE',
            '\u00fc': 'ue',
            '\u00e4': 'ae',
            '\u00f6': 'oe',
            '\u00df': 'ss',
        };
        this.submitted = false;
        this.hide = true;
        this.model.setScope(new services_1.RegistrationViewModel());
        this.store.subscribe('result', data => {
            (this.querySelector('app-alert').show(data.result.errors));
        });
        this.store.subscribe('current', data => {
            lib_1.GlobalProvider.navigateRoute('/dashboard');
        });
    }
    replaceUmlauts(str) {
        return str
            .replace(/[\u00dc|\u00c4|\u00d6][a-z]/g, (a) => {
            const big = this.umlautMap[a.slice(0, 1)];
            return big.charAt(0) + big.charAt(1).toLowerCase() + a.slice(1);
        })
            .replace(new RegExp('[' + Object.keys(this.umlautMap).join('|') + ']', "g"), (a) => this.umlautMap[a]);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (lib_1.default.createElement(lib_1.default.Fragment, null,
                lib_1.default.createElement("form", { "n-submit": e => this.submit(e), spellcheck: "false" },
                    lib_1.default.createElement("div", { class: "form-group" },
                        lib_1.default.createElement("label", { for: "firstName" }, "First Name"),
                        lib_1.default.createElement("input", { type: "text", class: "form-control", id: "firstName", "n-bind": "value: firstName" })),
                    lib_1.default.createElement("div", { class: "form-group" },
                        lib_1.default.createElement("label", { for: "lastName" }, "First Name"),
                        lib_1.default.createElement("input", { type: "text", class: "form-control", id: "lastName", "n-bind": "value: lastName" })),
                    lib_1.default.createElement("div", { class: "form-group" },
                        lib_1.default.createElement("label", { for: "lastName" }, "User Name"),
                        lib_1.default.createElement("input", { type: "text", class: "form-control", id: "lastName", "n-bind": "value: userName" })),
                    lib_1.default.createElement("div", { class: "form-group" },
                        lib_1.default.createElement("label", { for: "password" }, "Password"),
                        lib_1.default.createElement("input", { type: "password", class: "form-control", id: "password", "n-bind": "value: password" })),
                    lib_1.default.createElement("div", { class: "form-group" },
                        lib_1.default.createElement("label", { for: "phone" }, "Password"),
                        lib_1.default.createElement("input", { type: "phone", class: "form-control", id: "phone", "n-bind": "value: phone" })),
                    lib_1.default.createElement("button", { type: "submit", class: "btn btn-primary" }, "Submit")),
                lib_1.default.createElement("app-alert", { type: "warning", text: "An error occured", close: false })));
        });
    }
    submit(e) {
        this.store.dispatch(registration_actions_1.REGISTRATION_REGISTER, this.model.getScope());
    }
};
RegisterFormComponent = __decorate([
    lib_1.CustomElement('site-register'),
    store_1.ProvideStore(registration_store_1.default)
], RegisterFormComponent);
exports.RegisterFormComponent = RegisterFormComponent;
//# sourceMappingURL=registration-form.component.js.map
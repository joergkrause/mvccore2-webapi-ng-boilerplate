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
const store_1 = require("@nyaf/store");
const logout_store_1 = require("./stores/logout.store");
const logout_actions_1 = require("./actions/logout.actions");
let LogoutFormComponent = class LogoutFormComponent extends lib_1.BaseComponent {
    constructor() {
        super();
        this.store.subscribe('loggedOut', d => {
            this.data.loggedOut = d.loggedOut;
        });
        this.store.subscribe('loggingOut', d => {
            this.data.loggingOut = d.loggingOut;
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (lib_1.default.createElement(lib_1.default.Fragment, null,
                lib_1.default.createElement("app-alert", { "n-if": this.data.loggingOut, text: "You're about logging out.", close: false, type: "warning" }),
                lib_1.default.createElement("app-alert", { "n-if": this.data.loggedOut, text: "You're successfully being logged out.", close: false, type: "success" })));
        });
    }
    lifeCycle(state) {
        if (state === lib_1.LifeCycle.Load) {
            this.store.dispatch(logout_actions_1.LOGOUT_USER, null);
        }
    }
};
LogoutFormComponent = __decorate([
    lib_1.CustomElement('site-logout'),
    store_1.ProvideStore(logout_store_1.default)
], LogoutFormComponent);
exports.LogoutFormComponent = LogoutFormComponent;
//# sourceMappingURL=logout-form.component.js.map
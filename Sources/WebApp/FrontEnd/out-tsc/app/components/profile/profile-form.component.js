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
const profile_store_1 = require("./stores/profile.store");
const store_1 = require("@nyaf/store");
const services_1 = require("app/services");
const forms_1 = require("@nyaf/forms");
const profile_actions_1 = require("./actions/profile.actions");
let ProfileFormComponent = class ProfileFormComponent extends lib_1.BaseComponent {
    constructor() {
        super();
        this.model.setScope(new services_1.ChangePasswordViewModel());
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (lib_1.default.createElement(lib_1.default.Fragment, null,
                lib_1.default.createElement("div", { class: "card" },
                    lib_1.default.createElement("div", { class: "card-title" }, "Your Profile"),
                    lib_1.default.createElement("div", { class: "card-content" },
                        lib_1.default.createElement("form", null,
                            lib_1.default.createElement("div", { class: "form-group" },
                                lib_1.default.createElement("label", { for: "old" }, "Old Password"),
                                lib_1.default.createElement("input", { type: "password", class: "form-control", id: "old", name: "old", "n-bind": "value: oldPassword" })),
                            lib_1.default.createElement("div", { class: "form-group" },
                                lib_1.default.createElement("label", { for: "new" }, "New Password"),
                                lib_1.default.createElement("input", { type: "password", class: "form-control", id: "new", name: "new", "n-bind": "value: newPassword" })),
                            lib_1.default.createElement("div", { class: "form-group" },
                                lib_1.default.createElement("label", { for: "confirm" }, "Confirm New Password"),
                                lib_1.default.createElement("input", { type: "password", class: "form-control", id: "confirm", name: "confirm", "n-bind": "value: newPasswordRepeat" })),
                            lib_1.default.createElement("button", { type: "submit", class: "btn btn-primary", "n-click": e => this.submit(e) }, "Submit"))))));
        });
    }
    submit(e) {
        this.store.dispatch(profile_actions_1.PROFILE_SAVE, this.model.getScope());
    }
};
ProfileFormComponent = __decorate([
    lib_1.CustomElement('site-profile'),
    store_1.ProvideStore(profile_store_1.default),
    forms_1.ViewModel(services_1.ChangePasswordViewModel)
], ProfileFormComponent);
exports.ProfileFormComponent = ProfileFormComponent;
//# sourceMappingURL=profile-form.component.js.map
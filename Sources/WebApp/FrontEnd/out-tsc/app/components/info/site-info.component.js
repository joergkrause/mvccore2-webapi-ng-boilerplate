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
let SiteInfoComponent = class SiteInfoComponent extends lib_1.BaseComponent {
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (lib_1.default.createElement("div", { class: "alert alert-info" },
                "There are three pre-defined users:",
                lib_1.default.createElement("ul", null,
                    lib_1.default.createElement("li", null, "Gerry Guest (Login: weird@guest.com, Password: P@ssw0rd)"),
                    lib_1.default.createElement("li", null, "Doris Demo (Login: doris@demo.com, Password: P@ssw0rd)"),
                    lib_1.default.createElement("li", null, "Andy Admin (Login: andy@admin.com, Password: P@ssw0rd)")),
                "There are three roles defined, each role has one member:",
                lib_1.default.createElement("ul", null,
                    lib_1.default.createElement("li", null, "Guest (Member: Weird Guest)"),
                    lib_1.default.createElement("li", null, "User (Member: Doris Demo)"),
                    lib_1.default.createElement("li", null, "Admin (Member: Andy Admin)")),
                lib_1.default.createElement("p", null, "There is one Policy as a User claim defined:"),
                " ",
                lib_1.default.createElement("pre", null,
                    '{',
                    "\"role\": \"api_access\" ",
                    '}'),
                lib_1.default.createElement("p", null, "The members \"Doris Demo\" and \"Andy Admin\" have this claim."),
                lib_1.default.createElement("p", null, "Weird Guest has no claim and hence cannot access the backend API."),
                lib_1.default.createElement("div", { class: "alert alert-danger" },
                    lib_1.default.createElement("p", null, "Login, Register and this Info page can be opened by all users. "),
                    lib_1.default.createElement("p", null, "A Guard is protecting the dashboard from user not properly logged on. If you click on \"Dashboard\" as an anonymous user your're are going to be redirected to the login form."))));
        });
    }
};
SiteInfoComponent = __decorate([
    lib_1.CustomElement('site-info')
], SiteInfoComponent);
exports.SiteInfoComponent = SiteInfoComponent;
//# sourceMappingURL=site-info.component.js.map
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
const dashboard_store_1 = require("./stores/dashboard.store");
const store_1 = require("@nyaf/store");
let DashboardComponent = class DashboardComponent extends lib_1.BaseComponent {
    constructor() {
        super();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            const listOfMachines = []; // <li>{ machine.name } ( { machine.location } )</li>
            return yield (lib_1.default.createElement(lib_1.default.Fragment, null,
                lib_1.default.createElement("h2", null, "Dashboard"),
                lib_1.default.createElement("div", { class: "row" },
                    lib_1.default.createElement("div", { class: "col-6" },
                        lib_1.default.createElement("div", { class: "card" },
                            lib_1.default.createElement("div", { class: "card-image-top" },
                                lib_1.default.createElement("img", { "mat-card-image": true, src: "assets/images/slider1.jpg" })),
                            lib_1.default.createElement("div", { class: "card-body" },
                                lib_1.default.createElement("div", { class: "card-title" }, "User Data"),
                                lib_1.default.createElement("div", { class: "card-content" },
                                    lib_1.default.createElement("dl", null,
                                        lib_1.default.createElement("dt", null, "User Name"),
                                        lib_1.default.createElement("dd", { "n-bind": "textContent:userName" }),
                                        lib_1.default.createElement("dt", null, "E-Mail"),
                                        lib_1.default.createElement("dd", { "n-bind": "textContent:email" }))),
                                lib_1.default.createElement("div", null,
                                    lib_1.default.createElement("button", { class: "btn ", "n-click": e => this.showProfile(e) }, "MORE..."))))),
                    lib_1.default.createElement("div", { class: "col-6" },
                        lib_1.default.createElement("div", { class: "card" },
                            lib_1.default.createElement("div", { class: "card-image-top" },
                                lib_1.default.createElement("img", { "mat-card-image": true, src: "assets/images/slider2.jpg" })),
                            lib_1.default.createElement("div", { class: "card-body" },
                                lib_1.default.createElement("div", { class: "card-title" }, "Machine Data"),
                                lib_1.default.createElement("div", { class: "card-content" },
                                    lib_1.default.createElement("dl", null,
                                        lib_1.default.createElement("dt", null, "Number of Machines"),
                                        lib_1.default.createElement("dd", { "n-bind": "textContent:numOfMachines" }),
                                        lib_1.default.createElement("dt", null, "List of Machines"),
                                        lib_1.default.createElement("dd", null,
                                            lib_1.default.createElement("ul", null, listOfMachines))),
                                    lib_1.default.createElement("div", null,
                                        lib_1.default.createElement("button", { "mat-button": true }, "MANAGE"),
                                        lib_1.default.createElement("button", { "mat-button": true }, "MORE..."))),
                                lib_1.default.createElement("div", null, "No User - please logon"),
                                lib_1.default.createElement("div", null, "No Machines - please logon")))))));
        });
    }
    showProfile(e) {
        // navigate
    }
};
DashboardComponent = __decorate([
    lib_1.CustomElement('app-dashboard'),
    store_1.ProvideStore(dashboard_store_1.default)
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map
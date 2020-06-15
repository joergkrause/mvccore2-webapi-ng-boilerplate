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
let AdminRootComponent = class AdminRootComponent extends lib_1.BaseComponent {
    constructor() {
        super();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (lib_1.default.createElement(lib_1.default.Fragment, null,
                lib_1.default.createElement("div", { class: 'row' },
                    lib_1.default.createElement("app-tabs", { class: "col", id: "adminTabs" },
                        lib_1.default.createElement("app-tab", { title: "Users", id: "a1" },
                            lib_1.default.createElement("admin-users", null)),
                        lib_1.default.createElement("app-tab", { title: "Roles", id: "a2" },
                            lib_1.default.createElement("admin-roles", null)),
                        lib_1.default.createElement("app-tab", { title: "Claims", id: "a3" },
                            lib_1.default.createElement("admin-claims", null)),
                        lib_1.default.createElement("app-tab", { title: "Help", id: "a3" },
                            lib_1.default.createElement("h2", null, "Administration Center"),
                            lib_1.default.createElement("hr", null),
                            lib_1.default.createElement("div", { class: "alert alert-info" },
                                "Manage users, roles, and claims here. The backend has hardwired protection for two roles:",
                                lib_1.default.createElement("ul", null,
                                    lib_1.default.createElement("li", null, "'admin': Administrative access to this module"),
                                    lib_1.default.createElement("li", null, "'user': Access to all demo data")),
                                "The backend also provides additional protection by using the claim 'role=api_access'. All users that need backend API access need to carry this claim."))))));
        });
    }
};
AdminRootComponent = __decorate([
    lib_1.CustomElement('admin-root')
], AdminRootComponent);
exports.AdminRootComponent = AdminRootComponent;
//# sourceMappingURL=admin-root.component.js.map
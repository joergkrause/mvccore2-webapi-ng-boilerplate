"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SiteRootComponent = (function () {
    function SiteRootComponent() {
    }
    SiteRootComponent = __decorate([
        core_1.Component({
            selector: 'site-root',
            template: "\n            <site-header></site-header>\n            <site-sidebar></site-sidebar>\n            <section class=\"main-container\">\n                <router-outlet></router-outlet>\n            </section>\n            ",
            styles: ["\n            .main-container {\n                margin-top: 60px;\n                margin-left: 235px;\n                padding: 15px;\n                -ms-overflow-x: hidden;\n                overflow-x: hidden;\n                overflow-y: scroll;\n                position: relative;\n                overflow: hidden;\n\n            }",
                "\n            @media screen and (max-width: 992px) {\n                .main-container {\n                    margin-left: 0px !important;\n                }\n            }"
            ]
        })
    ], SiteRootComponent);
    return SiteRootComponent;
}());
exports.SiteRootComponent = SiteRootComponent;
//# sourceMappingURL=siteroot.component.js.map
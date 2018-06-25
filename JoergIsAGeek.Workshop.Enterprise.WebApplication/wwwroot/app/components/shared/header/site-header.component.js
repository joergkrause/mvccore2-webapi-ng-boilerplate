"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SiteHeaderComponent = (function () {
    function SiteHeaderComponent(router) {
        var _this = this;
        this.router = router;
        this.router.events.subscribe(function (val) {
            if (val instanceof router_1.NavigationEnd && window.innerWidth <= 992) {
                _this.toggleSidebar();
            }
        });
    }
    SiteHeaderComponent.prototype.ngOnInit = function () { };
    SiteHeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('push-right');
    };
    Object.defineProperty(SiteHeaderComponent.prototype, "loggedIn", {
        get: function () {
            return !!localStorage.getItem('isLoggedin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteHeaderComponent.prototype, "userName", {
        get: function () {
            return !!localStorage.getItem('userName');
        },
        enumerable: true,
        configurable: true
    });
    SiteHeaderComponent.prototype.changeLang = function (language) {
        // TODO
    };
    SiteHeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'site-header',
            templateUrl: './site-header.component.html',
            styleUrls: ['./site-header.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], SiteHeaderComponent);
    return SiteHeaderComponent;
}());
exports.SiteHeaderComponent = SiteHeaderComponent;
//# sourceMappingURL=site-header.component.js.map
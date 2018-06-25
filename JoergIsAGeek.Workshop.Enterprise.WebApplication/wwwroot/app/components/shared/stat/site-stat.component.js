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
var SiteStatComponent = /** @class */ (function () {
    function SiteStatComponent() {
        this.event = new core_1.EventEmitter();
    }
    SiteStatComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SiteStatComponent.prototype, "bgClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SiteStatComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], SiteStatComponent.prototype, "count", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SiteStatComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], SiteStatComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SiteStatComponent.prototype, "event", void 0);
    SiteStatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'site-stat',
            templateUrl: './site-stat.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], SiteStatComponent);
    return SiteStatComponent;
}());
exports.SiteStatComponent = SiteStatComponent;
//# sourceMappingURL=site-stat.component.js.map
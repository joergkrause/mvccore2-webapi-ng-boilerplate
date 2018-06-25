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
var user_service_1 = require("../../services/user.service");
var PageRegistrationComponent = (function () {
    function PageRegistrationComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
    }
    PageRegistrationComponent.prototype.ngOnInit = function () {
    };
    PageRegistrationComponent.prototype.registerUser = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.register(value.email, value.password, value.firstName, value.lastName, value.location)
                .then(function () { return _this.isRequesting = false; })
                .then(function (result) {
                if (result) {
                    _this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
                }
            }, function (errors) { return _this.errors = errors; });
        }
    };
    PageRegistrationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'site-registration',
            templateUrl: './registration-form.component.html'
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], PageRegistrationComponent);
    return PageRegistrationComponent;
}());
exports.PageRegistrationComponent = PageRegistrationComponent;
//# sourceMappingURL=registration-form.component.js.map
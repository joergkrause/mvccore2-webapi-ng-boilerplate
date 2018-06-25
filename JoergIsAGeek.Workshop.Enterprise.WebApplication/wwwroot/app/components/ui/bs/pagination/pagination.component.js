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
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.defaultPagination = 1;
        this.advancedPagination = 1;
        this.paginationSize = 1;
        this.disabledPagination = 1;
        this.isDisabled = true;
    }
    PaginationComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    PaginationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-pagination',
            templateUrl: './pagination.component.html',
            styleUrls: ['./pagination.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map
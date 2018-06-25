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
var DatePickerComponent = (function () {
    function DatePickerComponent() {
    }
    DatePickerComponent.prototype.ngOnInit = function () {
    };
    DatePickerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-date-picker',
            templateUrl: './date-picker.component.html',
            styleUrls: ['./date-picker.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], DatePickerComponent);
    return DatePickerComponent;
}());
exports.DatePickerComponent = DatePickerComponent;
//# sourceMappingURL=date-picker.component.js.map
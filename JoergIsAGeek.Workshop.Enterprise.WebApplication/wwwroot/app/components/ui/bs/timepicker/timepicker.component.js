"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TimepickerComponent = (function () {
    function TimepickerComponent() {
        this.defaultTime = { hour: 13, minute: 30 };
        this.meridianTime = { hour: 13, minute: 30 };
        this.meridian = true;
        this.SecondsTime = { hour: 13, minute: 30, second: 30 };
        this.seconds = true;
        this.customTime = { hour: 13, minute: 30, second: 0 };
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
    }
    TimepickerComponent.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    TimepickerComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    TimepickerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-timepicker',
            templateUrl: './timepicker.component.html',
            styleUrls: ['./timepicker.component.css']
        })
    ], TimepickerComponent);
    return TimepickerComponent;
}());
exports.TimepickerComponent = TimepickerComponent;
//# sourceMappingURL=timepicker.component.js.map
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
var PageDashboardComponent = (function () {
    function PageDashboardComponent() {
        this.alerts = [];
        this.sliders = [];
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'Rock Solid C# Backend',
            text: 'A multilayer architecture build on top of .NET 4.7 and Entity Framework.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Testable and Extensible',
            text: 'Dependency Injection and Service Orientated Architecture.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Single Page Frontend',
            text: 'State of the Art Frontend using Angular 4 and Highcharts.'
        });
        this.alerts.push({
            id: 1,
            type: 'success',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        }, {
            id: 2,
            type: 'warning',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        });
    }
    PageDashboardComponent.prototype.ngOnInit = function () {
        this.numOfMachines = 22;
        this.numOfDevices = 11;
        this.numOfValues = 1000;
    };
    PageDashboardComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    PageDashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page-dashboard',
            templateUrl: './page-dashboard.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], PageDashboardComponent);
    return PageDashboardComponent;
}());
exports.PageDashboardComponent = PageDashboardComponent;
//# sourceMappingURL=page-dashboard.component.js.map
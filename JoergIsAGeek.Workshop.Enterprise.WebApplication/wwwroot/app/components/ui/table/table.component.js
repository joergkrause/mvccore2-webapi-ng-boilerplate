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
var svogv_1 = require("svogv");
/**
 * A grid component that handles any sort of data decorated with SVOGV decorators.
 */
var TableComponent = (function () {
    function TableComponent(router) {
        this.router = router;
        this.searchText = 'Search';
        this.filterText = 'Search Item';
        this.removeColumnText = 'Remove';
        this.newItemText = 'New Item';
        this.noItemsText = 'There are no users available.';
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.editMachine = function (data) {
        this.router.navigate(["/" + this.childRoute + "/edit/" + data.id]);
    };
    TableComponent.prototype.addMachine = function () {
        this.router.navigate(["/" + this.childRoute + "/new"]);
    };
    TableComponent.prototype.removeMachine = function (data) {
        this.router.navigate(["/" + this.childRoute + "/delete/" + data.id]);
    };
    TableComponent.prototype.showModal = function (data) {
        this.currentData = data;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", svogv_1.AcDataGridModel)
    ], TableComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "childRoute", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "searchText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "filterText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "removeColumnText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "newItemText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "noItemsText", void 0);
    TableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map
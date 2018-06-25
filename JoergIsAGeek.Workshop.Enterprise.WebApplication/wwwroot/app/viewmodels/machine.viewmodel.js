"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var svogv_1 = require("svogv");
var base_1 = require("./base");
var MachineViewModel = (function (_super) {
    __extends(MachineViewModel, _super);
    function MachineViewModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '';
        _this.location = '';
        return _this;
    }
    __decorate([
        svogv_1.Display('Machine Name', 10),
        svogv_1.Required(),
        __metadata("design:type", String)
    ], MachineViewModel.prototype, "name", void 0);
    __decorate([
        svogv_1.Display('Location', 20),
        svogv_1.Required(),
        __metadata("design:type", String)
    ], MachineViewModel.prototype, "location", void 0);
    return MachineViewModel;
}(base_1.Base));
exports.MachineViewModel = MachineViewModel;
//# sourceMappingURL=machine.viewmodel.js.map
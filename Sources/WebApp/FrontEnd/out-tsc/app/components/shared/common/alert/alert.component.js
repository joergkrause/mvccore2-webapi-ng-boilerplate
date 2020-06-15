"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("@nyaf/lib");
// generic box that moves content to header
let AlertComponent = class AlertComponent extends lib_1.BaseComponent {
    constructor() {
        super();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            const button = this.data.close ? lib_1.default.createElement("button", { type: "button", class: "close-alert", "n-click": e => this.close(e) }, "\u00D7") : null;
            return yield (lib_1.default.createElement("div", { class: "hide alert", className: this.alertType, role: "alert" },
                lib_1.default.createElement("p", null, this.data.text),
                button));
        });
    }
    get alertType() {
        var _a;
        return `alert-${(_a = this.data.type) !== null && _a !== void 0 ? _a : 'success'}`;
    }
    close(e) {
        this.hide();
    }
    show(text) {
        if (text) {
            this.data.text = text;
        }
        this.classList.remove('hide');
    }
    hide() {
        this.classList.add('hide');
    }
};
AlertComponent = __decorate([
    lib_1.CustomElement('app-alert'),
    lib_1.Properties({ text: '', type: 'success', close: false })
], AlertComponent);
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alert.component.js.map
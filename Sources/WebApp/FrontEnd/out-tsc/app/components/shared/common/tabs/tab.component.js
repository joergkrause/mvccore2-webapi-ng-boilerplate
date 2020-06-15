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
let TabComponent = class TabComponent extends lib_1.BaseComponent {
    constructor() {
        super();
        this.classList.add('hide');
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (lib_1.default.createElement("div", { id: this.getAttribute('data-id') },
                lib_1.default.createElement("slot", null)));
        });
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
};
TabComponent = __decorate([
    lib_1.CustomElement('app-tab'),
    lib_1.ShadowDOM(true)
], TabComponent);
exports.TabComponent = TabComponent;
//# sourceMappingURL=tab.component.js.map
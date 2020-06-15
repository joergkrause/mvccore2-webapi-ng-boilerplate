"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("@nyaf/lib");
let SearchInputExpander = class SearchInputExpander extends lib_1.Expander {
    constructor() {
        super();
        this['data-icon'] = "<span class='mif-search'></span>";
        this['data-cls-line'] = "bg-cyan";
        this['data-cls-label'] = "fg-cyan";
        this['data-cls-informer'] = "fg-lightCyan";
        this['data-cls-icon'] = "fg-darkCyan";
        this['data-clear-button'] = "true";
        this['data-search-button'] = "true";
        this['data-role'] = "materialinput";
        this['data-label'] = "Name";
        this['placeholder'] = "Name";
        this['type'] = "text";
        this['name'] = "search";
        this['role'] = "search";
    }
};
SearchInputExpander = __decorate([
    lib_1.Expand('search')
], SearchInputExpander);
exports.SearchInputExpander = SearchInputExpander;
//# sourceMappingURL=search.input.expander.js.map
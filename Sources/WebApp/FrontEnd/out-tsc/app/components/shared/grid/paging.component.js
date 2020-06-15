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
let PagingComponent = class PagingComponent extends lib_1.BaseComponent {
    constructor() {
        super();
    }
    invokeStep(page, pageSize) {
        const evt = {
            bubbles: true,
            cancelable: false,
            detail: {
                page,
                pageSize
            }
        };
        this.dispatch('step', evt);
    }
    render() {
        const noPages = null;
        const model = this.data.model;
        if (!(model && model.length)) {
            return noPages;
        }
        // 0 based
        const current = +(this.data.current || 0);
        const first = 0;
        const maxPageIndex = Math.ceil(model.length / +(this.data.pagesize));
        const pageButtons = [];
        if (maxPageIndex < 10) {
            for (let i = 0; i < maxPageIndex; i++) {
                const pageClasses = 'page-item ' + (i === current ? 'disabled bg-blue ' : '');
                pageButtons.push(lib_1.default.createElement("li", { class: pageClasses },
                    lib_1.default.createElement("a", { class: 'page-link', "data-page": i, "n-on-click": e => this.jump(e) },
                        " ",
                        i + 1,
                        " ")));
            }
        }
        else {
            pageButtons.push(lib_1.default.createElement("li", { class: 'page-item disabled bg-red' },
                lib_1.default.createElement("a", { class: 'page-link' },
                    " ",
                    `Seite ${current + 1} von ${maxPageIndex}`,
                    " ")));
        }
        const prevPageNumber = Math.max(0, current - 1);
        const nextPageNumber = Math.min(current + 1, maxPageIndex - 1);
        const prevNoLinkClasses = 'page-item ' + (current === 0 ? 'disabled' : '');
        const lastNoLinkClasses = 'page-item ' + (current === maxPageIndex - 1 ? 'disabled' : '');
        const options = [10, 15, 20, 25].map(n => {
            if (+(this.data.pagesize) === n) {
                return (lib_1.default.createElement("option", { value: n, selected: true }, n));
            }
            else {
                return (lib_1.default.createElement("option", { value: n }, n));
            }
        });
        const noMore = current === maxPageIndex - 1 ? lib_1.default.createElement("span", { class: "fg-orange" }, "Keine weiteren Eintr\u00E4ge") : null;
        return (lib_1.default.createElement("div", { class: "cell-12" },
            lib_1.default.createElement("span", { class: "float-right bg-blue fg-white rounded p-1" }, model.length === 1 ? 'Ein Eintrag' : `${model.length} Einträge`),
            lib_1.default.createElement("ul", { class: "pagination" },
                lib_1.default.createElement("li", null,
                    lib_1.default.createElement("select", { name: "itemsperpage", style: "width: 60px; height: 33px; margin-top: 4px", "n-on-change": e => this.jump(e), "n-async": true }, options)),
                lib_1.default.createElement("li", { class: prevNoLinkClasses },
                    lib_1.default.createElement("a", { class: "page-link", href: "#", "data-page": first, "n-on-click": e => this.jump(e) },
                        lib_1.default.createElement("span", { class: "mif-chevron-thin-left" }))),
                lib_1.default.createElement("li", { class: prevNoLinkClasses },
                    lib_1.default.createElement("a", { class: "page-link", href: "#", "data-page": prevPageNumber, "n-on-click": e => this.jump(e) },
                        lib_1.default.createElement("span", { class: "mif-chevron-left" }))),
                pageButtons,
                lib_1.default.createElement("li", { class: lastNoLinkClasses },
                    lib_1.default.createElement("a", { class: "page-link", href: "#", "data-page": nextPageNumber, "n-on-click": e => this.jump(e) },
                        lib_1.default.createElement("span", { class: "mif-chevron-right" }))),
                lib_1.default.createElement("li", { class: lastNoLinkClasses },
                    lib_1.default.createElement("a", { class: "page-link", href: "#", "data-page": maxPageIndex - 1, "n-on-click": e => this.jump(e) },
                        lib_1.default.createElement("span", { class: "mif-chevron-thin-right" })))),
            noMore));
    }
    jump(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = Number(e.target.getAttribute('data-page'));
            const val = document.querySelector('[name="itemsperpage"]').value;
            this.data.pagesize = +val;
            e.preventDefault();
            this.invokeStep(page, +val);
        });
    }
};
PagingComponent = __decorate([
    lib_1.CustomElement('app-paging'),
    lib_1.Properties({ model: [], pagesize: 10, mode: 'narrow', current: 0 }),
    lib_1.Events(['step'])
], PagingComponent);
exports.PagingComponent = PagingComponent;
//# sourceMappingURL=paging.component.js.map
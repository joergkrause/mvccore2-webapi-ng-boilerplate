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
const uuid_1 = require("uuid");
require('./tabs.component.scss');
;
// tslint:disable-next-line:max-classes-per-file
let TabsComponent = class TabsComponent extends lib_1.BaseComponent {
    constructor() {
        super();
        this.tabChildren = [];
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let first = 0;
            const tabHeaders = Array.prototype.slice.call(this.children).map((child) => {
                var _a;
                const targetId = (_a = child.id) !== null && _a !== void 0 ? _a : '_' + uuid_1.v4();
                child.setAttribute('id', targetId);
                this.tabChildren.push({
                    node: child,
                    targetId,
                    id: child.id
                });
                return (lib_1.default.createElement("li", { class: 0 === first++ ? 'active' : '' },
                    lib_1.default.createElement("a", { href: `#${targetId}` }, child.getAttribute("title"))));
            });
            return yield (lib_1.default.createElement(lib_1.default.Fragment, null,
                lib_1.default.createElement("ul", { "data-expand": 'true', role: "nav", class: "pos-absolute tabs-material tabs-adjustment" },
                    tabHeaders,
                    lib_1.default.createElement("span", { class: "tab-marker" })),
                lib_1.default.createElement("div", { class: 'cell-12 border bd-default no-border-top mt-15', "data-tabs": true },
                    lib_1.default.createElement("slot", null))));
        });
    }
    lifeCycle(lc) {
        if (lc === lib_1.LifeCycle.Load) {
            this.shadowRoot.querySelectorAll('li')
                .forEach(li => {
                li.addEventListener('click', e => this.selectTab(e));
                if (li.classList.contains('active')) {
                    this.openTab(li.querySelector('a').getAttribute('href'));
                }
            });
        }
    }
    selectTab(e) {
        let targetId = e.target.getAttribute('href');
        if (!targetId) {
            const innerA = e.target.querySelector('a');
            if (innerA) {
                targetId = innerA.getAttribute('href');
            }
        }
        this.openTab(targetId);
    }
    setTab(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const targetId = this.tabChildren.filter((child) => child.id === id).shift().targetId;
            // use shadowRoot because it is shadowed
            this.openTab(`#${targetId}`);
            return Promise.resolve();
        });
    }
    openTab(targetId) {
        const tabs = this.shadowRoot.querySelectorAll('li');
        const tab = this.querySelector(targetId);
        const li = this.shadowRoot.querySelector(`[href="${targetId}"]`).parentElement;
        let tabWidth;
        let tabLeft;
        // hide all
        const tabContent = this.querySelectorAll('app-tab');
        tabContent.forEach((t) => {
            t.classList.add('hide');
        });
        // calcuate marker
        tabWidth = li.clientWidth;
        tabLeft = li.offsetLeft;
        // deactivate all
        tabs.forEach(t => {
            t.classList.remove('active');
        });
        // activate
        tab.classList.add("active");
        // move the marker
        const marker = this.shadowRoot.querySelector('span.tab-marker');
        const animation = marker.animate([
            {
                left: `${marker.style.left || '0px'}`,
                width: `${marker.style.width || '0px'}`
            },
            {
                left: `${tabLeft}px`,
                width: `${tabWidth}px`
            }
        ], {
            duration: 250,
            easing: 'ease-in-out'
        });
        animation.onfinish = () => {
            marker.style.left = `${tabLeft}px`;
            marker.style.width = `${tabWidth}px`;
        };
        // make tabContent visible
        const currentTab = this.querySelector('app-tab' + targetId);
        currentTab.classList.remove('hide');
    }
};
TabsComponent = __decorate([
    lib_1.CustomElement('app-tabs'),
    lib_1.Events(['all']),
    lib_1.ShadowDOM(true),
    lib_1.UseParentStyles(true)
], TabsComponent);
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map
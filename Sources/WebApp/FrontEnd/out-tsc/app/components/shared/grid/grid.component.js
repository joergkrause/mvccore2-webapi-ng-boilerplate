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
const observer_service_1 = require("app/services/observer.service");
const dom_operations_1 = require("app/services/lib/dom-operations");
const util_1 = require("util");
const store_1 = require("@nyaf/store");
const global_store_1 = require("app/services/flux/stores/global.store");
;
const gridStore = {
    actions: {},
    reducer: {},
    state: {}
};
const mergedStore = global_store_1.default.mergeStore(gridStore);
let GridComponent = class GridComponent extends lib_1.BaseComponent {
    constructor() {
        super();
        this.progressExecutorDone = false;
    }
    lifeCycle(lifeCycle) {
        if (lifeCycle === lib_1.LifeCycle.Connect) {
            this.gridDataObserver1 = this.store.subscribe(this.data.storeitem, d => {
                this.state = d[this.data.storeitem];
                this.querySelectorAll(`[data-progress-id]`).forEach(e => e.classList.add('hide'));
                if (!this.progressExecutorDone && this.data.progressbar) {
                    const items = this.querySelectorAll(`[data-progress-id]`);
                    for (let i = 0, j = 1; i < items.length; i++, j++) {
                        const e = items[i];
                        const id = e.getAttribute('data-progress-id');
                        this.invokeProgress(this.data.actionidname, id, j === items.length);
                    }
                    this.progressExecutorDone = true;
                }
                this.setup();
            });
            if (this.data.pgDoneObserver) {
                this.gridDataObserver2 = observer_service_1.Observer.getInstance().subscribe(this.data.pgDoneObserver, (d) => {
                    if (d.hideAll) {
                        this.querySelectorAll(`[data-progress-id]`).forEach(e => e.classList.add('hide'));
                    }
                    if (d.showProgress) {
                        this.querySelector(`[data-progress-id="${d.showProgress}"]`).classList.remove('hide');
                    }
                });
            }
        }
    }
    closeAction(data) {
        const evt = {
            bubbles: true,
            cancelable: false,
            detail: {
                data
            }
        };
        this.dispatch('close', evt);
    }
    invokeClickAction(e) {
        const action = e.target.getAttribute('data-action');
        if (action) {
            const evt = {
                bubbles: true,
                cancelable: false,
                detail: {
                    id: e.target.getAttribute('data-id'),
                    action
                }
            };
            this.dispatch('action', evt);
        }
    }
    invokeAction(e) {
        const evt = {
            bubbles: true,
            cancelable: true,
            detail: e.detail
        };
        this.dispatch('action', evt);
    }
    invokeProgress(idProp, id, last) {
        const evt = {
            bubbles: true,
            cancelable: false,
            detail: {
                [idProp]: id,
                last
            }
        };
        this.dispatch('progress', evt);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.state || !this.state.headers)
                return yield (lib_1.default.createElement("div", { class: 'row' },
                    lib_1.default.createElement("div", { class: 'mx-auto cell-12', "data-role": 'panel', "data-cls-content": 'bg-orange fg-white' }, "Noch keine Daten geladen")));
            const sanitized = (d) => {
                const div = document.createElement('div');
                div.innerHTML = d;
                return div.innerText;
            };
            const cols = this.getColHeader();
            const head = this.getHead();
            const withResult = this.state.itemsOnCurrentPage.map(item => (lib_1.default.createElement("tr", { "n-on-dblclick": e => this.invokeClickAction(e), "data-id": item[this.data.actionidname], "data-action": this.data.defaultAction },
                this.state.columnsOfItemValues(item).map((data, idx) => (lib_1.default.createElement("td", { class: 'make-text', className: this.getCellClasses(item, idx), title: sanitized(data) }, util_1.isBoolean(data) ? (!!data ? lib_1.default.createElement("span", { class: "mif-checkmark" }) : lib_1.default.createElement("span", { class: "mif-blocked" })) : data))),
                this.getActionMenu(!!this.data.actiontitle, this.data.actionidname, item),
                (this.data.progressbar ? lib_1.default.createElement("td", null,
                    lib_1.default.createElement("div", { class: "hide", "data-role": "progress", "data-type": "line", "data-small": "true", "data-progress-id": item[this.data.actionidname] })) : null))));
            if (this.state.totalFilteredRows) {
                return yield (lib_1.default.createElement(lib_1.default.Fragment, null,
                    lib_1.default.createElement("table", { class: "table striped fixed_header row-hover" },
                        cols,
                        lib_1.default.createElement("thead", null, head),
                        lib_1.default.createElement("tbody", null, withResult)),
                    this.data.paging ? lib_1.default.createElement("app-paging", { mode: "full", current: this.state.currentPageIndex, pagesize: this.state.pageSize, model: this.state.itemsFiltered, "n-on-step": e => this.pageStep(e), "n-async": true }) : null));
            }
            else {
                return (lib_1.default.createElement(lib_1.default.Fragment, null,
                    lib_1.default.createElement("table", { class: "table striped fixed_header row-hover" },
                        cols,
                        lib_1.default.createElement("thead", null, head),
                        lib_1.default.createElement("tbody", null,
                            lib_1.default.createElement("tr", null,
                                lib_1.default.createElement("td", { colspan: this.state.headers.length + (!!this.data.actiontitle ? 1 : 0) },
                                    lib_1.default.createElement("div", { class: 'mx-auto cell-12', "data-role": 'panel', "data-cls-content": 'bg-red fg-white' }, "Keine Ergebnisse f\u00FCr diese Abfrage gefunden. Erneut abfragen oder Filterwerte \u00E4ndern.")))))));
            }
        });
    }
    getColHeader() {
        const hasActionButton = !!this.data.actiontitle;
        const hasProgressBar = !!this.data.progressbar;
        let actionWidth = 100;
        if (this.data.actions && [].slice.call(this.data.actions).length === 2) {
            actionWidth *= 2;
        }
        return (lib_1.default.createElement("colgroup", null,
            this.state.headers.map(header => {
                if (header.width) {
                    return lib_1.default.createElement("col", { width: header.width });
                }
                else {
                    return lib_1.default.createElement("col", null);
                }
            }),
            hasActionButton ? lib_1.default.createElement("col", { width: actionWidth }) : null,
            hasProgressBar ? lib_1.default.createElement("col", { width: "20" }) : null));
    }
    getCellClasses(rowItem, idx) {
        // get all props of row
        const current = Object.keys(rowItem)[idx];
        // loop and look whether any element has a control value
        for (const prop of Object.keys(rowItem)) {
            if (this.state.TypeInstance[`__hasTemplateHint__${prop}`] && this.state.TypeInstance[`__templatehint__${prop}`] === 'table-cell') {
                const name = this.state.TypeInstance[`__templatehintParams__${prop}`].name;
                const cls = this.state.TypeInstance[`__templatehintParams__${prop}`].class;
                if (current === name && rowItem[prop]) {
                    return cls;
                }
            }
        }
        return '';
    }
    getHead() {
        const hasActionButton = !!this.data.actiontitle;
        const hasProgressBar = !!this.data.progressbar;
        return (lib_1.default.createElement("tr", null,
            this.state.headers.map(header => {
                var _a;
                const sortAsc = (lib_1.default.createElement("span", { class: "supersmall", "data-sort": header.prop, "data-sort-dir": "desc" },
                    lib_1.default.createElement("app-icon", { type: "small", icon: "sort-asc", "n-on-click": e => this.sortAction(e), "n-async": true })));
                const sortDesc = (lib_1.default.createElement("span", { class: "supersmall", "data-sort": header.prop, "data-sort-dir": "asc" },
                    lib_1.default.createElement("app-icon", { type: "small", icon: "sort-desc", "n-on-click": e => this.sortAction(e), "n-async": true })));
                const text = header.text;
                let filter = '';
                if (header.filterable) {
                    filter = (lib_1.default.createElement(lib_1.default.Fragment, null,
                        lib_1.default.createElement("input", { type: "text", class: "input-small", "data-role": "input", onfocus: "this.value = this.value;", value: this.state.searchValue[header.prop] ? this.state.searchValue[header.prop] : '', "data-filter": header.prop, style: `width: ${(_a = header.width) !== null && _a !== void 0 ? _a : 80}px`, "n-on-input": e => this.filterAction(e), "n-async": true })));
                }
                return (lib_1.default.createElement("th", { title: header.desc, style: "vertical-align: bottom;" },
                    filter,
                    text,
                    header.sortable ? (lib_1.default.createElement("div", { class: "sortsmall", "data-action-sort": true }, this.state.getCurrentSortDir(header.prop) === 'desc' ? sortDesc : sortAsc)) : (''),
                    header.additionalHeader ? (lib_1.default.createElement("div", { class: "sortsmall", "data-action-remove": header.prop, style: "cursor: pointer;" },
                        lib_1.default.createElement("app-icon", { type: "small", icon: "cross", "n-on-click": e => this.removeAction(e), "n-async": true }))) : ('')));
            }),
            hasActionButton ? lib_1.default.createElement("th", { style: "vertical-align: bottom;" }, "Aktion") : '',
            hasProgressBar ? lib_1.default.createElement("th", null) : ''));
    }
    getActionMenu(hasActionButton, idProperty, item) {
        if (!hasActionButton) {
            return null;
        }
        if (this.data.actions) {
            // > 1 action
            const actionData = this.data.actions;
            if (actionData.length > 2) {
                return (lib_1.default.createElement("td", null,
                    lib_1.default.createElement("button", { type: 'button', class: 'button success outline dropdown-toggle' }, this.data.actiontitle),
                    lib_1.default.createElement("ul", { class: "d-menu", "data-role": "dropdown" },
                        lib_1.default.createElement("app-dropmenu", { "n-repeat": this.data.actions, id: item[idProperty], action: "@@action", color: "@@color", title: "@@title", icon: "@@icon", "n-on-action": e => this.invokeAction(e) }))));
            }
            else {
                const buttons = actionData.map((action) => {
                    return (lib_1.default.createElement(lib_1.default.Fragment, null,
                        lib_1.default.createElement("button", { type: 'button', class: 'button outline mr-1 small ' + action.color, "data-id": item[idProperty], "data-action": action.action, "n-on-click": e => this.invokeClickAction(e) }, action.title)));
                });
                return (lib_1.default.createElement("td", { style: "white-space:nowrap;" }, buttons));
            }
        }
        else {
            return (lib_1.default.createElement("td", null,
                lib_1.default.createElement("button", { type: 'button', class: 'button success outline small', "data-action": 'CLICK', "data-id": item[idProperty], "n-on-click": e => this.invokeClickAction(e) }, this.data.actiontitle)));
        }
    }
    pageStep(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page, pageSize } = e.detail;
            this.state.currentPageIndex = page;
            this.state.pageSize = pageSize;
            yield this.setup();
        });
    }
    sortAction(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const prop = dom_operations_1.DomOp.getParent(e.target, '[data-sort]').getAttribute('data-sort');
            const dir = dom_operations_1.DomOp.getParent(e.target, '[data-sort]').getAttribute('data-sort-dir');
            this.state.sortColumn(prop, dir);
            yield this.setup();
        });
    }
    filterAction(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const prop = e.target.getAttribute('data-filter');
            const value = e.target.value;
            this.state.filter(prop, value);
            yield this.setup();
        });
    }
    removeAction(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const closeHeaderData = dom_operations_1.DomOp.getParent(e.target, '[data-action-remove]').getAttribute('data-action-remove');
            this.state.removeColumn(closeHeaderData);
            this.closeAction(closeHeaderData);
            yield this.setup();
        });
    }
    dispose() {
        if (this.gridDataObserver1) {
            this.gridDataObserver1.remove();
            delete this.gridDataObserver1;
        }
        if (this.gridDataObserver2) {
            this.gridDataObserver2.remove();
            delete this.gridDataObserver2;
        }
    }
};
GridComponent = __decorate([
    lib_1.CustomElement('app-grid'),
    lib_1.Properties({ actiontitle: '', paging: false, pageSize: 5, actionidname: 'id', defaultAction: '', actions: [], progressbar: false, pgDoneObserver: '', storeitem: '' }),
    lib_1.Events(['action', 'close', 'progress']),
    store_1.ProvideStore(mergedStore)
], GridComponent);
exports.GridComponent = GridComponent;
//# sourceMappingURL=grid.component.js.map
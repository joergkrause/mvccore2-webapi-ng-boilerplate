"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datagrid_header_1 = require("./datagrid.header");
const datagrid_item_1 = require("./datagrid.item");
var Direction;
(function (Direction) {
    Direction[Direction["Ascending"] = 0] = "Ascending";
    Direction[Direction["Descending"] = 1] = "Descending";
})(Direction = exports.Direction || (exports.Direction = {}));
/**
 * The controlling class for Grid applications.
 *
 * This class takes an array of elements and handles:
 * - visible headers, managed by @Hidden() decorator
 * - create header titles, managed by @Display() decorator
 * - sorting
 * - filtering
 * - count total rows
 * - paging
 */
class DataGridModel {
    constructor(items, type, pageSize = 10) {
        this.searchValue = {};
        this.currentPageIndex = 0;
        this._currentSortDir = new Map();
        this._items = items;
        this.pageSize = pageSize;
        this.typeInstance = new type();
        if (this.typeInstance) {
            // make header from decorators, omit if null
            this.createHeadersForType(this.typeInstance);
        }
    }
    get TypeInstance() {
        return this.typeInstance;
    }
    get totalRows() {
        return this._items.length;
    }
    get totalFilteredRows() {
        const filtered = (this.itemsFiltered) ? this.itemsFiltered.length : 0;
        return filtered;
    }
    get maxPageIndex() {
        const index = Math.ceil(this.totalFilteredRows / this.pageSize);
        return index;
    }
    get startRow() {
        if (this.currentPageIndex < 0) {
            return 0;
        }
        return (this.pageSize * this.currentPageIndex);
    }
    get endRow() {
        if (this.currentPageIndex < 0) {
            return 0;
        }
        return Math.min(this.totalFilteredRows, (this.pageSize * this.currentPageIndex) + this.pageSize - 1);
    }
    set items(value) {
        this._items = value;
    }
    get items() {
        return this._items;
    }
    filter(prop, filterValue) {
        this.searchValue = {};
        this.searchValue[prop] = filterValue;
    }
    getItemSorted(sortColumn, sortDirection) {
        let items;
        if (sortDirection === Direction.Ascending) {
            items = this.items.sort((a, b) => a[sortColumn] > b[sortColumn] ? 1 : -1);
        }
        else {
            items = this.items.sort((a, b) => a[sortColumn] < b[sortColumn] ? 1 : -1);
        }
        return items;
    }
    get itemsFiltered() {
        return this.items.filter(item => {
            if (!this.searchValue)
                return true;
            const prop = Object.keys(this.searchValue).shift();
            return item[prop] === this.searchValue[prop];
        });
    }
    get itemsOnCurrentPage() {
        return this.itemsFiltered.slice(this.startRow, this.endRow);
    }
    // The view can get col by col filtered for valid headers
    columnsOfItemValues(item) {
        // we return all if no headers
        const columns = new Array();
        if (!this._headers) {
            for (const prop in item) {
                if (!item.hasOwnProperty(prop)) {
                    continue;
                }
                columns.push(item[prop]);
            }
        }
        else {
            this.headers
                .forEach((e, idx) => columns.push(item[e.prop]));
        }
        return columns;
    }
    columnsOfItem(item) {
        // we return all if no headers
        const columns = new Array();
        const currentHeaders = this.headers || Object.keys(item).map(h => new datagrid_header_1.DataGridHeader(h, null, h, false, false));
        currentHeaders
            .forEach((h, idx) => {
            const e = new datagrid_item_1.DataGridItem();
            e.value = item[h.prop];
            e.prop = h.prop;
            columns.push(e);
        });
        return columns;
    }
    sortColumn(colName, dir) {
        this.items.sort((a, b) => dir === 'desc' ? (a[colName] > b[colName] ? 1 : -1) : (a[colName] > b[colName] ? -1 : 1));
        this._currentSortDir.set(colName, dir);
    }
    getCurrentSortDir(colName) {
        return this._currentSortDir.get(colName) || 'asc';
    }
    get rawHeaders() {
        return this._headers;
    }
    get headers() {
        return this._headers.filter(h => !h.hidden);
    }
    get headersNotVisible() {
        return this._headers.filter(h => h.hidden);
    }
    removeColumn(colname) {
        const col = this._headers.find(h => h.prop === colname);
        if (col) {
            col.hidden = true;
        }
    }
    addColumn(colname) {
        const col = this._headers.find(h => h.prop === colname);
        if (col) {
            col.hidden = false;
        }
    }
    createHeadersForType(type) {
        // assume simple object structure, iterating an array of viewmodels
        // has at least one row, so we can read the headers
        // first we read the properties
        this._headers = new Array();
        for (const p in type) {
            if (!type.hasOwnProperty(p)) {
                continue;
            }
            // either propname or decorator name
            const propName = type[`__displayName__${p}`] || p;
            const propDesc = type[`__displayDesc__${p}`] || p;
            // check if hidden, show if no hidden decorator
            const isHidden = type[`__isHidden__${p}`] || false;
            const isSortable = type[`__isSortable__${p}`] || false;
            const h = new datagrid_header_1.DataGridHeader(propName, propDesc, p, isSortable, isHidden);
            h.width = type[`__templatehint__${p}`] === 'table-column' && type[`__templatehintParams__${p}`].width ? type[`__templatehintParams__${p}`].width : null;
            h.filterable = type[`__isFilterable__${p}`] || false;
            this._headers.push(h);
        }
    }
}
exports.DataGridModel = DataGridModel;
//# sourceMappingURL=datagrid.model.js.map
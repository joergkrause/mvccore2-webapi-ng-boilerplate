import { DataGridHeader } from './datagrid.header';
import { DataGridItem } from './datagrid.item';
import { Type } from 'app/types/common';
export declare enum Direction {
    Ascending = 0,
    Descending = 1
}
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
export declare class DataGridModel<T> {
    searchValue: T;
    currentPageIndex: number;
    pageSize: number;
    private _items;
    private typeInstance;
    constructor(items: T[], type: Type<T>, pageSize?: number);
    get TypeInstance(): T;
    get totalRows(): number;
    get totalFilteredRows(): number;
    get maxPageIndex(): number;
    private get startRow();
    private get endRow();
    set items(value: T[]);
    get items(): T[];
    filter(prop: string, filterValue: string): void;
    getItemSorted(sortColumn: string, sortDirection: Direction): T[];
    get itemsFiltered(): T[];
    get itemsOnCurrentPage(): T[];
    columnsOfItemValues(item: T): any[];
    columnsOfItem(item: T): DataGridItem[];
    private _currentSortDir;
    sortColumn(colName: string, dir: string): void;
    getCurrentSortDir(colName: string): string;
    private _headers;
    get rawHeaders(): DataGridHeader[];
    get headers(): DataGridHeader[];
    get headersNotVisible(): DataGridHeader[];
    removeColumn(colname: string): void;
    addColumn(colname: string): void;
    private createHeadersForType;
}

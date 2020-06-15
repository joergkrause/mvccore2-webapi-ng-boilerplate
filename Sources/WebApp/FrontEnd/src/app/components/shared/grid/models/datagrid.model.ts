import { DataGridHeader } from './datagrid.header';
import { DataGridItem } from './datagrid.item';
import { Type } from 'app/types/common';

export enum Direction {
  Ascending,
  Descending
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
export class DataGridModel<T> {
  searchValue: T = {} as T;
  currentPageIndex = 0;
  pageSize: number;
  private _items: T[];
  private typeInstance: T;

  constructor(items: T[], type: Type<T>, pageSize = 10) {
    this._items = items;
    this.pageSize = pageSize;
    this.typeInstance = new type();
    if (this.typeInstance) {
      // make header from decorators, omit if null
      this.createHeadersForType(this.typeInstance);
    }
  }

  get TypeInstance(): T {
    return this.typeInstance;
  }

  get totalRows(): number {
    return this._items.length;
  }

  get totalFilteredRows(): number {
    const filtered = (this.itemsFiltered) ? this.itemsFiltered.length : 0;
    return filtered;
  }

  get maxPageIndex(): number {
    const index = Math.ceil(this.totalFilteredRows / this.pageSize);
    return index;
  }

  private get startRow(): number {
    if (this.currentPageIndex < 0) {
      return 0;
    }
    return (this.pageSize * this.currentPageIndex);
  }

  private get endRow(): number {
    if (this.currentPageIndex < 0) {
      return 0;
    }
    return Math.min(this.totalFilteredRows, (this.pageSize * this.currentPageIndex) + this.pageSize - 1);
  }

  public set items(value: T[]) {
    this._items = value;
  }
  public get items(): T[] {
    return this._items;
	}

	public filter(prop: string, filterValue: string) {
		this.searchValue = {} as T;
		this.searchValue[prop] = filterValue;
	}

  getItemSorted(sortColumn: string, sortDirection: Direction): T[] {
    let items: T[];
    if (sortDirection === Direction.Ascending) {
      items = this.items.sort((a: any, b: any) => a[sortColumn] > b[sortColumn] ? 1 : -1);
    } else {
      items = this.items.sort((a: any, b: any) => a[sortColumn] < b[sortColumn] ? 1 : -1);
    }
    return items;
  }

  get itemsFiltered(): T[] {
		return this.items.filter(item => {
			if (!this.searchValue) return true;
			const prop = Object.keys(this.searchValue).shift();
			return item[prop] === this.searchValue[prop];
		});
  }

  get itemsOnCurrentPage(): T[] {
    return this.itemsFiltered.slice(this.startRow, this.endRow);
  }

  // The view can get col by col filtered for valid headers
  public columnsOfItemValues(item: T): any[] {
    // we return all if no headers
    const columns: any[] = new Array<any>();
    if (!this._headers) {
			for (const prop in item) {
				if (!item.hasOwnProperty(prop)) {
					continue;
				}
        columns.push((item as any)[prop]);
      }
    } else {
      this.headers
        .forEach((e, idx) => columns.push((item as any)[e.prop]));
    }
    return columns;
  }

  public columnsOfItem(item: T): DataGridItem[] {
    // we return all if no headers
    const columns: DataGridItem[] = new Array<DataGridItem>();
    const currentHeaders: DataGridHeader[] = this.headers || Object.keys(item).map(h => new DataGridHeader(h, null, h, false, false));
    currentHeaders
      .forEach((h, idx) => {
        const e = new DataGridItem();
        e.value = (item as any)[h.prop];
        e.prop = h.prop;
        columns.push(e);
      });
    return columns;
  }

  private _currentSortDir: Map<string, string> = new Map();

  public sortColumn(colName: string, dir: string) {
    this.items.sort((a: any, b: any) => dir === 'desc' ? (a[colName] > b[colName] ? 1 : -1) : (a[colName] > b[colName] ? -1 : 1));
    this._currentSortDir.set(colName, dir);
  }

  public getCurrentSortDir(colName: string): string {
    return this._currentSortDir.get(colName) || 'asc';
  }

  private _headers: DataGridHeader[];

  public get rawHeaders(): DataGridHeader[] {
    return this._headers;
  }

  public get headers(): DataGridHeader[] {
    return this._headers.filter(h => !h.hidden);
  }

  public get headersNotVisible(): DataGridHeader[] {
    return this._headers.filter(h => h.hidden);
  }

  public removeColumn(colname: string) {
    const col = this._headers.find(h => h.prop === colname);
    if (col) {
      col.hidden = true;
    }
  }

  public addColumn(colname: string) {
    const col = this._headers.find(h => h.prop === colname);
    if (col) {
      col.hidden = false;
    }
  }

  private createHeadersForType(type: any): void {
    // assume simple object structure, iterating an array of viewmodels
    // has at least one row, so we can read the headers
    // first we read the properties
    this._headers = new Array<DataGridHeader>();
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
      const h = new DataGridHeader(propName, propDesc, p, isSortable, isHidden);
			h.width = type[`__templatehint__${p}`] === 'table-column' && type[`__templatehintParams__${p}`].width ? type[`__templatehintParams__${p}`].width : null;
			h.filterable = type[`__isFilterable__${p}`] || false;
      this._headers.push(h);
    }
  }

}

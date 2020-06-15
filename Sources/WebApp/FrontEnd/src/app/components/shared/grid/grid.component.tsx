import JSX, { Properties, CustomElement, LifeCycle, Events, BaseComponent } from '@nyaf/lib';
import { ProvideStore, StoreParams, IStore, Store } from '@nyaf/store';

import { DataGridModel } from './models/datagrid.model';
import { Observer } from '../../../services/observer.service';
import { DomOp } from '../../../services/lib/dom-operations';
import { isBoolean } from 'util';

import store from '../../../services/flux/stores/global.store';

export interface GridProps {
	actiontitle?: string;
	actions?: [];
	paging?: boolean;
	pageSize?: number;
	actionidname: string;
	defaultAction?: string;
	progressbar?: boolean;
	pgDoneObserver?: string;
	storeitem: string;
}

interface GridStoreType {
	[key: string]: DataGridModel<any>;
};

type gridStoreType = GridStoreType;

const gridStore: StoreParams<gridStoreType> = {
	actions: {},
	reducer: {},
	state: {}
}

const mergedStore = store.mergeStore<gridStoreType>(gridStore);

@CustomElement('app-grid')
@Properties<GridProps>({ actiontitle: '', paging: false, pageSize: 5, actionidname: 'id', defaultAction: '', actions: [], progressbar: false, pgDoneObserver: '', storeitem: '' })
@Events(['action', 'close', 'progress'])
@ProvideStore<gridStoreType>(mergedStore)
export class GridComponent extends BaseComponent<GridProps> implements IStore<gridStoreType> {

	private gridDataObserver1: { remove: () => void };
	private gridDataObserver2: { remove: () => void };
	private progressExecutorDone: boolean = false;
	private state: DataGridModel<any>;
	
	store: Store<GridStoreType>;

	constructor() {
		super();
	}

	lifeCycle(lifeCycle: LifeCycle) {
		if (lifeCycle === LifeCycle.Connect) {
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
				this.gridDataObserver2 = Observer.getInstance().subscribe(this.data.pgDoneObserver, (d) => {
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


	closeAction(data: any) {
		const evt: CustomEventInit = {
			bubbles: true,
			cancelable: false,
			detail: {
				data
			}
		};
		this.dispatch('close', evt);
	}

	invokeClickAction(e: Event) {
		const action = (e.target as HTMLElement).getAttribute('data-action');
		if (action) {
			const evt: CustomEventInit = {
				bubbles: true,
				cancelable: false,
				detail: {
					id: (e.target as HTMLElement).getAttribute('data-id'),
					action
				}
			};
			this.dispatch('action', evt);
		}
	}

	invokeAction(e: CustomEvent) {
		const evt: CustomEventInit = {
			bubbles: true,
			cancelable: true,
			detail: e.detail
		};
		this.dispatch('action', evt);
	}

	invokeProgress(idProp: string, id: any, last: boolean) {
		const evt: CustomEventInit = {
			bubbles: true,
			cancelable: false,
			detail: {
				[idProp]: id,
				last
			}
		};
		this.dispatch('progress', evt);
	}

	async render() {
		if (!this.state || !this.state.headers) return await (
			<div class='row'>
				<div class='mx-auto cell-12' data-role='panel' data-cls-content='bg-orange fg-white'>
					Noch keine Daten geladen
        </div>
			</div>
		)
		const sanitized = (d: string) => {
			const div: HTMLElement = document.createElement('div');
			div.innerHTML = d;
			return div.innerText;
		}
		const cols = this.getColHeader();
		const head = this.getHead();
		const withResult = this.state.itemsOnCurrentPage.map(item => (
			<tr n-on-dblclick={e => this.invokeClickAction(e)} data-id={item[this.data.actionidname]} data-action={this.data.defaultAction}>
				{this.state.columnsOfItemValues(item).map((data, idx) => (
					<td class='make-text' className={this.getCellClasses(item, idx)} title={sanitized(data)}>{isBoolean(data) ? (!!data ? <span class="mif-checkmark"></span> : <span class="mif-blocked"></span>) : data}</td>
				))}
				{this.getActionMenu(!!this.data.actiontitle, this.data.actionidname, item)}
				{(this.data.progressbar ? <td><div class="hide" data-role="progress" data-type="line" data-small="true" data-progress-id={item[this.data.actionidname]}></div></td> : null)}
			</tr>
		));
		if (this.state.totalFilteredRows) {
			return await (
				<>
					<table class="table striped fixed_header row-hover">
						{cols}
						<thead>{head}</thead>
						<tbody>{withResult}</tbody>
					</table>
					{this.data.paging ? <app-paging mode="full" current={this.state.currentPageIndex} pagesize={this.state.pageSize} model={this.state.itemsFiltered} n-on-step={e => this.pageStep(e)} n-async></app-paging> : null
					}
				</>
			);
		} else {
			return (
				<>
					<table class="table striped fixed_header row-hover">
						{cols}
						<thead>{head}</thead>
						<tbody>
							<tr>
								<td colspan={this.state.headers.length + (!!this.data.actiontitle ? 1 : 0)}>
									<div class='mx-auto cell-12' data-role='panel' data-cls-content='bg-red fg-white'>
										Keine Ergebnisse für diese Abfrage gefunden. Erneut abfragen oder Filterwerte ändern.
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</>
			);
		}
	}

	private getColHeader() {
		const hasActionButton: boolean = !!this.data.actiontitle;
		const hasProgressBar: boolean = !!this.data.progressbar;
		let actionWidth = 100;
		if (this.data.actions && [].slice.call(this.data.actions).length === 2) {
			actionWidth *= 2;
		}
		return (
			<colgroup>
				{this.state.headers.map(header => {
					if (header.width) {
						return <col width={header.width} />;
					} else {
						return <col />;
					}
				})}
				{hasActionButton ? <col width={actionWidth} /> : null}
				{hasProgressBar ? <col width="20" /> : null}
			</colgroup>
		)
	}

	private getCellClasses(rowItem, idx) {
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

	private getHead() {
		const hasActionButton: boolean = !!this.data.actiontitle;
		const hasProgressBar: boolean = !!this.data.progressbar;
		return (
			<tr>
				{this.state.headers.map(header => {
					const sortAsc = (<span class="supersmall" data-sort={header.prop} data-sort-dir="desc" >
						<app-icon type="small" icon="sort-asc" n-on-click={e => this.sortAction(e)} n-async />
					</span>);
					const sortDesc = (<span class="supersmall" data-sort={header.prop} data-sort-dir="asc" >
						<app-icon type="small" icon="sort-desc" n-on-click={e => this.sortAction(e)} n-async />
					</span>);
					const text = header.text;
					let filter = '';
					if (header.filterable) {
						filter = (<>
							<input type="text"
								class="input-small"
								data-role="input"
								onfocus="this.value = this.value;"
								value={this.state.searchValue[header.prop] ? this.state.searchValue[header.prop] : ''}
								data-filter={header.prop}
								style={`width: ${header.width ?? 80}px`}
								n-on-input={e => this.filterAction(e)} n-async></input>
						</>);
					}
					return (
						<th title={header.desc} style="vertical-align: bottom;">
							{filter}
							{text}
							{header.sortable ? (
								<div class="sortsmall" data-action-sort>
									{this.state.getCurrentSortDir(header.prop) === 'desc' ? sortDesc : sortAsc}
								</div>
							) : (
									''
								)}
							{header.additionalHeader ? (
								<div class="sortsmall" data-action-remove={header.prop} style="cursor: pointer;">
									<app-icon type="small" icon="cross" n-on-click={e => this.removeAction(e)} n-async />
								</div>
							) : (
									''
								)}
						</th>
					);
				})}
				{hasActionButton ? <th style="vertical-align: bottom;">Aktion</th> : ''}
				{hasProgressBar ? <th></th> : ''}
			</tr>
		);
	}

	private getActionMenu(hasActionButton: boolean, idProperty: string, item: any) {
		if (!hasActionButton) {
			return null;
		}
		if (this.data.actions) {
			// > 1 action
			const actionData = this.data.actions;
			if (actionData.length > 2) {
				return (
					<td>
						<button type='button' class='button success outline dropdown-toggle'>{this.data.actiontitle}</button>
						<ul class="d-menu" data-role="dropdown">
							<app-dropmenu n-repeat={this.data.actions} id={item[idProperty]} action="@@action" color="@@color" title="@@title" icon="@@icon" n-on-action={e => this.invokeAction(e)}></app-dropmenu>
						</ul>
					</td>
				);
			} else {
				const buttons = actionData.map((action: any) => {
					return (
						<>
							<button type='button' class={'button outline mr-1 small ' + action.color} data-id={item[idProperty]} data-action={action.action} n-on-click={e => this.invokeClickAction(e)}>{action.title}</button>
						</>
					);
				})
				return (
					<td style="white-space:nowrap;">
						{buttons}
					</td>
				)
			}
		} else {
			return (
				<td>
					<button type='button' class='button success outline small' data-action='CLICK' data-id={item[idProperty]} n-on-click={e => this.invokeClickAction(e)}>{this.data.actiontitle}</button>
				</td>
			)
		}
	}

	async pageStep(e: CustomEvent) {
		const { page, pageSize } = e.detail;
		this.state.currentPageIndex = page;
		this.state.pageSize = pageSize;
		await this.setup();
	}

	async sortAction(e: Event) {
		const prop = DomOp.getParent(e.target, '[data-sort]').getAttribute('data-sort');
		const dir = DomOp.getParent(e.target, '[data-sort]').getAttribute('data-sort-dir');
		this.state.sortColumn(prop, dir);
		await this.setup();
	}

	async filterAction(e: Event) {
		const prop = (e.target as HTMLInputElement).getAttribute('data-filter');
		const value = (e.target as HTMLInputElement).value;
		this.state.filter(prop, value);
		await this.setup();
	}

	async removeAction(e: Event) {
		const closeHeaderData = DomOp.getParent(e.target, '[data-action-remove]').getAttribute('data-action-remove');
		this.state.removeColumn(closeHeaderData);
		this.closeAction(closeHeaderData);
		await this.setup();
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
}

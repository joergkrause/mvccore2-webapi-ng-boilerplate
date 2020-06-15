import { LifeCycle, BaseComponent } from '@nyaf/lib';
import { IStore, Store } from '@nyaf/store';
import { DataGridModel } from './models/datagrid.model';
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
}
declare type gridStoreType = GridStoreType;
export declare class GridComponent extends BaseComponent<GridProps> implements IStore<gridStoreType> {
    private gridDataObserver1;
    private gridDataObserver2;
    private progressExecutorDone;
    private state;
    store: Store<GridStoreType>;
    constructor();
    lifeCycle(lifeCycle: LifeCycle): void;
    closeAction(data: any): void;
    invokeClickAction(e: Event): void;
    invokeAction(e: CustomEvent): void;
    invokeProgress(idProp: string, id: any, last: boolean): void;
    render(): Promise<any>;
    private getColHeader;
    private getCellClasses;
    private getHead;
    private getActionMenu;
    pageStep(e: CustomEvent): Promise<void>;
    sortAction(e: Event): Promise<void>;
    filterAction(e: Event): Promise<void>;
    removeAction(e: Event): Promise<void>;
    dispose(): void;
}
export {};

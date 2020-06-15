import { BaseComponent, LifeCycle } from "@nyaf/lib";
import { IStore, Store } from "@nyaf/store";
import { dashboardStore } from "./stores/dashboard.store";
import { MachineViewModel } from "app/services";
declare type dashboardStoreTypes = dashboardStore;
interface DashboardProperties {
    userName: string;
    email: string;
    machines: MachineViewModel[];
    numOfMachines: number;
}
export declare class DashboardComponent extends BaseComponent<DashboardProperties> implements IStore<dashboardStore> {
    store: Store<dashboardStoreTypes>;
    constructor();
    render(): Promise<any>;
    showProfile(e: Event): void;
    lifeCycle(state: LifeCycle): void;
}
export {};

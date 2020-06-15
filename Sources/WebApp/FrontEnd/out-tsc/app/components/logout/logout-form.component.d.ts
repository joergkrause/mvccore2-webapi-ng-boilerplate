import { BaseComponent, LifeCycle } from "@nyaf/lib";
import { Store, IStore } from "@nyaf/store";
import { logoutStoreType } from "./stores/logout.store";
export declare class LogoutFormComponent extends BaseComponent<{
    loggedOut: boolean;
    loggingOut: boolean;
}> implements IStore<logoutStoreType> {
    store: Store<logoutStoreType>;
    constructor();
    render(): Promise<any>;
    lifeCycle(state: LifeCycle): void;
}

import { BaseComponent } from "@nyaf/lib";
import { IModel, ModelBinder } from "@nyaf/forms";
import { IStore, Store } from "@nyaf/store";
import { loginStoreType, LoginStore } from "./stores/login.store";
import { LogonViewModel } from "../../services/lib/frontendapi.services";
import { LifeCycle } from "@nyaf/lib";
export declare class LoginFormComponent extends BaseComponent<{}> implements IStore<loginStoreType>, IModel<LogonViewModel> {
    model: ModelBinder<LogonViewModel>;
    store: Store<LoginStore>;
    logon: LogonViewModel;
    constructor();
    render(): Promise<any>;
    login(e: Event): void;
    lifeCycle(state: LifeCycle): void;
}

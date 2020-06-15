import { BaseComponent } from "@nyaf/lib";
import { IModel, ModelBinder } from "@nyaf/forms";
import { Store, IStore } from "@nyaf/store";
import { profileStoreType } from "./stores/profile.store";
import { ChangePasswordViewModel } from "../../services/lib/frontendapi.services";
export declare class ProfileFormComponent extends BaseComponent<any> implements IStore<profileStoreType>, IModel<ChangePasswordViewModel> {
    store: Store<profileStoreType>;
    model: ModelBinder<ChangePasswordViewModel>;
    constructor();
    render(): Promise<any>;
    submit(e: Event): void;
}

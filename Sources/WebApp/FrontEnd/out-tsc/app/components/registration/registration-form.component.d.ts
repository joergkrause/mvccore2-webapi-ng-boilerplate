import { BaseComponent } from "@nyaf/lib";
import { IModel, ModelBinder } from "@nyaf/forms";
import { Store, IStore } from "@nyaf/store";
import { registrationStoreType } from "./stores/registration.store";
import { RegistrationViewModel } from "../../services/lib/frontendapi.services";
export declare class RegisterFormComponent extends BaseComponent<{}> implements IStore<registrationStoreType>, IModel<RegistrationViewModel> {
    private umlautMap;
    error: boolean;
    errors: string[];
    isRequesting: boolean;
    submitted: boolean;
    hide: boolean;
    model: ModelBinder<RegistrationViewModel>;
    store: Store<registrationStoreType>;
    constructor();
    replaceUmlauts(str: string): string;
    render(): Promise<any>;
    submit(e: Event): void;
}

import { IRegistrationViewModel, IAuthenticationErrorViewModel } from "../../../services/lib/frontendapi.services";
export interface RegistrationStore {
    current: IRegistrationViewModel;
    result: IAuthenticationErrorViewModel;
}
/**
 * We export a single store type that contains all single stores as one default.
 */
export declare type registrationStoreType = RegistrationStore;
declare const mergedStore: import("@nyaf/store").Store<import("../../../services/flux/stores/global.store").GlobalStore & RegistrationStore>;
export default mergedStore;

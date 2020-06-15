import { UserViewModel, AuthenticationErrorViewModel } from "../../../services/lib/frontendapi.services";
export interface LoginStore {
    user: UserViewModel;
    error: AuthenticationErrorViewModel;
}
/**
 * We export a single store type that contains all single stores as one default.
 */
export declare type loginStoreType = LoginStore;
declare const mergedStore: import("@nyaf/store").Store<import("../../../services/flux/stores/global.store").GlobalStore & LoginStore>;
export default mergedStore;

import { ChangePasswordViewModel } from '../../../services/lib/frontendapi.services';
export interface ProfileStore {
    model: ChangePasswordViewModel;
}
/**
 * We export a single store type that contains all single stores as one default.
 */
export declare type profileStoreType = ProfileStore;
declare const mergedStore: import("@nyaf/store").Store<import("../../../services/flux/stores/global.store").GlobalStore & ProfileStore>;
export default mergedStore;

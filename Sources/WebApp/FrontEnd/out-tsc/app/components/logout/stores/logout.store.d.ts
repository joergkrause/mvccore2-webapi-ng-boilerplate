export interface LogoutStore {
    loggingOut: boolean;
    loggedOut: boolean;
}
/**
 * We export a single store type that contains all single stores as one default.
 */
export declare type logoutStoreType = LogoutStore;
declare const mergedStore: import("@nyaf/store").Store<import("../../../services/flux/stores/global.store").GlobalStore & LogoutStore>;
export default mergedStore;

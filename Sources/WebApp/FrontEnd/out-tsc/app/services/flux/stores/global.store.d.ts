import { Store } from "@nyaf/store";
export interface GlobalStore {
    tab: string;
    grid: any;
    progress: any;
}
/**
 * We export a single store type that contains all single stores as one default.
 */
export declare type globalStoreType = GlobalStore;
declare const store: Store<GlobalStore>;
export default store;

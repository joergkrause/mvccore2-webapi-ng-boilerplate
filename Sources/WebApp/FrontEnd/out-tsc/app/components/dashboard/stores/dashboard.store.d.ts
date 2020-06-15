import { MachineViewModel } from "../../../services/lib/frontendapi.services";
export interface dashboardStore {
    machines: MachineViewModel[];
}
/**
 * We export a single store type that contains all single stores as one default.
 */
export declare type dashboardStoreType = dashboardStore;
declare const mergedStore: import("@nyaf/store").Store<import("../../../services/flux/stores/global.store").GlobalStore & dashboardStore>;
export default mergedStore;

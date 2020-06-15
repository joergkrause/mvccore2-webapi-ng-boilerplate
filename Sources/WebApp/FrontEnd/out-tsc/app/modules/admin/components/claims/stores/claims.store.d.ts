import { ClaimViewModel } from '../../../../../services/lib/frontendapi.services';
import { DataGridModel } from '../../../../../components/shared/grid/models/datagrid.model';
export interface ClaimsStore {
    current: ClaimViewModel;
    gridResult: DataGridModel<ClaimViewModel>;
}
/**
 * We export a single store type that contains all single stores as one default.
 */
export declare type claimsStoreType = ClaimsStore;
declare const mergedStore: import("@nyaf/store").Store<import("../../../../../services/flux/stores/global.store").GlobalStore & ClaimsStore>;
export default mergedStore;

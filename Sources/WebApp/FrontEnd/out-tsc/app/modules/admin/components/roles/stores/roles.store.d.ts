import { RoleViewModel } from '../../../../../services/lib/frontendapi.services';
import { DataGridModel } from '../../../../../components/shared/grid/models/datagrid.model';
export interface RolesStore {
    current: RoleViewModel;
    gridResult: DataGridModel<RoleViewModel>;
}
/**
 * We export a single store type that contains all single stores as one default.
 */
export declare type rolesStoreType = RolesStore;
declare const mergedStore: import("@nyaf/store").Store<import("../../../../../services/flux/stores/global.store").GlobalStore & RolesStore>;
export default mergedStore;

import { UserViewModel } from '../../../../../services/lib/frontendapi.services';
import { DataGridModel } from '../../../../../components/shared/grid/models/datagrid.model';
export interface UsersStore {
    current: UserViewModel;
    gridResult: DataGridModel<UserViewModel>;
}
/**
 * We export a single store type that contains all single stores as one default.
 */
export declare type usersStoreType = UsersStore;
declare const mergedStore: import("@nyaf/store").Store<import("../../../../../services/flux/stores/global.store").GlobalStore & UsersStore>;
export default mergedStore;

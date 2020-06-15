import { StoreParams } from "@nyaf/store";

import { RoleViewModel } from '../../../../../services/lib/frontendapi.services';
import { DataGridModel } from '../../../../../components/shared/grid/models/datagrid.model';

export interface RolesStore {
	current: RoleViewModel;
	gridResult: DataGridModel<RoleViewModel>;
}

/**
 * We export a single store type that contains all single stores as one default.
 */
export type rolesStoreType = RolesStore;

import rolesReducer from '../reducer/roles.reducer';
import rolesActions from '../actions/roles.actions';
import store from '../../../../../services/flux/stores/global.store';

const initialState: rolesStoreType = {
	current: null,
	gridResult: null
}

const archiveStoreParams: StoreParams<rolesStoreType> = {
	actions: rolesActions,
	reducer: rolesReducer,
	state: initialState
}

const mergedStore = store.mergeStore(archiveStoreParams);

export default mergedStore;

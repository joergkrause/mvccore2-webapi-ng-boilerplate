import { StoreParams } from "@nyaf/store";

import { UserViewModel } from '../../../../../services/lib/frontendapi.services';
import { DataGridModel } from '../../../../../components/shared/grid/models/datagrid.model';

export interface UsersStore {
	current: UserViewModel;
	gridResult: DataGridModel<UserViewModel>;
}

/**
 * We export a single store type that contains all single stores as one default.
 */
export type usersStoreType = UsersStore;

import usersReducer from '../reducer/users.reducer';
import usersActions from '../actions/users.actions';
import store from '../../../../../services/flux/stores/global.store';

const initialState: usersStoreType = {
	current: null,
	gridResult: null
}

const archiveStoreParams: StoreParams<usersStoreType> = {
	actions: usersActions,
	reducer: usersReducer,
	state: initialState
}

const mergedStore = store.mergeStore(archiveStoreParams);

export default mergedStore;

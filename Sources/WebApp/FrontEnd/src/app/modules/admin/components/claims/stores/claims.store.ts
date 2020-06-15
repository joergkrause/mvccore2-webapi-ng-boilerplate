import { StoreParams } from "@nyaf/store";

import { ClaimViewModel } from '../../../../../services/lib/frontendapi.services';
import { DataGridModel } from '../../../../../components/shared/grid/models/datagrid.model';

export interface ClaimsStore {
	current: ClaimViewModel;
	gridResult: DataGridModel<ClaimViewModel>;
}

/**
 * We export a single store type that contains all single stores as one default.
 */
export type claimsStoreType = ClaimsStore;

import claimsReducer from '../reducer/claims.reducer';
import claimsActions from '../actions/claims.actions';
import store from '../../../../../services/flux/stores/global.store';


const initialState: claimsStoreType = {
	current: null,
	gridResult: null
}

const archiveStoreParams: StoreParams<claimsStoreType> = {
	actions: claimsActions,
	reducer: claimsReducer,
	state: initialState
}

const mergedStore = store.mergeStore(archiveStoreParams);

export default mergedStore;

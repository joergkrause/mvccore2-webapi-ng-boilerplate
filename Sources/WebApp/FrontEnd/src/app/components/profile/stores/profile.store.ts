import { ChangePasswordViewModel } from '../../../services/lib/frontendapi.services';

export interface ProfileStore {
	model: ChangePasswordViewModel;
}

/**
 * We export a single store type that contains all single stores as one default.
 */
export type profileStoreType = ProfileStore;

import archiveReducer from '../reducer/profile.reducer';
import archiveActions from '../actions/profile.actions';
import store from "../../../services/flux/stores/global.store";
import { StoreParams } from "@nyaf/store";

const initialState: profileStoreType = {
	model: null
}

const profileStoreParams: StoreParams<profileStoreType> = {
	actions: archiveActions,
	reducer: archiveReducer,
	state: initialState
}

const mergedStore = store.mergeStore(profileStoreParams);

export default mergedStore;

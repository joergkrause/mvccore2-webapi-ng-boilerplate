
export interface LogoutStore {
	loggingOut: boolean;
	loggedOut: boolean;
}

/**
 * We export a single store type that contains all single stores as one default.
 */
export type logoutStoreType = LogoutStore;

import archiveReducer from '../reducer/logout.reducer';
import archiveActions from '../actions/logout.actions';
import store from "../../../services/flux/stores/global.store";
import { StoreParams } from "@nyaf/store";

const initialState: logoutStoreType = {
	loggingOut: false,
	loggedOut: false
}

const logoutStoreParams: StoreParams<logoutStoreType> = {
	actions: archiveActions,
	reducer: archiveReducer,
	state: initialState
}

const mergedStore = store.mergeStore(logoutStoreParams);

export default mergedStore;

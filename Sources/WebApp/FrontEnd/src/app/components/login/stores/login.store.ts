import { UserViewModel, TokenResponseViewModel, AuthenticationErrorViewModel } from "../../../services/lib/frontendapi.services";

export interface LoginStore {
	user: UserViewModel;
	error: AuthenticationErrorViewModel;
}

/**
 * We export a single store type that contains all single stores as one default.
 */
export type loginStoreType = LoginStore;

import archiveReducer from '../reducer/login.reducer';
import archiveActions from '../actions/login.actions';
import store from "../../../services/flux/stores/global.store";
import { StoreParams } from "@nyaf/store";

const initialState: loginStoreType = {
	user: null,
	error: null
}

const loginStoreParams: StoreParams<loginStoreType> = {
	actions: archiveActions,
	reducer: archiveReducer,
	state: initialState
}

const mergedStore = store.mergeStore(loginStoreParams);

export default mergedStore;

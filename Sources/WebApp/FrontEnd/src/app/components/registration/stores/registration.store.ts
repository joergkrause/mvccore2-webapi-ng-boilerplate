import { StoreParams } from "@nyaf/store";

import { RegistrationViewModel, AuthenticationErrorViewModel } from "../../../services/lib/frontendapi.services";

export interface RegistrationStore {
	current: RegistrationViewModel;
	result: AuthenticationErrorViewModel;
}

/**
 * We export a single store type that contains all single stores as one default.
 */
export type registrationStoreType = RegistrationStore;

import registrationReducer from '../reducer/registration.reducer';
import registrationActions from '../actions/registration.actions';
import store from "../../..//services/flux/stores/global.store";

const initialState: registrationStoreType = {
	current: null,
	result: null
}

const registrationStoreParams: StoreParams<registrationStoreType> = {
	actions: registrationActions,
	reducer: registrationReducer,
	state: initialState
}

const mergedStore = store.mergeStore(registrationStoreParams);

export default mergedStore;

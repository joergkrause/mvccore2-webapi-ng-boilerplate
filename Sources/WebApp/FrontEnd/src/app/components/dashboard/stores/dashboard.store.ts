import { MachineViewModel } from "../../../services/lib/frontendapi.services";

export interface dashboardStore {
	machines: MachineViewModel[];
}


/**
 * We export a single store type that contains all single stores as one default.
 */
export type dashboardStoreType = dashboardStore;

import dashboardReducer from '../reducer/dashboard.reducer';
import dashboardActions from '../actions/dashboard.actions';
import store from "../../../services/flux/stores/global.store";
import { StoreParams } from "@nyaf/store";

const initialState: dashboardStoreType = {
	machines: null
}

const dashboardStoreParams: StoreParams<dashboardStoreType> = {
	actions: dashboardActions,
	reducer: dashboardReducer,
	state: initialState
}

const mergedStore = store.mergeStore(dashboardStoreParams);

export default mergedStore;

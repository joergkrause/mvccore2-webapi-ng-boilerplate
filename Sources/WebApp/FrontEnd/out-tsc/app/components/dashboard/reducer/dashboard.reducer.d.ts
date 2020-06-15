import { DASHBOARD_LOAD } from '../actions/dashboard.actions';
import { dashboardStoreType } from '../stores/dashboard.store';
declare type dashboardStoreSync = Partial<dashboardStoreType>;
declare type dashboardStore = Promise<dashboardStoreSync>;
declare const _default: {
    DASHBOARD_LOAD: (state: dashboardStore, payload: void) => dashboardStore;
};
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default _default;

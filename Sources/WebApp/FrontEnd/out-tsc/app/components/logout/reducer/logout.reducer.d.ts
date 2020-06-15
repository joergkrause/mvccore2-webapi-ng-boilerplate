import { LOGOUT_USER } from '../actions/logout.actions';
import { logoutStoreType } from '../stores/logout.store';
declare type syncLogoutStore = Partial<logoutStoreType>;
declare type logoutStore = Promise<syncLogoutStore>;
declare const _default: {
    LOGOUT_USER: (state: logoutStore, payload: string) => logoutStore;
};
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default _default;

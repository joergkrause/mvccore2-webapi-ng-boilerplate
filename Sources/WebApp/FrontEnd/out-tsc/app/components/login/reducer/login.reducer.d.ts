import { LOGIN_USER, LOGIN_ERROR } from '../actions/login.actions';
import { loginStoreType } from '../stores/login.store';
import { ILogonViewModel } from "../../../services/lib/frontendapi.services";
declare type syncLoginStore = Partial<loginStoreType>;
declare type loginStore = Promise<syncLoginStore>;
declare const _default: {
    LOGIN_USER: (state: loginStoreType, payload: ILogonViewModel) => loginStore;
    LOGIN_ERROR: (state: loginStoreType, payload: string) => loginStore;
};
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default _default;

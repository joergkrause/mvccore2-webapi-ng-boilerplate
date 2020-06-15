import { USERS_SEARCH, USERS_ALL, USERS_ADD, USERS_REMOVE, USERS_EDIT, USERS_SAVE } from '../actions/users.actions';
import { usersStoreType } from '../stores/users.store';
import { ClaimViewModel } from "app/services";
declare type syncUsersStore = Partial<usersStoreType>;
declare type usersStore = Promise<syncUsersStore>;
declare const _default: {
    USERS_SEARCH: (state: usersStoreType, payload: string) => usersStore;
    USERS_ALL: (state: usersStoreType, payload: string) => usersStore;
    USERS_EDIT: (state: usersStoreType, payload: number) => usersStore;
    USERS_ADD: (state: usersStoreType, payload: ClaimViewModel) => syncUsersStore;
    USERS_SAVE: (state: usersStoreType, payload: ClaimViewModel) => usersStore;
    USERS_REMOVE: (state: usersStoreType, payload: number) => usersStore;
};
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default _default;

import { ROLES_SEARCH, ROLES_ALL, ROLES_ADD, ROLES_REMOVE, ROLES_EDIT, ROLES_SAVE } from '../actions/roles.actions';
import { rolesStoreType } from '../stores/roles.store';
import { ClaimViewModel } from "app/services";
declare type syncRolesStore = Partial<rolesStoreType>;
declare type rolesStore = Promise<syncRolesStore>;
declare const _default: {
    ROLES_SEARCH: (state: rolesStoreType, payload: string) => rolesStore;
    ROLES_ALL: (state: rolesStoreType, payload: string) => rolesStore;
    ROLES_EDIT: (state: rolesStoreType, payload: number) => rolesStore;
    ROLES_ADD: (state: rolesStoreType, payload: ClaimViewModel) => syncRolesStore;
    ROLES_SAVE: (state: rolesStoreType, payload: ClaimViewModel) => rolesStore;
    ROLES_REMOVE: (state: rolesStoreType, payload: number) => rolesStore;
};
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default _default;

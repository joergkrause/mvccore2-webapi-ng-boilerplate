import { RoleViewModel } from "../../../../../services/lib/frontendapi.services";
export declare const ROLES_SEARCH = "ROLES_SEARCH";
export declare const ROLES_ALL = "ROLES_ALL";
export declare const ROLES_EDIT = "ROLES_EDIT";
export declare const ROLES_ADD = "ROLES_ADD";
export declare const ROLES_SAVE = "ROLES_SAVE";
export declare const ROLES_REMOVE = "ROLES_REMOVE";
export declare const ROLES_HIDE = "ROLES_HIDE";
declare const _default: {
    ROLES_SEARCH: () => string;
    ROLES_ALL: () => string;
    ROLES_EDIT: () => RoleViewModel;
    ROLES_ADD: () => RoleViewModel;
    ROLES_SAVE: () => RoleViewModel;
    ROLES_REMOVE: () => number;
    ROLES_HIDE: () => number;
};
/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
export default _default;

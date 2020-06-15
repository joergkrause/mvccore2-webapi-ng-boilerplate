import { UserViewModel } from "../../../../../services/lib/frontendapi.services";
export declare const USERS_SEARCH = "USERS_SEARCH";
export declare const USERS_ALL = "USERS_ALL";
export declare const USERS_EDIT = "USERS_EDIT";
export declare const USERS_ADD = "USERS_ADD";
export declare const USERS_SAVE = "USERS_SAVE";
export declare const USERS_REMOVE = "USERS_REMOVE";
export declare const USERS_HIDE = "USERS_HIDE";
declare const _default: {
    USERS_SEARCH: () => string;
    USERS_ALL: () => string;
    USERS_EDIT: () => UserViewModel;
    USERS_ADD: () => UserViewModel;
    USERS_SAVE: () => UserViewModel;
    USERS_REMOVE: () => number;
    USERS_HIDE: () => number;
};
/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
export default _default;

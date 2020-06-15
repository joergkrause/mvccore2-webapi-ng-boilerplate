import { ClaimViewModel } from "../../../../../services/lib/frontendapi.services";
export declare const CLAIMS_SEARCH = "CLAIMS_SEARCH";
export declare const CLAIMS_ALL = "CLAIMS_ALL";
export declare const CLAIMS_EDIT = "CLAIMS_EDIT";
export declare const CLAIMS_ADD = "CLAIMS_ADD";
export declare const CLAIMS_SAVE = "CLAIMS_SAVE";
export declare const CLAIMS_REMOVE = "CLAIMS_REMOVE";
declare const _default: {
    CLAIMS_SEARCH: () => string;
    CLAIMS_ALL: () => string;
    CLAIMS_EDIT: () => ClaimViewModel;
    CLAIMS_ADD: () => ClaimViewModel;
    CLAIMS_SAVE: () => ClaimViewModel;
    CLAIMS_REMOVE: () => number;
};
/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
export default _default;

import { CLAIMS_SEARCH, CLAIMS_ALL, CLAIMS_ADD, CLAIMS_REMOVE, CLAIMS_EDIT, CLAIMS_SAVE } from '../actions/claims.actions';
import { claimsStoreType } from '../stores/claims.store';
import { ClaimViewModel } from "app/services";
declare type syncClaimsStore = Partial<claimsStoreType>;
declare type claimsStore = Promise<syncClaimsStore>;
declare const _default: {
    CLAIMS_SEARCH: (state: claimsStoreType, payload: string) => claimsStore;
    CLAIMS_ALL: (state: claimsStoreType, payload: string) => claimsStore;
    CLAIMS_EDIT: (state: claimsStoreType, payload: number) => claimsStore;
    CLAIMS_ADD: (state: claimsStoreType, payload: ClaimViewModel) => syncClaimsStore;
    CLAIMS_SAVE: (state: claimsStoreType, payload: ClaimViewModel) => claimsStore;
    CLAIMS_REMOVE: (state: claimsStoreType, payload: number) => claimsStore;
};
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default _default;

import { CLAIMS_SEARCH, CLAIMS_ALL, CLAIMS_ADD, CLAIMS_REMOVE, CLAIMS_EDIT, CLAIMS_SAVE } from '../actions/claims.actions';
import { claimsStoreType } from '../stores/claims.store';
import { ClaimViewModel } from "app/services";

// import { getConnection, getRepository } from "typeorm";
type syncClaimsStore = Partial<claimsStoreType>;
type claimsStore = Promise<syncClaimsStore>;

/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default {
	[CLAIMS_SEARCH]: async (state: claimsStoreType, payload: string): claimsStore => {
		return { gridResult: null };
	},
	[CLAIMS_ALL]: async (state: claimsStoreType, payload: string): claimsStore => {
		return { gridResult: null };
	},
	[CLAIMS_EDIT]: async (state: claimsStoreType, payload: number): claimsStore => {
		return { gridResult: null };
	},
	[CLAIMS_ADD]: (state: claimsStoreType, payload: ClaimViewModel): syncClaimsStore => {
		return { gridResult: null };
	},
	[CLAIMS_SAVE]: async (state: claimsStoreType, payload: ClaimViewModel): claimsStore => {
		return { gridResult: null };
	},
	[CLAIMS_REMOVE]: async (state: claimsStoreType, payload: number): claimsStore => {
		return { gridResult: null };
	}
};

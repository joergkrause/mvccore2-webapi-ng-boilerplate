import { ClaimViewModel } from "../../../../../services/lib/frontendapi.services";

export const CLAIMS_SEARCH = 'CLAIMS_SEARCH';
export const CLAIMS_ALL = 'CLAIMS_ALL';
export const CLAIMS_EDIT = 'CLAIMS_EDIT';
export const CLAIMS_ADD = 'CLAIMS_ADD';
export const CLAIMS_SAVE = 'CLAIMS_SAVE';
export const CLAIMS_REMOVE = 'CLAIMS_REMOVE';

/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
export default {
	[CLAIMS_SEARCH]: () => '', // initial value of payload
	[CLAIMS_ALL]: () => '',
	[CLAIMS_EDIT]: () => new ClaimViewModel(),
	[CLAIMS_ADD]: () => new ClaimViewModel(),
	[CLAIMS_SAVE]: () => new ClaimViewModel(),
	[CLAIMS_REMOVE]: () => 0,
};

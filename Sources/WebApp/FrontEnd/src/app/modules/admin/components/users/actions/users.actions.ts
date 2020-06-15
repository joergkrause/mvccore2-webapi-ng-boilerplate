import { UserViewModel } from "../../../../../services/lib/frontendapi.services";

export const USERS_SEARCH = 'USERS_SEARCH';
export const USERS_ALL = 'USERS_ALL';

export const USERS_EDIT = 'USERS_EDIT';
export const USERS_ADD = 'USERS_ADD';
export const USERS_SAVE = 'USERS_SAVE';
export const USERS_REMOVE = 'USERS_REMOVE';
export const USERS_HIDE = 'USERS_HIDE';

/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
export default {
	[USERS_SEARCH]: () => '', // initial value of payload
	[USERS_ALL]: () => '',
	[USERS_EDIT]: () => new UserViewModel(),
	[USERS_ADD]: () => new UserViewModel(),
	[USERS_SAVE]: () => new UserViewModel(),
	[USERS_REMOVE]: () => 0,
	[USERS_HIDE]: () => 0
};

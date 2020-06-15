import { RoleViewModel } from "../../../../../services/lib/frontendapi.services";

export const ROLES_SEARCH = 'ROLES_SEARCH';
export const ROLES_ALL = 'ROLES_ALL';
export const ROLES_EDIT = 'ROLES_EDIT';
export const ROLES_ADD = 'ROLES_ADD';
export const ROLES_SAVE = 'ROLES_SAVE';
export const ROLES_REMOVE = 'ROLES_REMOVE';
export const ROLES_HIDE = 'ROLES_HIDE';

/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
export default {
	[ROLES_SEARCH]: () => '', // initial value of payload
	[ROLES_ALL]: () => '',
	[ROLES_EDIT]: () => new RoleViewModel(),
	[ROLES_ADD]: () => new RoleViewModel(),
	[ROLES_SAVE]: () => new RoleViewModel(),
	[ROLES_REMOVE]: () => 0,
	[ROLES_HIDE]: () => 0
};

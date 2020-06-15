import { ROLES_SEARCH, ROLES_ALL, ROLES_ADD, ROLES_REMOVE, ROLES_EDIT, ROLES_SAVE } from '../actions/roles.actions';
import { rolesStoreType } from '../stores/roles.store';
import { ClaimViewModel } from "app/services";

// import { getConnection, getRepository } from "typeorm";
type syncRolesStore = Partial<rolesStoreType>;
type rolesStore = Promise<syncRolesStore>;

/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default {
	[ROLES_SEARCH]: async (state: rolesStoreType, payload: string): rolesStore => {
		return { gridResult: null };
	},
	[ROLES_ALL]: async (state: rolesStoreType, payload: string): rolesStore => {
		return { gridResult: null };
	},
	[ROLES_EDIT]: async (state: rolesStoreType, payload: number): rolesStore => {
		return { gridResult: null };
	},
	[ROLES_ADD]: (state: rolesStoreType, payload: ClaimViewModel): syncRolesStore => {
		return { gridResult: null };
	},
	[ROLES_SAVE]: async (state: rolesStoreType, payload: ClaimViewModel): rolesStore => {
		return { gridResult: null };
	},
	[ROLES_REMOVE]: async (state: rolesStoreType, payload: number): rolesStore => {
		return { gridResult: null };
	}
};

import { USERS_SEARCH, USERS_ALL, USERS_ADD, USERS_REMOVE, USERS_EDIT, USERS_SAVE } from '../actions/users.actions';
import { usersStoreType } from '../stores/users.store';
import { ClaimViewModel } from "app/services";

// import { getConnection, getRepository } from "typeorm";
type syncUsersStore = Partial<usersStoreType>;
type usersStore = Promise<syncUsersStore>;

/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default {
	[USERS_SEARCH]: async (state: usersStoreType, payload: string): usersStore => {
		return { gridResult: null };
	},
	[USERS_ALL]: async (state: usersStoreType, payload: string): usersStore => {
		return { gridResult: null };
	},
	[USERS_EDIT]: async (state: usersStoreType, payload: number): usersStore => {
		return { gridResult: null };
	},
	[USERS_ADD]: (state: usersStoreType, payload: ClaimViewModel): syncUsersStore => {
		return { gridResult: null };
	},
	[USERS_SAVE]: async (state: usersStoreType, payload: ClaimViewModel): usersStore => {
		return { gridResult: null };
	},
	[USERS_REMOVE]: async (state: usersStoreType, payload: number): usersStore => {
		return { gridResult: null };
	}
};

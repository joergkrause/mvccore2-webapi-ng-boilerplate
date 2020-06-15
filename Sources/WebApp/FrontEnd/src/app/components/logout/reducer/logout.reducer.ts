import { LOGOUT_USER } from '../actions/logout.actions';
import { logoutStoreType } from '../stores/logout.store';
import { AccountService, ApiAccounts, AuthService, Observer, ApiAuth } from '../../../services';

// import { getConnection, getRepository } from "typeorm";
type syncLogoutStore = Partial<logoutStoreType>;
type logoutStore = Promise<syncLogoutStore>;

/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default {
	[LOGOUT_USER]: async (state: logoutStore, payload: string): logoutStore => {
		const result = await AuthService.instance.logout();
		return { loggedOut: result };
	}
};

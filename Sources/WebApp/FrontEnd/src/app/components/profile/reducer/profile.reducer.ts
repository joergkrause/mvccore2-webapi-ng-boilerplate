import { PROFILE_EDIT, PROFILE_SAVE } from '../actions/profile.actions';
import { profileStoreType } from '../stores/profile.store';
import { AccountService, ApiAccounts, AuthService, Observer, ApiAuth, ChangePasswordViewModel } from '../../../services';

type syncProfileStore = Partial<profileStoreType>;
type profileStore = Promise<syncProfileStore>;

/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default {
	[PROFILE_EDIT]: async (state: profileStoreType, payload: number): profileStore => {

		return { model: null };
	},
	[PROFILE_SAVE]: async (state: profileStoreType, payload: ChangePasswordViewModel): profileStore => {
		return { };
	}
};

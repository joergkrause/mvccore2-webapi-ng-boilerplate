import { LOGIN_USER, LOGIN_ERROR } from '../actions/login.actions';
import { loginStoreType } from '../stores/login.store';
import { UserViewModel, TokenResponseViewModel, AuthenticationErrorViewModel, ApiAccounts, ApiAuth, ILogonViewModel, ITokenResponseViewModel } from "../../../services/lib/frontendapi.services";
import { AuthService, Observer, AccountService } from '../../../services';

// import { getConnection, getRepository } from "typeorm";
type syncLoginStore = Partial<loginStoreType>;
type loginStore = Promise<syncLoginStore>;


/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default {
	[LOGIN_USER]: async (state: loginStoreType, payload: ILogonViewModel): loginStore => {
		try {
			const result = await AuthService.instance.login(payload);
			if (result) {
				const data = await AccountService.instance.getUserDetails();
				return { user: data };
			}
		}
		catch(err) {
			if (err instanceof AuthenticationErrorViewModel){
				return { error: err };
			}
			return { user: null };
		}
		return { user: null };
	},
	[LOGIN_ERROR]: async (state: loginStoreType, payload: string): loginStore => {
		return { error: null };
	}
};

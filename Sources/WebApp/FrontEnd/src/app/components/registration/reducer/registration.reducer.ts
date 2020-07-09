import { REGISTRATION_REGISTER } from '../actions/registration.actions';
import { registrationStoreType } from '../stores/registration.store';
import { AuthService, IRegistrationViewModel, AuthenticationErrorViewModel } from '../../../services';

type syncregistrationStore = Partial<registrationStoreType>;
type registrationStore = Promise<syncregistrationStore>;

/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default {
	[REGISTRATION_REGISTER]: async (state: registrationStoreType, payload: IRegistrationViewModel): registrationStore => {
		try {
			const result = await AuthService.instance.register(payload);
			return { current: payload };
		} 
		catch(err) {
			if (err instanceof AuthenticationErrorViewModel){
				return { result: err};
			}
		}
	}
};

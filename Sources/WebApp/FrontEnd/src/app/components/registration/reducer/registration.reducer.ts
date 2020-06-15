import { REGISTRATION_REGISTER } from '../actions/registration.actions';
import { registrationStoreType } from '../stores/registration.store';

// import { getConnection, getRepository } from "typeorm";
type syncregistrationStore = Partial<registrationStoreType>;
type registrationStore = Promise<syncregistrationStore>;

/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default {
	[REGISTRATION_REGISTER]: async (state: registrationStoreType, payload: string): registrationStore => {
		return {};
	}
};

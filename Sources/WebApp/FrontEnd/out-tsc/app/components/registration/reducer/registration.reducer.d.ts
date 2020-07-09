import { REGISTRATION_REGISTER } from '../actions/registration.actions';
import { registrationStoreType } from '../stores/registration.store';
import { IRegistrationViewModel } from '../../../services';
declare type syncregistrationStore = Partial<registrationStoreType>;
declare type registrationStore = Promise<syncregistrationStore>;
declare const _default: {
    REGISTRATION_REGISTER: (state: registrationStoreType, payload: IRegistrationViewModel) => registrationStore;
};
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default _default;

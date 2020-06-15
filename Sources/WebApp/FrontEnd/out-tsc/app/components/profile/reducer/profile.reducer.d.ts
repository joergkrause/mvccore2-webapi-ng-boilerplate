import { PROFILE_EDIT, PROFILE_SAVE } from '../actions/profile.actions';
import { profileStoreType } from '../stores/profile.store';
import { ChangePasswordViewModel } from '../../../services';
declare type syncProfileStore = Partial<profileStoreType>;
declare type profileStore = Promise<syncProfileStore>;
declare const _default: {
    PROFILE_EDIT: (state: profileStoreType, payload: number) => profileStore;
    PROFILE_SAVE: (state: profileStoreType, payload: ChangePasswordViewModel) => profileStore;
};
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default _default;

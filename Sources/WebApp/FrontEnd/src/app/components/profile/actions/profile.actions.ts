
export const PROFILE_EDIT = 'PROFILE_EDIT';
export const PROFILE_SAVE = 'PROFILE_SAVE';

/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
export default {
	[PROFILE_EDIT]: () => '', // initial value of payload
	[PROFILE_SAVE]: () => ''
};

import { TokenResponseViewModel, AuthenticationErrorViewModel } from "../../../services/lib/frontendapi.services";

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';

/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
export default {
	[LOGIN_USER]: () => new TokenResponseViewModel(), // initial value of payload
	[LOGIN_ERROR]: () => new AuthenticationErrorViewModel(),
};

import { TokenResponseViewModel, AuthenticationErrorViewModel } from "../../../services/lib/frontendapi.services";
export declare const LOGIN_USER = "LOGIN_USER";
export declare const LOGIN_ERROR = "LOGIN_ERROR";
declare const _default: {
    LOGIN_USER: () => TokenResponseViewModel;
    LOGIN_ERROR: () => AuthenticationErrorViewModel;
};
/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
export default _default;

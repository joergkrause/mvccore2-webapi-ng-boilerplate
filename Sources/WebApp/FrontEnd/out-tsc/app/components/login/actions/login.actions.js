"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const frontendapi_services_1 = require("../../../services/lib/frontendapi.services");
exports.LOGIN_USER = 'LOGIN_USER';
exports.LOGIN_ERROR = 'LOGIN_ERROR';
/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
exports.default = {
    [exports.LOGIN_USER]: () => new frontendapi_services_1.TokenResponseViewModel(),
    [exports.LOGIN_ERROR]: () => new frontendapi_services_1.AuthenticationErrorViewModel(),
};
//# sourceMappingURL=login.actions.js.map
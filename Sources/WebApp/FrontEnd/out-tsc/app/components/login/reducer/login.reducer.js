"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_actions_1 = require("../actions/login.actions");
const frontendapi_services_1 = require("../../../services/lib/frontendapi.services");
const services_1 = require("../../../services");
const accountService = new services_1.AccountService(new frontendapi_services_1.ApiAccounts);
const authService = new services_1.AuthService(services_1.Observer.getInstance(), new frontendapi_services_1.ApiAuth, accountService);
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
exports.default = {
    [login_actions_1.LOGIN_USER]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield authService.login(payload);
            if (result) {
                const data = yield accountService.getUserDetails();
                return { user: data };
            }
        }
        catch (err) {
            if (err instanceof frontendapi_services_1.AuthenticationErrorViewModel) {
                return { error: err };
            }
            return { user: null };
        }
        return { user: null };
    }),
    [login_actions_1.LOGIN_ERROR]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return { error: null };
    })
};
//# sourceMappingURL=login.reducer.js.map
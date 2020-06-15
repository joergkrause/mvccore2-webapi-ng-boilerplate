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
const logout_actions_1 = require("../actions/logout.actions");
const services_1 = require("../../../services");
const accountService = new services_1.AccountService(new services_1.ApiAccounts);
const authService = new services_1.AuthService(services_1.Observer.getInstance(), new services_1.ApiAuth, accountService);
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
exports.default = {
    [logout_actions_1.LOGOUT_USER]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield authService.logout();
        return { loggedOut: result };
    })
};
//# sourceMappingURL=logout.reducer.js.map
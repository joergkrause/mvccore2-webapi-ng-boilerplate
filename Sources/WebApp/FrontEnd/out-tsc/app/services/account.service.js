"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountService {
    constructor(api) {
        this.api = api;
    }
    getUserDetails() {
        let id = localStorage.getItem('user_id');
        if (id) {
            return this.api.get(id);
        }
        return Promise.reject('No User, please Logon');
    }
    getUserClaims() {
        let id = localStorage.getItem('user_id');
        if (id) {
            return this.api.getClaims(id);
        }
        return Promise.reject('No User, please Logon');
    }
}
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map
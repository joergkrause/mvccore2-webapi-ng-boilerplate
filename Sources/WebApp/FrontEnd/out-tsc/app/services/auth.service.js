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
class AuthService {
    constructor(emitterService, api, accounts) {
        this.emitterService = emitterService;
        this.api = api;
        this.accounts = accounts;
        this.baseUrl = '';
        this.__loggedIn = false;
        // check for an old token
        let lastToken = localStorage.getItem('expires_in');
        if (lastToken) {
            let oldTime = localStorage.getItem('time');
            let compareTime = new Date().getTime();
            console.log('Last Expires In', lastToken, compareTime);
            if (+oldTime + (+lastToken * 1000) < compareTime) {
                this.logout();
            }
            else {
                this.informListeners();
            }
        }
    }
    providers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.getProviders();
        });
    }
    register(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.post2(model);
        });
    }
    changePassword(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.api.changePassword(model);
            }
            catch (err) {
                return Promise.reject("error");
            }
        });
    }
    login(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.api.post(model);
                if (!res) {
                    return Promise.reject('An unknown API error occured');
                }
                if (!res.authToken) {
                    return Promise.resolve(false);
                }
                // receive the token and store for all upcoming requests
                localStorage.setItem('auth_token', res.authToken);
                localStorage.setItem('user_id', res.id);
                localStorage.setItem('expires_in', res.expiresIn.toString());
                let currentTime = new Date().getTime().toString();
                localStorage.setItem('time', currentTime);
                this.informListeners();
                return Promise.resolve(true);
            }
            catch (e) {
                return Promise.reject(e);
            }
        });
    }
    informListeners() {
        return __awaiter(this, void 0, void 0, function* () {
            // pull user data and provide through emitter
            const user = yield this.accounts.getUserDetails();
            this.emitterService.publish('USER_LOGON', user);
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user_id');
            localStorage.removeItem('expires_in');
            return Promise.resolve(true);
        });
    }
    isLoggedIn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.__loggedIn;
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
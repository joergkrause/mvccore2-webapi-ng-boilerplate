"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Adds the bearer token and the global JSON support, the latter header is required by ASP.NET Core WebAPI
 * */
class TokenInterceptorService {
    constructor() { }
    intercept(request) {
        request.headers.set('Content-Type', 'application/json');
        request.headers.set('Authorization', `Bearer ${this.token}`);
    }
    get token() {
        return localStorage.getItem('auth_token');
    }
}
exports.TokenInterceptorService = TokenInterceptorService;
//# sourceMappingURL=tokeninterceptor.service.js.map
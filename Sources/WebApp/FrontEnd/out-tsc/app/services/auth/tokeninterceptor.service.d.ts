/**
 * Adds the bearer token and the global JSON support, the latter header is required by ASP.NET Core WebAPI
 * */
export declare class TokenInterceptorService {
    constructor();
    intercept(request: Request): void;
    private get token();
}

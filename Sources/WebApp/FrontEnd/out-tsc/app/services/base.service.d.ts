import { Type } from '@nyaf/lib';
import { ApiAccounts, ApiAuth, ApiUser, ApiClaim, ApiMachines, ApiRole } from "./lib/frontendapi.services";
export declare abstract class BaseService {
    private _apiAccounts;
    private _apiAuth;
    private _apiUser;
    private _apiRole;
    private _apiClaim;
    private _apiMachines;
    private static _instance;
    private static _baseUrl;
    constructor();
    protected static getSingleton<T extends BaseService>(t: Type<T>): T;
    static init(baseUrl: string): void;
    protected tokenCheck(): boolean;
    tokenFetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
    protected get apiAccounts(): ApiAccounts;
    protected get apiAuth(): ApiAuth;
    protected get apiUser(): ApiUser;
    protected get apiRole(): ApiRole;
    protected get apiClaim(): ApiClaim;
    protected get apiMachines(): ApiMachines;
}

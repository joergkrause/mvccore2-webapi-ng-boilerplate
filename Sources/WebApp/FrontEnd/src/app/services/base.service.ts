import { Type } from '@nyaf/lib';
import { ApiAccounts, ApiAuth, ApiUser, ApiClaim, ApiMachines, ApiRole } from "./lib/frontendapi.services";

export abstract class BaseService {
	
private _apiAccounts: ApiAccounts;
  private _apiAuth: ApiAuth;
  private _apiUser: ApiUser;
  private _apiRole: ApiRole;
  private _apiClaim: ApiClaim;
  private _apiMachines: ApiMachines;

  private static _instance: BaseService;
  private static _baseUrl: string;

  constructor() {
    this._apiAccounts = new ApiAccounts(BaseService._baseUrl, { fetch: this.tokenFetch });
    this._apiAuth = new ApiAuth(BaseService._baseUrl, { fetch: this.tokenFetch });
    this._apiUser = new ApiUser(BaseService._baseUrl, { fetch: this.tokenFetch });
    this._apiRole = new ApiRole(BaseService._baseUrl, { fetch: this.tokenFetch });
    this._apiClaim = new ApiClaim(BaseService._baseUrl, { fetch: this.tokenFetch });
    this._apiMachines = new ApiMachines(BaseService._baseUrl, { fetch: this.tokenFetch });
  
  }

  protected static getSingleton<T extends BaseService>(t: Type<T>): T {
    if (!BaseService._baseUrl) {
      throw new Error('Missing initialization. Call BaseService.init(baseUrl) first.');
    }
    if (BaseService._instance == null) {
      BaseService._instance = new t();
    }
    return BaseService._instance as T;
  }

  public static init(baseUrl: string): void {
    BaseService._baseUrl = baseUrl;
	}

  protected tokenCheck(): boolean {
    let lastToken = localStorage.getItem('expires_in');
    if (lastToken) {
      let oldTime = localStorage.getItem('time');
      let compareTime = new Date().getTime();
      console.log('Last Expires In', lastToken, compareTime);
      if (+oldTime + (+lastToken * 1000) < compareTime) {
        localStorage.removeItem('auth_token');
        return false;
      }
    }
    return true;
  }

  tokenFetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
    const token = localStorage.getItem('auth_token');
    (init.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
    return fetch(input, init);
  }  

  protected get apiAccounts(): ApiAccounts {
    return this._apiAccounts;
  }

  protected get apiAuth(): ApiAuth {
    return this._apiAuth;
  }

  protected get apiUser(): ApiUser {
    return this._apiUser;
  }

  protected get apiRole(): ApiRole {
    return this._apiRole;
  }

  protected get apiClaim(): ApiClaim {
    return this._apiClaim;
  }

  protected get apiMachines(): ApiMachines {
    return this._apiMachines;
  }

}

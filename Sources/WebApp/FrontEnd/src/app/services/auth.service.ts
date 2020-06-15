import { Observer } from './observer.service';
import { BaseService } from './base.service';
import { ApiAuth, ITokenResponseViewModel, IRegistrationViewModel, ILogonViewModel, RegistrationViewModel, LogonViewModel, IProviderViewModel, ChangePasswordViewModel, IChangePasswordViewModel, IModelStateEntry, ModelStateEntry, IModelStateDictionary } from './lib/frontendapi.services';


export class AuthService extends BaseService {

  baseUrl: string = '';

  private __loggedIn = false;

  constructor() {
    super();
  }

  public static get instance(): AuthService {
    return BaseService.getSingleton<AuthService>(AuthService);
  }

  public async providers(): Promise<IProviderViewModel[]> {
    return this.apiAuth.getProviders();
  }

  public async register(model: IRegistrationViewModel): Promise<string> {
    return this.apiAuth.post2(model as RegistrationViewModel);
  }

  public async changePassword(model: IChangePasswordViewModel): Promise<string> {
    try {
      return this.apiAuth.changePassword(model as ChangePasswordViewModel);
    }
    catch (err) {
      return Promise.reject("error");
    }
  }

  public async login(model: ILogonViewModel): Promise<boolean> {
    try {
      const res = await this.apiAuth.post(model as LogonViewModel);
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
      return Promise.resolve(true);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async logout(): Promise<boolean> {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('expires_in');
    return Promise.resolve(true);
  }

  public async isLoggedIn(): Promise<boolean> {
    return this.__loggedIn;
  }

}


import { Injectable } from '@angular/core';

import { BaseService } from "./base.service";

import { of, Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { EmitterService } from './emitter.service';
import { AccountService } from './account.service';
import { ApiAuth, ITokenResponseViewModel, IRegistrationViewModel, ILogonViewModel, RegistrationViewModel, LogonViewModel, IProviderViewModel, ChangePasswordViewModel, IChangePasswordViewModel, IModelStateEntry, ModelStateEntry, IModelStateDictionary } from './lib/frontendapi.services';

@Injectable()
export class AuthService extends BaseService {

  baseUrl: string = '';

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  public authNavStatus$: Observable<boolean>;

  private __loggedIn = false;

  constructor(private emitterService: EmitterService, private api: ApiAuth, private accounts: AccountService) {
    super();
    this.authNavStatus$ = this._authNavStatusSource.asObservable();
    this.authNavStatus$.subscribe(data => {
      this.__loggedIn = data;
      console.log('AuthNav Changed', data);
    });
    // check for an old token
    let lastToken = localStorage.getItem('expires_in');
    if (lastToken) {
      let oldTime = localStorage.getItem('time');
      let compareTime = new Date().getTime();
      console.log('Last Expires In', lastToken, compareTime);
      if (+oldTime + (+lastToken * 1000) < compareTime) {
        this.logout();
      } else {
        this.informListeners();
        this._authNavStatusSource.next(true);
      }
    }
  }

  public async providers(): Promise<IProviderViewModel[]> {
    return this.api.getProviders().toPromise();
  }

  public async register(model: IRegistrationViewModel): Promise<string> {
    return this.api.post2(model as RegistrationViewModel).toPromise<string>();
  }

  public async changePassword(model: IChangePasswordViewModel): Promise<string> {
    try {
      const call = this.api.changePassword(model as ChangePasswordViewModel);
      return call.toPromise<string>();
    }
    catch (err) {
      return Promise.reject("error");
    }
  }

  public async login(model: ILogonViewModel): Promise<boolean> {
    try {
      const res = await this.api.post(model as LogonViewModel).toPromise<ITokenResponseViewModel>();
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
      this._authNavStatusSource.next(true);
      this.informListeners();
      return Promise.resolve(true);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  private async informListeners() {
    // pull user data and provide through emitter
    const user = await this.accounts.getUserDetails();
    this.emitterService.get('USER_LOGON').emit(user);
  }

  public async logout(): Promise<boolean> {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('expires_in');
    let o: Observable<boolean> = of(false);
    this._authNavStatusSource.next(false);
    return o.delay(2000).mapTo(false).toPromise();
  }

  public async isLoggedIn(): Promise<boolean> {
    this._authNavStatusSource.next(this.__loggedIn);
    return this.__loggedIn;
  }

}


import { Injectable } from '@angular/core';

import { BaseService } from "./base.service";

import { of, Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { EmitterService } from './emitter.service';
import { AccountService } from './account.service';
import { ApiAuth, ITokenResponseViewModel, IRegistrationViewModel, ILogonViewModel, RegistrationViewModel, LogonViewModel } from './lib/frontendapi.services';

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
      console.log('AuthNav Changed', data);
    });
    // check for an old token
    let lastToken = localStorage.getItem('expires_in');
    if (lastToken) {
      let oldTime = localStorage.getItem('time');
      let compareTime = new Date().getTime();
      console.log('Last Expires In', lastToken, compareTime);
      if (+oldTime + +lastToken < compareTime) {
        this.logout();
      } else {
        this._authNavStatusSource.next(true);
      }
    }
  }

  public register(model: IRegistrationViewModel): Promise<string> {
    return this.api.post2(model as RegistrationViewModel).toPromise<string>();
  }

  public async login(model: ILogonViewModel): Promise<boolean> {
    const res = await this.api.post(model as LogonViewModel).toPromise<ITokenResponseViewModel>();
    if (!res) {
      return Promise.reject();
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
    this.isLoggedIn = true;
    // pull user data and provide through emitter
    this.accounts.getUserDetails().then(user => {
      this.emitterService.get('USER_LOGON').emit(user);
    });
    
    return Promise.resolve(true);
  }

  public logout(): Promise<boolean> {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('expires_in');
    this.isLoggedIn = false;
    let o: Observable<boolean> = of(false);
    return o.delay(2000).mapTo(false).toPromise();
  }

  public get isLoggedIn(): boolean {
    return this.__loggedIn;
  }
  public set isLoggedIn(value: boolean) {
    this.__loggedIn = value;
    this._authNavStatusSource.next(value);
  }

}


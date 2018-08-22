import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserRegistrationViewModel } from '../viewmodels/index';
import { ConfigService } from './config.service';

import { BaseService } from "./base.service";

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { EmitterService } from './emitter.service';
import { AccountService } from './account.service';

type tokenResponse = {
  auth_token: string;
  expires_in: string;
  id: string;
}

@Injectable()
export class UserService extends BaseService {

  baseUrl: string = '';

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: HttpClient, private config: ConfigService,
              private emitterService: EmitterService, private accountService: AccountService) {
    super();
    // didi we have an old token=
    let lastToken = localStorage.getItem('expires_in');
    if (lastToken) {
      let compareTime = new Date().getTime();
      console.log('Last Expires In', lastToken, compareTime);      
      if (+lastToken > compareTime) {
        this.loggedIn = !!localStorage.getItem('auth_token');
      }
    }
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
  }

  public register(email: string, password: string, firstName: string, lastName: string, location: string): Promise<boolean> {
    let body = JSON.stringify({ email, password, firstName, lastName, location });
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // TODO: check wheather needed?
    return this.http
      .post<boolean>(this.config.accountURI, body, { headers: headers })      
      .toPromise<boolean>();
  }

  public login(userName, password): Promise<boolean> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let data = JSON.stringify({ userName, password });
    // logon for user with email/password
    return this.http
      .post<tokenResponse>(this.config.authURI + 'login', data, { headers: headers })
      .map(res => {
        // receive the token and store for all upcoming requests
        localStorage.setItem('auth_token', res.auth_token);
        localStorage.setItem('user_id', res.id);
        localStorage.setItem('expires_in', res.expires_in); // handled by interceptor
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        // pull user data and provide through emitter
        this.accountService.getUserDetails().then(user => {
          this.emitterService.get('USER_LOGON').emit(user);
        });        
        return true;
      })
      .catch(this.handleError)
      .toPromise();
  }

  public logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
    return Observable.create().toPromise();
  }

  public get isLoggedIn(): boolean {
      return this.loggedIn;
  }

}


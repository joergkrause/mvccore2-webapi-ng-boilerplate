import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserRegistrationViewModel } from '../viewmodels/index';
import { ConfigService } from './config.service';

import { BaseService } from "./base.service";

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of, merge } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { EmitterService } from './emitter.service';
import { AccountService } from './account.service';

type tokenResponse = {
  auth_token: string;
  expires_in: string;
  id: string;
}

@Injectable()
export class AuthService extends BaseService {

  baseUrl: string = '';

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  public authNavStatus$ : Observable<boolean>;

  private __loggedIn = false;

  constructor(private http: HttpClient, private config: ConfigService,
              private emitterService: EmitterService, private accountService: AccountService) {
    super();
    this.authNavStatus$ = this._authNavStatusSource.asObservable();
    this.authNavStatus$.subscribe(data => {
      console.log('AuthNav Changed', data);
    });
    // checke for an old token=
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

  public register(email: string, password: string, firstName: string, lastName: string, location: string): Promise<boolean> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let body = JSON.stringify({ email, password, firstName, lastName, location });
    return this.http
      .post<boolean>(`${this.config.authURI}register`, body, { headers: headers })      
      .toPromise<boolean>();
  }

  public login(userName, password): Promise<boolean> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let body = JSON.stringify({ userName, password });
    // logon for user with email/password
    return this.http
      .post<tokenResponse>(`${this.config.authURI}login`, body, { headers: headers })
      .map(res => {
        // receive the token and store for all upcoming requests
        localStorage.setItem('auth_token', res.auth_token);
        localStorage.setItem('user_id', res.id);
        localStorage.setItem('expires_in', res.expires_in); // handled by interceptor
        let currentTime = new Date().getTime().toString();
        localStorage.setItem('time', currentTime);
        this.isLoggedIn = true;
        // pull user data and provide through emitter
        this.accountService.getUserDetails().then(user => {
          this.emitterService.get('USER_LOGON').emit(user);
        });        
        return true;
      })
      .catch(this.handleError)
      .toPromise();
  }

  public logout() : Promise<boolean> {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('expires_in');
    this.isLoggedIn = false;
    let o : Observable<boolean> = of(false);
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


import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { AccountInfoViewModel } from '../viewmodels/index'; 
import { ConfigService } from './config.service';

import {BaseService} from './base.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService extends BaseService {

  baseUrl: string = ''; 

  constructor(private http: Http, private configService: ConfigService) {
     super();
     this.baseUrl = configService.apiURI;
  }

  getUserDetails(): Promise<AccountInfoViewModel> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let authToken = localStorage.getItem('auth_token');
      headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + "/account/user",{headers})
      .map(response => response.json() as AccountInfoViewModel)
      .catch(this.handleError)
      .toPromise();
  }  
}

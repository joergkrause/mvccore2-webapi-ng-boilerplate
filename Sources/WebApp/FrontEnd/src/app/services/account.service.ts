import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AccountInfoViewModel } from '../viewmodels/index';
import { ConfigService } from './config.service';

import { BaseService } from './base.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService extends BaseService {

  baseUrl: string = '';

  constructor(private http: HttpClient, private config: ConfigService) {
    super();
  }

  getUserDetails(): Promise<AccountInfoViewModel> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let id = localStorage.getItem('user_id');
    return this.http
      .get<AccountInfoViewModel>(this.config.accountURI + id, { headers })            
      .toPromise<AccountInfoViewModel>();
  }
}

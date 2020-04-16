import { Injectable } from '@angular/core';

import { BaseService } from './base.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ApiAccounts, UserViewModel, ClaimViewModel } from './lib/frontendapi.services';

@Injectable()
export class AccountService extends BaseService {

  constructor(private api: ApiAccounts) {
    super();
  }

  getUserDetails(): Promise<UserViewModel> {
    let id = localStorage.getItem('user_id');
    return this.api.get(id).toPromise<UserViewModel>();
  }

  getUserClaims(): Promise<ClaimViewModel[]> {
    let id = localStorage.getItem('user_id');
    return this.api.getClaims(id).toPromise<ClaimViewModel[]>();
  }
}

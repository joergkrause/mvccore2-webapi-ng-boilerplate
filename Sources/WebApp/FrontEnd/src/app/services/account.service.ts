import { ApiAccounts, UserViewModel, ClaimViewModel } from './lib/frontendapi.services';
import { BaseService } from './base.service';

export class AccountService extends BaseService {

  constructor() {
    super();
  }

  public static get instance(): AccountService {
    return BaseService.getSingleton<AccountService>(AccountService);
  }

  getUserDetails(): Promise<UserViewModel> {
    let id = localStorage.getItem('user_id');
    if (id) {
      return this.apiAccounts.get(id);
    }
    return Promise.reject('No User, please Logon');
  }

  getUserClaims(): Promise<ClaimViewModel[]> {
    let id = localStorage.getItem('user_id');
    if (id) {
      return this.apiAccounts.getClaims(id);
    }
    return Promise.reject('No User, please Logon');
  }
}

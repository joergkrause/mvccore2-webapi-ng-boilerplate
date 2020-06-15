import { UserViewModel, ClaimViewModel } from './lib/frontendapi.services';
import { BaseService } from './base.service';
export declare class AccountService extends BaseService {
    constructor();
    static get instance(): AccountService;
    getUserDetails(): Promise<UserViewModel>;
    getUserClaims(): Promise<ClaimViewModel[]>;
}

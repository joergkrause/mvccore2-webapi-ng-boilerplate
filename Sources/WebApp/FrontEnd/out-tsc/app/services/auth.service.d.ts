import { BaseService } from './base.service';
import { IRegistrationViewModel, ILogonViewModel, IProviderViewModel, IChangePasswordViewModel } from './lib/frontendapi.services';
export declare class AuthService extends BaseService {
    baseUrl: string;
    private __loggedIn;
    constructor();
    static get instance(): AuthService;
    providers(): Promise<IProviderViewModel[]>;
    register(model: IRegistrationViewModel): Promise<string>;
    changePassword(model: IChangePasswordViewModel): Promise<string>;
    login(model: ILogonViewModel): Promise<boolean>;
    logout(): Promise<boolean>;
    isLoggedIn(): Promise<boolean>;
}

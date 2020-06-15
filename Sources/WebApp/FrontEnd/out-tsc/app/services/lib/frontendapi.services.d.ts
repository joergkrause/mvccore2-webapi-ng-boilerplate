export declare class ApiAccounts {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    get(id: string | null): Promise<UserViewModel>;
    protected processGet(response: Response): Promise<UserViewModel>;
    getClaims(id: string | null): Promise<ClaimViewModel[]>;
    protected processGetClaims(response: Response): Promise<ClaimViewModel[]>;
}
export declare class ApiAuth {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    getProviders(): Promise<ProviderViewModel[]>;
    protected processGetProviders(response: Response): Promise<ProviderViewModel[]>;
    post(credentials: LogonViewModel): Promise<TokenResponseViewModel>;
    protected processPost(response: Response): Promise<TokenResponseViewModel>;
    post2(model: RegistrationViewModel): Promise<string>;
    protected processPost2(response: Response): Promise<string>;
    changePassword(model: ChangePasswordViewModel): Promise<string>;
    protected processChangePassword(response: Response): Promise<string>;
    confirmEmail(userId: string | null | undefined, confirmation: string | null | undefined): Promise<string>;
    protected processConfirmEmail(response: Response): Promise<string>;
}
export declare class ApiMachines {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    get(): Promise<MachineViewModel[]>;
    protected processGet(response: Response): Promise<MachineViewModel[]>;
    post(value: MachineViewModel): Promise<void>;
    protected processPost(response: Response): Promise<void>;
    get2(id: number): Promise<MachineViewModel>;
    protected processGet2(response: Response): Promise<MachineViewModel>;
    put(id: number, value: MachineViewModel): Promise<void>;
    protected processPut(response: Response): Promise<void>;
    delete(id: number): Promise<void>;
    protected processDelete(response: Response): Promise<void>;
}
export declare class ApiClaim {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    get(id: string | null | undefined): Promise<ClaimViewModel[]>;
    protected processGet(response: Response): Promise<ClaimViewModel[]>;
    post(value: string): Promise<void>;
    protected processPost(response: Response): Promise<void>;
    getUserForClaim(id: string, claimViewModel: ClaimViewModel): Promise<UserViewModel[]>;
    protected processGetUserForClaim(response: Response): Promise<UserViewModel[]>;
    delete(id: string | null, claimType: string | null | undefined): Promise<void>;
    protected processDelete(response: Response): Promise<void>;
    put(id: string | null, oldClaimType: string | null, newClaimType: string | null): Promise<void>;
    protected processPut(response: Response): Promise<void>;
}
export declare class ApiRole {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    get(): Promise<RoleViewModel[]>;
    protected processGet(response: Response): Promise<RoleViewModel[]>;
    post(role: RoleViewModel): Promise<void>;
    protected processPost(response: Response): Promise<void>;
    getbyId(id: string | null): Promise<RoleViewModel>;
    protected processGetbyId(response: Response): Promise<RoleViewModel>;
    put(id: number, role: RoleViewModel): Promise<void>;
    protected processPut(response: Response): Promise<void>;
    delete(id: string | null): Promise<void>;
    protected processDelete(response: Response): Promise<void>;
}
export declare class ApiUser {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    get(): Promise<UserViewModel[]>;
    protected processGet(response: Response): Promise<UserViewModel[]>;
    post(user: UserViewModel): Promise<void>;
    protected processPost(response: Response): Promise<void>;
    getById(id: string | null): Promise<UserViewModel>;
    protected processGetById(response: Response): Promise<UserViewModel>;
    put(id: string | null, user: UserViewModel): Promise<void>;
    protected processPut(response: Response): Promise<void>;
    delete(id: string | null): Promise<void>;
    protected processDelete(response: Response): Promise<void>;
}
export declare class UserViewModel implements IUserViewModel {
    id?: string | undefined;
    email: string;
    passwordHash?: string | undefined;
    userName?: string | undefined;
    phoneNumber?: string | undefined;
    constructor(data?: IUserViewModel);
    init(_data?: any): void;
    static fromJS(data: any): UserViewModel;
    toJSON(data?: any): any;
}
export interface IUserViewModel {
    id?: string | undefined;
    email: string;
    passwordHash?: string | undefined;
    userName?: string | undefined;
    phoneNumber?: string | undefined;
}
export declare class ClaimViewModel implements IClaimViewModel {
    type: string;
    value?: string | undefined;
    constructor(data?: IClaimViewModel);
    init(_data?: any): void;
    static fromJS(data: any): ClaimViewModel;
    toJSON(data?: any): any;
}
export interface IClaimViewModel {
    type: string;
    value?: string | undefined;
}
export declare class ProviderViewModel implements IProviderViewModel {
    name?: string | undefined;
    displayName?: string | undefined;
    icon?: Stream | undefined;
    constructor(data?: IProviderViewModel);
    init(_data?: any): void;
    static fromJS(data: any): ProviderViewModel;
    toJSON(data?: any): any;
}
export interface IProviderViewModel {
    name?: string | undefined;
    displayName?: string | undefined;
    icon?: Stream | undefined;
}
export declare abstract class MarshalByRefObject implements IMarshalByRefObject {
    constructor(data?: IMarshalByRefObject);
    init(_data?: any): void;
    static fromJS(data: any): MarshalByRefObject;
    toJSON(data?: any): any;
}
export interface IMarshalByRefObject {
}
export declare abstract class Stream extends MarshalByRefObject implements IStream {
    canTimeout?: boolean;
    readTimeout?: number;
    writeTimeout?: number;
    constructor(data?: IStream);
    init(_data?: any): void;
    static fromJS(data: any): Stream;
    toJSON(data?: any): any;
}
export interface IStream extends IMarshalByRefObject {
    canTimeout?: boolean;
    readTimeout?: number;
    writeTimeout?: number;
}
export declare class TokenResponseViewModel implements ITokenResponseViewModel {
    id?: string | undefined;
    authToken?: string | undefined;
    expiresIn?: number;
    constructor(data?: ITokenResponseViewModel);
    init(_data?: any): void;
    static fromJS(data: any): TokenResponseViewModel;
    toJSON(data?: any): any;
}
export interface ITokenResponseViewModel {
    id?: string | undefined;
    authToken?: string | undefined;
    expiresIn?: number;
}
export declare class AuthenticationErrorViewModel implements IAuthenticationErrorViewModel {
    errorCount?: number;
    errors?: string[] | undefined;
    constructor(data?: IAuthenticationErrorViewModel);
    init(_data?: any): void;
    static fromJS(data: any): AuthenticationErrorViewModel;
    toJSON(data?: any): any;
}
export interface IAuthenticationErrorViewModel {
    errorCount?: number;
    errors?: string[] | undefined;
}
export declare class LogonViewModel implements ILogonViewModel {
    userName: string;
    password: string;
    constructor(data?: ILogonViewModel);
    init(_data?: any): void;
    static fromJS(data: any): LogonViewModel;
    toJSON(data?: any): any;
}
export interface ILogonViewModel {
    userName: string;
    password: string;
}
export declare class RegistrationViewModel implements IRegistrationViewModel {
    email: string;
    password: string;
    userName: string;
    firstName: string;
    lastName: string;
    phone?: string | undefined;
    constructor(data?: IRegistrationViewModel);
    init(_data?: any): void;
    static fromJS(data: any): RegistrationViewModel;
    toJSON(data?: any): any;
}
export interface IRegistrationViewModel {
    email: string;
    password: string;
    userName: string;
    firstName: string;
    lastName: string;
    phone?: string | undefined;
}
export declare abstract class ModelStateEntry implements IModelStateEntry {
    rawValue?: any | undefined;
    attemptedValue?: string | undefined;
    errors?: ModelError[] | undefined;
    validationState?: ModelValidationState;
    constructor(data?: IModelStateEntry);
    init(_data?: any): void;
    static fromJS(data: any): ModelStateEntry;
    toJSON(data?: any): any;
}
export interface IModelStateEntry {
    rawValue?: any | undefined;
    attemptedValue?: string | undefined;
    errors?: ModelError[] | undefined;
    validationState?: ModelValidationState;
}
export declare class ModelError implements IModelError {
    exception?: Exception | undefined;
    errorMessage?: string | undefined;
    constructor(data?: IModelError);
    init(_data?: any): void;
    static fromJS(data: any): ModelError;
    toJSON(data?: any): any;
}
export interface IModelError {
    exception?: Exception | undefined;
    errorMessage?: string | undefined;
}
export declare class Exception implements IException {
    stackTrace?: string | undefined;
    message?: string;
    innerException?: Exception | undefined;
    source?: string | undefined;
    constructor(data?: IException);
    init(_data?: any): void;
    static fromJS(data: any): Exception;
    toJSON(data?: any): any;
}
export interface IException {
    stackTrace?: string | undefined;
    message?: string;
    innerException?: Exception | undefined;
    source?: string | undefined;
}
export declare enum ModelValidationState {
    Unvalidated = 0,
    Invalid = 1,
    Valid = 2,
    Skipped = 3
}
export declare class ChangePasswordViewModel implements IChangePasswordViewModel {
    oldPassword: string;
    newPassword: string;
    newPasswordRepeat: string;
    constructor(data?: IChangePasswordViewModel);
    init(_data?: any): void;
    static fromJS(data: any): ChangePasswordViewModel;
    toJSON(data?: any): any;
}
export interface IChangePasswordViewModel {
    oldPassword: string;
    newPassword: string;
    newPasswordRepeat: string;
}
export declare class BaseViewModel implements IBaseViewModel {
    id?: number;
    constructor(data?: IBaseViewModel);
    init(_data?: any): void;
    static fromJS(data: any): BaseViewModel;
    toJSON(data?: any): any;
}
export interface IBaseViewModel {
    id?: number;
}
export declare class MachineViewModel extends BaseViewModel implements IMachineViewModel {
    name: string;
    location?: string | undefined;
    startOperation?: Date | undefined;
    hasDevices?: boolean;
    constructor(data?: IMachineViewModel);
    init(_data?: any): void;
    static fromJS(data: any): MachineViewModel;
    toJSON(data?: any): any;
}
export interface IMachineViewModel extends IBaseViewModel {
    name: string;
    location?: string | undefined;
    startOperation?: Date | undefined;
    hasDevices?: boolean;
}
export declare class ModelStateDictionary implements IModelStateDictionary {
    root?: ModelStateEntry | undefined;
    maxAllowedErrors?: number;
    hasReachedMaxErrors?: boolean;
    errorCount?: number;
    count?: number;
    keys?: string[];
    values?: ModelStateEntry[];
    isValid?: boolean;
    validationState?: ModelValidationState;
    item?: ModelStateEntry | undefined;
    constructor(data?: IModelStateDictionary);
    init(_data?: any): void;
    static fromJS(data: any): ModelStateDictionary;
    toJSON(data?: any): any;
}
export interface IModelStateDictionary {
    root?: ModelStateEntry | undefined;
    maxAllowedErrors?: number;
    hasReachedMaxErrors?: boolean;
    errorCount?: number;
    count?: number;
    keys?: string[];
    values?: ModelStateEntry[];
    isValid?: boolean;
    validationState?: ModelValidationState;
    item?: ModelStateEntry | undefined;
}
export declare class RoleViewModel implements IRoleViewModel {
    id: string;
    name: string;
    constructor(data?: IRoleViewModel);
    init(_data?: any): void;
    static fromJS(data: any): RoleViewModel;
    toJSON(data?: any): any;
}
export interface IRoleViewModel {
    id: string;
    name: string;
}
export declare class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: {
        [key: string]: any;
    };
    result: any;
    constructor(message: string, status: number, response: string, headers: {
        [key: string]: any;
    }, result: any);
    protected isApiException: boolean;
    static isApiException(obj: any): obj is ApiException;
}

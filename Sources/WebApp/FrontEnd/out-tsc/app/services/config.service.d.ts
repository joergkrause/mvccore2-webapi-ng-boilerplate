/**
 * Store the API's base URL in case we need to change it from default origin.
 * */
export declare class ConfigService {
    private static _apiURI;
    static get apiURI(): string;
    static set apiURI(value: string);
}

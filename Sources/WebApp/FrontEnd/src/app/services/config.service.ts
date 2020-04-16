/**
 * Store the API's base URL in case we need to change it from default origin.
 * */
export class ConfigService {

  private static _apiURI: string = window.location.origin;

  public static get apiURI() {
    return ConfigService._apiURI;
  }

  public static set apiURI(value: string) {
    ConfigService._apiURI = value;
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  _apiURI: string;

  constructor() {
    this._apiURI = '/api/';
  }

  public get apiURI() {
    return this._apiURI;
  }

  public get accountURI() {
    return this._apiURI + 'accounts/';
  }
  public get dataURI() {
    return this._apiURI + 'machines/';
  }
  public get authURI() {
    return this._apiURI + 'auth/';
  }
}

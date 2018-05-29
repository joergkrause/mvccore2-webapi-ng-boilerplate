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
    return this._apiURI + 'account';
  }
  public get dataURI() {
    return this._apiURI + 'data';
  }
  public get userURI() {
    return this._apiURI + 'user';
  }
}

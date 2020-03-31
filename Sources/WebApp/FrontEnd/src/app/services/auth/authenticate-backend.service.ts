import { Injectable } from '@angular/core';
import { HttpRequest, HttpXhrBackend, HttpResponse, XhrFactory } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

declare var window: any;

@Injectable()
export class AuthenticateXHRBackend extends HttpXhrBackend {

  constructor(xhrFactory: XhrFactory) {
    super(xhrFactory);
  }

  //async createConnection(request: HttpRequest<any>) {
  //  let xhrConnection = super.handle(request).toPromise();
  //  xhrConnection.response = await xhrConnection..catch((error: Response) => {
  //    if ((error.status === 401 || error.status === 403) && (this.window.location.href.match(/\?/g) || []).length < 2) {

  //      console.log('The authentication session expired or the user is not authorized. Force refresh of the current page.');
  //      /* Great solution for bundling with Auth Guard! 
  //      1. Auth Guard checks authorized user (e.g. by looking into LocalStorage). 
  //      2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage). 
  //      3. As at this early stage you can't access the Router for forwarding to the login page,
  //      4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
  //      localStorage.removeItem('auth_token');
  //      this.window.location.href = this.window.location.href + '?' + new Date().getMilliseconds();
  //    }
  //    return Observable.throw(error);
  //  });
  //  return xhrConnection;
  //}
}
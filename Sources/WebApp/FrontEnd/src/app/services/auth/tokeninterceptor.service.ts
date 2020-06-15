/**
 * Adds the bearer token and the global JSON support, the latter header is required by ASP.NET Core WebAPI
 * */
export class TokenInterceptorService {

  constructor() { }

  intercept(request: Request): void {
    request.headers.set('Content-Type', 'application/json');
    request.headers.set('Authorization', `Bearer ${this.token}`);
  }

  private get token(): string {
    return localStorage.getItem('auth_token');
  }

}
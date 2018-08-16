import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';

import { AuthGuard } from './guards/index';

import * as components from './components/index';
import * as services from './services/index';

import { routesConfig } from './configurations/routes';
import { TokenInterceptorService, AuthenticateXHRBackend } from './services/index';

@NgModule({
  declarations: [ 
    components.SiteRootComponent, 
    components.DashboardComponent,
    components.LoginFormComponent, 
    components.RegistrationFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routesConfig),
    BrowserModule,    
    HttpClientModule
  ],
  providers: [
    // router config
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // handle Bearer token for all requests
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    // handle expired tokens and denied access
    //{ provide: HTTP_INTERCEPTORS, useClass: AuthenticateXHRBackend, multi: true},
    // regular demo data
    services.ApiService,
    // Account data, user details
    services.AccountService,
    // Login/Logout
    services.UserService,
    // generic publish/subscribe
    services.EmitterService,
    // global service config
    services.ConfigService,
    // prevent routes for non-authenticated users
    AuthGuard
  ],
  bootstrap: [ components.SiteRootComponent ]
})
export class AppModule {

}
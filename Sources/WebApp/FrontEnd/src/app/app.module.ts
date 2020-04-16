import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';

import { AuthGuard } from './guards/index';

import * as components from './components/index';
import * as services from './services/index';

import { routesConfig } from './configurations/routes';
import { TokenInterceptorService, AuthenticateXHRBackend, API_BASE_URL } from './services/index';

// The admin part is separated to it's own module
import { AdminModule } from './modules/admin/admin.module';

export function getBaseUrl(): string {
  return services.ConfigService.apiURI;
}

@NgModule({
  declarations: [ 
    components.SiteRootComponent, 
    components.SiteInfoComponent, 
    components.DashboardComponent,
    components.LoginFormComponent, 
    components.LogoutFormComponent, 
    components.RegistrationFormComponent,
    components.ProfileFormComponent
  ],
  imports: [
    AdminModule,
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
    // { provide: HTTP_INTERCEPTORS, useClass: AuthenticateXHRBackend, multi: true },
    // Nswag's generated code can be configured here
    { provide: API_BASE_URL, useFactory: getBaseUrl },
    // regular demo data
    services.MachineDataService,
    // Account data, user details
    services.AccountService,
    // Login/Logout
    services.AuthService,
    // generic publish/subscribe
    services.EmitterService,
    // APIs to server
    services.ApiAccounts, services.ApiAuth, services.ApiMachines,
    // prevent routes for non-authenticated users
    AuthGuard
  ],
  bootstrap: [ components.SiteRootComponent ]
})
export class AppModule {

}
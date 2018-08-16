import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';

import { AuthGuard } from './guards/index';

import * as components from './components/index';
import * as services from './services/index';

import { routesConfig } from './configurations/routes';

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
    HttpModule,
    HttpClientModule
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    services.ApiService,
    services.AccountService,
    services.UserService,
    services.EmitterService,
    services.ConfigService,
    AuthGuard
  ],
  bootstrap: [ components.SiteRootComponent ]
})
export class AppModule {

}
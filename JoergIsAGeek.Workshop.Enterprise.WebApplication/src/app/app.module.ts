import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import * as components from './components/index';
import * as services from './services/index';

import { routesConfig } from './configurations/routes';

@NgModule({
  declarations: [ 
    components.SiteRootComponent, 
    components.LoginFormComponent, 
    components.RegistrationFormComponent
  ],
  imports: [ FormsModule, ReactiveFormsModule, RouterModule.forRoot(routesConfig), BrowserModule, HttpClientModule ],
  bootstrap: [ components.SiteRootComponent ]
})
export class AppModule {

}
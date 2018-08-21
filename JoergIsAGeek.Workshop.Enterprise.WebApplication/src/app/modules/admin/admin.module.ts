import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routesConfig } from './configurations/routes';

import * as components from './components/index';

@NgModule({
  declarations: [ 
    components.AdminRootComponent,
    components.AdminUsersComponent,
    components.AdminRolesComponent,
    components.AdminClaimsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,    
    HttpClientModule,
    RouterModule.forChild(routesConfig)
  ],
  exports: [
    components.AdminRootComponent
  ],
  providers: []
})
export class AdminModule {

}
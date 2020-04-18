import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, Location } from '@angular/common';

//Angular Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AuthGuard } from './guards/index';

import * as components from './components/index';
import * as services from './services/index';

import { routesConfig } from './configurations/routes';
import { TokenInterceptorService, API_BASE_URL } from './services/index';

// The admin part is separated to it's own module
import { AdminModule } from './modules/admin/admin.module';

export function getBaseUrl(): string {
  return services.ConfigService.apiURI;
}

const material = [MatButtonModule, MatCheckboxModule, MatCardModule, MatTabsModule];

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
    HttpClientModule,
    ...material,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [
    // router config
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // handle Bearer token for all requests
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
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
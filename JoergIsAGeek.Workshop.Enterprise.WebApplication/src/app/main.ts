import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule, XHRBackend } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// forms handling and validation
import * as Svogv from 'svogv';

// components
import * as directives from './directives/index';
import * as components from './components/index';
import { SiteRootComponent } from './pages/siteroot.component';
import { PageDashboardComponent } from './pages/dashboard/page-dashboard.component';
import { PageOptionsComponent } from './pages/options/page-options.component';
import { PageRegistrationComponent } from './pages/registration-form/registration-form.component';
import { PageLoginComponent } from './pages/login/login-form.component';

// bootstrap 
import * as Ng from '@ng-bootstrap/ng-bootstrap';
// services
import * as services from './services/index';
// routers and guards
import currentRoutesConfig from './configurations/routes';
import { AuthGuard } from './guards/index';

@NgModule({
  declarations: [
    SiteRootComponent,
    PageDashboardComponent,
    PageOptionsComponent,   
    PageRegistrationComponent,
    PageLoginComponent,
    components.SiteHeaderComponent,       
    components.SiteSidebarComponent,       
    components.SitePageHeaderComponent,
    components.SiteStatComponent,
    components.ModalComponent,        
    components.PaginationComponent,        
    components.PopOverComponent,        
    components.ProgressbarComponent,        
    components.AlertComponent,
    components.ButtonsComponent,
    components.CollapseComponent,
    components.DropdownComponent,
    components.TableComponent,
    components.TabsComponent,
    components.TimepickerComponent,
    components.TooltipComponent,
    components.SiteChartComponent,
    Svogv.AcDataGridPagination, 
    Svogv.AcAutoForm, 
    Svogv.AcAnalogClock, 
    Svogv.AcEditor, 
    Svogv.AcInfoBox,
    directives.RemoveHostDirective,
    Ng.NgbAccordion, 
    Ng.NgbAlert, 
    Ng.NgbCarousel, 
    Ng.NgbCheckBox, 
    Ng.NgbCollapse, 
    Ng.NgbPanelContent, 
    Ng.NgbTooltip, 
    Ng.NgbTab, 
    Ng.NgbRating, 
    Ng.NgbPagination, 
    Ng.NgbProgressbar, 
    Ng.NgbTabset, 
    Ng.NgbTimepicker
  ],
  providers: [
    services.ApiService, 
    services.EmitterService,
    services.AccountService,
    services.UserService,
    services.ConfigService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: XHRBackend, useClass: services.AuthenticateXHRBackend },
    { provide: HTTP_INTERCEPTORS, useClass: services.TokenInterceptorService, multi: true },
    Svogv.FormValidatorService,
    Ng.NgbCarouselConfig,
    Ng.NgbAlertConfig,
    AuthGuard
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(currentRoutesConfig),
    NgbDropdownModule.forRoot()
  ],
  bootstrap: [SiteRootComponent]
}) // {} == new object()
class AppRoot {

}

platformBrowserDynamic().bootstrapModule(AppRoot);
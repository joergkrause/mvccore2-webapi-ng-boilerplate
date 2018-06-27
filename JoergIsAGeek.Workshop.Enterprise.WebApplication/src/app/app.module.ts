import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// forms handling and validation
import * as svogv from 'svogv';

// components
import * as directives from './directives/index';
import * as components from './components/index';
import * as pages from './pages/index';

// bootstrap
import * as Ng from '@ng-bootstrap/ng-bootstrap';
// services
import * as services from './services/index';
// routers and guards
import currentRoutesConfig from './configurations/routes';
import { AuthGuard } from './guards/index';

@NgModule({
  declarations: [
    pages.SiteRootComponent,
    pages.PageDashboardComponent,
    pages.PageOptionsComponent,
    pages.PageLoginComponent,
    pages.PageRegistrationComponent,
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
    svogv.AcDataGridPagination,
    svogv.AcAutoForm,
    svogv.AcEditor,
    svogv.AcInfoBox,
    directives.RemoveHostDirective
  ],
  providers: [
    services.ApiService,
    services.EmitterService,
    services.AccountService,
    services.UserService,
    services.ConfigService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: XHRBackend, useClass: services.AuthenticateXHRBackend },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: services.TokenInterceptorService,
      multi: true
    },
    svogv.FormValidatorService,
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
  bootstrap: [pages.SiteRootComponent]
}) // {} == new object()
export class AppRoot {}
// @NgModule({
// declarations: [SiteRootComponent],
// imports: [ BrowserModule ]
// })
// export class AppRoot {

// }

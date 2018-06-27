import { Routes } from '@angular/router';

import * as pages from '../pages/index';
import { AuthGuard } from '../guards/index';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: pages.SiteRootComponent,
    data: {
      title: 'Dashboard',
      icon: 'fa-dashboard'
    }
  },
  // {
  //   path: 'options',
  //   component: pages.PageOptionsComponent,
  //   data: {
  //     title: 'Options'
  //   },
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'register',
  //   component: pages.PageRegistrationComponent,
  //   data: {
  //     title: 'User Registration'
  //   }
  // },
  // {
  //   path: 'login',
  //   component: pages.PageLoginComponent,
  //   data: {
  //     title: 'User Login'
  //   }
  // }
];

export default routes;
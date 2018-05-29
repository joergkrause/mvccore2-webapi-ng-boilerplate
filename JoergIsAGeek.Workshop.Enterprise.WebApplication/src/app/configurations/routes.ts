import { Routes } from '@angular/router';

import * as Pages from '../pages/index';
import { AuthGuard } from '../guards/index';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Pages.PageDashboardComponent,
    data: {
      title: 'Dashboard',
      icon: 'fa-dashboard'
    }
  },
  {
    path: 'options',
    component: Pages.PageOptionsComponent,
    data: {
      title: 'Options'
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: Pages.PageRegistrationComponent,
    data: {
      title: 'User Registration'
    }
  },
  {
    path: 'login',
    component: Pages.PageLoginComponent,
    data: {
      title: 'User Login'
    }
  }
];

export default routes;
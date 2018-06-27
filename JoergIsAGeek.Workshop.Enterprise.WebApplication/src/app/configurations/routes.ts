import { Routes } from '@angular/router';

import * as components from '../components/index';
import { AuthGuard } from '../guards/index';

export const routesConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: components.SiteRootComponent,
    data: {
      title: 'Dashboard',
      icon: 'fa-dashboard'
    }
  },
  {
    path: 'register',
    component: components.RegistrationFormComponent,
    data: {
      title: 'User Registration'
    }
  },
  {
    path: 'login',
    component: components.LoginFormComponent,
    data: {
      title: 'User Login'
    }
  }
];


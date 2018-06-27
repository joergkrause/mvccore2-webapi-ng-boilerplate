import { Routes } from '@angular/router';

import * as components from '../components/index';
import { AuthGuard } from '../guards/index';

export const routesConfig: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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


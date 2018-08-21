import { Routes } from '@angular/router';

import * as components from '../components/index';
import { AuthGuard } from '../guards/index';

export const routesConfig: Routes = [
  {
    path: '',
    redirectTo: 'info',
    pathMatch: 'full'
  },
  {
    path: 'info',
    component: components.SiteInfoComponent,
    data: {
      title: 'Site Info'
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
    path: 'login/:email',
    component: components.LoginFormComponent,
    data: {
      title: 'User Login'
    }
  },
  {
    path: 'login',
    component: components.LoginFormComponent,
    data: {
      title: 'User Login'
    }
  },
  {
    path: 'dashboard',
    component: components.DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule',
    data: {
      title: 'Administration'
    }
  }

];


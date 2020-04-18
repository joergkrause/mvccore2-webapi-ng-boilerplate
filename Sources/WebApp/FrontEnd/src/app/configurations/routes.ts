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
      mainmenu: true,
      title: 'Site Info'
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
    path: 'logout',
    component: components.LogoutFormComponent,
    data: {
      title: 'User Logout'
    }
  },
  {
    path: 'dashboard',
    component: components.DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      mainmenu: true,
      title: 'Dashboard'
    }
  },
  {
    path: 'admin',
    loadChildren: () => import('../modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    data: {
      mainmenu: false
    }
  },
  {
    path: 'register',
    component: components.RegistrationFormComponent,
    data: {
      mainmenu: true,
      title: 'User Registration'
    }
  }

];


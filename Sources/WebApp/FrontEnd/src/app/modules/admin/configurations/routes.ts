import { Routes } from '@angular/router';

import * as components from '../components/index';
import { AuthGuard } from '../../../guards/auth.guard';

export const routesConfig: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: components.AdminRootComponent,
    data: {
      title: 'User Administration'
    }
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    component: components.AdminUsersComponent,
    outlet: 'manager',
    data: {
      title: 'User Manager'
    }
  },{
    path: 'roles',
    canActivate: [AuthGuard],
    component: components.AdminRolesComponent,
    outlet: 'manager',
    data: {
      title: 'Roles Manager'
    }
  },{
    path: 'claims',
    canActivate: [AuthGuard],
    component: components.AdminClaimsComponent,
    outlet: 'manager',
    data: {
      title: 'Claims Manager'
    }
  }
];


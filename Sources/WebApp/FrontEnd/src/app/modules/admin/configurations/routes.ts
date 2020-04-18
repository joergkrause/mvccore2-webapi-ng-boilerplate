import { Routes } from '@angular/router';

import * as components from '../components/index';

export const routesConfig: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: components.AdminRootComponent,
    children: [
      { path: 'users', component: components.AdminUsersComponent, outlet: 'admin', data: { title: 'Users' } },
      { path: 'roles', component: components.AdminRolesComponent, outlet: 'admin', data: { title: 'Roles' } },
      { path: 'claims', component: components.AdminClaimsComponent, outlet: 'admin', data: { title: 'Claims' } }
    ],
    data: {
      title: 'User Administration'
    }
  }
];


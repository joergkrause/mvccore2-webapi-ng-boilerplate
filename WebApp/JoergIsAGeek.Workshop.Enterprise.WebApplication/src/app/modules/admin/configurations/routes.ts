import { Routes } from '@angular/router';

import * as components from '../components/index';

export const routesConfig: Routes = [
  {
    path: '',
    redirectTo: 'root',
    pathMatch: 'full'
  },
  {
    path: 'root',
    component: components.AdminRootComponent,
    children: [
      { path: 'users', component: components.AdminUsersComponent, outlet: 'admin' },
      { path: 'roles', component: components.AdminRolesComponent, outlet: 'admin' },
      { path: 'claims', component: components.AdminClaimsComponent, outlet: 'admin' }
    ],
    data: {
      title: 'Administration'
    }
  },
  //{ path: 'root/users', component: components.AdminUsersComponent, outlet: 'admin' },
  //{ path: 'admin/root/roles', component: components.AdminRolesComponent, outlet: 'admin' },
  //{ path: 'claims', component: components.AdminClaimsComponent, outlet: 'admin' }

];



import * as apps from '../components/index';
import * as admin from '../modules/admin/components/index';
import { Routes } from '@nyaf/lib';

const routes: Routes = {
	'/dashboard': { component: apps.DashboardComponent },
	'/login': { component: apps.LoginFormComponent },
	'/logout': { component: apps.LogoutFormComponent },
	'/register': { component: apps.RegisterFormComponent },
	'/profile': { component: apps.ProfileFormComponent },
	'/admin': { component: admin.AdminRootComponent },
	'/admin/user': { component: admin.AdminUsersComponent },
	'/admin/claims': { component: admin.AdminClaimsComponent },
	'/admin/roles': { component: admin.AdminRolesComponent },
};

export default routes;
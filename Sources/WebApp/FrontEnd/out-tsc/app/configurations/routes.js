"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apps = require("../components/index");
const admin = require("../modules/admin/components/index");
const routes = {
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
exports.default = routes;
//# sourceMappingURL=routes.js.map
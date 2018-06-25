"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pages = require("../pages/index");
var index_1 = require("../guards/index");
var routes = [
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
        canActivate: [index_1.AuthGuard]
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
exports.default = routes;
//# sourceMappingURL=routes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("@nyaf/lib");
const site = require("./app/components/index");
const search_input_expander_1 = require("app/components/shared/expander/search.input.expander");
const checkbox_expander_1 = require("app/components/shared/expander/checkbox.expander");
const routes_1 = require("./app/configurations/routes");
require('./assets/main.scss');
const siteComponents = [
    site.LoginFormComponent,
    site.LogoutFormComponent,
    site.ProfileFormComponent,
    site.RegisterFormComponent,
    site.SiteInfoComponent,
    site.SiteRootComponent,
    site.DashboardComponent
];
const sharedComps = [
    site.TabsComponent,
    site.TabComponent,
    site.GridComponent
];
const partials = [
    site.SiteWelcomeComponent,
    site.SiteStatusComponent,
];
const expanders = [search_input_expander_1.SearchInputExpander, checkbox_expander_1.CheckboxExpander];
lib_1.GlobalProvider.bootstrap({
    // register all components directly used in templates
    components: [
        ...siteComponents,
        ...sharedComps,
        ...partials
    ],
    expanders: [
        ...expanders
    ],
    // register for router
    routes: routes_1.default
});
//# sourceMappingURL=main.js.map
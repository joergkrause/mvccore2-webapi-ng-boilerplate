import { GlobalProvider } from '@nyaf/lib';

import * as site from './app/components/index';
import { SearchInputExpander } from './app/components/shared/expander/search.input.expander';
import { CheckboxExpander } from './app/components/shared/expander/checkbox.expander';
import routes from './app/configurations/routes';
import { BaseService } from './app/services/base.service';

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
	site.GridComponent,
	site.AlertComponent
];
const partials = [
	site.SiteWelcomeComponent,
	site.SiteStatusComponent,
];
const expanders = [ SearchInputExpander, CheckboxExpander ];


GlobalProvider.bootstrap({
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
	routes
});

// init service environment
BaseService.init("http://localhost:5000/");

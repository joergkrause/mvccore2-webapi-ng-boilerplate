import JSX, { CustomElement, BaseComponent } from "@nyaf/lib";

import { ProvideStore, Store, IStore } from "@nyaf/store";
import { globalStoreType } from "../../services/flux/stores/global.store";

@CustomElement('site-root')
export class SiteRootComponent extends BaseComponent<any> {

	constructor() {
		super();
	}

	async render() {
		return await (
			<>
				<header>
					<div class="pull-left">
						<site-welcome></site-welcome>
					</div>
					<div class="pull-right">
						<site-status loggedIn={false}></site-status>
					</div>
				</header>
				<nav>
					<ul class="nav nav-pills">
						<li class="nav-item">
							<a class="nav-link active" n-link="active" href="#/profile">Profile</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" n-link="active" href="#/register">Register</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" n-link="active" href="#/dashboard">Dashboard</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" n-link="active" href="#/admin">Admin</a>
						</li>
					</ul>
				</nav>
				<div class='row'>
					<div class='col'>
						<div n-router-outlet></div>
					</div>
				</div>
			</>
		)
	}

}

import JSX, { CustomElement, BaseComponent, Properties } from "@nyaf/lib";
import { ProvideStore, Store, IStore } from "@nyaf/store";

import { globalStoreType } from "../../../services/flux/stores/global.store";


interface StatusProperties {
	loggedIn: boolean;
}

@CustomElement('site-status')
@Properties<StatusProperties>({ loggedIn: false })
export class SiteStatusComponent extends BaseComponent<StatusProperties> {

	constructor() {
		super();
	}

	async render() {
		return await (
			<>
				<a n-if={!this.data.loggedIn} n-link href="#/login">Login</a> | <a n-if={this.data.loggedIn} n-link href="#/logout">Logout</a>
			</>
		)
	}

}

import JSX, { CustomElement, BaseComponent } from "@nyaf/lib";
import { ProvideStore, Store, IStore } from "@nyaf/store";

@CustomElement('site-welcome')
export class SiteWelcomeComponent extends BaseComponent<any> {

	constructor() {
		super();
	}

	async render() {
		return await (
			<>
				Welcome Name
			</>
		)
	}

}

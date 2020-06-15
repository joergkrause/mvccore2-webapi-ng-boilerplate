import { Expander, Expand } from "@nyaf/lib";

@Expand('search')
export class SearchInputExpander extends Expander {

	constructor() {
		super();
	}

	'data-icon'="<span class='mif-search'></span>";
	'data-cls-line'="bg-cyan";
	'data-cls-label'="fg-cyan";
	'data-cls-informer'="fg-lightCyan";
	'data-cls-icon'="fg-darkCyan";
	'data-clear-button'="true";
	'data-search-button'="true";
	'data-role'="materialinput";
	'data-label'="Name";
	'placeholder'="Name";
	'type'="text";
	'name'="search";
	'role'="search";

}

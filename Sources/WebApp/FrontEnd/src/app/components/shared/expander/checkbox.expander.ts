import { Expander, Expand } from "@nyaf/lib";

@Expand('checkbox')
export class CheckboxExpander extends Expander {

	constructor() {
		super();
	}

	'type' = "checkbox";
	'value'="1";
	'data-role'="checkbox";
	'data-style'="2";

}

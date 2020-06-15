/**
 * Describe a header field with name and tooltip.
 */
export class DataGridHeader {
  /**
   * The ctor
   * @param text: The text to display.
   * @param desc: A tooltip that is shown on mouseover (using the `title` attribute).
   * @param prop: The propertie's internal name.
   */
  constructor(public text: string, public desc: string, public prop: string, public sortable: boolean, public hidden: boolean) {
	}

	additionalHeader: boolean;
	width: number;
	filterable: boolean;
}


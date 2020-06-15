/**
* Describe a header field with name and tooltip.
*/
export declare class DataGridHeader {
    text: string;
    desc: string;
    prop: string;
    sortable: boolean;
    hidden: boolean;
    /**
     * The ctor
     * @param text: The text to display.
     * @param desc: A tooltip that is shown on mouseover (using the `title` attribute).
     * @param prop: The propertie's internal name.
     */
    constructor(text: string, desc: string, prop: string, sortable: boolean, hidden: boolean);
    additionalHeader: boolean;
    width: number;
    filterable: boolean;
}

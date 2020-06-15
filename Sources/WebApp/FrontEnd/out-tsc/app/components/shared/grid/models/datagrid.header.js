"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Describe a header field with name and tooltip.
 */
class DataGridHeader {
    /**
     * The ctor
     * @param text: The text to display.
     * @param desc: A tooltip that is shown on mouseover (using the `title` attribute).
     * @param prop: The propertie's internal name.
     */
    constructor(text, desc, prop, sortable, hidden) {
        this.text = text;
        this.desc = desc;
        this.prop = prop;
        this.sortable = sortable;
        this.hidden = hidden;
    }
}
exports.DataGridHeader = DataGridHeader;
//# sourceMappingURL=datagrid.header.js.map
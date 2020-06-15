"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_reducer_1 = require("../reducers/global.reducer");
const global_actions_1 = require("../actions/global.actions");
const store_1 = require("@nyaf/store");
const globalState = { tab: '', grid: {}, progress: {} };
const store = new store_1.Store({
    actions: { SETTAB: global_actions_1.SETTAB, SETGRID: global_actions_1.SETGRID },
    reducer: Object.assign({}, global_reducer_1.default),
    state: globalState
});
exports.default = store;
//# sourceMappingURL=global.store.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_reducer_1 = require("../reducer/dashboard.reducer");
const dashboard_actions_1 = require("../actions/dashboard.actions");
const global_store_1 = require("../../../services/flux/stores/global.store");
const initialState = {
    machines: null
};
const dashboardStoreParams = {
    actions: dashboard_actions_1.default,
    reducer: dashboard_reducer_1.default,
    state: initialState
};
const mergedStore = global_store_1.default.mergeStore(dashboardStoreParams);
exports.default = mergedStore;
//# sourceMappingURL=dashboard.store.js.map
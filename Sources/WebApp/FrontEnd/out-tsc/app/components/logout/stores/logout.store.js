"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logout_reducer_1 = require("../reducer/logout.reducer");
const logout_actions_1 = require("../actions/logout.actions");
const global_store_1 = require("../../../services/flux/stores/global.store");
const initialState = {
    loggingOut: false,
    loggedOut: false
};
const logoutStoreParams = {
    actions: logout_actions_1.default,
    reducer: logout_reducer_1.default,
    state: initialState
};
const mergedStore = global_store_1.default.mergeStore(logoutStoreParams);
exports.default = mergedStore;
//# sourceMappingURL=logout.store.js.map
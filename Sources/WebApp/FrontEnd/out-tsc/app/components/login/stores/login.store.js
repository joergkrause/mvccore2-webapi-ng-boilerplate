"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_reducer_1 = require("../reducer/login.reducer");
const login_actions_1 = require("../actions/login.actions");
const global_store_1 = require("../../../services/flux/stores/global.store");
const initialState = {
    user: null,
    error: null
};
const loginStoreParams = {
    actions: login_actions_1.default,
    reducer: login_reducer_1.default,
    state: initialState
};
const mergedStore = global_store_1.default.mergeStore(loginStoreParams);
exports.default = mergedStore;
//# sourceMappingURL=login.store.js.map
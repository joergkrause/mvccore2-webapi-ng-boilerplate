"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roles_reducer_1 = require("../reducer/roles.reducer");
const roles_actions_1 = require("../actions/roles.actions");
const global_store_1 = require("app/services/flux/stores/global.store");
const initialState = {
    current: null,
    gridResult: null
};
const archiveStoreParams = {
    actions: roles_actions_1.default,
    reducer: roles_reducer_1.default,
    state: initialState
};
const mergedStore = global_store_1.default.mergeStore(archiveStoreParams);
exports.default = mergedStore;
//# sourceMappingURL=roles.store.js.map
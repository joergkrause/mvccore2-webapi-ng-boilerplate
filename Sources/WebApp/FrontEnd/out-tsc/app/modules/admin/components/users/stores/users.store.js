"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_reducer_1 = require("../reducer/users.reducer");
const users_actions_1 = require("../actions/users.actions");
const global_store_1 = require("app/services/flux/stores/global.store");
const initialState = {
    current: null,
    gridResult: null
};
const archiveStoreParams = {
    actions: users_actions_1.default,
    reducer: users_reducer_1.default,
    state: initialState
};
const mergedStore = global_store_1.default.mergeStore(archiveStoreParams);
exports.default = mergedStore;
//# sourceMappingURL=users.store.js.map
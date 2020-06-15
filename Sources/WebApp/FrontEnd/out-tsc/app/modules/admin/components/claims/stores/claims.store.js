"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const claims_reducer_1 = require("../reducer/claims.reducer");
const claims_actions_1 = require("../actions/claims.actions");
const global_store_1 = require("app/services/flux/stores/global.store");
const initialState = {
    current: null,
    gridResult: null
};
const archiveStoreParams = {
    actions: claims_actions_1.default,
    reducer: claims_reducer_1.default,
    state: initialState
};
const mergedStore = global_store_1.default.mergeStore(archiveStoreParams);
exports.default = mergedStore;
//# sourceMappingURL=claims.store.js.map
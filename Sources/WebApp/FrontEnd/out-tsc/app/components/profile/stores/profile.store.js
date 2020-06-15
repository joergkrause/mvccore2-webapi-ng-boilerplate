"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const profile_reducer_1 = require("../reducer/profile.reducer");
const profile_actions_1 = require("../actions/profile.actions");
const global_store_1 = require("../../../services/flux/stores/global.store");
const initialState = {
    model: null
};
const profileStoreParams = {
    actions: profile_actions_1.default,
    reducer: profile_reducer_1.default,
    state: initialState
};
const mergedStore = global_store_1.default.mergeStore(profileStoreParams);
exports.default = mergedStore;
//# sourceMappingURL=profile.store.js.map
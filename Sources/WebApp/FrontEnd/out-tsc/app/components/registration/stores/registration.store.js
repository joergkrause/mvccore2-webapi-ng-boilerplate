"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registration_reducer_1 = require("../reducer/registration.reducer");
const registration_actions_1 = require("../actions/registration.actions");
const global_store_1 = require("app/services/flux/stores/global.store");
const initialState = {
    current: null,
    result: null
};
const registrationStoreParams = {
    actions: registration_actions_1.default,
    reducer: registration_reducer_1.default,
    state: initialState
};
const mergedStore = global_store_1.default.mergeStore(registrationStoreParams);
exports.default = mergedStore;
//# sourceMappingURL=registration.store.js.map
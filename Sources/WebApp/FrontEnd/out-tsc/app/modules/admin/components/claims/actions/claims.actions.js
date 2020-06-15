"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("app/services");
exports.CLAIMS_SEARCH = 'CLAIMS_SEARCH';
exports.CLAIMS_ALL = 'CLAIMS_ALL';
exports.CLAIMS_EDIT = 'CLAIMS_EDIT';
exports.CLAIMS_ADD = 'CLAIMS_ADD';
exports.CLAIMS_SAVE = 'CLAIMS_SAVE';
exports.CLAIMS_REMOVE = 'CLAIMS_REMOVE';
/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
exports.default = {
    [exports.CLAIMS_SEARCH]: () => '',
    [exports.CLAIMS_ALL]: () => '',
    [exports.CLAIMS_EDIT]: () => new services_1.ClaimViewModel(),
    [exports.CLAIMS_ADD]: () => new services_1.ClaimViewModel(),
    [exports.CLAIMS_SAVE]: () => new services_1.ClaimViewModel(),
    [exports.CLAIMS_REMOVE]: () => 0,
};
//# sourceMappingURL=claims.actions.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("app/services");
exports.ROLES_SEARCH = 'ROLES_SEARCH';
exports.ROLES_ALL = 'ROLES_ALL';
exports.ROLES_EDIT = 'ROLES_EDIT';
exports.ROLES_ADD = 'ROLES_ADD';
exports.ROLES_SAVE = 'ROLES_SAVE';
exports.ROLES_REMOVE = 'ROLES_REMOVE';
exports.ROLES_HIDE = 'ROLES_HIDE';
/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
exports.default = {
    [exports.ROLES_SEARCH]: () => '',
    [exports.ROLES_ALL]: () => '',
    [exports.ROLES_EDIT]: () => new services_1.RoleViewModel(),
    [exports.ROLES_ADD]: () => new services_1.RoleViewModel(),
    [exports.ROLES_SAVE]: () => new services_1.RoleViewModel(),
    [exports.ROLES_REMOVE]: () => 0,
    [exports.ROLES_HIDE]: () => 0
};
//# sourceMappingURL=roles.actions.js.map
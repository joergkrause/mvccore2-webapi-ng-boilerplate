"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("app/services");
exports.USERS_SEARCH = 'USERS_SEARCH';
exports.USERS_ALL = 'USERS_ALL';
exports.USERS_EDIT = 'USERS_EDIT';
exports.USERS_ADD = 'USERS_ADD';
exports.USERS_SAVE = 'USERS_SAVE';
exports.USERS_REMOVE = 'USERS_REMOVE';
exports.USERS_HIDE = 'USERS_HIDE';
/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
exports.default = {
    [exports.USERS_SEARCH]: () => '',
    [exports.USERS_ALL]: () => '',
    [exports.USERS_EDIT]: () => new services_1.UserViewModel(),
    [exports.USERS_ADD]: () => new services_1.UserViewModel(),
    [exports.USERS_SAVE]: () => new services_1.UserViewModel(),
    [exports.USERS_REMOVE]: () => 0,
    [exports.USERS_HIDE]: () => 0
};
//# sourceMappingURL=users.actions.js.map
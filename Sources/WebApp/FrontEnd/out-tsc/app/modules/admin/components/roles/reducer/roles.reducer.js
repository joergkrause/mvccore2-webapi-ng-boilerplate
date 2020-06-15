"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const roles_actions_1 = require("../actions/roles.actions");
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
exports.default = {
    [roles_actions_1.ROLES_SEARCH]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return { gridResult: null };
    }),
    [roles_actions_1.ROLES_ALL]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return { gridResult: null };
    }),
    [roles_actions_1.ROLES_EDIT]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return { gridResult: null };
    }),
    [roles_actions_1.ROLES_ADD]: (state, payload) => {
        return { gridResult: null };
    },
    [roles_actions_1.ROLES_SAVE]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return { gridResult: null };
    }),
    [roles_actions_1.ROLES_REMOVE]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return { gridResult: null };
    })
};
//# sourceMappingURL=roles.reducer.js.map
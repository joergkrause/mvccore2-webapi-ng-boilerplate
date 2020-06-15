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
const users_actions_1 = require("../actions/users.actions");
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
exports.default = {
    [users_actions_1.USERS_SEARCH]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return { gridResult: null };
    }),
    [users_actions_1.USERS_ALL]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return { gridResult: null };
    }),
    [users_actions_1.USERS_EDIT]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return { gridResult: null };
    }),
    [users_actions_1.USERS_ADD]: (state, payload) => {
        return { gridResult: null };
    },
    [users_actions_1.USERS_SAVE]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return { gridResult: null };
    }),
    [users_actions_1.USERS_REMOVE]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return { gridResult: null };
    })
};
//# sourceMappingURL=users.reducer.js.map
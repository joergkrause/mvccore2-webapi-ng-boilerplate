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
const global_actions_1 = require("../actions/global.actions");
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
exports.default = {
    [global_actions_1.SETTAB]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return { tab: payload };
    }),
    [global_actions_1.SETGRID]: (state, { target, data }) => __awaiter(void 0, void 0, void 0, function* () {
        return { [target]: data };
    })
};
//# sourceMappingURL=global.reducer.js.map
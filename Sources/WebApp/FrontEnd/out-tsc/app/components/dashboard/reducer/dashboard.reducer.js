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
const dashboard_actions_1 = require("../actions/dashboard.actions");
const machinedata_service_1 = require("../../../services/machinedata.service");
const frontendapi_services_1 = require("../../../services/lib/frontendapi.services");
const machineService = new machinedata_service_1.MachineDataService(new frontendapi_services_1.ApiMachines);
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
exports.default = {
    [dashboard_actions_1.DASHBOARD_LOAD]: (state, payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield machineService.getMachines();
        return { machines: data };
    })
};
//# sourceMappingURL=dashboard.reducer.js.map
import { DASHBOARD_LOAD } from '../actions/dashboard.actions';
import { dashboardStoreType } from '../stores/dashboard.store';
import { MachineDataService } from '../../../services/machinedata.service';
import { MachineViewModel } from "../../../services/lib/frontendapi.services";

type dashboardStoreSync = Partial<dashboardStoreType>;
type dashboardStore = Promise<dashboardStoreSync>;

/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default {
	[DASHBOARD_LOAD]: async (state: dashboardStore, payload: void): dashboardStore => {
		const data: MachineViewModel[] = await MachineDataService.instance.getMachines();
		return { machines: data };
	}
};

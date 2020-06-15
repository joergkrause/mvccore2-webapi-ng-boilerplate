import { MachineViewModel } from "../../../services/lib/frontendapi.services";

export const DASHBOARD_LOAD = 'DASHBOARD_LOAD';

/**
 * The defaults that we use as long as the code hasn't sent anything.
 */
export default {
	[DASHBOARD_LOAD]: () => [] as MachineViewModel[]
};

import { SETTAB, SETGRID } from '../actions/global.actions';
import { globalStoreType } from '../stores/global.store';
import { DataGridModel } from '../../../../app/components/shared/grid/models/datagrid.model';

/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default {
	[SETTAB]: async (state: globalStoreType, payload: string) => {
		return { tab: payload };
	},
	[SETGRID]: async (state: globalStoreType, { target, data }: { target: string, data: DataGridModel<any> }) => {
		return { [target]: data };
	}
};

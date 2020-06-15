import { SETTAB, SETGRID } from '../actions/global.actions';
import { globalStoreType } from '../stores/global.store';
import { DataGridModel } from '../../../../app/components/shared/grid/models/datagrid.model';
declare const _default: {
    SETTAB: (state: globalStoreType, payload: string) => Promise<{
        tab: string;
    }>;
    SETGRID: (state: globalStoreType, { target, data }: {
        target: string;
        data: DataGridModel<any>;
    }) => Promise<{
        [x: string]: DataGridModel<any>;
    }>;
};
/**
 * The reducer functions are the executing logic. They "do" what the action is asking for.
 */
export default _default;

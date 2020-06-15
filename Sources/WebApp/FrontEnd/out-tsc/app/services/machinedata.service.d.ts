import { MachineViewModel } from './lib/frontendapi.services';
import { BaseService } from './base.service';
declare type chartPoint = Array<{
    x: number;
    y: number;
    v: number;
}>;
export declare class MachineDataService extends BaseService {
    constructor();
    static get instance(): MachineDataService;
    getChartData(): Promise<chartPoint>;
    getMachines(): Promise<MachineViewModel[]>;
}
export {};

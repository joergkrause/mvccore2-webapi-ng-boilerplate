import { MachineViewModel } from './lib/frontendapi.services';
import { BaseService } from './base.service';

type chartPoint = Array<{ x: number, y: number, v: number }>;

export class MachineDataService extends BaseService {

  constructor() {
    super();
  }

  public static get instance(): MachineDataService {
    return BaseService.getSingleton<MachineDataService>(MachineDataService);
  }

  public async getChartData(): Promise<chartPoint> {
    throw new Error('Not implemented');
  }

  public getMachines(): Promise<MachineViewModel[]> {
    return this.apiMachines.get();
  }

}
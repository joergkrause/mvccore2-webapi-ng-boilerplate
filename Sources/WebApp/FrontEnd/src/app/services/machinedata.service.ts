import { Injectable } from '@angular/core';
import { ApiMachines, MachineViewModel } from './lib/frontendapi.services';

type chartPoint = Array<{ x: number, y: number, v: number }>;

@Injectable()
export class MachineDataService {

  constructor(private api: ApiMachines) {
  }

  public async getChartData(): Promise<chartPoint> {
    throw new Error('Not implemented');
  }

  public getMachines(): Promise<MachineViewModel[]> {
    return this.api.get().toPromise();
  }

}
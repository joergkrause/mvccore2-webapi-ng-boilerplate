import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { MachineViewModel } from '../viewmodels/index';
import { ConfigService } from '../services/config.service';

type chartPoint = Array<{ x: number, y: number, v: number }>;
type machinesArray = Array<MachineViewModel>;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private config: ConfigService) {
  }

  public async getChartData(): Promise<chartPoint> {
    return await this.http
      .get<chartPoint>(this.config.dataURI)      
      .toPromise<chartPoint>();
  }

  public async getMachines(): Promise<machinesArray> {
    return await this.http
      .get<machinesArray>(this.config.dataURI)      
      .toPromise<machinesArray>();
  }

}
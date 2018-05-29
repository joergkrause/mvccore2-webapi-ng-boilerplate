import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { MachineViewModel } from '../viewmodels/index';
import { ConfigService } from '../services/config.service';

@Injectable()
export class ApiService {


  constructor(private http: Http, private config: ConfigService) {
  }

  public async getChartData(): Promise<Array<{ x: number, y: number, v: number }>> {
    return await this.http.get(this.config.dataURI)
      .map(res => res.json() as Array<{ x: number, y: number, v: number }>)
      .toPromise();
  }

  public async getMachines(): Promise<Array<MachineViewModel>> {
    return await this.http.get(this.config.dataURI)
      .map(res => res.json() as Array<MachineViewModel>)
      .toPromise();
  }

}
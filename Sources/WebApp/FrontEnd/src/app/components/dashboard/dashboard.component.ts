import { Component, OnInit } from '@angular/core';

import { AccountInfoViewModel } from '../../viewmodels/index';
import { AccountService, ApiService } from '../../services/index';
import { ApiMachines, MachineViewModel } from '../../services/lib/frontendapi';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  user: AccountInfoViewModel;
  machines: Array<MachineViewModel>;
  error: any;

  errors: string;
  isRequesting: boolean;

  constructor(private accountService: AccountService, private apiService: ApiService, private apiMachinesService: ApiMachines) {
    this.machines = new Array<MachineViewModel>();    
  }

  ngOnInit() {
    // Get account information
    this.accountService.getUserDetails()
      .then(user => this.user = user)
      .catch(error => this.error = error.message);
    // get demo data information
    // this.apiService.getMachines()
    this.apiMachinesService.getAll().toPromise()
        .then(machines => this.machines = machines)
        .catch(error => this.error = error.message);
  }

}

import { Component, OnInit } from '@angular/core';

import { AccountService, MachineDataService, UserViewModel, MachineViewModel } from '../../services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  user: UserViewModel;
  machines: MachineViewModel[];
  error: any;

  errors: string;
  isRequesting: boolean;

  constructor(private accountService: AccountService, private machineService: MachineDataService) {
    this.machines = [];
  }

  ngOnInit() {
    // Get account information
    this.accountService.getUserDetails()
      .then(user => this.user = user)
      .catch(error => this.error = error.message);
    this.machineService.getMachines()
      .then(machines => this.machines = machines)
      .catch(error => this.error = error.message);
  }

}

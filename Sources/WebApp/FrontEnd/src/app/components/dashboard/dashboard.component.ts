import { Component, OnInit } from '@angular/core';

import { AccountService, MachineDataService, UserViewModel, MachineViewModel } from '../../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: UserViewModel;
  machines: MachineViewModel[];
  error: any;

  errors: string;
  isRequesting: boolean;

  constructor(private accountService: AccountService, private machineService: MachineDataService, private router: Router) {
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

  showProfile() {
    this.router.navigateByUrl('profile');
  }

}

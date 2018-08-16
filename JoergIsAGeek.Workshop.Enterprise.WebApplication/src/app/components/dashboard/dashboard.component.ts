import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { AccountInfoViewModel, MachineViewModel } from '../../viewmodels/index';
import { AccountService, ApiService } from '../../services/index';

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

  constructor(private accountService: AccountService, private apiService: ApiService) {
    this.machines = new Array<MachineViewModel>();    
  }

  ngOnInit() {
    // Get account information
    this.accountService.getUserDetails()
      .then(user => this.user = user)
      .catch(error => this.error = error);
    // get demo data information
    this.apiService.getMachines()
      .then(machines => this.machines = machines)
      .catch(error => this.error = error);
  }

}

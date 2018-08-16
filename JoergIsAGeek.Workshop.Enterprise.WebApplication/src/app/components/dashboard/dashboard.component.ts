import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { CredentialsViewModel } from '../../viewmodels/index';
import { UserService } from '../../services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  private subscription: Subscription;

  errors: string;
  isRequesting: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.
  }

}

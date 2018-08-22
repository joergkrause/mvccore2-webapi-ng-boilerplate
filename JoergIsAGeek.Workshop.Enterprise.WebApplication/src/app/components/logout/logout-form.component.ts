import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { UserService } from '../../services/index';

@Component({
  selector: 'logout-form',
  templateUrl: 'logout-form.component.html'
})
export class LogoutFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  errors: string;
  loggedOut: boolean = false;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userService.logout().then(() => this.loggedOut = true);
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }


}

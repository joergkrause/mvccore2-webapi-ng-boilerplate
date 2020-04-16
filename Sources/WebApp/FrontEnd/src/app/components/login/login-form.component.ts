import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { AuthService, ILogonViewModel } from '../../services/index';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: ILogonViewModel = { userName: '', password: '' };

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.credentials.userName = param['userName'];
      });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  login({ value, valid }: { value: ILogonViewModel, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.authService.login(value)
        .then(() => {
          this.isRequesting = false;
          return true;
        })
        .then(result => {
          if (result) {
            this.router.navigate(['/dashboard']);
          }
        },
          error => this.errors = error);
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { CredentialsViewModel } from '../../viewmodels/index';
import { AuthService } from '../../services/index';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;  
  credentials: CredentialsViewModel = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.credentials.email = param['email'];
      });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  login({ value, valid }: { value: CredentialsViewModel, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.authService.login(value.email, value.password)
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

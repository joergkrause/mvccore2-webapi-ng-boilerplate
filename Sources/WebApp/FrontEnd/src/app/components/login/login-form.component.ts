import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService, ILogonViewModel, IProviderViewModel } from '../../services/index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public form: FormGroup;
  public loginInvalid: boolean;
  public error: boolean;
  public formSubmitAttempt: boolean;
  public errors: string;
  private returnUrl: string;
  public providers: IProviderViewModel[];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
  }

  async ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/dashboard';

    this.form = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    if (await this.authService.isLoggedIn()) {
      await this.router.navigate([this.returnUrl]);
    }
    this.providers = await this.authService.providers();
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.error = false;
    this.formSubmitAttempt = true;
    if (this.form.valid) {
      try {
        const logonModel: ILogonViewModel = {
          userName: this.form.get('userName').value,
          password: this.form.get('password').value
        };
        this.loginInvalid = !(await this.authService.login(logonModel));
        this.formSubmitAttempt = false;
        this.router.navigateByUrl('dashboard');
      } catch (err) {
        this.error = true;
        this.errors = err;
      }
    } else {
      this.formSubmitAttempt = false;
    }
  }

}

import { Component, OnInit } from '@angular/core';

import { AuthService, IChangePasswordViewModel } from '../../services/index';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  public form: FormGroup;
  public errors: string;
  public submitted: boolean = false;
  public formSubmitAttempt: boolean = false;
  public hide = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      newPasswordRepeat: ['', Validators.required]
    });

  }

  onSubmit() {
    this.submitted = true;
    this.formSubmitAttempt = true;
    this.errors = '';
    if (this.form.valid) {
      const passwordModel: IChangePasswordViewModel = {
        oldPassword: this.form.get('oldPassword').value,
        newPassword: this.form.get('newPassword').value,
        newPasswordRepeat: this.form.get('newPasswordRepeat').value
      };
      this.authService.changePassword(passwordModel)
        .then(() => this.formSubmitAttempt = false)
        .then(
          result => {
            if (result) {
              this.router.navigate(['/login'], { queryParams: { brandNew: true } });
            }
          },
          errors => this.errors = errors.error ? Object.values(errors.error).join('') : JSON.stringify(errors));
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, IRegistrationViewModel } from '../../services/index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  public form: FormGroup;
  public errors: string;
  public isRequesting: boolean;
  public submitted: boolean = false;
  public hide = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      location: [''],
    });

  }

  registerUser() {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (this.form.valid) {
      const registerModel: IRegistrationViewModel = {
        firstName: this.form.get('firstName').value,
        lastName: this.form.get('lastName').value,
        email: this.form.get('email').value,
        location: this.form.get('location').value,
        password: this.form.get('password').value
      };
      this.authService.register(registerModel)
        .then(() => this.isRequesting = false)
        .then(
          result => {
            if (result) {
              this.router.navigate(['/login'], { queryParams: { brandNew: true, email: registerModel.email } });
            }
          },
          errors => this.errors = errors.error ? Object.values(errors.error).join('') : JSON.stringify(errors));
    }
  }
}

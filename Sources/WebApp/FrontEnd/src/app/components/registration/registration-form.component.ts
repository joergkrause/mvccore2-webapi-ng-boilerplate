import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, IRegistrationViewModel } from '../../services/index';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html'
})
export class RegistrationFormComponent implements OnInit {

  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  registerUser({ value, valid }: { value: IRegistrationViewModel, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.authService.register(value)
        .then(() => this.isRequesting = false)
        .then(
          result => {
            if (result) {
              this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
            }
          },
          errors => this.errors = errors.error ? Object.values(errors.error).join('') : JSON.stringify(errors));
    }
  }
}

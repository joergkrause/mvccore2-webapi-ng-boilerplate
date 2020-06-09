import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, IRegistrationViewModel } from '../../services/index';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const umlautMap = {
  '\u00dc': 'UE',
  '\u00c4': 'AE',
  '\u00d6': 'OE',
  '\u00fc': 'ue',
  '\u00e4': 'ae',
  '\u00f6': 'oe',
  '\u00df': 'ss',
};

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userName: ['', [Validators.required, Validators.pattern(/^[a-z0-9]+$/)]],
      phone: [''],
    });
  }

  replaceUmlauts(str: string) {
    return str
      .replace(/[\u00dc|\u00c4|\u00d6][a-z]/g, (a) => {
        const big = umlautMap[a.slice(0, 1)];
        return big.charAt(0) + big.charAt(1).toLowerCase() + a.slice(1);
      })
      .replace(new RegExp('[' + Object.keys(umlautMap).join('|') + ']', "g"),
        (a) => umlautMap[a]
      );
  }

  getUserName(): string {
    const firstName: string = this.form.get('firstName').value || '';
    const lastName: string = this.form.get('lastName').value || '';
    return this.replaceUmlauts(`${firstName.toLowerCase()}${lastName.toLowerCase()}`);
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
        password: this.form.get('password').value,
        phone: this.form.get('phone').value,
        userName: this.form.get('userName').value
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

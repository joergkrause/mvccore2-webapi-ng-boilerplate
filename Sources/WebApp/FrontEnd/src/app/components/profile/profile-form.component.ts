import { Component, OnInit } from '@angular/core';

import { AccountService, ClaimViewModel } from '../../services/index';

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.component.html'
})
export class ProfileFormComponent implements OnInit {

  errors: string;
  claims: ClaimViewModel[];

  constructor(private accountService: AccountService) {

  }

  ngOnInit() {
    this.accountService.getUserClaims().then(claims => this.claims = claims);
  }

  setProfile() {
    // TODO: Write profile
  }
}

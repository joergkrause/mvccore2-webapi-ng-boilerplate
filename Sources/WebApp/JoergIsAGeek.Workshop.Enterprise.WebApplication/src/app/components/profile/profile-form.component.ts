import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserRegistrationViewModel } from '../../viewmodels/userregistration.viewmodel';
import { AuthService } from '../../services/index';

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.component.html'
})
export class ProfileFormComponent implements OnInit {

  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    // TODO: Read current profile
  }

  setProfile() {
    // TODO: Write profile
  }
}

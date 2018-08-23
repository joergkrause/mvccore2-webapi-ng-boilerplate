import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { AuthService } from '../../services/index';

@Component({
  selector: 'logout-form',
  templateUrl: 'logout-form.component.html'
})
export class LogoutFormComponent implements OnInit, AfterViewInit {

  errors: string;
  loggedOut: boolean = false;

  constructor(private authService: AuthService, private cd: ChangeDetectorRef) {
    // function returns a delayed answer to simulate something serious
    this.authService.logout().then(() => this.loggedOut = true);
  }

  ngOnInit() {
    // this is an alternative way to get the information immediately, no weird delay 
    // this.authService.authNavStatus$.subscribe(data => this.loggedOut = data);
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }


}

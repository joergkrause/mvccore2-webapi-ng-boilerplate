﻿import { Component } from '@angular/core';

@Component({
  selector: 'site-info', 
  templateUrl: 'site-info.component.html'
})
export class SiteInfoComponent {


  constructor(private userService: UserService, private emitterService: EmitterService) {
  }


}

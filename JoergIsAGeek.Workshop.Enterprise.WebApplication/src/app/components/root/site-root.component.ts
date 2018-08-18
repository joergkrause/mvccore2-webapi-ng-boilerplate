import { Component, OnInit } from '@angular/core';
import { UserService, EmitterService } from '../../services';

@Component({
  selector: 'site-root', 
  templateUrl: 'site-root.component.html',
  styleUrls: ['site-root.component.css']
})
export class SiteRootComponent implements OnInit {

  isLoggedIn: boolean = false;
  userName: string;

  constructor(private userService: UserService, private emitterService: EmitterService) {
    this.emitterService.get('USER_LOGON').subscribe(data => this.userName = data.userName);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn;
    
  }

}

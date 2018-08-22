import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthService, EmitterService } from '../../services';

@Component({
  selector: 'site-root', 
  templateUrl: 'site-root.component.html',
  styleUrls: ['site-root.component.css']
})
export class SiteRootComponent implements OnInit, AfterViewInit {

  isLoggedIn: boolean = false;
  userName: string;

  constructor(private authService: AuthService, private emitterService: EmitterService, private cd: ChangeDetectorRef) {
    this.emitterService.get('USER_LOGON').subscribe(data => this.userName = data.userName);
    this.authService.authNavStatus$.subscribe(data => this.isLoggedIn = data);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;    
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

}

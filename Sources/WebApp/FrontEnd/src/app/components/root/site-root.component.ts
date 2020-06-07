import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthService, EmitterService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'site-root', 
  templateUrl: 'site-root.component.html'
})
export class SiteRootComponent implements OnInit, AfterViewInit {

  isLoggedIn: boolean = false;
  userName: string;
  navLinks: { path: string, label: string }[] = [];
  navLinksLazy: { path: string, label: string }[] = [];

  constructor(
    private authService: AuthService,
    private emitterService: EmitterService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.emitterService.get('USER_LOGON').subscribe(data => this.userName = data.userName || data.email);
    this.authService.authNavStatus$.subscribe(data => this.isLoggedIn = data);
  }

  async ngOnInit() {
    this.isLoggedIn = await this.authService.isLoggedIn();    
    this.navLinks.push(
      ...(this.router.config
        .filter(r => r.data && r.data.mainmenu === true)
        .map(r => {
          return {
            path: r.path,
            label: r.data.title.toString()
          }
        }))
    );
    const children = this.router.config.filter(r => r.outlet === 'manager');
    this.navLinksLazy = children.map(c => {
      return {
        path: c.path,
        label: c.data.title.toString()
      }
    });    
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

}

import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthService, EmitterService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'site-root', 
  templateUrl: 'site-root.component.html',
  styleUrls: ['site-root.component.scss']
})
export class SiteRootComponent implements OnInit, AfterViewInit {

  isLoggedIn: boolean = false;
  userName: string;
  navLinks: { path: string, label: string }[] = [];

  constructor(
    private authService: AuthService,
    private emitterService: EmitterService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.emitterService.get('USER_LOGON').subscribe(data => this.userName = data.userName);
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
    const children = this.router.config.filter(r => r.loadChildren).map(r => r.children);
    console.log(children);
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

}

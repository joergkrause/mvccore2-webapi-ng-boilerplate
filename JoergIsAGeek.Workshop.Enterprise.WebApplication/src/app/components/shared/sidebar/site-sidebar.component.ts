import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

class NavItem {

  constructor(public path: string, public title: string, public icon: string) {
  }

  public children: Array<NavItem>;
}

@Component({
  moduleId: module.id,
  selector: 'site-sidebar',
  templateUrl: './site-sidebar.component.html',
  styleUrls: ['./site-sidebar.component.scss']
})
export class SiteSidebarComponent implements OnInit {

  routerNavigation: Array<NavItem>;
  isActive = false;
  showMenu = '';

  constructor(private router: Router) {
  }


  eventCalled() {
    this.isActive = !this.isActive;
  }
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  ngOnInit(): void {
    this.routerNavigation = new Array<NavItem>();
    this.router.config
      .filter(value => !value.redirectTo)
      .filter(value => value.path.indexOf(':') === -1)
      .forEach(value =>
        this.routerNavigation.push(new NavItem(value.path, value.data["title"], value.data["icon"]))
      );
  }
}

import { Component } from '@angular/core';


// <site-header></site-header>
// <site-sidebar></site-sidebar>
// <section class="main-container">
//   <router-outlet></router-outlet>
// </section>

@Component({
  selector: 'site-root', // CSS Syntax!
  template: `
            <h1>Hallo</h1>
            <a routerLink='/login'>Login</a> | <a routerLink='/register'>Register</a>            
            <hr />
            <section class="main-container">
              <router-outlet></router-outlet>
            </section>
            `, 
  styles: [`
            .main-container {
                margin-top: 60px;
                margin-left: 235px;
                padding: 15px;
                -ms-overflow-x: hidden;
                overflow-x: hidden;
                overflow-y: scroll;
                position: relative;
                overflow: hidden;

            }`,
            `
            @media screen and (max-width: 992px) {
                .main-container {
                    margin-left: 0px !important;
                }
            }`
  ]
})
export class SiteRootComponent {

}

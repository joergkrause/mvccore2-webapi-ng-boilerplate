import { NgModule } from "@angular/core";

import * as svogv from 'svogv';

import * as components from './components/index';
import * as services from './services/index';


@NgModule({
  declarations: [ 
    components.SiteRootComponent, 
    components.PageLoginComponent, 
    components.PageRegistrationComponent    
  ],
  imports: [  ],
  bootstrap: [ components.SiteRootComponent ]
})
export class AppModule {

}
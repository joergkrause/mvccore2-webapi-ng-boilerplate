import { Component, Input } from '@angular/core';

@Component({
  
  selector: 'site-pageheader',
  templateUrl: './site-pageheader.component.html',
  styleUrls: ['./site-pageheader.component.scss']
})
export class SitePageHeaderComponent {
  @Input() heading: string;
  @Input() icon: string;
}

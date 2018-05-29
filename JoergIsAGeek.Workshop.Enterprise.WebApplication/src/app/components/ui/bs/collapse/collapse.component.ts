import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent {
  public isCollapsed = false;
}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AcDataGridModel } from 'svogv';
import { Base } from '../../../viewmodels/base';

/**
 * A grid component that handles any sort of data decorated with SVOGV decorators.
 */
@Component({
  moduleId: module.id,
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent<T extends Base> implements OnInit {

  @Input() data: AcDataGridModel<T>;

  @Input() childRoute: string;

  @Input() searchText: string = 'Search';

  @Input() filterText: string = 'Search Item';

  @Input() removeColumnText: string = 'Remove';

  @Input() newItemText: string = 'New Item';

  @Input() noItemsText: string = 'There are no users available.';

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  editMachine(data) {
    this.router.navigate([`/${this.childRoute}/edit/${data.id}`]);
  }

  addMachine() {
    this.router.navigate([`/${this.childRoute}/new`]);
  }

  removeMachine(data) {
    this.router.navigate([`/${this.childRoute}/delete/${data.id}`]);
  }

  currentData: T;

  showModal(data) {
    this.currentData = data;
  }


}

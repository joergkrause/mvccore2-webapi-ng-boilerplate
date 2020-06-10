import { Component, OnInit, Input } from '@angular/core';

export enum AlertType {
  success = 'success',
  warning = 'warning',
  danger = 'danger'
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  type: AlertType = AlertType.success;

  @Input()
  close: boolean;

  constructor() { }

  ngOnInit(): void {
    this.close = false;
  }

  public get alertType() {
    return `alert-${this.type}`;
  }

}

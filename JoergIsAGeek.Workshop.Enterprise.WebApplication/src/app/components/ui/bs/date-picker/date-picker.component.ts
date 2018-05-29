import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  model: any;
  constructor() { }

  ngOnInit() {
  }

}

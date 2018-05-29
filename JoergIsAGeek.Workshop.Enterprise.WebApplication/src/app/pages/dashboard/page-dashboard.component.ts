import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'page-dashboard',
  templateUrl: './page-dashboard.component.html'
})
export class PageDashboardComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];

  numOfMachines: number;
  numOfDevices: number;
  numOfValues: number;

  constructor() {
    this.sliders.push({
      imagePath: 'assets/images/slider1.jpg',
      label: 'Rock Solid C# Backend',
      text: 'A multilayer architecture build on top of .NET 4.7 and Entity Framework.'
    }, {
        imagePath: 'assets/images/slider2.jpg',
        label: 'Testable and Extensible',
        text: 'Dependency Injection and Service Orientated Architecture.'
      }, {
        imagePath: 'assets/images/slider3.jpg',
        label: 'Single Page Frontend',
        text: 'State of the Art Frontend using Angular 4 and Highcharts.'
      });

    this.alerts.push({
      id: 1,
      type: 'success',
      message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
    }, {
        id: 2,
        type: 'warning',
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      });
  }

  ngOnInit() {
    this.numOfMachines = 22;
    this.numOfDevices = 11;
    this.numOfValues = 1000;
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}

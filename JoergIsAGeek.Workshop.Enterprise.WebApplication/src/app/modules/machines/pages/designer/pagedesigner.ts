import { Component, OnInit, ViewContainerRef, ViewChild, ViewChildren, ComponentFactoryResolver, ComponentRef, ContentChild, QueryList, ElementRef } from '@angular/core';

import { AppChart } from '../components/charts/appchart';

@Component({
    selector: 'page-designer',
    entryComponents: [AppChart],
    template: `
        <h1>Designer
        <small>We have {{ numElements }} components</small>
        </h1>
        <button (click)="addComponent()" type="button" class="btn btn-sm btn-primary">Add AppChart</button> 
        <button (click)="clearComponents()" type="button" class="btn btn-danger">Remove All</button> 
        <button (click)="saveComponents()" type="button" class="btn btn-lg btn-info">Save</button> 
        <hr />
        <div >
          <ng-container #dynamicComponentContainer></ng-container>
        </div>
        <hr />
        <div *ngIf="this.currentComponent">
        Properties: {{ this.currentComponent.currentValue }} 
        </div>
        `
})
export class PageDesigner implements OnInit {

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;
  container: Array<AppChart>;
  currentComponent: AppChart;
  numElements: number;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
    this.numElements = 0;
  }

  ngOnInit(): void {
    this.container = new Array<AppChart>();
  }

  clearComponents() {
    this.dynamicComponentContainer.clear();
    this.numElements = 0;
  }

  addComponent() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(AppChart);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(ref.hostView);
    this.numElements = this.dynamicComponentContainer.length;    
    this.currentComponent = ref.instance;
    this.container.push(ref.instance);
  }

  saveComponents() {
    for (let i = 0; i < this.container.length; i++) {

    }
  }

}
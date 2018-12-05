import { Directive, ElementRef } from '@angular/core';

/**
 * Fixes a common issue with CSS not aware of angular. It removes the host component from physical DOM.
 */
@Directive({
    selector: '[remove-host]'
})
export class RemoveHostDirective {
    
    constructor(private el: ElementRef) {
    }

    //wait for the component to render completely
    ngOnInit() {
        var nativeElement: HTMLElement = this.el.nativeElement,
            parentElement: HTMLElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    }
}
import { AccordionGroupComponent } from './sui.accordion.group.component';
import {
    Component,
    HostListener,
    forwardRef,
    Inject,
    Host
} from '@angular/core';


@Component({
    selector: 'sui-accordion-toggle',
    template: `<ng-content></ng-content>`
})
export class AccordionToggleComponent {

    constructor( @Host() @Inject(forwardRef(() => AccordionGroupComponent))
    private accordionGroup: AccordionGroupComponent) {
    }

    @HostListener('click')
    onClick() {
        this.accordionGroup.toggle();
    }
}

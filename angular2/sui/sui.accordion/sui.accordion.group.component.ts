import { AccordionComponent } from './sui.accordion.component';
import { AccordionToggleComponent } from './sui.accordion.toggle.component';
import {
    Component,
    Input,
    Host,
    forwardRef,
    Inject,
    ContentChild,
    ElementRef
} from '@angular/core';


@Component({
    selector: 'sui-accordion-group',
    templateUrl: './sui.accordion.group.component.html',

})
export class AccordionGroupComponent {
    @Input() cssClass: string = '';
    @Input() style: Object = {};
    @Input() headerClass: string = '';
    @Input() headerStyle: Object = {};
    @Input() icon: string = '';
    @Input() isOpened: boolean = false;

    @ContentChild(AccordionToggleComponent)
    toggler: ElementRef;

    constructor( @Host() @Inject(forwardRef(() => AccordionComponent))
    public accordion: AccordionComponent) {
    }

    checkAndToggle() {
        // if custom toggle element is supplied, 
        // then do nothing, custom toggler will take care of it
        if (this.toggler)
            return;

        this.toggle();
    }

    toggle() {
        const isOpenedBeforeWeChange = this.isOpened;
        if (this.accordion.closeOthers)
            this.accordion.closeAll();

        this.isOpened = !isOpenedBeforeWeChange;
    }
}

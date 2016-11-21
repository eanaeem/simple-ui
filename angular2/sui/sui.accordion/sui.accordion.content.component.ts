import { Component, Input } from '@angular/core';

@Component({
    selector: 'sui-accordion-content',
    templateUrl: './sui.accordion.content.component.html',

})
export class AccordionContentComponent {
    @Input() cssClass: string = '';
    @Input() style: Object = {};
    @Input() headerClass: string = '';
    @Input() headerStyle: Object = {};
    @Input() icon: string = '';
    @Input() visible: boolean = false;
}

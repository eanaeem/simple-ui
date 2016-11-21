import { Component, Input } from '@angular/core';

@Component({
    selector: 'sui-accordion',
    templateUrl: './sui.accordion.component.html',

})
export class AccordionComponent {
    @Input() accordionClass: string;
    @Input() accordionStyle: Object = {};
}

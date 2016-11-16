import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'sui-accordion',
    templateUrl: './sui.accordion.component.html',

})
export class AccordionComponent  {
    @Input() notesClass: string;
    @Input() notesStyle: Object = {};

}

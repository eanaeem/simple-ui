import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ButtonModel } from 'angular2-simple-ui/sui/sui.util/sui.util.button.model';

@Component({
    selector: 'sui-accordion',
    templateUrl: './sui.accordion.component.html',

})
export class AccordionComponent  {
    @Input() accordionClass: string;
    @Input() accordionStyle: Object = {};
    @Input() accordians:ButtonModel[] =[];
    onAccordionButtonClick(btn:ButtonModel){
        
    }
}

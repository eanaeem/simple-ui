import { AccordionGroupComponent } from './sui.accordion.group.component';
import {
    ContentChildren,
    Component,
    QueryList,
    Input,
    forwardRef,
    AfterContentInit
} from '@angular/core';

@Component({
    selector: 'sui-accordion',
    templateUrl: './sui.accordion.component.html',

})
export class AccordionComponent implements AfterContentInit {
    @Input() accordionClass: string;
    @Input() accordionStyle: Object = {};
    @Input() closeOthers = true;
    @Input() expandAll = false;

    @ContentChildren(forwardRef(() => AccordionGroupComponent))
    groups: QueryList<AccordionGroupComponent>;

    ngAfterContentInit() {
        if (this.expandAll) {
            this.closeOthers = false;
            this.groups.toArray().forEach(group => {
                group.isOpened = true;
            });
        }
    }

    closeAll() {
        this.groups.toArray().forEach(group => {
            group.isOpened = false;
        });
    }
}

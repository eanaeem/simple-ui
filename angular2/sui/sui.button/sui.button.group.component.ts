import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ButtonModel } from '../sui.util/sui.util.button.model';

@Component({
    selector: 'sui-button-group',
    templateUrl: './sui.button.group.component.html',

})
export class ButtonGroupComponent {
    @Input() buttons: ButtonModel[];
    @Input() style: Object = {};
    @Input() cssClass: string = '';
    @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
    onBtnClick(event: any) {
        this.onClick.emit(event);
    }
}

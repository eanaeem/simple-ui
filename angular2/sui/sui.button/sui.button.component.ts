import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ButtonModel } from 'angular2-simple-ui/sui//sui.util/sui.util.button.model';

@Component({
    selector: 'sui-button',
    templateUrl: './sui.button.component.html',

})
export class ButtonComponent {
    @Input() model: ButtonModel;
    @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
    onBtnClick(event: any) {
        this.onClick.emit(event);
    }
}

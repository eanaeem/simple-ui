import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'sui-badge',
    templateUrl: './sui.badge.component.html',

})
export class BadgeComponent {
    @Input() class: string = 'sui-green';
    @Input() style: Object = {};
    @Input() message: string;
}

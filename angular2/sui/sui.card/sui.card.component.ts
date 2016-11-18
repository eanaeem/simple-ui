import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'sui-card',
    templateUrl: './sui.card.component.html',

})
export class CardComponent {
    @Input() cardClass: string;
    @Input() cardStyle: Object = {};

}

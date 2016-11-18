import { Component, Input } from '@angular/core';

@Component({
    selector: 'sui-tag',
    templateUrl: './sui.tag.component.html'
})
export class TagComponent {
    @Input() class: string = 'sui-green';
    @Input() style: Object = {};
    @Input() message: string;

}
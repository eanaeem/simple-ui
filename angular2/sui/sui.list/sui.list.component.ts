import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'sui-list',
    templateUrl: './sui.list.component.html',

})
export class ListComponent {
    @Input() listClass: string;
    @Input() listStyle: Object = {};
    @Input() listItems: string[] = [];
    @Input() customTemplate: boolean = false;

}

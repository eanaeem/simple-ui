import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'sui-progress',
    templateUrl: './sui.progress.component.html',

})
export class ProgressComponent {
    @Input() progressClass: string;
    @Input() progressStyle: Object = {};
    @Input() showSpineer: boolean = false;
    @Input() showProgress: boolean = false;
    @Input() progressPercentage: number = 20;
    @Input() progressBackground: string = 'green 1px solid';
    @Input() progressFontColor: string = 'white';
    

}

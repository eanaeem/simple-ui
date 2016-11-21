import { Component, Input } from '@angular/core';

@Component({
    selector: 'sui-slider',
    templateUrl: './sui.slider.component.html',

})
export class Slideromponent {
    @Input() cssClass: string = '';
    @Input() style: Object = {};
    @Input() indicatorCssClass: string = '';
    @Input() indicatorStyle: Object = {};
    @Input() showIndicators: boolean = true;
    onPreviousClick() {

    }
    onNextClick() {

    }
}
